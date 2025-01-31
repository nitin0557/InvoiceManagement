import React, { useState, useEffect } from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';

interface UploadProps {
  fileurl: File | null;  // Expecting a valid File object
}

const PdfUpload: React.FC<UploadProps> = ({ fileurl }) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  useEffect(() => {
    if (fileurl) {
      try {
        const fileURL = URL.createObjectURL(fileurl);
        setFileUrl(fileURL);

        // Save the file URL to localStorage (optional)
        localStorage.setItem('uploadedFile', fileURL);
      } catch (error) {
        console.error('Error generating URL for the file', error);
      }
    }
  }, [fileurl]);

  return (
    <div className="file-upload-container">
      <h2>Uploaded Invoice (PDF/Image)</h2>

      {fileUrl && fileurl && (
        <div className="file-viewer">
          {fileurl.type === 'application/pdf' ? (
            <div className="pdf-viewer">
              <iframe src={fileUrl} title="PDF Viewer" width="100%" height="600px" />
            </div>
          ) : (
            <div className="image-viewer">
              <img src={fileUrl} alt="Uploaded File Preview" width="100%" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PdfUpload;
