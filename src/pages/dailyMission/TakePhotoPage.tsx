import React, { useState } from "react";

import TakePhotoFooter from "@/components/dailyMission/takePhoto/TakePhotoFooter";
import TakePhotoHeader from "@/components/dailyMission/takePhoto/TakePhotoHeader";
import TakePhotoMain from "@/components/dailyMission/takePhoto/TakePhotoMain";

const TakePhotoPage = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleGoBack = () => {
    // 뒤로가기 로직 구현 (예: history.back() 또는 react-router-dom의 useNavigate)
    console.log("뒤로가기");
  };

  const handleSubmit = () => {
    console.log("사진 등록하기", image);
    // 사진 등록 로직 구현
  };

  return (
    <div className="flex flex-col h-screen">
      <TakePhotoHeader onGoBack={handleGoBack} />
      <TakePhotoMain image={image} onImageChange={handleImageChange} />
      <TakePhotoFooter onSubmit={handleSubmit} />
    </div>
  );
};

export default TakePhotoPage;
