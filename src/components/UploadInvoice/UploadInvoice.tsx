import React from "react";
import styled from "@emotion/styled";
import { ClickToUploadText } from "./UploadInvoice.style";
import fileUploadIcon from "../../assets/upload.svg";

const UploadInvoiceContainer = styled.div`
  width: 158px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
  border: 1px solid #64748b;
  border-radius: 8px;
  cursor: pointer;
  background-color: #ffffff;
  margin-bottom: 20px;

  &:hover {
    background-color: #ffffff;
  }
`;


const UploadText = styled.span`
  color: #777;
`;

const FileInput = styled.input`
  display: none; /* Hide the default input */
`;

interface FileUploadProps {
  file: any;
  onFileUpload: any;
}

const UploadInvoice: React.FC<FileUploadProps> = ({ file, onFileUpload }) => {
  const handleClick = () => {
    const fileInput = document.getElementById(
      "fileInput"
    ) as HTMLInputElement | null;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <>
      <UploadInvoiceContainer onClick={handleClick}>
        <UploadText>Upload File</UploadText>
        <FileInput type="file" id="fileInput" onChange={onFileUpload} />

        <img src={fileUploadIcon} alt="fileuploadicon" />
      </UploadInvoiceContainer>

      <ClickToUploadText>
        <span className="text" onClick={handleClick}>
          Click to upload{" "}
        </span>{" "}
        and Drag or Drop
      </ClickToUploadText>
    </>
  );
};

export default UploadInvoice;
