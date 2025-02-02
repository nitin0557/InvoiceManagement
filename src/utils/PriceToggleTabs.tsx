import React from "react";
import styled from "@emotion/styled";


const Tabs = styled.div`
  display: flex;
  width: 124px;
  margin-right: 16px;
`;

const Tab = styled.div`
    margin: 0 6px;
    color: #0D0F11;

  &.active-tab {
    color: #1787e0;

  }
`;

interface TabsProps {
    activeTab: string;
    handleTabsControl: (tab: string) => void;
  }

export const PriceToggleTabs: React.FC<TabsProps> = ({
  activeTab,
  handleTabsControl,
}) => {
  return (
    <Tabs>
      <Tab
        className={activeTab === "$" ? "active-tab" : ""}
        onClick={() => handleTabsControl("$0.00")}
      >
        $0.00
      </Tab>
      <p>/</p>
      <Tab
        className={activeTab === "%" ? "active-tab" : ""}
        onClick={() => handleTabsControl("%0.00")}
      >
        %0.00
      </Tab>
    </Tabs>
  );
};
