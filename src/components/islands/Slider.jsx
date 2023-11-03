import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
  return (
    <div className="w-[90%] mx-auto mt-8">
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
              src="/images/slider1.jpg"
              className="w-full h-96 object-cover object-center"
              alt=""
              srcset=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="/images/slider2.jpg"
              className="w-full h-96 object-cover object-center"
              alt=""
              srcset=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="/images/slider3.jpg"
              className="w-full h-96 object-cover object-center"
              alt=""
              srcset=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="/images/slider4.jpeg"
              className="w-full h-96 object-cover object-center"
              alt=""
              srcset=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
