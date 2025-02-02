import React from "react";
import styled from "@emotion/styled";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

interface InvoiceModalProps {
  closeModal: any;
}

export const InvoiceModal: React.FC<InvoiceModalProps> = ({ closeModal }) => {
  return (
    <div>
      <Modal>
        <ModalContent>
          <h3>Data saved successfully!</h3>
          <p> Data has been saved locally.</p>
          <Button onClick={closeModal}>Close</Button>
        </ModalContent>
      </Modal>
    </div>
  );
};
