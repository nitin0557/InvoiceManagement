import { FormFieldConfig } from "../commonComponents/types";

export const expenseFields: FormFieldConfig[] = [
  {
    label: "Line Amount",
    name: "lineAmount",
    className: "line-amount",
    type: "number",
    required: true,
  },
  {
    label: "Account",
    name: "account",
    className: "account",
    type: "select",
    options: [
      { value: "12345", label: "12345" },
      { value: "3456", label: "3456"},
      { value: "4567", label: "4567" },
    ],
    required: true,
  },
  {
    label: "Department",
    name: "department",
    className: "select-department",
    type: "text",
    options: [
      { value: "Operations", label: "Operations" },
      { value: "Android", label: "Android" },
      { value: "Ai", label: "Ai" },
    ],
    required: true,
  },
  {
    label: "Location",
    name: "location",
    className: "location",
    type: "text",
    options: [
      { value: "New York", label: "New York" },
      { value: "London", label: "London" },
      { value: "Germany", label: "Germany" },
    ],
    required: true,
  },
  {
    label: "Expense Description",
    name: "expenseDescription",
    className: "expense-desc",
    type: "textarea",
    placeholder: "Enter Expense Description",
    required: true,
  },
];


