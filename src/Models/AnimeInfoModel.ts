import { EmptyRelationshipModel, RelationshipModel } from './RelationshipModel';

export interface AnimeInfoModel {
  attributes: {
    titles: {
      en: string;
      en_jp: string;
      en_us: string;
      ja_jp: string;
    };
    posterImage: {
      tiny: string;
      original: string;
      large: string;
    };
    description: string;
    canonicalTitle: string;
    abbreviatedTitles: string[];
    averageRating: string;
    startDate: string;
    endDate: string;
    showType: string;
    status: string;
    episodeCount: string;
    episodeLength: string;
  };

  relationships: RelationshipModel;
}

export const EmptyAnimeInfoModel = {
  attributes: {
    titles: {
      en: '',
      en_jp: '',
      en_us: '',
      ja_jp: '',
    },
    posterImage: {
      tiny: '',
      original: '',
      large: '',
    },
    description: '',
    canonicalTitle: '',
    abbreviatedTitles: [],
    averageRating: '',
    startDate: '',
    endDate: '',
    showType: '',
    status: '',
    episodeCount: '',
    episodeLength: '',
  },

  relationships: EmptyRelationshipModel,
};
