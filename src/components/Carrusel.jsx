import { Swiper, SwiperSlide } from 'swiper/react';
import Img_1 from '../photo/toyota2.jpg';
import Img_3 from '../photo/toyota3.jpg';
import Img_2 from '../photo/toyota4.jpg';
import Img_6 from '../photo/chevrolet2.jpg';
import Img_5 from '../photo/volkswagen1.jpg';
import Img_7 from '../photo/volkswagen2.jpg'
import Img_4 from '../photo/volkswagen3.jpg'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export const Carrusel = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true }
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper" 
        
      >
        <SwiperSlide><img 
        src={Img_1 } 
        className="d-block w-100" 
        style={{ height: '300px', objectFit: 'cover' }} 
        />
        </SwiperSlide>
        <SwiperSlide><img 
        src={Img_2} 
        className="d-block w-100" 
        style={{ height: '300px', objectFit: 'cover' }} 
        />
        </SwiperSlide>
        <SwiperSlide><img 
        src={Img_3} 
        className="d-block w-100" 
        style={{ height: '300px', objectFit: 'cover' }} 
        />
        </SwiperSlide>
        <SwiperSlide><img 
        src={Img_4} 
        className="d-block w-100" 
        style={{ height: '300px', objectFit: 'cover' }} 
        />
        </SwiperSlide>
        <SwiperSlide><img 
        src={Img_5} 
        className="d-block w-100" 
        style={{ height: '300px', objectFit: 'cover' }} 
        />
        </SwiperSlide>
        <SwiperSlide><img 
        src={Img_6} 
        className="d-block w-100" 
        style={{ height: '300px', objectFit: 'cover' }} 
        />
        </SwiperSlide>
        <SwiperSlide><img 
        src={Img_7} 
        className="d-block w-100" 
        style={{ height: '300px', objectFit: 'cover' }} 
        />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
