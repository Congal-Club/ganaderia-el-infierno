import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function Slider() {
  return (
    <div className='w-full h-[300px] md:h-[400px] lg:h-[600px] mx-auto'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <SliderElement
            img='/images/slider1.png'
            link='/products/toro-charolais-alta-calidad'
            title='Toro charolais de alta calidad'
            description='Descubra la elegancia y calidad del Toro Charolais de Alta Calidad, conocido por su carne de alta calidad y su temperamento dócil.'
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderElement
            img='/images/slider2.png'
            link='/products/vaca-holstein-leche'
            title='Vaca Holstein de Leche'
            description='Obtenga una Vaca Holstein de alta calidad conocida por su producción de leche excepcional.'
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderElement
            img='/images/slider3.png'
            link='/products/becerro-simmental-registro'
            title='Becerro hereford'
            description='Descubra la pureza y la belleza del Becerro Simmental de Registro. Este ejemplar posee una genética excepcional y es ideal para la cría selectiva de ganado.'
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderElement
            img='/images/slider4.png'
            link='/products/toro-angus-negro'
            title='Toro angus negro'
            description='Descubra la calidad de un Toro Angus Negro, conocido por su carne de alto marmoleo y sabor excepcional.'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

function SliderElement({ link, img, title, description }) {
  return (
    <a href={link} className='h-[300px] md:h-[400px] lg:h-[600px] relative grid place-content-center'>
      <img
        src={img}
        className='absolute top-0 left-0 object-cover object-center w-full h-full -z-10'
        alt={title}
        title={title}
      />

      <h1 className='text-5xl font-black text-center text-white'>
        {title}
      </h1>

      <p className='w-2/3 mx-auto mt-4 text-lg text-center text-white'>
        {description}
      </p>
    </a>
  )
}
