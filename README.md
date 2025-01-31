Login System and Form Handling Application

This project implements a user authentication system with a login form, data persistence, form handling, and PDF rendering. It is built with React, TypeScript, Styled Components, and Formik for validation. The application is designed to handle form submissions, session management, and file uploads with LocalStorage for data persistence and react-pdf for rendering PDFs.

Login Credentials
Username: nitin
Password: nitin123

npm install
Run the development server: 
npm run start
Build the project for production:
npm run build

Technology Stack
React, HTML, CSS, Styled Components, and TypeScript for building the user interface.
Formik for managing forms and validation.
LocalStorage for data persistence.
react-pdf for rendering PDFs.
The project covers Form Handling, Error Handling, and Dynamic Handling.

Features
1. Login System
Login Form
The login form allows users to enter their credentials (username and password).
Form validation is handled using Formik to ensure the inputs meet the required criteria.

Session Management
On successful login, the user's session is stored in LocalStorage.
After login, the user is redirected to the main application interface.

Auto-Login
If the session exists in LocalStorage, users are automatically redirected to the main interface without needing to log in again.
Logout Functionality
A logout button clears the session from LocalStorage and redirects the user to the login page.

3. Replicate the Design
The application's UI replicates the provided design using React components and styling.
The design is fully responsive and aligns with design specifications.

5. Functional Form Implementation
A functional form is built using Formik, complete with input validation to ensure data integrity.

7. Data Persistence with LocalStorage
Form data is stored in LocalStorage upon submission.
Data persists across page reloads, and previously entered data is pre-populated when revisited.

9. PDF Upload and Display
Users can upload a PDF file from their local system.
The uploaded PDF is rendered and displayed within the application using react-pdf.

11. Populate Form Fields with Dummy Data
A button is provided to populate all form fields with predefined dummy data, including a PDF view on the left side.

12. Included Bonus Features
Typescript: For type checking.
Form Validation: Comprehensive validation for all form fields using Formik.
Error Handling: User-friendly error messages are displayed for invalid inputs.
Dynamic Styling: Inputs are dynamically styled to indicate their validation status (e.g., error highlights).
