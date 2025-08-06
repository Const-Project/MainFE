import React from "react";

import ImageUploader from "@/components/dailyMission/share/ImageUploader";

interface TakePhotoMainProps {
  image: File | null;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TakePhotoMain: React.FC<TakePhotoMainProps> = ({
  image,
  onImageChange,
}) => {
  return (
    <main className="flex-1 flex flex-col px-5.25 pt-8">
      <div className="">
        <p className="text-[24px] font-bold mb-18.5">
          식물의 사진을 찍어주세요!
        </p>
      </div>
      <ImageUploader image={image} onImageChange={onImageChange} />
    </main>
  );
};

export default TakePhotoMain;
