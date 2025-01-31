import React, { useState, useRef, useEffect } from "react";
import InvoiceDetails from "../InvoiceDetails/InvoiceDetails";
import ExpenseDetails from "../ExpenseDetails/ExpenseDetails";
import CommentDetails from "../CommentDetails/CommentDetails";
import UploadInvoice from "../UploadInvoice/UploadInvoice";
import Navbar from "../Navbar/Navbar";
import VendorDetails from "../VendorDetails/Vendor";
import {
  ButtonWrapper,
  FormDropdownWrapper,
  FormSections,
  InvoiceFormContainer,
  StyledButton,
  InvoiceUpload,
  Title,
  UploadArea,
  UploadText,
} from "./InvoiceForm.style";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { InvoiceTabs } from "../../utils/InvoiceTabs";
import BackArrowSvg from "../../assets/Back Arrow.svg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InvoiceModal } from "./modal";
import { useNavigate } from "react-router-dom";

interface VendorDetailsValues {
  vendorName: string;
  vendorNumber: string;
  vendorDate: string;
  vendorDescription: string;
  purchaseNumber: number;
  invoiceNumber: string;
  totalAmount: number;
  invoiceDate: string;
  paymentTerms: string;
  dueDate: string;
  glPostDate: string;
  invoiceDescription: string;
  lineAmount: number;
  account: string;
  department: string;
  location: string;
  description: string;
  comment: string;
}

const InvoiceForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("VENDOR_DETAILS");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const vendorRef = useRef<HTMLDivElement>(null);
  const invoiceRef = useRef<HTMLDivElement>(null);
  const expenseRef = useRef<HTMLDivElement>(null);
  const commentRef = useRef<HTMLDivElement>(null);

  const initialValues: VendorDetailsValues = {
    vendorName: "",
    vendorNumber: "",
    totalAmount: 0,
    vendorDate: "",
    paymentTerms: "",
    dueDate: "",
    glPostDate: "",
    vendorDescription: "",
    purchaseNumber: 0,
    invoiceNumber: "",
    invoiceDate: "",
    invoiceDescription: "",
    lineAmount: 0,
    account: "",
    department: "",
    location: "",
    description: "",
    comment: "",
  };

  console.log(initialValues);

  const handleTabsControl = (currentTab: string) => {
    setActiveTab(currentTab);

    switch (currentTab) {
      case "VENDOR_DETAILS":
        vendorRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "INVOICE_DETAILS":
        invoiceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "EXPENSE_DETAILS":
        expenseRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "COMMENTS_DETAILS":
        commentRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  const validationSchema = Yup.object({
    vendorName: Yup.string().required("Vendor Name is required"),
    vendorNumber: Yup.string().required("Vendor Number is required"),
    totalAmount: Yup.number()
      .min(0, "Amount must be positive")
      .required("Total Amount is required"),
    vendorDate: Yup.string().required("Vendor Date is required"),
    paymentTerms: Yup.string().required("Payment Terms are required"),
    dueDate: Yup.string().required("Due Date is required"),
    glPostDate: Yup.string().required("GL Post Date is required"),
    purchaseNumber: Yup.string().required("PO Number is required"),
    vendorDescription: Yup.string().required("Vendor Description is required"),
    invoiceNumber: Yup.string().required("Invoice Number is required"),
    invoiceDate: Yup.string().required("Invoice Date is required"),
    invoiceDescription: Yup.string().required(
      "Invoice Description is required"
    ),
    lineAmount: Yup.number()
      .min(0, "Amount must be positive")
      .required("Line Amount is required"),
    account: Yup.string().required("Account is required"),
    department: Yup.string().required("Department is required"),
    location: Yup.string().required("Location is required"),
    description: Yup.string().required("Description is required"),
    comment: Yup.string().required("Comment is required"),
  });

  const handleSubmit = (
    values: any,
    { resetForm }: { resetForm: Function }
  ) => {
    localStorage.setItem("invoiceData", JSON.stringify(values));

    setIsModalOpen(true);

    resetForm();
    setUploadedFile(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [fileUploaded, setFileUploaded] = useState<boolean>(false); 
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;

    if (!selectedFile) {
      setFileError("No file selected.");
      return;
    }

    const allowedFileTypes = ["application/pdf", "image/jpeg", "image/png"];
    if (!allowedFileTypes.includes(selectedFile.type)) {
      setFileError("Invalid file type. Only PDF, JPEG, and PNG are allowed.");
      return;
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (selectedFile.size > maxSize) {
      setFileError("File size exceeds 5MB limit.");
      return;
    }

    setFileError(null);

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64Data = reader.result;

      if (typeof base64Data === "string") {
        localStorage.setItem(
          "invoiceFile",
          JSON.stringify({
            name: selectedFile.name,
            size: selectedFile.size,
            type: selectedFile.type,
            base64: base64Data,
          })
        );
        setUploadedFile(selectedFile);
        setFileUploaded(true); // Mark file as uploaded
      }
    };

    reader.readAsDataURL(selectedFile);
  };

  useEffect(() => {
    if (fileUploaded) {
      // Navigate to InvoiceManagement page once file is uploaded
      navigate("/InvoiceManagement");
    }
  }, [fileUploaded, navigate]); // Add fileUploaded and navigate to the dependency array

  const handlePopulate = (setValues: Function) => {
    // Get data from localStorage
    const savedData = localStorage.getItem("invoiceData");
    
    // Check if the data exists in localStorage
    if (savedData) {
      try {
        // Parse the data from localStorage
        const parsedData = JSON.parse(savedData);
  
        console.log("Parsed Data from localStorage:", parsedData);
  
        // Populate the form fields with the saved data
        setValues(parsedData); // This will dynamically update all form fields
        Object.assign(initialValues, parsedData);
      } catch (error) {
        console.error("Error parsing data from localStorage:", error);
      }
    } else {
      console.log("No saved data found in localStorage.");
    }
  
    // Load file from localStorage if available
    const storedFile = localStorage.getItem("invoiceFile");
    if (storedFile) {
      const fileData = JSON.parse(storedFile);
      setFileUrl(fileData.base64);
    }
  };
  

  return (
    <>
      <Navbar />

      <InvoiceFormContainer>
        {fileUrl ? (
          fileUrl.startsWith("data:application/pdf") ? (
            <InvoiceUpload>
              <iframe
                src={fileUrl}
                title="PDF Viewer"
                width="100%"
                height="600px"
              />
            </InvoiceUpload>
          ) : (
            <InvoiceUpload>
              <img src={fileUrl} alt="Uploaded File Preview" width="100%" />
            </InvoiceUpload>
          )
        ) : (
          <InvoiceUpload>
            <Title>
              <img src={BackArrowSvg} alt="back-arrow-icon" /> Create New
              Invoice
            </Title>
            <UploadArea>
              <UploadText>Upload Your Invoice</UploadText>
              <span>To auto-populate fields and save time</span>
              <div className="image-container">
                <img
                  src="https://www.tcieduhub.in/public/photos/docs20.gif"
                  alt="movable_img"
                />
              </div>
              <UploadInvoice
                file={uploadedFile}
                onFileUpload={handleFileUpload}
              />
              {uploadedFile && <p>Uploaded File: {uploadedFile.name}</p>}
              {fileError && <p style={{ color: "red" }}>{fileError}</p>}
            </UploadArea>
          </InvoiceUpload>
        )}

        <FormDropdownWrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, resetForm, setValues }) => (
              <Form onSubmit={handleSubmit}>
                <FormSections>
                  <InvoiceTabs
                    activeTab={activeTab}
                    handleTabsControl={handleTabsControl}
                  />

                  <div ref={vendorRef}>
                    <VendorDetails />
                  </div>

                  <div ref={invoiceRef}>
                    <InvoiceDetails />
                  </div>

                  <div ref={expenseRef}>
                    <ExpenseDetails />
                  </div>

                  <div ref={commentRef}>
                    <CommentDetails />
                  </div>
                </FormSections>

                <ButtonWrapper>
                  <MoreVertOutlinedIcon />
                  <StyledButton type="button" className="save-btn">
                    Save as Draft
                  </StyledButton>
                  <StyledButton type="submit" className="submit-btn">
                    Submit & New
                  </StyledButton>
                  <StyledButton type="reset" className="submit-btn" onClick={() => handlePopulate(setValues)}>
                    Populate Data
                  </StyledButton>
                </ButtonWrapper>
              </Form>
            )}
          </Formik>
        </FormDropdownWrapper>

        {isModalOpen && <InvoiceModal closeModal={closeModal} />}
      </InvoiceFormContainer>
    </>
  );
};

export default InvoiceForm;
