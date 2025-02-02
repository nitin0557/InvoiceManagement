export type FieldType = "text" | "number" | "date" | "select" | "textarea";

export interface FormFieldConfig {
  label: string;
  name: string;
  type: FieldType;
  options?: { value: string; label: string }[]; // For select fields
  placeholder?: string; // For input and textarea fields
  required?: boolean;
  className: string
}
