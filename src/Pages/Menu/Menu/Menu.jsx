import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from "../../../assets/menu/banner3.jpg"
import saladImg from "../../../assets/menu/pizza-bg.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item=>item.category ==="dessert") 
    const salad  = menu.filter(item=>item.category ==="salad") 
    const soup  = menu.filter(item=>item.category ==="soup") 
    const pizza  = menu.filter(item=>item.category ==="pizza") 
    const offered  = menu.filter(item=>item.category ==="offered") 
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} 
            title={"Our Menu"}
            ></Cover>
            {/* main cover */}
            <SectionTitle
            subHeading={"Don't Miss"}
            heading={"Todays offer"}
            ></SectionTitle>
            {/* Offered menu items  */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={desserts} coverImg={dessertImg} title="dessert"></MenuCategory>
            <MenuCategory items={pizza} coverImg={pizzaImg} title="pizza"></MenuCategory>        
            <MenuCategory items={salad} coverImg={saladImg} title="salad"></MenuCategory>        
            <MenuCategory items={soup} coverImg={soupImg} title="soup"></MenuCategory>        
        </div>
    );
};

export default Menu;