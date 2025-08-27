import { useState } from "react";

import { Right, TogleOff, TogleOn } from "@/assets/icons/common";

const OptionPage = () => {
  const [pushNotification, setPushNotification] = useState(true);

  const handlePushNotificationToggle = () => {
    setPushNotification(!pushNotification);
  };

  return (
    <section className="w-full pt-5">
      {/* 헤더 - LogPage 스타일 참고 */}
      <h1 className="mb-6 text-center text-heading2">설정</h1>

      {/* 설정 메뉴 목록 */}
      <div className="px-4">
        {/* 푸시 알림 */}
        <div className="flex items-center justify-between py-4 border-b border-gray-100">
          <span className="text-body1">푸시 알림</span>
          <button
            onClick={handlePushNotificationToggle}
            className="flex items-center justify-center"
            aria-label="푸시 알림 토글"
          >
            {pushNotification ? <TogleOn /> : <TogleOff />}
          </button>
        </div>

        {/* 유저 닉네임 변경 */}
        <div className="flex items-center justify-between py-4 border-b border-gray-100">
          <span className="text-body1">유저 닉네임 변경</span>
          <Right />
        </div>

        {/* 아바타 닉네임 변경 */}
        <div className="flex items-center justify-between py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-body1">아바타 닉네임 변경</span>
            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded">
              신
            </div>
          </div>
          <Right />
        </div>

        {/* 이용 약관 */}
        <div className="flex items-center justify-between py-4 border-b border-gray-100">
          <span className="text-body1">이용 약관</span>
          <Right />
        </div>

        {/* 서비스 안내 */}
        <div className="flex items-center justify-between py-4 border-b border-gray-100">
          <span className="text-body1">서비스 안내</span>
          <Right />
        </div>

        {/* 회원 탈퇴 */}
        <div className="flex items-center justify-between py-4 border-b border-gray-100">
          <span className="text-body1 text-red-500">회원 탈퇴</span>
          <Right />
        </div>
      </div>
    </section>
  );
};

export default OptionPage;
