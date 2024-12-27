import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const navigate= useNavigate()
  const [login, setlogin] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange =  (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
   
  };
  useEffect(()=>{
    const token =localStorage.getItem(token);
    if(token){
        setlogin(true)
    }
  },[])
 
  const handleSubmit =async (event) => {
    event.preventDefault();
   try {
    const res= await axios.post("http://localhost:3000/api/user/login",{...formData});
    console.log(res)
    if(res.data.success){
      localStorage.setItem("token",res.data.token)
    }
    navigate("/")
    setlogin(true)
   } catch (error) {
    console.log("login error",error)
   }
   
  };

  return (
    <div className="p-6 sm:p-8 max-w-md sm:max-w-lg mx-auto bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-xl mt-20 ">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-6 sm:mb-8">
        Login to Your Account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            placeholder="Enter your password"
          />
        </div>
      {login ===false?  <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 sm:py-3 rounded-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
        >
          Login
        </button>:null}
      </form>
      <p className="text-center text-gray-600 mt-4 sm:mt-6">
        Don't have an account?{' '}
        <Link to="/signup" className="text-blue-500 font-medium hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Login;
