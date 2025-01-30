import React, { useState } from "react";

import {
  ErrorMessageStyled,
  FormField,
  FormTitle,
  FormWrapper,
  InputField,
  Label,
  SelectField,
  TextareaField,
} from "./Vendor.style";
import icon2 from "../../assets/Icon2.svg";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const VendorDetails: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <FormWrapper>
      <FormTitle>
        {" "}
        <span className="icon">
          <img src={icon2} alt="icon2" />{" "}
        </span>
        Vendor Details
      </FormTitle>

      <h3> Vendor Information</h3>

      <FormField>
        <Label htmlFor="vendorName">
          Vendor Number <span className="asterisk">*</span>
        </Label>
        <SelectField as="select" name="vendorName" className="vendor-name">
          <option value="">Vendor</option>
          <option value="Net 30">Net 30</option>
          <option value="Net 45">Net 45</option>
          <option value="Net 60">Net 60</option>
        </SelectField>
        <ErrorMessageStyled name="vendorName" component="div" />
      </FormField>

      <p className="view-vendor-text" onClick={handleClick}>
        {" "}
        {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} View Vendor
        Details
      </p>
      {show && (
        <>
          <h3> Vendor Details</h3>
          <div className="vendor-details">
            <FormField>
              <Label htmlFor="vendorNumber">
                Vendor Number <span className="asterisk">*</span>
              </Label>
              <InputField name="vendorNumber" placeholder="vendorNumber" />
              <ErrorMessageStyled name="vendorNumber" component="div" />
            </FormField>

            <FormField>
              <Label htmlFor="vendorDate">
                Vendor Date{" "}
                <span className="asterisk">
                  <span className="asterisk">*</span>
                </span>
              </Label>
              <InputField
                name="vendorDate"
                type="date"
                placeholder="Vendor Date"
              />
              <ErrorMessageStyled name="vendorDate" component="div" />
            </FormField>

            <FormField>
              <Label htmlFor="totalAmount">
                Total Amount{" "}
                <span className="asterisk">
                  <span className="asterisk">*</span>
                </span>
              </Label>
              <InputField
                name="totalAmount"
                type="number"
                placeholder="Total Amount"
              />
              <ErrorMessageStyled name="totalAmount" component="div" />
            </FormField>

            <FormField>
              <Label htmlFor="paymentTerms">
                Payment Terms{" "}
                <span className="asterisk">
                  <span className="asterisk">*</span>
                </span>
              </Label>
              <SelectField
                as="select"
                name="paymentTerms"
                className="payment-term"
                placeholder="Payment Terms"
              >
                <option value="">Select</option>
                <option value="Net 30">Net 30</option>
                <option value="Net 45">Net 45</option>
                <option value="Net 60">Net 60</option>
              </SelectField>
              <ErrorMessageStyled name="paymentTerms" component="div" />
            </FormField>

            <FormField>
              <Label htmlFor="dueDate">
                Due Date <span className="asterisk">*</span>
              </Label>
              <InputField name="dueDate" type="date" />
              <ErrorMessageStyled name="dueDate" component="div" />
            </FormField>

            <FormField>
              <Label htmlFor="glPostDate">
                GL Post Date <span className="asterisk">*</span>
              </Label>
              <InputField name="glPostDate" type="date" />
              <ErrorMessageStyled name="glPostDate" component="div" />
            </FormField>

            <FormField className="vendor-desc">
              <Label htmlFor="vendorDescription">
                Vendor Description <span className="asterisk">*</span>
              </Label>
              <TextareaField
                name="vendorDescription"
                placeholder="Vendor Description"
              />
              <ErrorMessageStyled name="vendorDescription" component="div" />
            </FormField>
          </div>
        </>
      )}
    </FormWrapper>
  );
};

export default VendorDetails;
