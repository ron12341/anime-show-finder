import { AnimeInfoType } from '../../Types/AnimeInfoType';
import { StreamerType } from '../../Types/StreamerType';
import { formatDate, formatTime } from '../../helpers/FormatInformation';

interface Props {
  anime: AnimeInfoType;
}

export function AnimeInfo({ anime }: Props) {
  const attributes = anime.attributes;
  const studio = anime.relationships.studio;
  const genres = anime.relationships.genres;
  const streamers = anime.relationships.streamers;

  return (
    <>
      <div className="flex bg-neutral-800 text-neutral-400 p-3 md:p-5 rounded-lg">
        <div id="img-container" className="flex-none w-3/12 max-md:hidden mr-5">
          <img src={`${attributes.posterImage.original}`} alt="Image" />
        </div>

        <div id="film-information" className="flex-auto">
          <div id="film-info-top" className="mb-5">
            <p className="text-xl text-white mb-1">{attributes.canonicalTitle}</p>

            <div id="alternative-names" className="text-sm italic flex flex-wrap">
              <p className="mr-1 flex-none">{`${attributes.canonicalTitle},`}</p>
              <>
                {attributes.abbreviatedTitles.map((item: string, index) => {
                  return (
                    <p className="mr-1 flex-none" key={index}>
                      {item},
                    </p>
                  );
                })}
              </>
              <p className="mr-1 flex-none">{attributes.titles.ja_jp || ''}</p>
            </div>
          </div>

          <div id="film-info-description" className="mb-5">
            <p className="text-sm">{attributes.description}</p>
          </div>

          <div id="film-info-bottom" className="flex flex-wrap text-sm mb-5">
            <div className="flex-column basis-full md:basis-1/2 mr-3">
              <p className="mb-0.5">
                Type:{' '}
                <span className="ml-2 text-neutral-300 max-[350px]:text-xs">
                  {attributes.showType === 'TV' ? 'TV Series' : 'Movie'}
                </span>
              </p>
              <p>
                Studios: <span className="ml-2 text-neutral-300 max-[350px]:text-xs">{`${studio}`}</span>
              </p>
              <p>
                Date aired:{' '}
                <span className="ml-2 text-neutral-300 max-[350px]:text-xs">{`${formatDate(attributes.startDate)} to ${
                  formatDate(attributes.endDate) || '?'
                } `}</span>
              </p>

              <div id="genres-container" className="flex flex-wrap">
                <p className="mr-2">Genres:</p>
                <>
                  {genres.map((genre: string, index) => {
                    return (
                      <p className="mr-1 flex-none text-neutral-300 max-[350px]:text-xs" key={index}>
                        {index !== genres.length - 1 ? `${genre},` : `${genre}`}
                      </p>
                    );
                  })}
                </>
              </div>
            </div>

            <div className="flex-column flex-auto">
              <p>
                Scores: <span className="ml-2 text-neutral-300 max-[350px]:text-xs">{attributes.averageRating}</span>
              </p>
              <p>
                Duration:{' '}
                <span className="ml-2 text-neutral-300 max-[350px]:text-xs">{`${formatTime(
                  attributes.episodeLength
                )} / ep`}</span>
              </p>
              <p>
                Status:{' '}
                <span className="ml-2 text-neutral-300 max-[350px]:text-xs">
                  {attributes.status === 'finished' ? 'Finished Airing' : 'Currently Airing'}
                </span>
              </p>
            </div>
          </div>

          <div id="streamers-container" className="text-sm flex flex-wrap">
            <p className="mr-2">Streaming Links:</p>

            {streamers.map((streamer: StreamerType, index) => {
              return (
                <p className="mr-1" key={index}>
                  <a className="text-indigo-400" href={streamer.url}>
                    {streamer.name}
                  </a>
                  {index !== streamers.length - 1 ? ',' : ''}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimeInfo;
