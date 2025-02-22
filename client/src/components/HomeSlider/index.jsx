import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const HomeSlider = () => {
    return (
        <div className="py-5 homeSlider">
            <div className="container">
                <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                className="sliderHome">
                    <SwiperSlide>
                        <div className="overflow-hidden rounded-[10px] item">
                            <img src="https://plazavea.vteximg.com.br/arquivos/RETAILMEDIA-NF-BANNER-HP-D-HISENSE-17ENE.webp?v=638727235887130000" alt="Banner slider" className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="overflow-hidden rounded-[20px] item">
                            <img src="https://plazavea.vteximg.com.br/arquivos/HP-BANNER-PRINCIPAL-FOOD-D-17-ENE-A.webp?v=638726701912570000" alt="Banner slider" className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="overflow-hidden rounded-[20px] item">
                            <img src="https://plazavea.vteximg.com.br/arquivos/HP-BANNER-PRINCIPAL-NF-D-17-ENE-B.webp?v=638726700261000000" alt="Banner slider" className='w-full' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    )
}

export default HomeSlider;