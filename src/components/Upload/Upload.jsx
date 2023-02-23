import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../NavBar/Navbar';
import "./Upload.css"

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    /* ahora solo subiría la portada, falta gestionar las otras dos fotos */

    if (!selectedFile) {
      console.log('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'evsd0zlj');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dnsxhjncj/image/upload',
        formData
      );
      setImageUrl(response.data.secure_url);
    } catch (error) {
      console.log(error);
    }
  };
/* response.data.secure_url es el link a guardar en la bbdd */
  return (
    <>
     <Navbar />
    <div className='content' >
        <h4>Rellene los siguientes campos</h4>
      <form onSubmit={handleFormSubmit} className="formulario">
        <input type="text" placeholder='Titulo'/><br/>
        <input type="text" placeholder='Descripción'/><br/>
        <input type="text" placeholder='Autor/es'/><br/>
        <input type="text" placeholder='ISBN'/><br/>
        <input type="number" placeholder='Número de páginas'/><br/>
        <input type="text" placeholder='Lengua publicación'/><br/>
        <input type="text" placeholder='Lengua traducción'/><br/>
        <input type="number" placeholder='Edad recomendada'/><br/>
        <input type="text" placeholder='Formato'/><br/>
        <input type="text" placeholder='Genero'/><br/>
        <input type="number" placeholder='Número de copias'/><br/>
        <span className='inputOpcion'>Portada</span>
        <input type="file" onChange={handleFileInputChange} /><br/>
        <span className='inputOpcion'>Imagen 2</span>
        <input type="file" onChange={handleFileInputChange} /><br/>
        <span className='inputOpcion'>Imagen 3</span>
        <input type="file" onChange={handleFileInputChange} /><br/>
        
        <button type="submit">Upload</button><br/>
      </form>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="uploaded" />
        </div>
      )}
    </div></>
  );
};

export default UploadForm;
