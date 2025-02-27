import { useSelector } from 'react-redux';
import CompanyLogo from '@/assets/logo.svg';
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
   // ✅ Get user details from Redux store
   const user = useSelector((state) => state.auth.user);

   // ✅ Get invoice-related selection data
   const { quantity, selectedOxygenGen } = useSelector((state) => state.selection);

   // ✅ Handle empty user state
   if (!user) {
      return <p>Loading user data...</p>;
   }

   const handlePrintDownload = () => {
      const printContent = document.getElementById('invoice-print').innerHTML;
      const stylesheets = Array.from(document.styleSheets)
         .map((sheet) => {
            try {
               return Array.from(sheet.cssRules)
                  .map((rule) => rule.cssText)
                  .join('');
            } catch {
               return ''; // Some stylesheets might be cross-origin and not accessible
            }
         })
         .join('');

      const newWindow = window.open('', '_blank'); // Open new print window
      newWindow.document.write(`
      <html>
         <head>
            <title>Print Invoice</title>
            <style>
               ${stylesheets}  /* Inject all available styles */
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

      newWindow.document.close();
      newWindow.focus();
      setTimeout(() => {
         newWindow.print();
         newWindow.close();
      }, 500);
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
                  <strong>{user.contact.name || 'Client Name'}</strong>
               </BillingHeader>
               <BilingDetails>
                  <BillTo>
                     <p>{user.location || '123 Maplewood Lane, Toronto, ON M5V 1A1, Canada'}</p>
                     <p>Phone: {user.contact?.phone || '01xxxxxx'}</p>
                     <p>Email: {user.contact?.email || 'abc@gmail.com'}</p>
                  </BillTo>

                  <InvoiceDates>
                     <p>
                        Issued on:{' '}
                        <strong>
                           {new Date().toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                           })}
                        </strong>
                     </p>
                     <p>
                        Payment Due:{' '}
                        <strong>
                           {new Date().toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                           })}
                        </strong>
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
                  <td>{selectedOxygenGen.model}</td>
                  <td>{quantity}</td>
                  <td>CAD ${selectedOxygenGen.priceMSRP.toFixed(2)}</td>
                  <td>CAD ${selectedOxygenGen.totalPrice.toFixed(2)}</td>
               </tr>
            </tbody>
         </Table>

         {/* Total */}
         <TotalContainer>
            <Total>
               <span>Total (CAD)</span>
               <span>${selectedOxygenGen.totalPrice.toFixed(2)}</span>
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
