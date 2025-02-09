import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import BannerBoxV2 from '../bannerBoxV2';

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
                    <BannerBoxV2 info="left" image={"https://img.freepik.com/vector-gratis/lindo-koala-durmiendo-ilustracion-dibujos-animados-arbol_138676-2055.jpg?t=st=1737656023~exp=1737659623~hmac=8be7b98d0e81a29ab62f910ab126ad65bb1263aece0243275bb43d17cbc146c8&w=996"} link={'/'} />
                </SwiperSlide>
            
                <SwiperSlide>
                    <BannerBoxV2 info="left" image={"https://img.freepik.com/vector-gratis/astronauta-trabajando-computadora-portatil-escribiendo-ilustracion-dibujos-animados-concepto-negocio-ciencia-aislado-estilo-dibujos-animados-plana_138676-3447.jpg?t=st=1737655942~exp=1737659542~hmac=9c1b98ce97961ffe4457434789b3a93c33e783bf3f94472c19a058a320bce35f&w=996"} link={'/'} />
                </SwiperSlide>
            
                <SwiperSlide>
                    <BannerBoxV2 info="left" image={"https://img.freepik.com/vector-gratis/astronauta-lindo-que-trabaja-computadora-portatil-luna-ilustracion-icono-vector-dibujos-animados-estrellas-ciencia-tecnologia_138676-5462.jpg?t=st=1737655972~exp=1737659572~hmac=1dcd9be17479bb4f92af156947864c8aa345acd15d251e022cb84f267ef38883&w=996"} link={'/'} />
                </SwiperSlide>
            
                <SwiperSlide>
                    <BannerBoxV2 info="left" image={"https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-natacion-tiburon-lindo_138676-2245.jpg?t=st=1737655989~exp=1737659589~hmac=cc94b5e2f6e55f7bfb1f8ac51e51fe5ebd70d3cc555a2a6f630ace17756298e0&w=996"} link={'/'} />
                </SwiperSlide>
            
                <SwiperSlide>
                    <BannerBoxV2 info="left" image={"https://img.freepik.com/vector-gratis/flying-slice-of-pizza-cartoon-vector-illustration-concepto-comida-rapida-vector-aislado-estilo-dibujos-animados-plana_138676-1934.jpg?t=st=1737656005~exp=1737659605~hmac=d88fa3986b69ef89e2bca11f6542114d033a6f2f09290493a407f84658deed74&w=996"} link={'/'} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AdsBannerSlider;