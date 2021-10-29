import React from 'react';
import { useForm } from "react-hook-form";
import './AddTrek.css';

const AddTrek = () => {
    // use hook form
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://fathomless-cove-88059.herokuapp.com/treks',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert('Seccessfully added a new Event')
                reset();
            }
        })
    };

    return (
        <div className="addEvent">
            <h3>Add a event </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" />
                <input type="number" {...register("price")} placeholder="Price" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("imageUrl")} placeholder="Image URL" />
                <input className="bg-secondary" type="submit" />
            </form>
        </div>
    );
};

export default AddTrek;