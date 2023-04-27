import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../Styles/Staff.css";
import videobg from "../assets/formbg.mp4";

function BranchForm() {
  const [branchData, setBranchData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(branchData);
    axios
      .post("http://localhost:8000/apis/branch/", branchData)
      .then((response) => {
        console.log(response);
        toast.success("Data sent successfully");
        setBranchData({});
      })
      .catch((error) => {
        console.error(error);
        toast.error("Some Error Occured");
      });
  };

  const handleChange = (event) => {
    setBranchData({ ...branchData, [event.target.name]: event.target.value });
  };

  return (
    <div>
    <video src={videobg} autoPlay muted loop id='video'/>
    <Navbar />
    <form className='container mx-auto py-10' onSubmit={handleSubmit}>
  <div className='text-center'>
    <h1 className='text-4xl font-bold mb-5 text-white'>Branch Registration</h1>
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md mx-2' type='text3' placeholder='Branch Number' name='bnumber' onChange={handleChange} />
    <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md mx-2' type='text' placeholder='Branch Address' name='baddress' onChange={handleChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md mx-2 ' type='text' placeholder='City' name='city' onChange={handleChange} />
    <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md mx-2' type='text2' placeholder='Pincode' name='pincode' onChange={handleChange} />
  </div>

  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md mx-2' type='text2' placeholder='Mobile number' name='mobileno1' onChange={handleChange} />
    <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md mx-2' type='text2' placeholder='Alternate Mobile number' name='mobileno2' onChange={handleChange} />
    <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md mx-2' type='text2' placeholder='Alternate Mobile number' name='mobileno3' onChange={handleChange} />
  </div>
  <div className='text-center'>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>
  </div>
</form>

    <Footer />
    </div>
  );
}

export default BranchForm;
