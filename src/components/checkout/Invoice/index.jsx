import CompanyLogo from '@/assets/logo.svg';
import { useSelector } from 'react-redux';
import { selectQuantity, selectTotalRetailPrice } from '@redux/slices/selectionSlice';
import {
   Cotainer,
   InvoiceContainer,
   InvoiceHeader,
   BillSection,
   BillingHeader,
   BilingDetails,
   BillTo,
   InvoiceDates,
   Title,
   InvoiceNumber,
   Table,
   TotalContainer,
   Total,
   FooterSection,
   ContactInfo,
   BankDetails,
   DownloadBtnContainer,
   DownloadButton,
} from './styles';

const Invoice = () => {
   const quantity = useSelector(selectQuantity);
   const totalRetailPrice = useSelector(selectTotalRetailPrice);
   // const totalLeasePrice = useSelector(selectTotalLeasePrice);
   const handlePrintDownload = () => {
      const printContent = document.getElementById('invoice-print').innerHTML;
      const styles = document.head.innerHTML; // Extracts all styles applied to the page

      const newWindow = window.open('', '_blank'); // Open new print window
      newWindow.document.write(`
      <html>
         <head>
            <title>Print Invoice</title>
            ${styles}  <!-- Apply all styles from the original document -->
            <style>
               @media print {
                  body {
                     -webkit-print-color-adjust: exact !important;
                     print-color-adjust: exact !important;
                  }
                  .no-print {
                     display: none !important;
                  }
               }
            </style>
         </head>
         <body>
            <div id="invoice-print">${printContent}</div>
         </body>
      </html>
   `);

      newWindow.document.close(); // Close document to apply styles
      newWindow.focus();
      setTimeout(() => {
         newWindow.print();
         newWindow.close();
      }, 500); // Wait for styles to load before printing
   };

   return (
      <Cotainer id="invoice-print">
         {/* Header */}
         <InvoiceContainer>
            <InvoiceHeader>
               <Title>Invoice</Title>
               <InvoiceNumber>
                  Invoice No. <br />
                  <span>#000123</span>
               </InvoiceNumber>
            </InvoiceHeader>

            <BillSection>
               <BillingHeader>
                  <p>Billed To:</p>
                  <strong>Client Name</strong>
               </BillingHeader>
               <BilingDetails>
                  <BillTo>
                     <p>123 Maplewood Lane, Toronto, ON M5V 1A1, Canada</p>
                     <p>Phone: 01xxxxxx</p>
                     <p>Email: abc@gmail.com</p>
                  </BillTo>

                  {/* Invoice Dates */}
                  <InvoiceDates>
                     <p>
                        Issued on: <strong>December 7, 2022</strong>
                     </p>
                     <p>
                        Payment Due: <strong>December 22, 2022</strong>
                     </p>
                  </InvoiceDates>
               </BilingDetails>
            </BillSection>
         </InvoiceContainer>
         {/* Products Table */}
         <Table>
            <thead>
               <tr>
                  <th>Products</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Total</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Aura® 10 Nano</td>
                  <td>{quantity}</td>
                  <td>CAD $7,428.75</td>
                  <td>CAD ${totalRetailPrice.toFixed(2)}</td>
               </tr>
            </tbody>
         </Table>

         {/* Total */}
         <TotalContainer>
            <Total>
               <span>Total (CAD)</span>
               <span>${totalRetailPrice.toFixed(2)}</span>
            </Total>
         </TotalContainer>

         {/* Footer Section */}
         <FooterSection>
            {/* Company Info */}
            <ContactInfo>
               <img src={CompanyLogo} alt="ON2 Solutions Logo" />
               <h3>ON2 Solutions</h3>
               <p>Address / Contact Info</p>
               <p>
                  <a href="mailto:sales@on2solutions.ca">sales@on2solutions.ca</a>
               </p>
               <p>British Columbia</p>
               <p>1-20133 102 Avenue, Langley, BC. V1M 4B4</p>
               <p>Manitoba</p>
               <p>Unit 7 - 186 Cochlan Dr., Morden, MB. R6M 1G5</p>
            </ContactInfo>

            {/* Bank Details */}
            <BankDetails>
               <strong>Bank Details</strong>
               <p>Wells FargoBank, N.A</p>
               <p>Beneficiary Acct. #92104462</p>
               <p>Beneficiary Name: ON2 SYSTEMS INC</p>
               <p>Address: ABCDUSB8XXX</p>
               <p>Beneficiary Address: 91 N CAVALIER ST. UNIT 2 PEMBINA ND 582</p>
               <p>
                  <strong>For International:</strong> SWIFT/BIC code WFBIUS
               </p>
               <p>
                  <strong>For Domestic Wires:</strong> Wire Routing Transit Number
               </p>
            </BankDetails>
         </FooterSection>

         {/* Download Button */}
         <DownloadBtnContainer>
            <DownloadButton onClick={handlePrintDownload}>Download</DownloadButton>
         </DownloadBtnContainer>
      </Cotainer>
   );
};

export default Invoice;
