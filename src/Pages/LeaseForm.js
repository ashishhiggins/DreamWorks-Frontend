import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../Styles/Staff.css";
import videobg from "../assets/formbg.mp4";

function LeaseForm() {
  const [formData, setFormData] = useState({
    Cno: '',
    name: '',
    sign: '',
    pnumber: '',
    paddress: '',
    start: '',
    finish: '',
    duration: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
    <video src={videobg} autoPlay muted loop id='video'/>
<Navbar />


<form className='container mx-auto py-10' onSubmit={handleSubmit}>
  <div className='text-center'>
    <h1 className='text-4xl font-bold mb-5 text-white'>Lease Form</h1>
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-full rounded-md' type='text' placeholder='Enter Client Number' name='Cno' value={formData.Cno} onChange={handleChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-full rounded-md' type='text' placeholder='Enter Full Name' name='name' value={formData.name} onChange={handleChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-full rounded-md' type='text' placeholder='Client Signature' name='sign' value={formData.sign} onChange={handleChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-full rounded-md' type='text' placeholder='Property Number' name='pnumber' value={formData.pnumber} onChange={handleChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-full rounded-md' type='text' placeholder='Property Address' name='paddress' value={formData.paddress} onChange={handleChange} />
  </div>
  <div className='mb-4 flex justify-between'>
    <div className='flex flex-col'>
      <h3 className='mb-2'>Rent Start</h3>
      <input className='border-2 border-gray-300 p-2 rounded-md' type='date' placeholder='Rent Start' name='start' value={formData.start} onChange={handleChange} />
    </div>
    <div className='flex flex-col'>
      <h3 className='mb-2'>Rent Finish</h3>
      <input className='border-2 border-gray-300 p-2 rounded-md' type='date' placeholder='Rent Finish' name='finish' value={formData.finish} onChange={handleChange} />
    </div>
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-full rounded-md' type='text' placeholder='Duration' name='duration' value={formData.duration} onChange={handleChange} />
  </div>
  <div className='text-center'>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>
  </div>
</form>

    <Footer/>
</div>
  );
}

export default LeaseForm;
