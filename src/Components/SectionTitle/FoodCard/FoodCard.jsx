import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';

const FoodCard = ({item}) => {
    const [cart , refetch] = useCart()
    // console.log(refetch);
    const {user} = useContext(AuthContext)
    const {name, image, price, recipe, _id} = item;
    const location = useLocation()
    const navigate = useNavigate()
    const handleAddToCart =(item)=>{
        // console.log(item);
        if(user && user.email){
            const cartItem = {menuItemId:_id, name, image, price, email: user.email }
            fetch(`https://bistro-boss-server-neon.vercel.app/carts`,{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(cartItem)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    refetch(); 
                    // refetch cart to update the number of cart
                    Swal.fire({
                        title: 'Item Added to cart successfully',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'User needed',
                text: "You need to login to add to cart",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login",{state:location})
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image}/></figure>
            <p className='bg-slate-900 text-white absolute right-0 mt-4 mr-4 p-2 rounded'>${price}</p>
            <div className="card-body flex items-center flex-col">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                
                <div className="card-actions justify-end">
                <button onClick={()=>handleAddToCart(item)} className='btn btn-outline border-0 bg-amber-100 border-amber-500 border-b-4'>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;