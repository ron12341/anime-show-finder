export interface RelationshipModel {
  genres: {
    links: {
      related: string;
    };
  };
  animeProductions: {
    links: {
      related: string;
    };
  };
  streamingLinks: {
    links: {
      related: string;
    };
  };
}

export const EmptyRelationshipModel = {
  genres: {
    links: {
      related: '',
    },
  },
  animeProductions: {
    links: {
      related: '',
    },
  },
  streamingLinks: {
    links: {
      related: '',
    },
  },
};
