import React, { useState } from "react";

import DiaryHeader from "@/components/dailyMission/common/DiaryHeader";
import DiaryEditor from "@/components/dailyMission/writeDiary/DiaryEditor";
import DiaryFooter from "@/components/dailyMission/writeDiary/DiaryFooter";
import { useWriteDiaryImageUploadApi } from "@/hooks/mission/useWriteDiaryApi";

const WriteDiaryPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState<File | null>(null);
  const [isPublic, setIsPublic] = useState(false);

  const uploadMutation = useWriteDiaryImageUploadApi();

  // API 수정 되면 활용
  // const [image, setImage] = useState<File | null>(null);
  // const [imageUrl, setImageUrl] = useState<string>("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageUrl(file);

      const formData = new FormData();
      formData.append("file", file);

      uploadMutation.mutate(
        { formData },
        {
          onSuccess: () => {
            console.log("이미지 업로드 성공");
          },
          onError: () => {
            // setIsUploaded(false);
          },
        }
      );
    }
  };

  const handleVisibilityChange = (isPublic: boolean) => {
    setIsPublic(isPublic);
  };

  const handleSubmit = () => {
    console.log({ title, content, image: imageUrl, isPublic });
  };

  return (
    <div className="flex flex-col h-full">
      <DiaryHeader
        onSubmit={handleSubmit}
        showSubmit={true}
        context="일기 쓰기"
      />
      <main className="flex pb-12.5 flex-1 overflow-y-auto">
        <DiaryEditor
          title={title}
          content={content}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
          image={imageUrl}
          handleImageChange={handleImageChange}
        />
      </main>
      <footer className="sticky bottom-0 w-full bg-white pt-3.75 pb-[21px] border-t border-[var(--color-gray-200)]">
        <DiaryFooter
          isPublic={isPublic}
          onVisibilityChange={handleVisibilityChange}
        />
      </footer>
      <div className="h-5"></div>
    </div>
  );
};

export default WriteDiaryPage;
