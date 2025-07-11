import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const OnboardingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      {/* 모션 그래픽 영역 ( 디자인 나오면 수정 예정 ) */}
      <div className="w-full h-2/3 bg-gray-100 border-b-2 border-dashed border-gray-400 flex justify-center items-center">
        <p className="text-gray-500">모션 그래픽 영역</p>
      </div>

      {/* 온보딩 영역 */}
      <div className="flex-1 flex flex-col">
        <Swiper onSlideChange={handleSlideChange} className="w-full h-full">
          <SwiperSlide className="flex items-center justify-center h-full pt-[15%]">
            <p className="text-2xl font-semibold text-center">
              나만의 식물을 <br />
              화면 속에서 만나보세요.
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-full pt-[15%]">
            <p className="text-2xl font-semibold text-center">
              미션을 수행하고, <br />
              아바타를 꾸며보세요.
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-full pt-[15%] ">
            <p className="text-2xl font-semibold text-center">
              친구들의 식물 아바타와
              <br /> 재미있는 게임을 해보세요.
            </p>
          </SwiperSlide>
        </Swiper>

        <div className="p-6">
          {/* Pagination and Hint */}
          <div className="flex flex-col items-center">
            <div className="flex space-x-2 my-4">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-black" : "bg-gray-300"}`}
                />
              ))}
            </div>
            <div className="bg-[#f3f3f3] px-4 py-1 ">
              <p className="text-sm text-gray-600">좌우로 넘길 수 있어요</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className={`w-full py-5  font-bold ${
            activeIndex === 2
              ? "bg-[#7f7f7f] cursor-pointer text-white"
              : "bg-[#f3f3f3] cursor-not-allowed text-[#bfbfbf]"
          }`}
          disabled={activeIndex !== 2}
        >
          나만의 화단 만들러 가기
        </button>
      </div>
    </div>
  );
};

export default OnboardingPage;
