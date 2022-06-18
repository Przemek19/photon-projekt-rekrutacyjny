export interface IVideoAttributes {
  youTubeVideoId: string,
  title: string,
  description: string,
  fullUrl: string,
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  publishedDate: string,
  createdAt: string,
  updatedAt: string,
};

export interface IVideo {
  id: number,
  attributes: IVideoAttributes,
};
