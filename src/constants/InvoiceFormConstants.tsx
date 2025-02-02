import { FormFieldConfig } from "../commonComponents/types";

export const invoiceFields: FormFieldConfig[] = [
  {
    label: "Purchase Order Number",
    name: "purchaseNumber",
    className: "invoice-po-number",
    type: "select",
    options: [
      { value: "2345", label: "2345" },
      { value: "12345", label: "12345"},
      { value: "3456", label: "3456" },
    ],
    required: true,
  },
  {
    label: "Invoice Number",
    name: "invoiceNumber",
    className: "invoice-number",
    type: "select",
    options: [
      { value: "INV-00123", label: "INV-00123" },
      { value: "INV-00124", label: "INV-00124"},
      { value: "INV-00125", label: "INV-00125" },
    ],
    required: true,
  },
  // {
  //   label: "Invoice Number",
  //   name: "invoiceNumber",
  //   className: "invoice-number",
  //   type: "text",
  //   placeholder: "Enter Invoice Number",
  //   required: true,
  // },
  {
    label: "Invoice Date",
    name: "invoiceDate",
    className: "invoice-date",
    type: "date",
    required: true,
  },
  {
    label: "Total Amount",
    name: "totalAmount",
    className: "invoice-amount",
    type: "number",
    required: true,
  },
  {
    label: "Payment Terms",
    name: "paymentTerms",
    className: "invoice-terms",
    type: "select",
    options: [
      { value: "sdf", label: "sdf" },
      { value: "fff", label: "fff" },
      { value: "ggg", label: "ggg" },
    ],
    required: true,
  },
  {
    label: "Invoice Due Date",
    name: "dueDate",
    className: "invoice-due-date",
    type: "date",
    required: true,
  },
  {
    label: "GL Post Date",
    name: "glPostDate",
    className: "gl-post-date",
    type: "date",
    required: true,
  },
  {
    label: "Invoice Description",
    name: "invoiceDescription",
    className: "invoice-desc",
    type: "textarea",
    placeholder: "Enter Invoice Description",
    required: true,
  },
];


