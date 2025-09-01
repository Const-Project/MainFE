export interface WriteDiaryImageUploadRequest {
  formData: FormData;
}

export type writeDiaryImageUploadResponse = {
  imageId: number;
  imageUrl: string;
};

export interface writeDiarySubmitRequest {
  title: string;
  content: string;
  imageUrl: string;
  isPublic: boolean;
  imageId: number;
}

export interface writeDiarySubmitResponse {
  diaryId: number;
  title: string;
  content: string;
  imageUrl: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  public: boolean;
}
