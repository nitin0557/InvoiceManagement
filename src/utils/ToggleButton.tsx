import React, { useState } from "react";
import styled from "@emotion/styled";
import { ToggleTabs } from "./ToggleTabs";
import { PriceToggleTabs } from "./PriceToggleTabs";

const PriceInputContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 8px;
  overflow: hidden;
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
  const [isPricePercentage, setIsPricePercentage] = useState("$0.00");

  const handleToggle = (tab: any) => {
    setIsPercentage(tab);
  };

  const handlePriceToggle = (tab: any) => {
    setIsPricePercentage(tab);
  };

  return (
    <PriceInputContainer>
       <PriceToggleTabs activeTab={isPercentage} handleTabsControl={handlePriceToggle} />
      <ToggleTabs activeTab={isPercentage} handleTabsControl={handleToggle} />
    </PriceInputContainer>
  );
};
