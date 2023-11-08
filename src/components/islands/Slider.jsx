import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

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
              src="/ganaderia-el-infierno/images/slider1.png"
              className="w-full h-[600px] object-cover object-center"
              alt=""
              srcset=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="/ganaderia-el-infierno/images/slider2.png"
              className="w-full h-[600px] object-cover object-center"
              alt=""
              srcset=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="/ganaderia-el-infierno/images/slider3.png"
              className="w-full h-[600px] object-cover object-center"
              alt=""
              srcset=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="/ganaderia-el-infierno/images/slider4.png"
              className="w-full h-[600px] object-cover object-center"
              alt=""
              srcset=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
