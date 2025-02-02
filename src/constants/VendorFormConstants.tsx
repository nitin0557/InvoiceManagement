import { FormFieldConfig } from "../commonComponents/types";

export const vendorFields: FormFieldConfig[] = [
  {
    label: "Vendor Name",
    name: "vendorName",
    type: "select",
    className: "vendor-name",
    options: [
      { value: "A1 Exterminators", label: "A1 Exterminators" },
      { value: "A2 Exterminators", label: "A2 Exterminators" },
      { value: "A3 Exterminators", label: "A3 Exterminators" },
    ],
    required: true,
  },
  {
    label: "Vendor Number",
    name: "vendorNumber",
    className: "vendor-number",
    options: [
      { value: "2345", label: "2345" },
      { value: "12345", label: "12345"},
      { value: "3456", label: "3456" },
    ],
    type: "select",
    placeholder: "Enter Vendor Number",
    required: true,
  },
  {
    label: "Vendor Date",
    name: "VendorDate",
    className: "vendor-date",
    type: "date",
    required: true,
  },
  {
    label: "Total Vendor Amount",
    name: "TotalAmount",
    className: "vendor-amount",
    type: "number",
    required: true,
  },
  {
    label: "Vendor Terms",
    name: "VendorTerms",
    className: "vendor-terms",
    type: "select",
    options: [
      { value: "Net 30", label: "Net 30" },
      { value: "Net 45", label: "Net 45" },
      { value: "Net 60", label: "Net 60" },
    ],
    required: true,
  },
  {
    label: "Invoice Due Date",
    name: "dueDate",
    className: "vendor-due-date",
    type: "date",
    required: true,
  },
  {
    label: "GL Post Date",
    name: "glPostDate",
    className: "vendor-gl-post-date",
    type: "date",
    required: true,
  },
  {
    label: "Invoice Description",
    name: "invoiceDescription",
    className: "vendor-desc",
    type: "textarea",
    placeholder: "Enter Invoice Description",
    required: true,
  },
];


