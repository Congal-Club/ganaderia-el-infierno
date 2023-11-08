import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
  return (
    <div className="lg:w-[75%] xs:w-[90%] mx-auto mt-8">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="bg-red-500">
          <div>
            <img
              src="/images/slider1.png"
              className="w-full h-[600px] object-cover object-center"
              alt=""
              srcSet=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="/images/slider2.png"
              className="w-full h-[600px] object-cover object-center"
              alt=""
              srcSet=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="/images/slider3.png"
              className="w-full h-[600px] object-cover object-center"
              alt=""
              srcSet=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="/images/slider4.png"
              className="w-full h-[600px] object-cover object-center"
              alt=""
              srcSet=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
