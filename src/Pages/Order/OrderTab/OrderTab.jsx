import React from 'react';
import FoodCard from '../../../Components/SectionTitle/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
// import "./styles.css";

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <div>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-10'>
                        {
                            items.map(item => <FoodCard item={item} key={item._id} />)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>


        </div>
    );
};

export default OrderTab;