import React from "react";
import { TextareaFieldStyled } from "../components/InvoiceDetails/InvoiceDetails.style";

interface TextareaFieldProps {
  name: string;
  placeholder?: string;
  value: string | number;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ name, placeholder, value, required, onChange }) => {
  return (
    <TextareaFieldStyled
      name={name}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
    />
  );
};

export default TextareaField;
