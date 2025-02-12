import React from 'react'
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { LiaShippingFastSolid } from 'react-icons/lia';
import AdsBannerSlider from '../../components/AdsBannerSlider';
import AdsBannerSliderV2 from '../../components/AdsBannerSliderV2';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from '../../components/ProductsSlider';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BlogItem from '../../components/BlogItem';
import Footer from '../../components/Footer';
import HomeBannerV2 from '../../components/HomeSliderV2';
import BannerBoxV2 from '../../components/bannerBoxV2';

const Home = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <HomeSlider />
            <section className='py-6'>
                <div className="container flex gap-5">
                    <div className='part1 w-[75%]'>
                        <HomeBannerV2 />
                    </div>

                    <div className='part1 gap-4 flex-col w-[30%] flex items-center justify-between'>
                        <BannerBoxV2 info="left" image={"https://img.freepik.com/vector-gratis/fondo-monton-cuadrados_52683-2832.jpg?t=st=1737609160~exp=1737612760~hmac=351997a1de3d944750430d002c983acb23feeddf9c17153ac103cca121d45a34&w=996"}/>

                        <BannerBoxV2 info="right" image={"https://img.freepik.com/vector-gratis/fondo-monton-cuadrados_52683-2832.jpg?t=st=1737609160~exp=1737612760~hmac=351997a1de3d944750430d002c983acb23feeddf9c17153ac103cca121d45a34&w=996"} />
                    </div>
                </div>
            </section>

            <HomeCatSlider />

            {/* Popular Products */}
            <section className="py-8 bg-white">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="leftSec">
                            <h2 className='text-[22px] font-[600]'>Popular Products</h2>
                            <p className='text-[14px] font-[400]'>Do not miss the current offers until the end of March.</p>
                        </div>

                        <div className="rightSec w-[60%]">
                            {/* <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}></Box> */}
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                                <Tab label="Phone" />
                                <Tab label="Earphones" />
                                <Tab label="Regrigerator" />
                                <Tab label="Microwave" />
                                <Tab label="Sound Equipment" />
                                <Tab label="Washing Machine" />
                                <Tab label="Laptop" />
                                <Tab label="Laptop" />
                            </Tabs>

                        </div>
                    </div>
                    <ProductsSlider items={5} />
                </div>
            </section>

            {/* Free Shipping */}
            <section className="py-2 pt-2 bg-white">
                <div className="container">
                    <div className="w-[80%] mx-auto p-4 border-2 freeShipping border-[--primary-color] flex items-center justify-between rounded-md py-4 mb-7">
                        <div className="flex items-center gap-4 col1">
                            <LiaShippingFastSolid className='text-[50px]' />
                            <span className='text-[20px] font-[600] uppercase'>Free Shipping</span>
                        </div>

                        <div className="col2">
                            <p className="mb-0 font-[500]">Free Delivery Now On Your First Order and over $200</p>
                        </div>

                        <p className="font-bold text-[30px]">- Only $200*</p>
                    </div>

                    <AdsBannerSliderV2 items={4} />
                </div>
            </section>

            {/* Latest Products */}
            <section className="py-5 pt-0 bg-white">
                <div className="container">
                    <h2 className="text-[20px] font-[600]">Lates Products</h2>
                    <ProductsSlider items={5} />
                    <AdsBannerSlider items={3} />
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-5 pt-0 bg-white">
                <div className="container">
                    <h2 className="text-[20px] font-[600]">Featured Products</h2>
                    <ProductsSlider items={5} />
                    <AdsBannerSlider items={2} />
                </div>
            </section>

            {/* From The Blog */}
            <section className="py-5 pt-0 pb-8 bg-white blogSection">
                <div className="container">
                    <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className="blogSlider"
                    >
                        <SwiperSlide >
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide >
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide >
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide >
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide >
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide >
                            <BlogItem />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Home;