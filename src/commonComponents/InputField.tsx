import React, { useState } from "react";
import { Input } from "../components/Login/Login.style";
import dolloricon from "../assets/Currency Symbol.svg";
import { InputField } from "../components/VendorDetails/Vendor.style";

interface InputFieldProps {
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

export const InputFieldComponent: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  required,
}) => {

  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }



  return (

    <div className="custom-input-selector">
      <div className="dollar-icon">
        <img src={dolloricon} />
      </div>
      <InputField
        as="input"
        type="number"
        name={name}
        placeholder={placeholder}
        // value={inputValue}
        required={required}
        // onChange={handleInputChange}
      />
      <p className="usd-text"> USD</p>
    </div>
  );
};
