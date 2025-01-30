import React from 'react';
import styled from "@emotion/styled";

interface TabsProps {
  activeTab: string;
  handleTabsControl: (tab: string) => void;
}

const Tabs = styled.div`
  display: flex;
  background-color: #fff;
  padding: 10px;
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  margin-right: 10px;


  &:hover {
    background-color: #fff;
  }
       
  &.active-tab {
    color: #0D0F11;
    border-bottom: 2px solid #1787E0;
  }
`;

export const InvoiceTabs: React.FC<TabsProps> = ({ activeTab, handleTabsControl }) => {
  console.log(activeTab)
  return (
    <Tabs>
      <Tab
        className={activeTab === 'VENDOR_DETAILS' ? 'active-tab' : ''}
        onClick={() => handleTabsControl('VENDOR_DETAILS')}
      >
        Vendor details
      </Tab>
      <Tab
        className={activeTab === 'INVOICE_DETAILS' ? 'active-tab' : ''}
        onClick={() => handleTabsControl('INVOICE_DETAILS')}
      >
        Invoice details
      </Tab>
      <Tab
        className={activeTab === 'COMMENTS_DETAILS' ? 'active-tab' : ''}
        onClick={() => handleTabsControl('COMMENTS_DETAILS')}
      >
        Comments 
      </Tab>
    </Tabs>
  );
};




