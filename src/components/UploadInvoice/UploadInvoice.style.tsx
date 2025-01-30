import styled from "@emotion/styled";

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f7f8fa;
  border: 2px dashed #a4a9b2;
  border-radius: 8px;
  max-width: 400px;
  margin: auto;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 1.5rem;
  color: #1a73e8;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
`;

export const UploadButton = styled.label`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #1a73e8;
  color: white;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #185abc;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const UploadedFileInfo = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #374151;
`;

export const ImageContainer = styled.div`
  margin-bottom: 1.5rem;
  img {
    max-width: 100px;
    height: auto;
  }
`;

export const ClickToUploadText = styled.div`
  .text {
    color: #1787e0;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
  }
`;
