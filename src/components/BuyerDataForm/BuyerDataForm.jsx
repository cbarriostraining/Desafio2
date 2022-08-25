import React, {useEffect} from 'react';
import { CONSTANTS } from "../../common/constants";
import { validationsForm } from '../../helpers/validations';
import { buyerForm } from './BuyerForm';
import FormInput from './FormInput';
import { useCartContext} from '../../context/CartContext';
const  {containerStyle,INITIALIZE_STRING ,CONCLUDE_PURCHASE} = CONSTANTS;


const initialForm={
  fullName:INITIALIZE_STRING,
  phone:INITIALIZE_STRING,
  email:INITIALIZE_STRING,
  repeteadEmail:INITIALIZE_STRING
};

const BuyButton =()=>{
  const {saveOrder}=useCartContext();

 
  return(
  <a type="submit" 
  className="waves-effect waves-light btn pink" 
  
   onClick={saveOrder}>{CONCLUDE_PURCHASE}</a>
  )
}

const BuyerDataForm = () => {
  const {setConcludePurchase ,handleSubmit,buyerData,
    setBuyerData}=useCartContext();

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
  }=buyerForm(initialForm,validationsForm);

useEffect(() => {
  if(Object.values(errors).length){
    setConcludePurchase(false)
  }else{
    setBuyerData(form);
    setConcludePurchase(true)

  }
  
}, [errors])



  return (
    <div style={containerStyle} >


  <h6> Concluir tu compra </h6>
  <div className="row">
    <form   className="col s12">
        <FormInput inputProperties={
          {
            placeHolder:"Escriba su nombre completo.",
            fieldId:"complete_name" , 
            fieldType:"text" , 
            name:"fullName",
            fieldValue:form.fullName,
            handleBlur:handleBlur ,
            handleChange:handleChange ,
            error:errors.fullName
          }}/>

        <FormInput inputProperties={
          {
            placeHolder:"Escriba su numero teléfono.",
            fieldId:"phone" , 
            fieldType:"text" , 
            name:"phone",
            fieldValue:form.phone,
            handleBlur:handleBlur ,
            handleChange:handleChange ,
            error:errors.phone
          }}/>

        <FormInput inputProperties={
          {
            placeHolder:"Escriba su email.",
            fieldId:"email" , 
            fieldType:"email" , 
            name:"email",
            fieldValue:form.email,
            handleBlur:handleBlur ,
            handleChange:handleChange ,
            error:errors.email
          }}/>

        <FormInput inputProperties={
          {
            placeHolder:"Confirme su email.",
            fieldId:"repeteadEmail" , 
            fieldType:"email" , 
            name:"repeteadEmail",
            fieldValue:form.repeteadEmail,
            handleBlur:handleBlur ,
            handleChange:handleChange ,
            error:errors.repeteadEmail
          }}/>

      
    <div className="row">
        <div className="input-field col s12">
          {!Object.values(errors).length &&<BuyButton/>}
        </div>
      </div>
      


    </form>

  </div>
  </div>
  )
}

export default BuyerDataForm