import React, { useState, useEffect } from 'react';
import { fetchProductsById } from '../../Services/ProductManager';
import SideNavBar from '../../Components/BO/SideNavBar/SideNavBar';
import { useParams } from 'react-router-dom';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    color: '',
    size: '',
    file: [],
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'file') {
      // Pour le champ de fichier, stockez des informations utiles, comme le nom du fichier
      setFormData((prevFormData) => ({
        ...prevFormData,
        file: files[0],
      }));
    } else {
      // Pour les autres champs, mettez à jour directement la valeur
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductsById(id).then((product) => {
        setFormData({
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.category,
          brand: product.brand,
          color: product.color,
          size: product.size,
          file: product.file
        });
      })
    }
  },[])

  const submitForm = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    console.log(formData, formDataToSend);

    // Ensuite, utilisez fetch pour envoyer les données au serveur
    if (id === undefined) {
    fetch('http://localhost:3000/products', {
      method: 'POST',
      body: formDataToSend,
    })
    .then(response => response.json())
    .then(data => console.log("DATA:" , data))
    .catch(error => console.error('Erreur lors de l\'envoi des données :', error, formDataToSend));
    } else {
      fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        body: formDataToSend,
      })
      .then(response => response.json())
      .then(data => console.log("DATA:" , data))
      .catch(error => console.error('Erreur lors de l\'envoi des données :', error, formDataToSend));
    }
  }


  return (
    <div>
    <SideNavBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
    <div className="height-100 bg-light" onClick={() => setIsSidebarOpen(false)} style={{marginLeft: '100px'}}>
      <h4>{
          id === undefined ? 'Ajouter un produit' : 'Modifier un produit'
        }</h4>
      <div className='container'>
      <form
    style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px', // Vous pouvez ajouter d'autres styles au besoin
        margin: 'auto',
      }} 
      encType="multipart/form-data" 
      onSubmit={submitForm}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />

        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />

        <label htmlFor="size">Size:</label>
        <input
          type="number"
          id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
        />

        <label htmlFor="file">Image:</label>
        <input
          type="file"
          id="file"
          name="file"
          accept="image/*"
          onChange={handleChange}
          required
        />

      <button type="submit" className="btn btn-primary btn-block btn-large" id="submitPl">Submit</button>

    </form>
    </div>
    </div>
  </div>
  );
};

export default ProductForm;
