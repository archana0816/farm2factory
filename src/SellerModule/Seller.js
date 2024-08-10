import React, { useState } from 'react';
import './Seller.css';
import { FaTimes } from 'react-icons/fa';
import SellerNavbar from './SellerNavbar';
import BuyerFooter from '../BuyerModule/BuyerFooter';

const Seller = () => {
  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    productWeight: '',
    productImages: [null, null],
    productDescription: ''
  });

  const productNames = ["Coconut Shell", "Banana Stem", "Sugarcase Bagasse", "Rice Straw", "Coconut Husk"];

  const handleChange = (e) => {
    const { name, value, files, dataset } = e.target;
    if (name === 'productImages') {
      const index = dataset.index;
      const newImages = [...formData.productImages];
      newImages[index] = files[0];
      setFormData({ ...formData, productImages: newImages });
    } else {
      const parsedValue = parseFloat(value);
      if ((name === 'productPrice' || name === 'productWeight') && (isNaN(parsedValue) || parsedValue < 0)) {
        setFormData({ ...formData, [name]: '' });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    }
  };

  const addImageField = () => {
    setFormData({
      ...formData,
      productImages: [...formData.productImages, null]
    });
  };

  const removeImageField = (index) => {
    const newImages = [...formData.productImages];
    newImages.splice(index, 1);
    setFormData({ ...formData, productImages: newImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('productName', formData.productName);
        formDataToSend.append('productPrice', formData.productPrice);
        formDataToSend.append('productWeight', formData.productWeight);
        formDataToSend.append('productDescription', formData.productDescription);

        formData.productImages.forEach((image, index) => {
          if (image) {
            formDataToSend.append(`productImages[${index}]`, image);
          }
        });

        const response = await fetch('http://localhost:9000/seller', { // Update the path to match your Spring Boot server
          method: 'POST',
          body: formDataToSend
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Product added:', result);
          alert('Product added successfully!');
        } else {
          console.error('Error adding product:', response.statusText);
          alert('Error adding product. Please try again.');
        }
      } catch (error) {
        console.error('Request failed:', error);
        alert('Request failed. Please try again.');
      }
    } else {
      alert('Please fill out all fields and ensure you have added at least two images.');
    }
  };

  const validateForm = () => {
    const { productName, productPrice, productWeight, productImages, productDescription } = formData;
    const filledImages = productImages.filter(image => image !== null);
    return productName && productPrice && productWeight && productDescription && filledImages.length >= 2;
  };

  return (
    <div>
      <SellerNavbar />
      <div className="product-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="productName">Product Name</label>
            <select
              name="productName"
              id="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a product</option>
              {productNames.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="productPrice">Product Price</label>
            <input
              type="number"
              name="productPrice"
              id="productPrice"
              value={formData.productPrice}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="productWeight">Product Weight</label>
            <input
              type="number"
              name="productWeight"
              id="productWeight"
              value={formData.productWeight}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label>Product Images</label>
          </div>

          {formData.productImages.map((image, index) => (
            <div className="form-field image-field" key={index}>
              <input
                type="file"
                name="productImages"
                id={`productImage${index}`}
                data-index={index}
                onChange={handleChange}
                accept="image/*"
                required={index < 2}
              />
              {formData.productImages.length > 2 && (
                <FaTimes
                  className="remove-image-icon"
                  onClick={() => removeImageField(index)}
                />
              )}
            </div>
          ))}

          <button type="button" onClick={addImageField} className="add-more-button">Add More Images</button>

          <div className="form-field">
            <label htmlFor="productDescription">Product Description</label>
            <textarea
              name="productDescription"
              id="productDescription"
              rows="5"
              value={formData.productDescription}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <BuyerFooter />
    </div>
  );
};

export default Seller;
