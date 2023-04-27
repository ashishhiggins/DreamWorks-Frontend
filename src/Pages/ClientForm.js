import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../Styles/Staff.css";
import videobg from "../assets/formbg.mp4";

function ClientForm() {
  const [clientData, setClientData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(clientData);
    axios
      .post("http://localhost:8000/apis/client/register/", clientData)
      .then((response) => {
        console.log(response);
        toast.success("Data sent successfully");
        setClientData({});
      })
      .catch((error) => {
        console.error(error);
        toast.error("Some Error Occured");
      });
  };

  const handleChange = (event) => {
    setClientData({ ...clientData, [event.target.name]: event.target.value });
  };

  return (
<div>
<video src={videobg} autoPlay muted loop id='video'/>
<Navbar />


    <form className='container' onSubmit={handleSubmit}>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-5 text-white'>Client Registration</h1>
      </div>
      <div className='mb-4'>
        <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md m-2' type='text3' placeholder='Client Number' name='cnumber' onChange={handleChange} />
        <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md m-2' type='text' placeholder='Enter Full Name' name='cname' onChange={handleChange} />
      </div>
      <div className='mb-4'>
        <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md m-2' type='text2' placeholder='Branch Number' name='brno' onChange={handleChange} />
        <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md m-2' type='text' placeholder='Branch Address' name='caddress' onChange={handleChange} />
      </div>
      <div className='mb-4'>
        <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md m-2' type='text2' placeholder='Registered by' name='manageno' onChange={handleChange} />
        <label className='text-white text-2xl'>Date Registered</label>
      <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md m-2' type='date' placeholder='Date Registered' name='rdate' onChange={handleChange} />
      </div>
      <div className='mb-4'>
        <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md m-2' type='text2' placeholder='Comments' name='comments' onChange={handleChange} />
      </div>
      <div className='text-center'>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>
  </div>
    </form>
    <Footer/>
</div>
  );
}

export default ClientForm;
