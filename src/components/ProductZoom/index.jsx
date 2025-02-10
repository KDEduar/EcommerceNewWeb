import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';

export const ProductZoom = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSliderSml.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    };

    return (
        <>
            <div className="flex gap-3">
                <div className="slider w-[15%]">
                    <Swiper
                        ref={zoomSliderSml}
                        direction={'vertical'}
                        slidesPerView={4}
                        spaceBetween={8}
                        navigation={true}
                        modules={[Navigation]}
                        className='zoomProductSliderThumbs h-[500px] overflow-hidden'
                    >
                        <SwiperSlide>
                            <div className={`overflow-hidden rounded-md cursor-pointer item group
                            ${slideIndex === 0
                                    ? 'opacity-1'
                                    : 'opacity-30'}
                                `}
                                onClick={() => goto(0)}>
                                <img src='https://i.pinimg.com/736x/05/e0/03/05e003e3efc6d2cba7821fc37ce17e9e.jpg' className='w-full transition-all group-hover:scale-105' alt='Product' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`overflow-hidden rounded-md cursor-pointer item group
                            ${slideIndex === 1
                                    ? 'opacity-1'
                                    : 'opacity-30'}
                                `} onClick={() => goto(1)}>
                                <img src='https://i.pinimg.com/736x/fd/a9/b9/fda9b9411f005442d1d0ac2032b40a43.jpg' className='w-full transition-all group-hover:scale-105' alt='Product' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`overflow-hidden rounded-md cursor-pointer item group
                            ${slideIndex === 2
                                    ? 'opacity-1'
                                    : 'opacity-30'}
                                `} onClick={() => goto(2)}>
                                <img src='https://i.pinimg.com/736x/eb/76/d7/eb76d7558b4fe02ddeb4bf4b2462d684.jpg' className='w-full transition-all group-hover:scale-105' alt='Product' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`overflow-hidden rounded-md cursor-pointer item group
                            ${slideIndex === 3
                                    ? 'opacity-1'
                                    : 'opacity-30'}
                                `} onClick={() => goto(3)}>
                                <img src='https://i.pinimg.com/736x/45/92/e5/4592e54f85c6bedcc83b52ab9dd19421.jpg' className='w-full transition-all group-hover:scale-105' alt='Product' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`overflow-hidden rounded-md cursor-pointer item group
                            ${slideIndex === 4
                                    ? 'opacity-1'
                                    : 'opacity-30'}
                                `} onClick={() => goto(4)}>
                                <img src='https://i.pinimg.com/736x/0b/7e/bd/0b7ebd7e0a24b50d5eec99906c6f71c9.jpg' className='w-full transition-all group-hover:scale-105' alt='Product' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`overflow-hidden rounded-md cursor-pointer item group
                            ${slideIndex === 5
                                    ? 'opacity-1'
                                    : 'opacity-30'}
                                `} onClick={() => goto(5)}>
                                <img src='https://i.pinimg.com/736x/f3/c7/ed/f3c7ed5aeeb8b5a2bb74acae34048720.jpg' className='w-full transition-all group-hover:scale-105' alt='Product' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
                    <Swiper
                        ref={zoomSliderBig}
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={false}>
                        <SwiperSlide>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src={'https://i.pinimg.com/736x/05/e0/03/05e003e3efc6d2cba7821fc37ce17e9e.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src={'https://i.pinimg.com/736x/fd/a9/b9/fda9b9411f005442d1d0ac2032b40a43.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src={'https://i.pinimg.com/736x/eb/76/d7/eb76d7558b4fe02ddeb4bf4b2462d684.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src={'https://i.pinimg.com/736x/45/92/e5/4592e54f85c6bedcc83b52ab9dd19421.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src={'https://i.pinimg.com/736x/0b/7e/bd/0b7ebd7e0a24b50d5eec99906c6f71c9.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom zoomType='hover' zoomScale={1} src={'https://i.pinimg.com/736x/f3/c7/ed/f3c7ed5aeeb8b5a2bb74acae34048720.jpg'} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};