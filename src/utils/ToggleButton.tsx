import React, { useState } from "react";
import styled from "@emotion/styled";
import { ToggleTabs } from "./ToggleTabs";

const PriceInputContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 8px;
  overflow: hidden;
  width: fit-content;
`;

const PriceText = styled.span`
  margin-right: 8px;
  color: #333;
`;

const InputField = styled.input`
  border: none;
  outline: none;
  padding: 0;
  width: 60px;
  font-size: 1rem;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;


export const ToggleButtonComponent: React.FC = () => {
  const [isPercentage, setIsPercentage] = useState("$");

  const handleToggle = (tab: any) => {
    setIsPercentage(tab);
  };

  return (
    <PriceInputContainer>
      <PriceText>$0.00 / $0.00</PriceText>
      <InputField type="number" placeholder="0.00" />
      <ToggleTabs activeTab={isPercentage} handleTabsControl={handleToggle} />
    </PriceInputContainer>
  );
};
