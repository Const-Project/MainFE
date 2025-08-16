import React, { useState } from "react";

import DiaryHeader from "@/components/dailyMission/common/DiaryHeader";
import TakePhotoFooter from "@/components/dailyMission/takePhoto/TakePhotoFooter";
import TakePhotoEditor from "@/components/dailyMission/takePhoto/TakePhotoMain";

const TakePhotoPage = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log("사진 등록하기", image);
  };

  return (
    <div className="flex flex-col h-screen">
      <DiaryHeader showSubmit={false} />
      <TakePhotoEditor image={image} handleImageChange={handleImageChange} />
      <TakePhotoFooter image={image} onSubmit={handleSubmit} />
    </div>
  );
};

export default TakePhotoPage;
