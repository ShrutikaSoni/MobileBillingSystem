import React, {useEffect, useState} from 'react';
import './ProductPage.css'
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';


const ProductPage= () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {

    fetch('http://localhost:8082/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error('error while fetching data' + error));

   }, []);


  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name: formData.name,
      price: formData.price,
      description: formData.description,
    };
    setProducts([...products, newProduct]);
    setFormData({ name: '', price: '', description: '', image: null });
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

 

  

  return (
    <>
    <Navbar/>
  <Sidebar/>

    <div className="ProductInfo">
    <div className="scrollable-container">
    <div className="main-content">
      <div className="product-form">
        <form id="productForm" onSubmit={handleFormSubmit}>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <br /><br />
          <label htmlFor="productPrice">Price:</label>
          <input
            type="text"
            id="productPrice"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
          <br /><br />
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleInputChange}
            required
          />
          <br /><br />
          <label htmlFor="productDescription">Description:</label>
          <textarea
            id="productDescription"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <br />
          <button type="submit">Add Product</button>
        </form>
      </div>

      <div className="product-container">
        <h3>Existing Products</h3>
        <table id="productTable">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default ProductPage;
