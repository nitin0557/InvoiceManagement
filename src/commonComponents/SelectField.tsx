import React, { useState } from "react";
import { SelectFieldStyled } from "../components/InvoiceDetails/InvoiceDetails.style";
import chevrondownicon from "../assets/chevron-down.svg";

interface SelectFieldProps {
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  className: string;
  placeholder: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  name,
  options,
  required,
  className,
  placeholder
}) => {
  const [selected,setSelected] = useState<string>('')

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

    setSelected(e.target.value)

  }




  return (
    <div className="custom-select">
      <span className="select-icon">
        <img src={chevrondownicon} alt="icon3" />
      </span>

      <SelectFieldStyled
        as="select"
        name={name}
        required={required}
        className={className}
        // onChange={handleOnChange}
        // value={selected}
      >
        <option value="">{placeholder}</option>
        {Array.isArray(options) && options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectFieldStyled>
    </div>
  );
};
