import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft} from "react-icons/fa";
const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("https://bistro-boss-server-neon.vercel.app/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-20'>
            <SectionTitle
                subHeading={"What Our Client Say"}
                heading={"Testimonials"}
            >
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='mx-24 my-16 flex flex-col items-center justify-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className='h-16 w-16 my-6'/>
                            <p className='py-8'>{review.details}</p>
                            <h3 className='text-2xl text-orange-400'>{review.name}</h3>

                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;