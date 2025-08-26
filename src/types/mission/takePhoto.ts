// 사진 찍기 미션 완료 버튼 클릭 시 -> Response
export interface takePhotoResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
}

// export interface takePhotoUploadRequest {}

// 사진 찍기 이미지 업로드 시 -> Response
export interface takePhotoUploadResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
}
