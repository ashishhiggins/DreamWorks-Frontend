import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function OwnerForm() {
  const [ownerData, setOwnerData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ownerData);
    axios
      .post("http://localhost:8000/apis/owner/register/", ownerData)
      .then((response) => {
        console.log(response);
        toast.success("Data sent successfully");
        setOwnerData({});
      })
      .catch((error) => {
        console.error(error);
        toast.error("Some Error Occured");
      });
  };

  const handleChange = (event) => {
    setOwnerData({ ...ownerData, [event.target.name]: event.target.value });
  };

  return (
    <div>
<Navbar />


<form className='container mx-auto py-10' onSubmit={handleSubmit}>
  <div className='text-center'>
    <h1 className='text-4xl font-bold mb-5 text-white'>Owner Registration</h1>
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md m-2' type='text3' placeholder='Owner Number' name='ownno' onChange={handleChange} />
    <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md m-2' type='text' placeholder='Enter Full Name' name='ownname' onChange={handleChange} />
  </div>
  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md m-2' type='text' placeholder='Owner Address' name='ownaddress' onChange={handleChange} />
    <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md m-2' type='text2' placeholder='Owner Business type' name='ownbusinesstype' onChange={handleChange} />
  </div>

  <div className='mb-4'>
    <input className='border-2 border-gray-300 p-2 w-1/3 rounded-md m-2' type='text2' placeholder='Mobile number' name='ownmno' onChange={handleChange} />
  </div>
  <div className='text-center'>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>
  </div>
</form>

    <Footer/>
</div>
  );
}

export default OwnerForm;
