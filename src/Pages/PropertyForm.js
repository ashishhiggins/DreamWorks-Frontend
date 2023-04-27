import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Styles/Staff.css";
import videobg from "../assets/formbg.mp4";

function PropertyForm() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:8000/apis/property/register/", formData)
      .then((response) => {
        console.log(response);
        toast.success("Data sent successfully");
        setFormData({});
      })
      .catch((error) => {
        console.error(error);
        toast.error("Some Error Occured");
      });
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
    <video src={videobg} autoPlay muted loop id='video'/>
      <Navbar />

      <form className="container mx-auto py-10 px-3" onSubmit={handleSubmit}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-5 text-white">
            Property Registration
          </h1>
        </div>
        <div className="mb-4">
          <input
            className="border-2 border-gray-300 p-2 w-1/2 rounded-md"
            type="text"
            placeholder="Enter Property Number"
            name="pnumber"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="border-2 border-gray-300 p-2 w-1/4 rounded-md mr-2"
            type="text"
            placeholder="Property Type"
            name="ptype"
            onChange={handleInputChange}
          />
          <input
            className="border-2 border-gray-300 p-2 w-1/4 rounded-md mr-2"
            type="text"
            placeholder="Number of Rooms"
            name="rooms"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <input
            className="border-2 border-gray-300 p-2 w-1/4 rounded-md"
            type="text"
            placeholder="Rent"
            name="rent"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <input
            className="border-2 border-gray-300 p-2 w-1/2 rounded-md"
            type="text"
            placeholder="Enter Property Address"
            name="paddress"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="border-2 border-gray-300 p-2 w-1/4 rounded-md"
            type="text"
            placeholder="Enter City"
            name="city"
            onChange={handleInputChange}
          />
          <input
            className="border-2 border-gray-300 p-2 w-1/4 rounded-md"
            type="text"
            placeholder="Enter Pin"
            name="pin"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <input
            className="border-2 border-gray-300 p-2 w-1/4 rounded-md "
            type="text"
            placeholder="Owner Number"
            name="ownno"
            onChange={handleInputChange}
          />
          <input
            className="border-2 border-gray-300 p-2 w-1/2 rounded-md"
            type="text"
            placeholder="Managed by Staff No."
            name="staffno"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="border-2 border-gray-300 p-2 w-1/3 rounded-md"
            type="text"
            placeholder="Branch Number"
            name="brno"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="border-2 border-gray-300 p-2 w-1/2 rounded-md"
            type="text"
            placeholder="Is Available"
            name="isavailable"
            onChange={handleInputChange}
          />
        </div>

        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default PropertyForm;
