import ImageUploader from "./ImageUploader";

interface DiaryEditorProps {
  title: string;
  content: string;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  image: File | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DiaryEditor = ({
  title,
  content,
  onTitleChange,
  onContentChange,
  image,
  handleImageChange,
}: DiaryEditorProps) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return (
    <div className="flex-grow px-5 pt-8 pb-12.5">
      <div className="border-b-1 border-[var(--color-gray-200)] mb-8">
        <div className="text-[#282828] w-full h-7.25 mb-2">
          {`${year}년 ${month}월 ${day}일`}
        </div>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          className="w-full h-9.5 mb-6 text-[28px] placeholder:text-[var(--color-gray-400)] focus:outline-none"
          value={title}
          onChange={onTitleChange}
        />
      </div>
      <ImageUploader image={image} onImageChange={handleImageChange} />
      <textarea
        placeholder="내 식물의 겨울나기에 대해서 이야기해보는건 어때요?"
        className={`p-2 focus:outline-none placeholder:text-[var(--color-gray-400)] resize-none ${
          content ? "w-full" : "w-50 h-16"
        }`}
        value={content}
        onChange={onContentChange}
      ></textarea>
    </div>
  );
};

export default DiaryEditor;
