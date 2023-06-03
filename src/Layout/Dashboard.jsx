import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaBook, FaCalendarAlt, FaHome, FaJediOrder, FaShoppingCart, FaUserAlt, FaUsers, FaUtensils, FaWallet } from "react-icons/fa"
import { Helmet } from 'react-helmet-async';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';
const Dashboard = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin() 

    // const isAdmin = true;

    return (
        <>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/home"> <FaHome /> Admin Home </NavLink></li>
                                <li><NavLink to="/dashboard/addItem"> <FaUtensils/> Add an Item </NavLink></li>
                                <li><NavLink to="/dashboard/items"><FaWallet /> Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/bookings"><FaBook/> Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers/> All Users</NavLink></li>
                                <div className='divider'></div>
                                <li><NavLink to={"/"}><FaHome /> Home </NavLink></li>
                                <li><NavLink to={"/menu"}> <FaBars /> Our Menu</NavLink></li>
                                <li><NavLink to={"order/salad"}> <FaJediOrder /> Order Food</NavLink> </li>
                            </> : <>
                                <li><NavLink to="/dashboard/home"> <FaHome /> User Home </NavLink></li>
                                <li><NavLink to="/dashboard/mycart"> <FaShoppingCart /> My Cart
                                    <span className="bg-pink-600 px-1 text-xs rounded-lg">{cart?.length || 0}</span>
                                </NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaWallet /> Payment History </NavLink></li>
                                <li><NavLink to="/dashboard/reservations"> <FaCalendarAlt /> Reservations </NavLink></li>
                                <div className='divider'></div>
                                <li><NavLink to={"/"}><FaHome /> Home </NavLink></li>
                                <li><NavLink to={"/menu"}> <FaBars /> Our Menu</NavLink></li>
                                <li><NavLink to={"order/salad"}> <FaJediOrder /> Order Food</NavLink> </li>
                            </>
                        }



                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;