import styled from "@emotion/styled";

export const InvoiceFormContainer = styled.div`
  width: 100%;
  display: flex;
  font-family: sans-serif;
  padding: 20px;
  background-color: #fff;
`;

export const InvoiceUpload = styled.div`
  height: 700px;
  width: 50%;
  margin-bottom: 20px;
  background-color: white;

  padding: 20px;
  border-radius: 8px;
`;

export const Title = styled.h3`
  color: #0d0f11;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 28px;
  display: flex;
  column-gap: 12px;
  align-items: center;
`;

export const UploadArea = styled.div`
  width: 670px;
  height: 640px;
  border: 1px dashed #64748b;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    color: #0d0f11;
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }
  .image-container {
    width: 320px;
    height: 320px;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      max-width: 100%;
    }
  }
`;

export const UploadIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const UploadText = styled.p`
  color: #0d0f11;
  font-size: 20px;
  font-weight: 600;
`;
export const FormDropdownWrapper = styled.div`
  width: 50%;
  position: relative;
  height: 700px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const FormSections = styled.div`
  overflow-y: scroll;
  max-height: 642px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;

  &.save-btn {
    width: 50%;
    background-color: #fff;
    color: #333;
    border: 1px solid #ccc;
    margin-right: 10px;

    &:hover {
      background-color: #eee;
    }
  }

  &.submit-btn {
    width: 50%;
    background-color: #007bff;
    color: white;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
