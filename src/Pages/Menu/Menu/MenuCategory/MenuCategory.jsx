import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className='pt-8'>
          {title && <Cover img={coverImg} 
            title={title}
            ></Cover>}
              <div className='grid md:grid-cols-2 gap-10 my-16 '>
                {
                    items.map(item=> <MenuItem item={item} key={item._id}></MenuItem> )
                }
            </div>
            <Link to={`/order/${title}`} ><button className='btn btn-outline border-0 border-b-4'>Order Now
                    </button></Link>
        </div>
    );
};

export default MenuCategory;