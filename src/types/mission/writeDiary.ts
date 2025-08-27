export interface writeDiaryImageUploadResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    imageId: number;
    url: string;
  };
}
