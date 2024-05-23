
import React, { useState } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFemale, faMale, faChild } from "@fortawesome/free-solid-svg-icons";
import upload_area from "../assets/upload_area.svg";
import { json } from "react-router-dom";

const categoryOptions = [
  { value: "women", label: "Women", icon: <FontAwesomeIcon icon={faFemale} /> },
  { value: "men", label: "Men", icon: <FontAwesomeIcon icon={faMale} /> },
  { value: "kid", label: "Kids", icon: <FontAwesomeIcon icon={faChild} /> },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "0.375rem",
    border: "1px solid #e2e8f0",
    boxShadow: "none",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#4a5568",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#4a5568",
  }),
};

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    old_price: "",
    new_price: "",
    category: "women",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (event) => {
    setProductDetails({
      ...productDetails,
      [event.target.name]: event.target.value,
    });
  };

const handleAddProduct = async () => {
  // Handle adding product with selected file
  console.log(productDetails);
  let imageUrl;
  let product = productDetails;

  let formData = new FormData();
  formData.append("product", image);
  // Use try-catch for better error handling with async-await
  try {
      const response = await fetch("http://localhost:4000/upload", {
          method: "POST",
          headers: {
              Accept: "application/json", // 'application/json' should be lowercase
          },
          body: formData,
      });
      // Check if the response is successful
      if (!response.ok) {
          throw new Error("Upload failed"); // Throw an error if response is not OK
      }
      const data = await response.json(); // Parse the response JSON
      // Assign imageUrl correctly (use = instead of ===)
      imageUrl = data;
      // Check if imageUrl is defined and has a property named 'success'
      if (imageUrl && imageUrl.success) {
          product.image = imageUrl.image_url;
          
          const addProductResponse = await fetch('http://localhost:4000/addproduct', {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(product),
          });

          if (!addProductResponse.ok) {
              throw new Error('Failed to add product');
          }

          const addProductData = await addProductResponse.json();
          if (addProductData.success) {
              alert("Product added successfully");
          } else {
              alert("Failed to add product");
          }
      }
  } catch (error) {
      console.error("Error uploading product:", error);
      // Handle the error, show a message to the user, etc.
  }
};

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <p className="block text-gray-700 text-sm font-bold mb-2">
          Product title
        </p>

        <input
          value={productDetails.name}
          onChange={changeHandler}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="mb-4">
        <div className="flex justify-between">
          <div className="w-1/2 mr-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">Price</p>
            <input
              value={productDetails.old_price}
              onChange={changeHandler}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="old_price"
              type="text"
              placeholder="Type here"
            />
          </div>
          <div className="w-1/2 ml-2">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Offer Price
            </p>
            <input
              value={productDetails.new_price}
              onChange={changeHandler}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="new_price"
              type="text"
              placeholder="Type here"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p className="block text-gray-700 text-sm font-bold mb-2">
          Product Category
        </p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className=" p-1 border-spacing-1 bg-gray-100"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kids</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="Upload Area"
            className="cursor-pointer"
          />
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          className="hidden"
          onChange={imageHandler}
          hidden
        />
      </div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => handleAddProduct()}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
