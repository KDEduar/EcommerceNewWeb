import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
    return (
        <div className="py-8 pt-4 homeCatSlider">
            <div className="container">
                <Swiper
                    slidesPerView={7}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <Link to="/">
                            <div className='flex flex-col items-center justify-center px-3 py-8 text-center bg-white rounded-sm item w-[200px] h-[200px]'>
                                <img src="https://img.freepik.com/vector-gratis/smartphone-vistas-diferentes-estilo-realista_23-2147852782.jpg?t=st=1737154928~exp=1737158528~hmac=1e0c056a7f98f9ae9abb748173a0da1e4ecb1de909fce0fafced56070212b870&w=996" alt="celulares" className='w-[100px] transition-all' />
                                <h3 className='text-[15px] font-[500] mt-3'>Phone</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide >
                        <Link to="/">
                            <div className='flex flex-col items-center justify-center px-3 py-8 text-center bg-white rounded-sm item  w-[200px] h-[200px]'>
                                <img src="https://img.freepik.com/psd-gratis/auriculares-levitantes-bodegon_23-2150806982.jpg?t=st=1737156507~exp=1737160107~hmac=d27a4bf63a4204dcf9187eafdb2f4424f00bbc999792f2895cc09e59560b1584&w=740" alt="celulares" className='w-[100px]' />
                                <h3 className='text-[15px] font-[500] mt-3'>Earphones</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide >
                        <Link to="/">
                            <div className='flex flex-col items-center justify-center py-8 px-3 text-center bg-white rounded-sm item  w-[200px] h-[200px]'>
                                <img src="https://img.freepik.com/vector-gratis/refrigerador-bebida-puerta-vidrio-comercial-composicion-realista-imagen-aislada-refrigerador-tienda_1284-54573.jpg?t=st=1737156554~exp=1737160154~hmac=919251a0e1014c28189723774121cbbdfceb75a48eca00fd7f19e5feaa500ed9&w=740" alt="celulares" className='w-[100px]' />
                                <h3 className='text-[15px] font-[500] mt-3'>Refrigerator</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide >
                        <Link to="/">
                            <div className='flex flex-col items-center justify-center py-8 px-3 text-center bg-white rounded-sm item w-[200px] h-[200px]'>
                                <img src="https://img.freepik.com/foto-gratis/horno-pequeno-sobre-fondo-blanco_1232-1347.jpg?t=st=1737156820~exp=1737160420~hmac=1ce696c7d134c8c41aa0e0632d13938877ff8b6b1a7cd8d31c7aec0ff3e17b5c&w=996" alt="celulares" className='w-[100px]' />
                                <h3 className='text-[15px] font-[500] mt-3'>Microwave</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide >
                        <Link to="/">
                            <div className='flex flex-col items-center justify-center py-8 px-3 text-center bg-white rounded-sm item w-[200px] h-[200px]'>
                                <img src="https://img.freepik.com/vector-gratis/concepto-altavoces-sonido-aislados-isometricos-tres-altavoces-grandes-suelo-girados-diferentes-direcciones-mejor-ilustracion-vector-sonido_1284-81836.jpg?t=st=1737156969~exp=1737160569~hmac=06ad4409ee0e0ba5fccb0c9a34b7e8f8d35710575b04c8893a8689d29588986c&w=996" alt="celulares" className='w-[100px]' />
                                <h3 className='text-[15px] font-[500] mt-3'>Sound Equipment</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide >
                        <Link to="/">
                            <div className='flex flex-col items-center justify-center py-8 px-3 text-center bg-white rounded-sm item w-[200px] h-[200px]'>
                                <img src="https://www.lg.com/content/dam/channel/wcms/pe/images/lavadoras/wt16wvtb_abwglgp_espr_pe_c/galley/DZ-01.jpg/_jcr_content/renditions/thum-1600x1062.jpeg" alt="celulares" className='w-[100px]' />
                                <h3 className='text-[15px] font-[500] mt-3'>Washing Machine</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide >
                        <Link to="/">
                            <div className='flex flex-col items-center justify-center py-8 px-3 text-center bg-white rounded-sm item w-[200px] h-[200px]'>
                                <img src="https://www.peru-smart.com/wp-content/uploads/2023/12/LAPT114PLATA-512GBSSD_1.jpg" alt="celulares" className='w-[100px]' />
                                <h3 className='text-[15px] font-[500] mt-3'>Laptop</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide >
                        <Link to="/">
                            <div className='flex flex-col items-center justify-center py-8 px-3 text-center bg-white rounded-sm item w-[200px] h-[200px]'>
                                <img src="https://www.peru-smart.com/wp-content/uploads/2023/12/LAPT114PLATA-512GBSSD_1.jpg" alt="celulares" className='w-[100px]' />
                                <h3 className='text-[15px] font-[500] mt-3'>Laptop</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeCatSlider;