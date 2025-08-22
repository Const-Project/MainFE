export interface DiaryItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  public: boolean;
}

export interface DiaryResponse {
  data: DiaryItem[];
}
