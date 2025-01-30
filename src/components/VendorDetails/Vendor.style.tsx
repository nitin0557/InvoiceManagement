import styled from "@emotion/styled";
import { Field, ErrorMessage } from "formik";

export const FormWrapper = styled.div`
  max-width: 700px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;

   h3{
      margin-bottom: 20px;
    }
  .view-vendor-text{
   ext-align: center;
    color: #1787E0;
    font-size: 14px;
    cursor: pointer;
    font-weight:600;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .vendor-details{
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

      .vendor-desc{
        width: 100%;
      }
  }
`;

export const FormTitle = styled.h2`
  text-align: left;
  color: #0D0F11;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  column-gap: 24px;
  align-items: center;

  .icon{
      width: 50px;
      height: 50px;
      background: #E8F3FC;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   
`;

export const FormField = styled.div`
  margin-bottom: 15px;

  .payment-term{
    width: 324px;
    color: #A0ABBB;
  }
`;

export const Label = styled.label`
  display: block;
  color: #3b4555;
  margin-bottom: 5px;
  .asterisk{
    color: #E11900;
   }
`;

export const InputField = styled(Field)`
  width: 324px;
  height: 44px;
  padding: 10px;
  border: 1px solid #64748B;
  border-radius: 4px;
  font-size: 14px;
  color: #A0ABBB;

  &.vendor-name{
     width: 100%;
  }
`;

export const SelectField = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #64748B;
  border-radius: 4px;
  font-size: 14px;
`;

export const TextareaField = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #64748B;
  border-radius: 4px;
  font-size: 14px;
  resize: vertical;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: #d70000;
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
