import React from "react";

import AvatarDisplayArea from "../common/AvatarDisplayArea";

const CreationDetail = () => {
  // TODO: 실제 유저 이름으로 변경 필요
  const userName = "000";

  return (
    <div className="flex flex-col justify-between h-full">
      <h1 className="text-[28px] font-semibold ml-6.25 mt-8 w-64.25 h-19">{`${userName}님만의 아바타가 완성되었어요!`}</h1>

      <div className="flex justify-center pb-24.5">
        <AvatarDisplayArea />
      </div>
    </div>
  );
};

export default CreationDetail;
