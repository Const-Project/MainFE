export interface AvatarType {
  id: number;
  defaultImageUrl: string;
  description: string;
}

export interface SelectAvatarResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: AvatarType[];
}
