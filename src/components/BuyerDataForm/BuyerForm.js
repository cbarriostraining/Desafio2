import {useState} from "react";

export const buyerForm =(initialForm,validateForm)=>{

const [form, setForm] = useState(initialForm)
const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);
const [response, setResponse] = useState(null);

const handleChange =(e)=>{
const {name,value}=e.target;

setForm({
...form,
[name]:value
});

};

const handleBlur =(e)=>{
    handleChange(e);
    setErrors(validateForm(form));
};



return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur
}


}