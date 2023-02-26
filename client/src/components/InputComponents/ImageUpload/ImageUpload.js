import React from 'react';


const ImageUpload = (props) => {
  const {
    name,
    formikProps,
    classes: { uploadContainer, inputContainer, imgStyle, imgErr },
  } = props;

  const onChange = (e) => {
    const node = window.document.getElementById('imagePreview');
    const file = e.target.files[0];
    const imageType =/image.png|gif|jpeg/;
    if (file.type.match(imageType)) {
      formikProps.setFieldValue(name, e.target.files[0]);
    } 
      const reader = new FileReader();
      reader.onload = () => {
        node.src = reader.result;
      };
      reader.readAsDataURL(file);
    
  };
  return (
    <div className={uploadContainer}>
      <div className={inputContainer}>
        <span>Support only images (*.png, *.gif, *.jpeg)</span>
        <input
          type="file"
          id="fileInput"
          accept=".jpg, .png, .jpeg"
          name={name}
          onChange={onChange}
        />
        <label htmlFor="fileInput">Chose file</label>
      </div>
      <img id="imagePreview" className={formikProps.values[name] ? imgStyle : imgErr}alt="user" />
    </div>
  );
};

export default ImageUpload;
