import React from "react";
import { Field, ErrorMessage } from "formik";
import {
  ErrorText,
  FormContainer,
  FormField,
  FormTitle,
  Label,
} from "./ExpenseDetails.style";
import { ToggleButtonComponent } from "../../utils/ToggleButton";
import AddExpense from "../../utils/AddExpense";
import { InputFieldComponent } from "../../commonComponents/InputField";
import { SelectField } from "../../commonComponents/SelectField";
import { expenseFields } from "../../constants/ExpenseFormConstants";

const ExpenseDetails: React.FC = () => {

    const expenseFieldsOptions =
       expenseFields.find((item) => item.name === "account")?.options || [];
    const locationFieldsOptions =
       expenseFields.find((item) => item.name === "location")?.options || [];
  return (
    <>
      <FormTitle>
        Expense Details <ToggleButtonComponent />
      </FormTitle>
      <FormContainer>
        <FormField>
          <Label htmlFor="lineAmount">
            Line Amount <span className="asterisk">*</span>
          </Label>
          <InputFieldComponent
            name="lineAmount"
            type="number"
            placeholder="0.00"
            required={true}
          />
          {/* <Field name="lineAmount" type="number" placeholder="0.00" /> */}
          <ErrorMessage name="lineAmount" component={ErrorText} />
        </FormField>

        <FormField>
          <Label htmlFor="account">
            Account<span className="asterisk">*</span>
          </Label>
          <SelectField
            name="account"
            options={expenseFieldsOptions}
            required={true}
            className="account"
            placeholder="Select Account"
          />

          {/* <Field name="account" type="text" placeholder="Select Account" /> */}
          <ErrorMessage name="account" component={ErrorText} />
        </FormField>

        <FormField>
          <Label htmlFor="department">
            Department<span className="asterisk">*</span>
          </Label>
           <SelectField
              name="department"
              options={expenseFieldsOptions}
              required={true}
              className="department"
              placeholder="Select Department"
            />
   
          <ErrorMessage name="department" component={ErrorText} />
        </FormField>

        <FormField>
          <Label htmlFor="location">
            Location<span className="asterisk">*</span>
          </Label>
           <SelectField
              name="location"
              options={locationFieldsOptions}
              required={true}
              className="location"
              placeholder="Select Location"
            />
          {/* <Field name="location" type="text" placeholder="Select Location" /> */}
          <ErrorMessage name="location" component={ErrorText} />
        </FormField>

        <FormField className="expense-desc">
          <Label htmlFor="description">
            Description<span className="asterisk">*</span>
          </Label>
          <Field
            name="description"
            as="textarea"
            placeholder="Expense Description"
          />
          <ErrorMessage name="description" component={ErrorText} />
        </FormField>
      </FormContainer>
      <AddExpense />
    </>
  );
};

export default ExpenseDetails;
