import React from "react";
import styled from "@emotion/styled";

interface TabsProps {
  activeTab: string;
  handleTabsControl: (tab: string) => void;
}

const Tabs = styled.div`
  display: flex;
  background-color: #E7EAEE;
  border-radius: 12px;
  padding: 0px;
  width: 93px;
`;

const Tab = styled.div`
  padding: 3px 15px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  margin-right: 10px;
  color: #4b5768;

  &:hover {
    background-color: #fff;
  }

  &.active-tab {
    color: #ffffff;
    background: #1787e0;
    border-radius: 50%;
    width: 20px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const ToggleTabs: React.FC<TabsProps> = ({
  activeTab,
  handleTabsControl,
}) => {
  return (
    <Tabs>
      <Tab
        className={activeTab === "$" ? "active-tab" : ""}
        onClick={() => handleTabsControl("$")}
      >
        $
      </Tab>
      <Tab
        className={activeTab === "%" ? "active-tab" : ""}
        onClick={() => handleTabsControl("%")}
      >
        %
      </Tab>
    </Tabs>
  );
};
