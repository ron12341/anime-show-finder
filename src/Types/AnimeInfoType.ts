import { AnimeInfoModel, EmptyAnimeInfoModel } from '../Models/AnimeInfoModel';
import { StreamerType } from './StreamerType';

export interface AnimeInfoType {
  attributes: AnimeInfoModel['attributes'];
  relationships: {
    streamers: StreamerType[];
    studio: string;
    genres: string[];
  };
}

export const EmptyAnimeInfoType : AnimeInfoType = {
  attributes: EmptyAnimeInfoModel.attributes,
  relationships: {
    streamers: [],
    genres: [],
    studio: '',
  },
};
