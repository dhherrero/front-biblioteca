import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

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

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleFileInputChange} />
        <button type="submit">Upload</button>
      </form>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="uploaded" />
        </div>
      )}
    </div>
  );
};

export default UploadForm;
