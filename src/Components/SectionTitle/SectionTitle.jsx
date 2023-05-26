import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-[40%] lg:w-[25%] w-[70%] mx-auto text-center my-8'>
            <p className='text-[#D99904] mb-2'>---{subHeading}---</p>
            {/* <hr className='w-[25%] border border-gray-400 mx-auto'/> */}
            <h3 className='text-4xl uppercase border-y-4 py-4'>{heading}</h3>
            {/* <hr className='w-[25%] border border-gray-400 mx-auto'/> */}
        </div>
    );
};

export default SectionTitle;