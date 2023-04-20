import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PropertyForm() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
<Navbar />


<form className='container mx-auto py-10' onSubmit={handleSubmit}>
  <div className='text-center'>
    <h1 className='text-4xl font-bold mb-5 text-white'>Property Registration</h1>
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-full rounded-md' type='text' placeholder='Enter Property Number' name='property' onChange={handleInputChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/2 rounded-md mr-2' type='text' placeholder='Type' name='type' onChange={handleInputChange} />
    <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md mr-2' type='text' placeholder='Rooms' name='rooms' onChange={handleInputChange} />
  </div>

  <div className='mb-4'>
<input className='border-2 border-gray-300 p-2 w-1/4 rounded-md' type='text' placeholder='Rent' name='rent' onChange={handleInputChange} />
</div>

  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-full rounded-md' type='text' placeholder='Enter Property Address' name='address' onChange={handleInputChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/2 rounded-md' type='text' placeholder='Managed by' name='staff' onChange={handleInputChange} />
    <input className='border-2 border-gray-300 p-2 w-1/4 rounded-md ' type='text' placeholder='Owner Number' name='Ono' onChange={handleInputChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-3/4 rounded-md' type='text' placeholder='Business Name' name='bname' onChange={handleInputChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-full rounded-md' type='text' placeholder='Address' name='ownerAddress' onChange={handleInputChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-full rounded-md' type='text' placeholder='Telephone Number' name='number' onChange={handleInputChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/2 rounded-md mr-2' type='text' placeholder='Type of business' name='business' onChange={handleInputChange} />
  </div>

<div className='mb-4'>
<input className='border-2 border-gray-300 p-2 w-1/2 rounded-md' type='text' placeholder='Contact Name' name='cname' onChange={handleInputChange} />
</div>

  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-full rounded-md' type='text' placeholder='Registered at branch' name='branch' onChange={handleInputChange} />
  </div>
  <div className='text-center'>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>

      </div>
    </form>
    <Footer/>
</div>
  )
}

export default PropertyForm;
