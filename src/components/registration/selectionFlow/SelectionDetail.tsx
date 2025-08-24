import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useAvatarCreationStore } from "@/stores/avatarCreationStore";

const SelectionDetail = () => {
  const { pickSelectionAvatar, actions } = useAvatarCreationStore();

  const handleSlideClick = (index: number) => {
    console.log("description:", descriptions[index], "index:", index);
    actions.setPickSelectionAvatar({
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
      <div className="w-full ">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={16}
          pagination={{ el: ".custom-pagination", clickable: true }}
          className="w-full h-75.75"
          initialSlide={pickSelectionAvatar?.activeIndex}
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
                  backgroundColor:
                    pickSelectionAvatar?.activeIndex === index
                      ? "#EEF9EA"
                      : "white",
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
        <p>{descriptions[pickSelectionAvatar.activeIndex]}</p>
      </div>

      <div className="custom-pagination mt-6 flex justify-center gap-3"></div>
    </div>
  );
};

export default SelectionDetail;
