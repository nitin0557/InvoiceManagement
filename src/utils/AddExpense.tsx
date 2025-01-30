import React from "react";
import styled from "@emotion/styled";

const AddExpenseButton = styled.button`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  white-space: nowrap;
  font-size: 1rem;

  &:hover {
    background-color: #f0f0f0;
    border-color: #bbb;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #add8e6;
  }
`;

const AddIcon = styled.span`
  margin-right: 8px;
  font-size: 1.2rem;

  &:before {
    content: "+";
  }
`;

const AddExpense: React.FC = () => {
  return (
    <AddExpenseButton>
      <AddIcon />
      Add Expense Coding
    </AddExpenseButton>
  );
};

export default AddExpense;
