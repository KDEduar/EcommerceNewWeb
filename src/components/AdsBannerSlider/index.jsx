import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
    return (
        <div className='w-full py-5'>
            <Swiper
                slidesPerView={props.items}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                className="smlBtn"
            >
                <SwiperSlide>
                    <BannerBox img={'/banner-1.png'} link={'/'} />
                </SwiperSlide>
            
                <SwiperSlide>
                    <BannerBox img={'/banner-1.png'} link={'/'} />
                </SwiperSlide>
            
                <SwiperSlide>
                    <BannerBox img={'/banner-1.png'} link={'/'} />
                </SwiperSlide>
            
                <SwiperSlide>
                    <BannerBox img={'/banner-1.png'} link={'/'} />
                </SwiperSlide>
            
                <SwiperSlide>
                    <BannerBox img={'/banner-1.png'} link={'/'} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AdsBannerSlider;