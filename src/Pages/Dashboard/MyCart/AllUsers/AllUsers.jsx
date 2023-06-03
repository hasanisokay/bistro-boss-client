import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get(`/users`)
        return res.data
    })
    const handleDelete = (user) => {

    }
    const handleMakeAdmin = (user) => {
        // console.log(user);
        const id = user._id;
        fetch(`https://bistro-boss-server-neon.vercel.app/users/admin/${id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
    }
    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <h3 className='text- my-6 font-semibold'>{users.length}</h3>

            <div class="overflow-x-auto">
                <table class="table table-zebra">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td> {user?.role === "admin" ? "admin" : <button className='bg-orange-400 p-4 rounded-lg cursor-pointer'><FaUserShield onClick={() => handleMakeAdmin(user)} /></button>} </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-white "><FaTrashAlt /> </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;