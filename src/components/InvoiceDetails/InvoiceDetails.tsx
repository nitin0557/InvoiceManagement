import React from "react";

import {
  ErrorMessageStyled,
  FormField,
  FormTitle,
  FormWrapper,
  InputField,
  Label,
  SelectField,
  TextareaField,
} from "./InvoiceDetails.style";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

const InvoiceDetails: React.FC = () => {
  return (
    <FormWrapper>
      <FormTitle>
        {" "}
        <span className="icon">
          <ReceiptOutlinedIcon />
        </span>
        Invoice Details
      </FormTitle>

      <h3> General Information</h3>

      <FormField>
        <Label htmlFor="purchaseNumber">
          Purchase Order Number <span className="asterisk">*</span>
        </Label>
        <SelectField as="select" name="poNumber" className="poc-number">
          <option value="">Select</option>
          <option value="Net 30">Net 30</option>
          <option value="Net 45">Net 45</option>
          <option value="Net 60">Net 60</option>
        </SelectField>
        <ErrorMessageStyled name="poNumber" component="div" />
      </FormField>

      <h3> Invoice Details</h3>
      <div className="invoice-details">
        <FormField>
          <Label htmlFor="invoiceNumber">
            Invoice Number <span className="asterisk">*</span>
          </Label>
          <InputField name="invoiceNumber" placeholder="Select Vendor " />
          <ErrorMessageStyled name="invoiceNumber" component="div" />
        </FormField>

        <FormField>
          <Label htmlFor="invoiceDate">
            Invoice Date <span className="asterisk">*</span>
          </Label>
          <InputField name="invoiceDate" type="date" />
          <ErrorMessageStyled name="invoiceDate" component="div" />
        </FormField>

        <FormField>
          <Label htmlFor="totalAmount">
            Total Amount <span className="asterisk">*</span>
          </Label>
          <InputField name="totalAmount" type="number" />
          <ErrorMessageStyled name="totalAmount" component="div" />
        </FormField>

        <FormField>
          <Label htmlFor="paymentTerms">
            Payment Terms <span className="asterisk">*</span>
          </Label>
          <SelectField as="select" name="paymentTerms" className="payment-term">
            <option value="">Select</option>
            <option value="Net 30">Net 30</option>
            <option value="Net 45">Net 45</option>
            <option value="Net 60">Net 60</option>
          </SelectField>
          <ErrorMessageStyled name="paymentTerms" component="div" />
        </FormField>

        <FormField>
          <Label htmlFor="dueDate">
            Invoice Due Date <span className="asterisk">*</span>
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

        <FormField className="invoice-desc">
          <Label htmlFor="invoiceDescription">
            Invoice Description <span className="asterisk">*</span>
          </Label>
          <TextareaField
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
