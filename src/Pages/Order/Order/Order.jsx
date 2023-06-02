import React, { useState } from 'react';
import orderCoverImg from "../../../assets/shop/banner2.jpg"
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../Hooks/useMenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabindex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === "dessert")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")
    const drinks = menu.filter(item => item.category === "drinks")
    // const [toShow, setToShow] = useState(pizza);


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title={"Order Food"}></Cover>

            <Tabs defaultIndex={tabindex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks} />
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default Order;