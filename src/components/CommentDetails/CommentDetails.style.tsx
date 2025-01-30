import styled from "@emotion/styled";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const Label = styled.label`
  display: block;
  color: #3b4555;
  margin-bottom: 5px;
  .asterisk {
    color: #e11900;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  position: relative;
  padding: 20px;

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #374151;
  }

  textarea {
    width: 100%;
    height: 40px;
    padding: 0.75rem;
    color: #a0abbb;
    font-weight: 400;
    border: 1px solid #64748b;
    border-radius: 6px;
    font-size: 14px;
    resize: vertical;
    outline: none;
    &:focus {
      border-color: #1a73e8;
    }
  }

  .error-text {
    color: #dc2626;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
`;

export const SendIconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #555;

  &:hover {
    color: #007bff;
  }
`;

export const FormTitle = styled.h2`
  padding-left: 20px;
  text-align: left;
  font-size: 24px;
  font-weight: 600;
  color: #0d0f11;
  margin-bottom: 20px;
  display: flex;
  column-gap: 24px;
  align-items: center;

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

export const SubmitButton = styled.button``;
