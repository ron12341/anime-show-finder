export interface StreamingModel {
  attributes: {
    url: string;
  };
  relationships: {
    streamer: {
      links: {
        related: string;
      };
    };
  };
}
