/**
 * @file ButtonFooter.tsx
 * @description "나중에하기" 버튼과 "다음" 버튼을 포함하는 footer 컴포넌트.
 */
import React from "react";

import Button from "../../common/Button";

const ButtonFooter = () => {
  return (
    <footer className="flex justify-evenly bg-white h-14.25">
      <Button variant="secondary">나중에하기</Button>
      <Button variant="primary">다음</Button>
    </footer>
  );
};

export default ButtonFooter;
