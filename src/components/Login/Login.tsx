import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import image from "../../components/Images/login.png";

import {
  ButtonWrapper,
  FormWrapper,
  ImageWrapper,
  Input,
  Label,
  LoginButton,
  LoginContainer,
  LoginImage,
  LoginWrapper,
} from "./Login.style";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });


  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = (values: { username: string; password: string }) => {
    if (values.username === "nitin" && values.password === "nitin123") {
      localStorage.setItem(
        "userSession",
        JSON.stringify({ username: values.username })
      );
      navigate("/InvoiceManagement");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <ImageWrapper>
          <LoginImage src={image} alt="login.png" />
        </ImageWrapper>
        <FormWrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-container">
                  <div className="username">
                    <Label htmlFor="username">Username</Label>
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      as={Input}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="password">
                    <Label htmlFor="password">Password</Label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      as={Input}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <ButtonWrapper>
                    <LoginButton type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Logging in..." : "LOGIN"}
                    </LoginButton>
                  </ButtonWrapper>
                </div>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
