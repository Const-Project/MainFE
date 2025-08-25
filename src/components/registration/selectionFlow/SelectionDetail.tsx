import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

interface SelectionDetailProps {
  descriptions: string[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
}

const SelectionDetail = ({
  descriptions,
  activeIndex,
  onActiveIndexChange,
}: SelectionDetailProps) => {
  const handleSlideClick = (index: number) => {
    onActiveIndexChange(index);
  };

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <div className="w-full ">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={16}
          pagination={{ el: ".custom-pagination", clickable: true }}
          className="w-full h-75.75"
          initialSlide={activeIndex}
          onSlideChange={swiper => handleSlideClick(swiper.activeIndex)}
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleSlideClick(index)}
              className="flex items-center justify-center"
            >
              <div
                className="w-auto h-75.75  flex items-center justify-center"
                style={{
                  backgroundColor: activeIndex === index ? "#EEF9EA" : "white",
                }}
              >
                <div className="w-full h-full px-12 py-5 border-2 border-primary rounded-[12px] bg-gray-100 flex items-center justify-center ">
                  <span className="text-xl text-gray-400">
                    이미지 {index + 1}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-6 text-heading2">
        <p>{descriptions[activeIndex]}</p>
      </div>

      <div className="custom-pagination mt-6 flex justify-center gap-3"></div>
    </div>
  );
};

export default SelectionDetail;
