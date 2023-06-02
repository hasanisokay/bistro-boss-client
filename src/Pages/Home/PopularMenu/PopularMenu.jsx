import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
   const [menu] = useMenu();
   const popular = menu.filter(item=>item.category ==="popular") 
    
    return (
        <section className='mb-12'>
            <SectionTitle heading={"FROM OUR MENU"} 
            subHeading={"Popular Items"} />
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item=> <MenuItem item={item} key={item._id}></MenuItem> )
                }
            </div>
            <div className='text-center my-4'><button className='btn btn-outline border-0 border-b-4'>View Full Menu
                    </button></div>
        </section>
    );
};

export default PopularMenu;