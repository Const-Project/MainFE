import axios from "@/apis/instance";

export const getSelectionAvatarApi = async () => {
  try {
    const response = await axios.get("/api/v1/avatars/masters");
    return response.data;
  } catch (error) {
    alert("회원가입에 실패했습니다.");
    console.log(error);
  }
};
