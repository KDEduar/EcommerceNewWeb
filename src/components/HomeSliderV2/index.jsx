import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Button } from '@mui/material';

const HomeBannerV2 = () => {
    return (
        <div>
            <Swiper
                loop={true}
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}    
                className="homeSliderV2"
            >
                <SwiperSlide>
                    <div className='w-full overflow-hidden rounded-md item'>
                        <img src="/fondoBanner1.jpg" />

                        <div className="info absolute top-0 h-[100%] opacity-0 transition-all duration-700 -right-[100%] w-[50%] z-50 p-8 flex items-center flex-col justify-center">
                            <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0'>Big Saving Days Sale</h4>
                            <h2 className='text-[35px] font-[800] w-full relative -right-[100%] opacity-0'>Men Solid Round Black T-Shirt</h2>
                            <h3 className='flex relative -right-[100%] opacity-0 items-center gap-3 text-[18px] font-[500] w-full text-left mb-3 mt-1'>
                                Starting At Only <span className='text-white text-[30px] font-[700]'>$59.00</span>
                            </h3>

                            <div className="w-full relative -right-[100%] opacity-0 btn_">
                                <Button className='btn-org'>SOP NOW</Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full overflow-hidden rounded-md item'>
                        <img src="fondoBanner1.jpg" />

                        <div className="info absolute top-0 h-[100%] opacity-0 transition-all duration-700 -right-[100%] w-[50%] z-50 p-8 flex items-center flex-col justify-center">
                            <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0'>Big Saving Days Sale</h4>
                            <h2 className='text-[35px] font-[800] w-full relative -right-[100%] opacity-0'>Buy Modern Chair In Black Color</h2>
                            <h3 className='flex relative -right-[100%] opacity-0 items-center gap-3 text-[18px] font-[500] w-full text-left mb-3 mt-1'>
                                Starting At Only <span className='text-white text-[30px] font-[700]'>$99.00</span>
                            </h3>

                            <div className="w-full relative -right-[100%] opacity-0 btn_">
                                <Button className='btn-org'>SOP NOW</Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HomeBannerV2;