/**
 * @file RegistrationHeader.tsx
 * @description 식물 등록 페이지의 헤더 컴포넌트
 *              뒤로가기 버튼과 페이지 제목을 포함합니다.
 */

import React from "react";

import Left from "@/assets/icons/left.svg";

const RegistrationHeader = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <header className="h-14 flex items-center justify-between p-3.5 bg-white border-b-gray-200">
      <button onClick={handleBack}>
        <img src={Left} alt="뒤로가기" className="w-6 h-6" />
      </button>
      <h1 className="text-lg font-bold">식물 데려오기</h1>
      <div className="w-6"></div>
    </header>
  );
};

export default RegistrationHeader;
