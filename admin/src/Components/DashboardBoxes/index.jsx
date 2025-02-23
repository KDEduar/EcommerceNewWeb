import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { LuGift } from 'react-icons/lu';
import { IoStatsChart } from "react-icons/io5";
import { FiPieChart } from 'react-icons/fi';
import { BsBank } from "react-icons/bs";
import { MdProductionQuantityLimits } from 'react-icons/md';

const DashboardBoxes = () => {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className='dashboardBoxesSlider'>
                <SwiperSlide>
                    <div className="box p-5 rounded-md border border-[rgba(0,0,0,0.1)] bg-white flex items-center gap-4 cursor-pointer hover:bg-[#fafafa]">
                        <LuGift className="text-[40px] text-[#3872fa]" />
                        <div className="info w-[50%]">
                            <h3>New Orders</h3>
                            <b>1,390</b>
                        </div>
                        <IoStatsChart className='text-[50px] text-[#3872fa]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box p-5 rounded-md border border-[rgba(0,0,0,0.1)] bg-white flex items-center gap-4 cursor-pointer hover:bg-[#fafafa]">
                        <FiPieChart className="text-[#1B998B] text-[40px]" />
                        <div className="info w-[50%]">
                            <h3>Sales</h3>
                            <b>$ 87,450</b>
                        </div>
                        <IoStatsChart className='text-[50px] text-[#1B998B]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box p-5 rounded-md border border-[rgba(0,0,0,0.1)] bg-white flex items-center gap-4 cursor-pointer hover:bg-[#fafafa]">
                        <BsBank className="text-[#5E4AE3] text-[40px]" />
                        <div className="info w-[50%]">
                            <h3>Revenue</h3>
                            <b>$ 12,882</b>
                        </div>
                        <IoStatsChart className='text-[50px] text-[#5E4AE3]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box p-5 rounded-md border border-[rgba(0,0,0,0.1)] bg-white flex items-center gap-4 cursor-pointer hover:bg-[#fafafa]">
                        <MdProductionQuantityLimits className="text-[#E84855] text-[40px]" />
                        <div className="info w-[50%]">
                            <h3>Total Products</h3>
                            <b>1,390</b>
                        </div>
                        <IoStatsChart className='text-[50px] text-[#E84855]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box p-5 rounded-md border border-[rgba(0,0,0,0.1)] bg-white flex items-center gap-4 cursor-pointer hover:bg-[#fafafa]">
                        <MdProductionQuantityLimits className="text-[#E84855] text-[40px]" />
                        <div className="info w-[50%]">
                            <h3>Products Sold</h3>
                            <b>
                                999.846
                            </b>
                        </div>
                        <IoStatsChart className='text-[50px] text-[#E84855]' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default DashboardBoxes;