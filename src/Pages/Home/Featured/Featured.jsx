import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"
const Featured = () => {
    return (
        <div className='featured-item text-white pt-8 my-20 bg-fixed'>
            <SectionTitle
            heading={"Featured Item"}
            subHeading={"check it out"}
            ></SectionTitle>
            <div className='md:flex items-center justify-center pb-20 pt-12 px-36 bg-slate-400 bg-opacity-40'>
                <div>
                    <img src={featuredImg} />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2023</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum repellendus nobis, cumque nostrum quisquam voluptatibus, repudiandae corporis eos, culpa necessitatibus tempora repellat ratione cupiditate et nulla quidem accusantium nam. Omnis aut, culpa veniam doloremque, at nemo porro harum temporibus saepe quasi similique atque asperiores. Totam, cumque. Iusto soluta eos animi?</p>
                    <button className='btn btn-outline border-0 border-b-4'>Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;