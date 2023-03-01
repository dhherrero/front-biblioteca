import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../NavBar/Navbar';
import { newLibro } from '../../service/getBooks';
import "./Upload.css"



const UploadForm = () => {
  const [portada, setPortada] = useState(null);
  const [imagen2, setImagen2] = useState(null);
  const [imagen3, setImagen3] = useState(null);
  
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrl2, setImageUrl2] = useState(null);
  const [imageUrl3, setImageUrl3] = useState(null);

  const [body, setBody] = useState({
        titulo:null,
        autores:null,
        isbn:null,
        edad:null,
        editorial:null,
        fechaEdicion:null,
        lenguaPublicacion:null,
        lenguaTraduccion:null,
        numeroPaginas:null,
        descripcion:null,
        edicion:null,
        formato:null,
        genero:null,
        copias:null,
        portada: {imageUrl},
        imagen2: {imageUrl2},
        imagen3: {imageUrl3}
  });

 
 
  const handleFileInputChange = (event) => {
    setPortada(event.target.files[0]);
  };

  const handleFileInputChange2 = (event) => {
    setImagen2(event.target.files[0]);
  };

  const handleFileInputChange3 = (event) => {
    setImagen3(event.target.files[0]);
  };

  const handleLibroChange = event => {
    const { name, value } = event.target;
    setBody({ ...body, [name]: value });
  };

  

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    /* ahora solo subiría la portada, falta gestionar las otras dos fotos */

    /*if (!selectedFile) {
      console.log('Please select a file');
      return;
    }*/
    
    if(portada){
      const formData = new FormData();
      formData.append('file', portada);
      formData.append('upload_preset', 'evsd0zlj');
      
      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dnsxhjncj/image/upload',
          formData
        );
        setImageUrl(response.data.secure_url);
        setPortada(null);
      } catch (error) {
        console.log(error);
      }
    }

    if(imagen2){
      const formData2 = new FormData();
      formData2.append('file', imagen2);
      formData2.append('upload_preset', 'evsd0zlj');
      
      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dnsxhjncj/image/upload',
          formData2
        );
        setImageUrl2(response.data.secure_url);
        setImagen2(null);
      } catch (error) {
        console.log(error);
      }
    }
    if(imagen3){
      const formData3 = new FormData();
      formData3.append('file', imagen3);
      formData3.append('upload_preset', 'evsd0zlj');
      
      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dnsxhjncj/image/upload',
          formData3
        );
        setImageUrl3(response.data.secure_url);
        setImagen3(null);
      } catch (error) {
        console.log(error);
      }
    }
    if (!portada&& !imagen2 && !imagen3) {
      newLibro(body).then((result)=> console.log("RESULTADO UPLOAD: "+ result))
    }

    

    
  };
/* response.data.secure_url es el link a guardar en la bbdd */
  return (
    <>
     <Navbar />
    <div className='content' >
        <h4>Rellene los siguientes campos</h4>
      <form onSubmit={handleFormSubmit} className="formulario">
        <input type="text" className="inputNew" name='titulo' placeholder='Titulo'/><br/>
        <textarea type="text" id="descripcion" name='descripcion' className="inputNew" placeholder='Descripción'/><br/>
        <input type="text" className="inputNew" name='autores' placeholder='Autor/es, por ejemplo:  Juan Rodriguez, Felipe Pintor'/><br/>
        
        <div className='numeros'>
          <input type="number" onChange={handleLibroChange} className="inputNew" name='numeroPaginas' placeholder='Número de páginas'/>
          <input type="number" className="inputNew" onChange={handleLibroChange} name='copias' placeholder='Número de copias'/>
          <input type="number" className="inputNew" onChange={handleLibroChange}name='edad' placeholder='Edad recomendada'/>
        </div>
        <input type="text" className="inputNew" onChange={handleLibroChange} name='isbn' placeholder='ISBN'/><br/>
        <div className='dobleCampo' >
          <input type="text" className="inputNew" onChange={handleLibroChange} name='lenguaPublicacion' placeholder='Lengua publicación'/>
          <input type="text"className="inputNew" onChange={handleLibroChange} name='lenguaTraduccion' placeholder='Lengua traducción'/>
        </div>
        <div className='dobleCampo' >
          <input type="text" className="inputNew" onChange={handleLibroChange} name='formato' placeholder='Formato'/>
          <input type="text" className="inputNew" onChange={handleLibroChange} name='genero' placeholder='Género'/> <br/>
        </div>
        <span className='inputOpcion'>Portada</span>
        <input type="file" onChange={handleFileInputChange}/><br/>
        <span className='inputOpcion'>Imagen 2</span>
        <input type="file" onChange={handleFileInputChange2} /><br/>
        <span className='inputOpcion'>Imagen 3</span>
        <input type="file" onChange={handleFileInputChange3} /><br/>
        <button type="submit" className='upload'>Upload</button><br/>
  </form>

     
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="uploaded" />
        </div>
      )}
      {imageUrl2 && (
        <div>
          <img src={imageUrl2} alt="uploaded" />
        </div>
      )}
    </div></>
  );
};

export default UploadForm;
