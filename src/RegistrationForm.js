import React, { useState } from "react";
import './RegistrationForm.css';
import { myAxios } from "./Service/helper";

function RegistrationForm(){
   const[formdata,setFormData] =useState({
        name:'',
        email:'',
        password:''
    })

    const handleChange=(e) =>{
        const {name,value}=e.target;
        setFormData({
            ...formdata,[name]:value
        })
    }

    const[errors,setErrors]=useState({

    });

     const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const response = await myAxios.post('register', formdata);
            if (response.status === 200) {
              console.log('Registration successful');
            }
          } catch (error) {
            console.error('Registration failed', error);
          }

        const validationErrors={};

        if(!formdata.username.trim())
        {
            validationErrors.username="username is required";
        }

        if(!formdata.email.trim())
        {
            validationErrors.email="email is required"
        }else if(!/\S+@\S+.\S+/.test(formdata.email)){
            validationErrors.email="email is not valid"
        }

        if(!formdata.password.trim())
        {
            validationErrors.password="password is required";
        }
        else if(formdata.password.length<6){
            validationErrors.password="length of password at least 6 character"
        }

        setErrors(validationErrors);
        
        if(Object.keys(validationErrors).length === 0)
        {
            window.alert("Form Submit succesfully")
        }
    }

    return(
    <>
            <h1>Registration Form</h1>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-input">
                <label>UserName:</label>
                <input type="text" name="name" autoComplete="off" onChange={handleChange} placeholder="username">
                </input>
                {errors.username &&<span>{errors.username}</span>}
            </div>
            <div className="form-input">
                <label>Email:</label>
                <input type="email" name="email" onChange={handleChange}  placeholder="Email"></input>
                {errors.email &&<span>{errors.email}</span>}
            </div>
            <div className="form-input">
                <label>Password:</label>
                <input type="password" name="password"  onChange={handleChange}  placeholder="Enter Password"></input>
                {errors.password &&<span>{errors.password}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    </>
    )
}

export default RegistrationForm