import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  ErrorMessageStyled,
  FormField,
  FormTitle,
  FormWrapper,
  InputField,
  Label,
  TextareaFieldStyled,
} from "./InvoiceDetails.style";
import { SelectField } from "../../commonComponents/SelectField";
import { invoiceFields } from "../../constants/InvoiceFormConstants";
import "react-datepicker/dist/react-datepicker.css"; // Import the datepicker styles
import { DatePicker } from "../../commonComponents/DatePicker";
import { InputFieldComponent } from "../../commonComponents/InputField";
import invoiceicon from "../../assets/Icon2.svg";

const InvoiceDetails: React.FC = () => {
  const purchaseOptions =
    invoiceFields.find((item) => item.name === "purchaseNumber")?.options || [];
  const invoiceNumberOptions =
    invoiceFields.find((item) => item.name === "invoiceNumber")?.options || [];
  const paymentTermsOptions =
    invoiceFields.find((item) => item.name === "paymentTerms")?.options || [];

  return (
    <FormWrapper>
      <FormTitle>
        <span className="icon">
          <img src={invoiceicon} alt="invoice_icon"/>
        </span>
        Invoice Details
      </FormTitle>

      <h3> General Information</h3>

      <FormField>
        <Label htmlFor="purchaseNumber">
          Purchase Order Number <span className="asterisk">*</span>
        </Label>
        <SelectField
          name="purchaseNumber"
          options={purchaseOptions}
          required={true}
          className="purchaseNumber"
          placeholder="Purchase Number"
        />
        <ErrorMessageStyled name="purchaseNumber" component="div" />
      </FormField>

      <h3> Invoice Details</h3>
      <div className="invoice-details">
        <FormField>
          <Label htmlFor="invoiceNumber">
            Invoice Number <span className="asterisk">*</span>
          </Label>
          <SelectField
            name="invoiceNumber"
            options={invoiceNumberOptions}
            required={true}
            className="poc-number"
            placeholder="Select Vendor"
          />
          <ErrorMessageStyled name="invoiceNumber" component="div" />
        </FormField>

        <FormField>
          <Label htmlFor="invoiceDate">
            Invoice Date <span className="asterisk">*</span>
          </Label>

          <DatePicker
            name="invoiceDate"
            type="date"
            placeholder="Invoice Date"
            required={true}
          />
          <ErrorMessageStyled name="invoiceDate" component="div" />
        </FormField>

        <FormField>
          <Label htmlFor="totalAmount">
            Total Amount <span className="asterisk">*</span>
          </Label>
          <InputFieldComponent
            name="totalAmount"
            type="number"
            placeholder="Total Amount"
            required={true}
          />
          <ErrorMessageStyled name="totalAmount" component="div" />
        </FormField>

        <FormField>
          <Label htmlFor="paymentTerms">
            Payment Terms <span className="asterisk">*</span>
          </Label>
          <SelectField
            name="paymentTerms"
            options={paymentTermsOptions}
            required={true}
            className="payment-term"
            placeholder="Payment Terms"
          />
          <ErrorMessageStyled name="paymentTerms" component="div" />
        </FormField>

        <FormField>
          <Label htmlFor="dueDate">
            Invoice Due Date <span className="asterisk">*</span>
          </Label>
          <DatePicker
            name="dueDate"
            type="date"
            placeholder="Due Date"
            required={true}
          />
          <ErrorMessageStyled name="dueDate" component="div" />
        </FormField>

        <FormField>
          <Label htmlFor="glPostDate">
            GL Post Date <span className="asterisk">*</span>
          </Label>
          <DatePicker
            name="glPostDate"
            type="date"
            placeholder="glPost Date"
            required={true}
          />
          <ErrorMessageStyled name="glPostDate" component="div" />
        </FormField>

        <FormField className="invoice-desc">
          <Label htmlFor="invoiceDescription">
            Invoice Description <span className="asterisk">*</span>
          </Label>
          <TextareaFieldStyled
            name="invoiceDescription"
            placeholder="Invoice Description"
          />
          <ErrorMessageStyled name="invoiceDescription" component="div" />
        </FormField>
      </div>
    </FormWrapper>
  );
};

export default InvoiceDetails;
