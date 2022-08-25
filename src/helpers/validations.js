
import { CONSTANTS } from "../common/constants";
import { ERROR_MESSAGES } from "../helpers/errorMessage";
const  {regexFullName,  regexPhone, regexEmail,regexStringGood,EMPTY } = CONSTANTS;
const  {FIELD_REQUIRED ,INVALID_FORMAT,ONLY_LETTERS_AND_SPACES,
        ONLY_NUMBERS,IS_NOT_THE_SAME,VALID_FORMAT,THEY_ARE_DIFFERENT,
        THERE_IS_NO_INFORMATION_IN_THE_FIELD} = ERROR_MESSAGES;

 
export const validationsForm=(form)=>{

    let errors={};
    const {fullName,phone,email,repeteadEmail}=form;
    
    if(THERE_IS_NO_INFORMATION_IN_THE_FIELD(fullName)){
      errors.fullName=FIELD_REQUIRED("Nombre");
    } else if(!VALID_FORMAT(fullName,regexFullName)){
      errors.fullName=ONLY_LETTERS_AND_SPACES("Nombre");
    } 
    
    else if(THERE_IS_NO_INFORMATION_IN_THE_FIELD(phone)){
      errors.phone=FIELD_REQUIRED("Teléfono");
    }else if(!VALID_FORMAT(phone,regexPhone)){
      errors.phone=ONLY_NUMBERS("Télefono");
    }
        
    else if(THERE_IS_NO_INFORMATION_IN_THE_FIELD(email)){
        errors.email=FIELD_REQUIRED("email");
    }else if(!VALID_FORMAT(email,regexEmail)){
        errors.email=INVALID_FORMAT("email");
    }else if(repeteadEmail !==EMPTY){
      if(THEY_ARE_DIFFERENT(repeteadEmail,email) ){
        errors.repeteadEmail=IS_NOT_THE_SAME("Confirmar email","email");
      }
    }
    
    else if(THERE_IS_NO_INFORMATION_IN_THE_FIELD(repeteadEmail)){
          errors.repeteadEmail=FIELD_REQUIRED("Confirmar email");
    }else if(!VALID_FORMAT(repeteadEmail,regexEmail)){
          errors.repeteadEmail=INVALID_FORMAT("Confirmar email");
    }else if(email !==EMPTY){
      if(THEY_ARE_DIFFERENT(email,repeteadEmail) ){
          errors.repeteadEmail=IS_NOT_THE_SAME("Confirmar email","email");
      }
    }
    
    return errors;
    
    }
    