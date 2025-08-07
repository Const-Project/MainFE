// SelectionDetail.tsx

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
    <div className="flex flex-col">
      <div className="text-[28px] font-semibold pt-8 pl-6.25 pb-13.25">
        원하는 아바타를 선택해주세요.
      </div>

      <div className="flex flex-col items-center">
        <div className="w-full overflow-visible">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.2}
            centeredSlides={true}
            spaceBetween={12}
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
            pagination={{ el: ".custom-pagination", clickable: true }}
            loop={true}
          >
            {[...Array(10)].map((_, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="flex flex-col items-center w-82 h-100 pt-4.5 pb-3 px-11 border-2 border-[var(--color-primary)] rounded-3xl">
                  <div className="w-60 h-92.5 bg-gray-100 flex items-center justify-center rounded">
                    <span className="text-xl text-gray-400">
                      이미지 {index + 1}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col items-center">
          <div className="mt-3 text-center text-2xl font-semibold">
            <p>{descriptions[activeIndex]}</p>
          </div>
          <div className="custom-pagination mt-6 flex justify-center gap-3"></div>
        </div>
      </div>
    </div>
  );
};

export default SelectionDetail;
