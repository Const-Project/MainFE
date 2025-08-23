import React, { useEffect, useState } from "react";

import Camera from "@/assets/icons/common/Camera.svg?url";

interface ImageUploaderProps {
  image: File | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploader = ({ image, handleImageChange }: ImageUploaderProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      const newUrl = URL.createObjectURL(image);
      setPreviewUrl(newUrl);

      return () => {
        URL.revokeObjectURL(newUrl);
      };
    } else {
      setPreviewUrl(null);
    }
  }, [image]);

  return (
    <div className="relative w-full h-88.25 bg-[#f3f3f3] flex items-center justify-center mb-8">
      <label
        htmlFor="file-upload"
        className="w-full h-full flex items-center justify-center cursor-pointer"
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col gap-2.5 items-center justify-center">
            <img src={Camera} alt="Camera" className="w-6 h-5" />
            <div className="text-[var(--color-gray-600)]">
              식물의 사진을 선택하세요
            </div>
          </div>
        )}
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

export default ImageUploader;
