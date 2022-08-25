
import React from 'react'
  
let styles ={
  fontWeight:"bold",
  color:"#dc3545"
 
  };
const FormInput = ({inputProperties}) => {

const {placeHolder,
       fieldId, 
       fieldType, 
       name,
       fieldValue,
       handleBlur,
       handleChange,
       error
          }=inputProperties;

  return (
    <div className="row">
      <div className="input-field col s12">
      <input  
      placeholder={placeHolder || ""}
      id={fieldId} 
      type={fieldType}
      name={name}
      value={fieldValue || ""} 
      onBlur={handleBlur} 
      onChange={handleChange} 
      required
      />
      <label htmlFor={name}></label>
      {error && <p style={styles}>{error}</p>}
    </div>
  </div>
  )
}

export default FormInput