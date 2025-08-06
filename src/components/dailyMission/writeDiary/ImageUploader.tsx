import Camera from "@/assets/icons/common/Camera.svg";

interface ImageUploaderProps {
  image: File | null;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploader = ({ image, onImageChange }: ImageUploaderProps) => {
  return (
    <div className="flex-col gap-2.5 w-full h-88.25 bg-[#f3f3f3] flex items-center justify-center mb-8">
      <label
        htmlFor="file-upload"
        className="flex flex-col gap-2.5 items-center justify-center cursor-pointer"
      >
        <img src={Camera} alt="Camera" className="w-6 h-5" />
        <div className="text-gray-500">식물의 사진을 선택하세요</div>
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={onImageChange}
        className="hidden"
      />
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="preview"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default ImageUploader;
