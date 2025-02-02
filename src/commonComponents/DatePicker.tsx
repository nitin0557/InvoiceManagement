import React, { useState } from "react";
import { DateField, InputField } from "../components/VendorDetails/Vendor.style";
import arrow_down from "../assets/chevron-down.svg";
import calender from "../assets/Icon5.svg";

interface InputFieldProps {
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

export const DatePicker: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  required,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="custom-date-selector">
    <img src={calender}  className="calender-icon"/>
    <DateField
      as="input"
      type="date"
      name={name}
      placeholder={placeholder}
      className="date-selector"
      // value={inputValue}
      required={required}
      // onChange={handleInputChange}
    />
      {/* <img src={arrow_down} className="arrow-down-icon" /> */}
    </div>
  );
};
