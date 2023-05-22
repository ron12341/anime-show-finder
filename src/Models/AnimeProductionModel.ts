export interface AnimeProductionModel {
  attributes: {
    role: string;
  };
  relationships: {
    producer: {
      links: {
        related: string;
      };
    };
  };
}
