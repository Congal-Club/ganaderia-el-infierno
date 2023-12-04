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
            <a title="Toro charolais de alta calidad" href="/products/toro-charolais-alta-calidad">
              <img
                src="/images/slider1.png"
                className="w-full h-[600px] object-cover object-center"
                alt="Toro charolais de alta calidad"
                title="Toro charolais de alta calidad"
                srcSet=""
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/products/vaca-holstein-leche">
              <img
                src="/images/slider2.png"
                className="w-full h-[600px] object-cover object-center"
                alt="Toro angus de alta calidad"
                title="Toro angus de alta calidad"
                srcSet=""
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/products/becerro-simmental-registro">
              <img
                src="/images/slider3.png"
                className="w-full h-[600px] object-cover object-center"
                alt="Becerro hereford"
                title="Becerro hereford"
                srcSet=""
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/products/toro-angus-negro">
              <img
                src="/images/slider4.png"
                className="w-full h-[600px] object-cover object-center"
                alt="Toro angus negro"
                title="Toro angus negro"
                srcSet=""
              />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
