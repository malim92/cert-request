import React from 'react';
import jsPDF from 'jspdf';

const PdfGenerator = ({ Cert }) => {
    const generatePdf = () => {
      const pdf = new jsPDF();
      pdf.text(`address_to: ${Cert.address_to}`, 20, 30);
      pdf.text(`purpose: ${Cert.purpose}`, 20, 40);
      pdf.text(`issued_on: ${Cert.issued_on}`, 20, 50);
      pdf.text(`Status: ${Cert.status}`, 20, 60);
      pdf.save('generated-pdf.pdf');
    };

    generatePdf();

  return <div>PDF is being generated...</div>;
};

export default PdfGenerator;
