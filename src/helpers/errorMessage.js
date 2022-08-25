const interfaceData = {
    FIELD_REQUIRED : fieldName=>`El campo '${fieldName}' es requerido.`,
    INVALID_FORMAT : fieldName=>`El campo '${fieldName}' tiene un formato no valido.`,
    ONLY_LETTERS_AND_SPACES : fieldName=>`El campo '${fieldName}' sólo acepta letras y espacios en blanco`,
    ONLY_NUMBERS : fieldName=>`El campo '${fieldName}' sólo acepta números y debe tener mínimo 10 y un máximo de 12 digitos`,
    IS_NOT_THE_SAME:(firstFieldName,secondFieldName)=>`El campo '${firstFieldName}' no es igual al  campo '${secondFieldName}'`,
    VALID_FORMAT:(field,regex)=>field.match(regex),
    THEY_ARE_DIFFERENT:(firstFieldName,SecondFieldName)=>firstFieldName.trim() !== SecondFieldName.trim(),
    THERE_IS_NO_INFORMATION_IN_THE_FIELD:(field)=>!field.trim(),
    
  };
  
  export const ERROR_MESSAGES = Object.freeze(interfaceData);
  