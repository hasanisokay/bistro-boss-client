import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <>
            <SectionTitle
            subHeading={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} />
                    <h4 className='text-4xl uppercase text-white -mt-16 text-center'>
                        Salad
                    </h4>
                </SwiperSlide>
                <SwiperSlide><img src={slide2} />
                <h4 className='text-4xl uppercase text-white -mt-16 text-center'>
                        Pizza
                    </h4>
                </SwiperSlide>
                <SwiperSlide><img src={slide3} />
                <h4 className='text-4xl uppercase text-white -mt-16 text-center'>
                        Soups
                    </h4></SwiperSlide>
                <SwiperSlide><img src={slide4} />
                <h4 className='text-4xl uppercase text-white -mt-16 text-center'>
                        Desserts
                    </h4></SwiperSlide>
                <SwiperSlide><img src={slide5} />
                <h4 className='text-4xl uppercase text-white -mt-16 text-center'>
                        Salads
                    </h4></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Category;