# Invoice Details form with user login
This project implements a user authentication system with a login form, data persistence, form handling, and PDF rendering. It is built with React, TypeScript, Styled Components, and Formik for validation. The application is designed to handle form submissions, session management, and file uploads with LocalStorage for data persistence and react-pdf for rendering PDFs.

**Login Credentials**
Username: nitin
Password: nitin123

**Installation**

**Run the development server:**
npm run start
Build the project for production:
npm run build
Technology Stack
React, HTML, CSS, Styled Components, and TypeScript for building the user interface.
Formik for managing forms and validation.
LocalStorage for data persistence.
react-pdf for rendering PDFs.
The project covers Form Handling, Error Handling, and Dynamic Styling.

**Features**

1. Login System

2. Login Form: The login form allows users to enter their credentials (username and password). Form validation is handled using Formik to ensure the inputs meet the required criteria.
Session Management

3. On successful login, the user's session is stored in LocalStorage.
After login, the user is redirected to the main application interface.
Auto-Login

4. If the session exists in LocalStorage, users are automatically redirected to the main interface without needing to log in again.
Logout Functionality

5. A logout button clears the session from LocalStorage and redirects the user to the login page.
Replicate the Design

6. The application's UI replicates the provided design using React components and Styled Components for styling.
The design is fully responsive and aligns with design specifications.
Functional Form Implementation

7. A functional form is built using Formik, complete with input validation to ensure data integrity.
Data Persistence with LocalStorage

8. Form data is stored in LocalStorage upon submission.
Data persists across page reloads, and previously entered data is pre-populated when revisited.
PDF Upload and Display

9. Users can upload a PDF file from their local system.
The uploaded PDF is rendered and displayed within the application using react-pdf.
Populate Form Fields with Dummy Data

10. A button is provided to populate all form fields with predefined dummy data, including a PDF view on the left side.

**Included Bonus Features**

TypeScript: For type checking.
Form Validation: Comprehensive validation for all form fields using Formik.
Error Handling: User-friendly error messages are displayed for invalid inputs.
Dynamic Styling: Inputs are dynamically styled to indicate their validation status (e.g., error highlights).
