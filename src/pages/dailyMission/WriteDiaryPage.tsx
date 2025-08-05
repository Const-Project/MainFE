import React from "react";

import Camera from "@/assets/icons/common/Camera.svg"; // Assuming Camera.svg is exported as a default React component
// import XIcon from "@/assets/icons/common/Xmack.svg";
import XIcon from "@/assets/icons/common/Xmack.svg"; // Assuming Xmack.svg is exported as a default React component
const WriteDiaryPage = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return (
    <div className="flex flex-col h-screen">
      <header className="w-full h-14 flex items-center justify-between p-4 border-b border-[var(--color-gray-200)]">
        {/* <XIcon /> */}
        <img src={XIcon} alt="Close" className="w-4 h-4" />
        <h1 className="text-xl font-semibold">일기쓰기</h1>
        <button className="text-lg">완료</button>
      </header>
      <main className="flex-grow px-5 pt-8 pb-12.5">
        <div className="border-b-1 border-[var(--color-gray-200)] mb-8">
          <div className="text-[#282828] w-full h-7.25 mb-2">
            {`${year}년 ${month}월 ${day}일`}
          </div>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            className="w-full h-9.5 mb-6 text-[28px] placeholder:text-[var(--color-gray-400)] focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2.5 w-full h-88.25 bg-[#f3f3f3] flex items-center justify-center mb-8">
          <img src={Camera} alt="Camera" className="w-6 h-5" />

          <div className="text-gray-500">식물의 사진을 선택하세요</div>
        </div>
        <textarea
          placeholder="내 식물의 겨울나기에 대해서 이야기해보는건 어때요?"
          className="w-50 h-14.5 p-2 focus:outline-none placeholder:text-[var(--color-gray-400)] "
        ></textarea>
      </main>
      <footer className="pb-5.25 pt-12.5 border-t-1 border-[var(--color-gray-200)]"></footer>
    </div>
  );
};

export default WriteDiaryPage;
