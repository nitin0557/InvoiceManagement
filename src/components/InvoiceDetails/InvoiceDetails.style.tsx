import styled from "@emotion/styled";
import { Field, ErrorMessage } from "formik";

export const FormWrapper = styled.div`
  max-width: 700px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;

  h3 {
    margin-bottom: 20px;
  }

  .invoice-details {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    .invoice-desc {
      width: 100%;
    }
  }
`;

export const FormTitle = styled.h2`
  text-align: left;
  color: #0d0f11;
  margin-bottom: 20px;
  display: flex;
  column-gap: 24px;
  align-items: center;
  h3 {
    font-weight: 400;
    font-size: 24px;
    color: #0d0f11;
  }

  .icon {
    width: 50px;
    height: 50px;
    background: #e8f3fc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FormField = styled.div`
  margin-bottom: 15px;

  .payment-term {
    width: 324px;
    height: 44px;
    color: #a0abbb;
  }
`;

export const Label = styled.label`
  display: block;
  color: #4b5768;
  margin-bottom: 5px;
  .asterisk {
    color: #e11900;
  }
`;

export const InputField = styled(Field)`
  width: 324px;
  height: 44px;
  padding: 10px;
  border: 1px solid #64748b;
  border-radius: 4px;
  font-size: 14px;
  color: #a0abbb;

  &.poc-number {
    width: 100%;
  }
`;

export const SelectField = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #3b4555;
  border-radius: 4px;
  font-size: 14px;
`;

export const TextareaField = styled(Field)`
  width: 100%;
  height: 44px;
  padding: 10px;
  border: 1px solid #64748b;
  border-radius: 4px;
  font-size: 14px;
  resize: vertical;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

export const FormImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;
