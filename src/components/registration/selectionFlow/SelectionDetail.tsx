import { useState } from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const SelectionDetail = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const descriptions = [
    "설명 텍스트 1",
    "설명 텍스트 2",
    "설명 텍스트 3",
    "설명 텍스트 4",
    "설명 텍스트 5",
    "설명 텍스트 6",
    "설명 텍스트 7",
    "설명 텍스트 8",
    "설명 텍스트 9",
    "설명 텍스트 10",
  ];

  return (
    <div className="flex flex-col h-full items-center justify-center">
      {/* Swiper */}
      <div className="w-full px-3">
        {" "}
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.4}
          centeredSlides={true}
          spaceBetween={9}
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
          pagination={{ el: ".custom-pagination", clickable: true }}
          className="w-full h-75.75"
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div className="w-64 max-w-75  h-75.75 border-2 border-[var(--color-primary)] rounded-[12px] flex items-center justify-center">
                <div className="w-50 h-62.5 bg-gray-100 flex items-center justify-center rounded">
                  <span className="text-xl text-gray-400">
                    이미지 {index + 1}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 설명 텍스트 */}
      <div className="mt-6 text-center text-2xl font-semibold">
        <p>{descriptions[activeIndex]}</p>
      </div>

      {/* 커스텀 페이지네이션 */}
      <div className="custom-pagination mt-6 flex justify-center gap-3"></div>
    </div>
  );
};

export default SelectionDetail;
