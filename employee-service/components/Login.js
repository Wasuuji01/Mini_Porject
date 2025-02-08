import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import '../custom Css/SignIn.css';

const Login = () => {

    const [userId, setUserIdValue] = useState('');
    const [password, setPasswordValue] = useState('');

    const setUserId = (event) => {
        setUserIdValue(event.target.value); 
    }

    const setPassword = (event) => {  
        setPasswordValue(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // create an object with userid and password for passing the api...
        const data = {
            userId: userId,
            password: password
        }
        if(data.userId === '' || data.password === '') {
            alert('Please enter userId and password');
        } else {
            try {
                const Response = await axios.post('http://localhost:8080/userlogin', data);
                    if(Response.data === true) {
                        console.log('Login Successful', Response.data);
                        setUserIdValue('');
                        setPasswordValue('');
                        window.location.href = '/homepage';
                    }
                    else {
                        alert('Invalid Credentials');   
                    }
                } 
                catch (error) {
                    console.log(error);
                } 
            }
             
        } 

   const redirect = () => {
    window.location.href = '/register';
   }

  return (
    <div className='Login'>
        <form className='login-form'
        onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <label for="email">User ID:</label>
            <input type="email" placeholder="Enter email"
            value={userId}
            onChange={setUserId}/> 
            <br/>
            <label for="password">Password:</label>
            <input type="password" placeholder="Enter password"
            value={password}
            onChange={setPassword}/>
            <br/>
            <br/>
            <button className='Lbutton'
            type="submit">Login</button> 
            <br/>
            <a >Don't have an account?</a>
            <b onClick={redirect}>  Register here..</b>
        </form>
    </div>
  )
}

export default Login