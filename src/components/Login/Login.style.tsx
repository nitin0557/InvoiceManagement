import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

export const LoginWrapper = styled.div`
  width: 1077px;
  height: 400px;
  background: #dee2e6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  width: 60%;
`;

export const ImageWrapper = styled.div`
  margin-right: 20px;
  width: 500px;
`;

export const LoginImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;

export const FormWrapper = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;

  .form-container{
   .username{
      position: relative;
      .error-message{
          color: red;
          position: absolute;
          top: 58px;
          font-size: 12px;
       }
     }
      .password{
         position: relative;
          .error-message{
              color: red;
              position: absolute;
              top: 58px;
              font-size: 12px;
          }
       }
   }
`;

export const Label = styled.label`
  position: relative;
  top: -2px;
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 15px;
  padding: 8px;
  width: 340px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
