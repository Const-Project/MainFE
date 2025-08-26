import React, { useState } from "react";

import { useParams } from "react-router-dom";

import DiaryHeader from "@/components/dailyMission/common/DiaryHeader";
import TakePhotoFooter from "@/components/dailyMission/takePhoto/TakePhotoFooter";
import TakePhotoEditor from "@/components/dailyMission/takePhoto/TakePhotoMain";
import {
  usePostTakePhotoApi,
  useTakePhotoUploadApi,
} from "@/hooks/mission/useTakePhotoApi";

const TakePhotoPage = () => {
  const { userDailyMissionId } = useParams<{ userDailyMissionId: string }>();
  if (!userDailyMissionId) {
    throw new Error("userDailyMissionId 가 없습니다. 다시 시도해주세요.");
  }
  const numericMissionId = Number(userDailyMissionId);

  const [image, setImage] = useState<File | null>(null);
  // const [isUploaded, setIsUploaded] = useState(false);

  const uploadMutation = useTakePhotoUploadApi();
  const completeMutation = usePostTakePhotoApi();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);

      const formData = new FormData();
      formData.append("file", file);

      uploadMutation.mutate(
        { userDailyMissionId: numericMissionId, formData },
        {
          onSuccess: () => {
            // setIsUploaded(true);
            console.log("이미지 업로드 성공");
          },
          onError: () => {
            // setIsUploaded(false);
          },
        }
      );
    }
  };

  const handleSubmit = () => {
    // if (!isUploaded) {
    //   alert("이미지를 먼저 업로드해주세요!");
    //   return;
    // }

    completeMutation.mutate(numericMissionId, {
      onSuccess: () => {
        alert("사진 미션 완료!");
      },
    });
  };

  return (
    <div className="flex flex-col h-full">
      <DiaryHeader showSubmit={false} context="사진 찍기" />
      <TakePhotoEditor image={image} handleImageChange={handleImageChange} />
      <TakePhotoFooter image={image} onSubmit={handleSubmit} />
    </div>
  );
};

export default TakePhotoPage;
