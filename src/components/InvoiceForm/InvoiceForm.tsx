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
// import GenericForm from "../InvoiceDetails/GenericForm";
import { invoiceFields } from "../../constants/InvoiceFormConstants";
import { vendorFields } from "../../constants/VendorFormConstants";

interface VendorDetailsValues {
  vendorName: string;
  vendorNumber: number;
  vendorDate: string;
  vendorTerms: string;
  vendorDescription: string;
  vendorDueDate: string;
  vendorPostDate: string;
  vendorTotalAmount: number;
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
  const initialValues: VendorDetailsValues = {
    vendorName: "",
    vendorNumber: 0,
    vendorTerms: "",
    vendorTotalAmount: 0,
    vendorDueDate: "",
    vendorPostDate: "",
    vendorDescription: "",
    totalAmount: 0,
    vendorDate: "",
    paymentTerms: "",
    dueDate: "",
    glPostDate: "",
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


  const [activeTab, setActiveTab] = useState<string>("VENDOR_DETAILS");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [fileUploaded, setFileUploaded] = useState<boolean>(false);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  const vendorRef = useRef<HTMLDivElement>(null);
  const invoiceRef = useRef<HTMLDivElement>(null);
  const expenseRef = useRef<HTMLDivElement>(null);
  const commentRef = useRef<HTMLDivElement>(null);



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
    vendorNumber: Yup.number().min(0, "Vendor Number must be positive").required("Vendor Number is required"),
    totalAmount: Yup.number().min(0, "Amount must be positive").required("Total Amount is required"),
    vendorDate: Yup.string().required("Vendor Date is required"),
    vendorTerms:  Yup.string().required("Vendor Terms is required"),
    vendorTotalAmount:  Yup.number().min(0, "Vendor Total amount must be positive").required("Vendor Total Amount is required"),
    vendorDueDate:  Yup.string().required("Vendor Due Date is required"),
    vendorPostDate:  Yup.string().required("Vendor Post Date is required"),
    paymentTerms: Yup.string().required("Payment Terms are required"),
    dueDate: Yup.string().required("Due Date is required"),
    glPostDate: Yup.string().required("GL Post Date is required"),
    purchaseNumber: Yup.number() .min(0, "Purchase Number must be positive").required("Purchase Number is required"),
    vendorDescription: Yup.string().required("Vendor Description is required"),
    invoiceNumber: Yup.string().required("Invoice Number is required"),
    invoiceDate: Yup.string().required("Invoice Date is required"),
    invoiceDescription: Yup.string().required("Invoice Description is required"),
    lineAmount: Yup.number().min(0, "Amount must be positive").required("Line Amount is required"),
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

    const maxSize = 5 * 1024 * 1024;
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
        setFileUploaded(true);
      }
    };

    reader.readAsDataURL(selectedFile);
  };

  useEffect(() => {
    if (fileUploaded) {
      navigate("/InvoiceManagement");
    }
  }, [fileUploaded, navigate]);

  const handlePopulate = () => {
    const savedData = localStorage.getItem("invoiceData");

    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        
        Object.assign(initialValues, parsedData);
      } catch (error) {
        console.error("Error parsing data from localStorage:", error);
      }
    } else {
      console.log("No saved data found in localStorage.");
    }

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
              <UploadArea>
                <iframe
                  src={fileUrl}
                  title="PDF Viewer"
                  width="100%"
                  height="600px"
                />
              </UploadArea>
            </InvoiceUpload>
          ) : (
            <InvoiceUpload>
              <UploadArea>
                <img src={fileUrl} alt="Uploaded File Preview" width="100%" />
              </UploadArea>
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
            <Form>
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
                <StyledButton
                  type="reset"
                  className="submit-btn"
                  onClick={() => handlePopulate()}
                >
                  Populate Data
                </StyledButton>
              </ButtonWrapper>
            </Form>
          </Formik>
        </FormDropdownWrapper>

        {isModalOpen && <InvoiceModal closeModal={closeModal} />}
      </InvoiceFormContainer>
    </>
  );
};

export default InvoiceForm;
