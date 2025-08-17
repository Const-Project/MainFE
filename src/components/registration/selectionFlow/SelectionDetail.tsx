import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useAvatarCreationStore } from "@/stores/avatarCreationStore";

import "swiper/css";
import "swiper/css/pagination";

const SelectionDetail = () => {
  const { selectedAvatar, actions } = useAvatarCreationStore();

  const handleSlideClick = (index: number) => {
    actions.selectAvatar({
      description: descriptions[index],
      img: `image_${index + 1}`,
      activeIndex: index,
    });
  };

  const descriptions = [
    "산세베리아",
    "스킨답서스",
    "몬스테라",
    "고무나무",
    "행운목",
    "다육",
    "난",
    "파키라",
    "군자란",
    "백량금",
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
          pagination={{ el: ".custom-pagination", clickable: true }}
          className="w-full h-75.75"
          initialSlide={selectedAvatar.activeIndex}
          // onSlideChange={swiper => handleSlideClick(swiper.activeIndex)}
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleSlideClick(index)}
              className="flex items-center justify-center"
            >
              <div
                className="w-64 max-w-75  h-75.75 border-2 border-[var(--color-primary)] rounded-[12px] flex items-center justify-center"
                style={{
                  backgroundColor:
                    selectedAvatar.activeIndex === index ? "#EEF9EA" : "white",
                }}
              >
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
        <p>{descriptions[selectedAvatar.activeIndex]}</p>
      </div>

      {/* 커스텀 페이지네이션 */}
      <div className="custom-pagination mt-6 flex justify-center gap-3"></div>
    </div>
  );
};

export default SelectionDetail;
