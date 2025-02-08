import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import '../custom Css/SignUp.css';
import '../components/Login';


const Register = () => {

const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
});

    const handleChange = (event) => {
        setRegister({
            ...register,
            [event.target.id]: event.target.value

        })
    }

    const handleSubmit = async (event) => {
        console.log(register);
        event.preventDefault();

        if(register.name === '' || register.email === '' || register.password === '') {
            alert('Please enter all fields');
            
        }
        else {
            try {
            const response = await axios.post('http://localhost:8080/createuser', register);
            alert('Registration Successful', response.register);
            window.location.href = '/login';
        } catch (error) {
            console.log(error);
        }
    }   
}

    return (

    <div className="Register">
        <form className='register-form'
         onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name"
            value={register.name}
            onChange={handleChange}
            />
            <br />
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email"
            value={register.email}
            onChange={handleChange}
            /> 
            <br /> 
            <label for="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password"
            value={register.password}
            onChange={handleChange}
            />
            <br />
            <button className='Rbutton'
            type="submit">Register</button>

        </form>
    </div>
  )
}

export default Register