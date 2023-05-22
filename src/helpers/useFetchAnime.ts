import { useEffect, useState } from 'react';
import { AnimeInfoModel, EmptyAnimeInfoModel } from '../Models/AnimeInfoModel';
import { GenreModel } from '../Models/GenreModel';
import { RelationshipModel } from '../Models/RelationshipModel';
import { StreamingModel } from '../Models/StreamingModel';
import { StreamerType } from '../Types/StreamerType';
import { AnimeInfoType } from '../Types/AnimeInfoType';
import { BASE_URL } from '../services/URL';

export function useFetchAnime() {
  const [animeModel, setAnimeModel] = useState<AnimeInfoModel>(EmptyAnimeInfoModel);
  const [streamers, setStreamers] = useState<StreamerType[] | null>(null);
  const [genres, setGenres] = useState<string[] | null>(null);
  const [studio, setStudio] = useState<string>('');
  const searchedAnimes: AnimeInfoType[] = []; //animes that have been searched already

  const [animeInfo, setAnimeInfo] = useState<AnimeInfoType | null>(null);
  const [animeList, setAnimeList] = useState<AnimeInfoModel[] | null>(null);

  //
  // FETCH LIST OF ANIMES
  //

  const handleOnSearchInput = (input: string) => {
    if (input === '') return;

    setAnimeInfo(null);
    setAnimeList(null);
    fetchAnimeList(input);
  };

  const fetchAnimeList = (input: string) => {
    fetch(`${BASE_URL}filter[text]=${input}&page[limit]=20`)
      .then(res => res.json())
      .then(data => setAnimeList(data.data));
  };

  //
  // FETCH ANIME INFORMATIONS
  //

  useEffect(() => {
    if (animeModel && studio && streamers && genres) {
      let newAnimeInfo = {
        attributes: animeModel.attributes,
        relationships: { streamers: streamers, studio: studio, genres: genres },
      };
      setAnimeInfo(newAnimeInfo);
    }
  }, [animeModel, genres, streamers, studio]);

  const handleOnSearchAnime = (info: AnimeInfoModel) => {
    if (!info) return;

    setAnimeList(null);
    setAnimeModel(EmptyAnimeInfoModel);
    searchedAnimes.forEach(item => {
      if (item.attributes.canonicalTitle === info.attributes.canonicalTitle) {
        setAnimeInfo(item);
        return;
      }
    });

    setAnimeModel(info);
    fetchAllRelationships(info.relationships);

    if (animeInfo) searchedAnimes.push(animeInfo);
  };

  const fetchAllRelationships = (relationship: RelationshipModel) => {
    fetchGenres(relationship);
    fetchStreaming(relationship);
    fetchStudio(relationship);
  };

  const fetchGenres = async (relationship: RelationshipModel) => {
    await fetch(relationship.genres.links.related)
      .then(res => res.json())
      .then(data => {
        let genresArr: string[] = [];

        data.data.forEach((genre: GenreModel) => {
          genresArr.push(genre.attributes.name);
        });

        setGenres(genresArr);
      });
  };

  const fetchStreaming = async (relationship: RelationshipModel) => {
    await fetch(relationship.streamingLinks.links.related)
      .then(res => res.json())
      .then(data => {
        let streamerArr: StreamerType[] = [];

        data.data.forEach(async (stream: StreamingModel) => {
          await fetch(stream.relationships.streamer.links.related)
            .then(res => res.json())
            .then(data => {
              streamerArr.push({ url: stream.attributes.url, name: data.data.attributes.siteName });
            });
        });

        setStreamers(streamerArr);
      });
  };

  const fetchStudio = async (relationship: RelationshipModel) => {
    setStudio(
      await fetch(relationship.animeProductions.links.related)
        .then(res => res.json())
        .then(data => {
          const productions = data.data;
          var string;

          for (let i = 0; i < productions.length; i++) {
            let role = productions[i].attributes.role;

            string = fetch(productions[i].relationships.producer.links.related)
              .then(res => res.json())
              .then(data => data.data.attributes.name);

            if (role === 'studio') return string;
          }
          return string;
        })
    );
  };

  return { handleOnSearchAnime, animeInfo, handleOnSearchInput, animeList };
}
