import React from "react";
import { Field, ErrorMessage } from "formik";

import {
  FormContainer,
  FormField,
  FormTitle,
  FieldWrapper,
  SendIconWrapper,
} from "./CommentDetails.style";

import sendicon from "../../assets/Icon4.svg";
import commentIcon from "../../assets/Icon3.svg";

const CommentDetails: React.FC = () => {
  return (
    <FormContainer>
      <FormTitle>
        <span className="icon">
          <img src={commentIcon} alt="icon3" />
        </span>
        Comments
      </FormTitle>
      <FormField>
        <FieldWrapper>
          <Field
            name="comment"
            as="textarea"
            placeholder="Add a comment and @Name to tag someone"
            validate={false}
          />
          <SendIconWrapper>
            <img src={sendicon} alt="send-icon" />
          </SendIconWrapper>
        </FieldWrapper>
      </FormField>
    </FormContainer>
  );
};

export default CommentDetails;
