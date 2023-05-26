import React from 'react';

const MenuItem = ({item}) => {
    const {name, recipe, price, image} = item 
    return (
        <div className='flex space-x-2'>
            <img src={image} className='w-[100px]' style={{borderRadius: "0 200px 200px 200px"}} />
            <div>
                <h3 className='uppercase'>{name}-------------</h3>
                <p>{recipe}</p>
            </div>
            <div className='text-yellow-500'>${price}</div>
        </div>
    );
};

export default MenuItem;