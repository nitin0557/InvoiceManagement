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
  position: relative;

  .custom-date-selector {
    position: relative;

    .calender-icon {
      top: 50%;
      position: absolute;
      left: 15px;
      transform: translateY(-50%);
      z-index: 10;
    }
  }

  .payment-term {
    width: 324px;
    height: 40px;
    color: #a0abbb;
  }

  .custom-input-selector {
    position: relative;
    .dollar-icon {
      position: absolute;
      top: 50%;
      left: 2px;
      transform: translateY(-51%);
      background: #e7eaee;
      width: 40px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }
    .usd-text {
      right: 24px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .custom-select {
    position: relative;

    .select-icon {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
    }
    .vendorNumber {
      width: 324px;
      height: 40px;
      color: #a0abbb;
    }
    .vendorName {
      width: 100%;
      height: 40px;
      color: #a0abbb;
    }
    .purchaseNumber {
      width: 100%;
      height: 40px;
      color: #a0abbb;
    }
    .poc-number {
      width: 324px;
      height: 40px;
      color: #a0abbb;
    }
  }
  .custom-select select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  .date-selector {
    position: relative;
    .date-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      z-index: 10;
      transform: translateY(-50%);
    }
    .calender-icon {
      position: absolute;
      left: 35px;
      top: 50%;
      z-index: 10;
      transform: translateY(-50%);
    }
    .arrow-down-icon {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }

    .react-datepicker-wrapper {
      input {
        width: 324px;
        height: 40px;
        color: #a0abbb;
        padding-left: 32px;
      }
    }
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

export const SelectFieldStyled = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #3b4555;
  border-radius: 4px;
  font-size: 14px;
  height: 40px;
`;

export const TextareaFieldStyled = styled(Field)`
  width: 100%;
  height: 44px;
  padding: 10px;
  border: 1px solid #64748b;
  border-radius: 4px;
  font-size: 14px;
  resize: vertical;
  color: #a0abbb;
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
