import React, { useState } from "react";

import {
  ErrorMessageStyled,
  FormField,
  FormTitle,
  FormWrapper,
  Label,
  TextareaField,
} from "./Vendor.style";
import icon from "../../assets/Icon.svg";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { invoiceFields } from "../../constants/InvoiceFormConstants";
import { SelectField } from "../../commonComponents/SelectField";
import { vendorFields } from "../../constants/VendorFormConstants";
import { InputFieldComponent } from "../../commonComponents/InputField";
import {DatePicker} from "../../commonComponents/DatePicker";

const VendorDetails: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
  };
  const vendorNameOptions =
    vendorFields.find((item) => item.name === "vendorName")?.options || [];
  const purchaseOptions =
    vendorFields.find((item) => item.name === "VendorTerms")?.options || [];
  const venderNumberOptions =
    vendorFields.find((item) => item.name === "vendorNumber")?.options || [];

  return (
    <FormWrapper>
      <FormTitle>
        {" "}
        <span className="icon">
          <img src={icon} alt="vendor_icon" />{" "}
        </span>
        Vendor Details
      </FormTitle>

      <h3> Vendor Information</h3>

      <FormField>
        <Label htmlFor="vendorName">
          Vendor Name <span className="asterisk">*</span>
        </Label>
        <SelectField
          name="vendorName"
          options={vendorNameOptions}
          required={true}
          className="vendorName"
          placeholder="vendor Name"
        />
        <ErrorMessageStyled name="vendorName" component="div" />
      </FormField>

      <p className="view-vendor-text" onClick={handleClick}>
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
              {/* <InputField name="vendorNumber" placeholder="vendorNumber" /> */}
              <SelectField
                name="vendorNumber"
                options={venderNumberOptions}
                required={true}
                className="vendorNumber"
                placeholder="vendor Number"
              />
              <ErrorMessageStyled name="vendorNumber" component="div" />
            </FormField>

            <FormField>
              <Label htmlFor="vendorDate">
                Vendor Date{" "}
                <span className="asterisk">
                  <span className="asterisk">*</span>
                </span>
              </Label>
              <DatePicker
                name="vendorDate"
                type="date"
                placeholder="Vendor Date"
                required={true}
              />
              <ErrorMessageStyled name="vendorDate" component="div" />
            </FormField>

            <FormField>
              <Label htmlFor="vendorTotalAmount">
                Total Amount{" "}
                <span className="asterisk">
                  <span className="asterisk">*</span>
                </span>
              </Label>
              <InputFieldComponent
                name="vendorTotalAmount"
                type="number"
                placeholder="Vendor Total Amount"
                required={true}
              />
              <ErrorMessageStyled name="vendorTotalAmount" component="div" />
            </FormField>

            <FormField>
              <Label htmlFor="vendorTerms">
                Vendor Terms
                <span className="asterisk">
                  <span className="asterisk">*</span>
                </span>
              </Label>

              <SelectField
                name="vendorTerms"
                options={purchaseOptions}
                required={true}
                className="vendor-term"
                placeholder="Vendor Terms"
              />

              <ErrorMessageStyled name="vendorTerms" component="div" />
            </FormField>

            <FormField>
              <Label htmlFor="vendorDueDate">
                Vendor Date <span className="asterisk">*</span>
              </Label>
              <DatePicker name="vendorDueDate" type="date" required={true} />
              <ErrorMessageStyled name="vendorDueDate" component="div" />
            </FormField>

            <FormField>
              <Label htmlFor="vendorPostDate">
                Vendor Post Date <span className="asterisk">*</span>
              </Label>
              <DatePicker name="vendorPostDate" type="date" required={true}/>
              <ErrorMessageStyled name="vendorPostDate" component="div" />
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
