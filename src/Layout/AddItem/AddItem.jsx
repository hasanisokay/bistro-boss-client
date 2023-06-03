import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
const imageHostingToken = import.meta.env.VITE_Image_Upload_token;
console.log(imageHostingToken);
const AddItem = () => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostingToken}`
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = new formData()
        formData.append("image", data.image[0])
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
        .then(res=>res.json())
        .then(imageResponse=>console.log(imageResponse))
    };
    console.log(errors);
    return (
        <div className='w-full px-10'>
            <SectionTitle subHeading={"Whats new"} heading="Add an item" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe name </span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex gap-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Item image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input type="submit" value="Add Item" className='btn btn-sm mt-4' />
            </form>

        </div>
    );
};

export default AddItem;