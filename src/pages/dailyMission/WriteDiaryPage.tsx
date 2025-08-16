import React, { useState } from "react";

import DiaryEditor from "@/components/dailyMission/writeDiary/DiaryEditor";
import DiaryFooter from "@/components/dailyMission/writeDiary/DiaryFooter";
import DiaryHeader from "@/components/dailyMission/writeDiary/DiaryHeader";

const WriteDiaryPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isPublic, setIsPublic] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleVisibilityChange = (isPublic: boolean) => {
    setIsPublic(isPublic);
  };

  const handleSubmit = () => {
    // API 호출 로직
    console.log({ title, content, image, isPublic });
  };

  return (
    <div className="flex flex-col h-screen">
      <DiaryHeader onSubmit={handleSubmit} />
      <main className="flex  pb-12.5 flex-1 overflow-y-auto">
        <DiaryEditor
          title={title}
          content={content}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
          image={image}
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
