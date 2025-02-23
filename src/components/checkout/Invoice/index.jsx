import styled from 'styled-components';
import CompanyLogo from '@/assets/logo.svg';

// Styled Components
const Cotainer = styled.div`
   background: #ffffff;
   border-radius: 20px;
   padding: 1.5rem;
   max-width: 650px;
   width: 100%;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   font-family: 'Arial', sans-serif;
   margin: auto;
`;

const InvoiceContainer = styled.div`
   background: #f2fdfc;
   padding: 1.5rem;
   border-radius: 10px;
   margin-bottom: 1.5rem;
`;

const InvoiceHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-bottom: 1rem;
   margin-bottom: 1rem;
`;
const BillSection = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   background: #f2fdfc;
   padding: 14px 0;
   border-radius: 10px;
   margin-bottom: 1.5rem;

   @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
   }
`;

const BillingHeader = styled.div`
   padding: 4px 0;

   p {
      padding: 4px 0;
   }
`;

const BilingDetails = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
`;
const BillTo = styled.div`
   font-size: 14px;
   max-width: 50%;
   flex: 1;

   strong {
      font-size: 16px;
      color: #000;
   }

   p {
      padding: 4px 0;
   }
`;

const InvoiceDates = styled.div`
   font-size: 14px;
   text-align: right;
   max-width: 50%;
   flex: 1;

   p {
      margin: 4px 0;
      padding: 8px 0;
   }

   @media (max-width: 768px) {
      text-align: left;
      max-width: 100%;
      margin-top: 10px;
   }
`;
const Title = styled.h2`
   font-size: 1.8rem;
   font-weight: bold;
   color: #333;
`;

const InvoiceNumber = styled.div`
   font-size: 14px;
   color: #555;
   text-align: right;

   span {
      font-weight: bold;
      color: #000;
   }
`;

const Table = styled.table`
   width: 100%;
   border-collapse: collapse;
   margin-top: 1rem;
   font-size: 14px;

   th,
   td {
      padding: 10px;
      border-bottom: 1px solid #ddd;
   }

   th {
      font-weight: bold;
   }

   td:nth-child(1),
   td:nth-child(2),
   th:nth-child(1),
   th:nth-child(2) {
      text-align: left; /* First two columns aligned left */
   }

   td:nth-child(n + 3),
   th:nth-child(n + 3) {
      text-align: right; /* Other columns aligned right */
   }
`;

const TotalContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   margin: 2rem 0;
`;

const Total = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 16px;
   font-weight: bold;
   margin-top: 10px;
   padding: 12px;
   background: #f2fdfc;
   border-radius: 5px;
   width: 16rem;
`;

const FooterSection = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   margin-top: 20px;
   gap: 1rem;
   font-size: 14px;

   @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
   }
`;

const ContactInfo = styled.div`
   font-size: 12px;
   width: 50%;

   h3 {
      font-size: 14px;
      font-weight: bold;
   }

   p {
      margin: 4px 0;
   }

   a {
      color: #0d928d;
      text-decoration: none;
      font-weight: bold;
   }

   img {
      width: 120px;
      height: 50px;
      object-fit: contain;
      margin-bottom: 10px;
   }
`;

const BankDetails = styled.div`
   background: #f2fdfc;
   padding: 10px;
   border-radius: 5px;
   font-size: 12px;
   width: 50%;

   strong {
      font-weight: bold;
   }

   @media (max-width: 600px) {
      width: 100%;
   }
   p {
      margin: 4px 0;
      color: #5e6470;
   }
`;

const DownloadBtnContainer = styled.div`
   display: flex;
   justify-content: flex-end; /* Aligns button to the right */
   width: 100%;
   padding: 1rem 0; /* Adds spacing */
`;

const DownloadButton = styled.button`
   padding: 12px;
   background: #0d928d;
   color: white;
   font-size: 14px;
   font-weight: bold;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   margin-top: 20px;
   transition: background 0.3s ease;
   align-self: flex-end;

   &:hover {
      background: #098675;
   }

   @media (max-width: 600px) {
      width: 100%;
      align-self: center;
   }
`;

const Invoice = () => {
   return (
      <Cotainer>
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
                  <td>1</td>
                  <td>CAD $7,428.75</td>
                  <td>CAD $7,428.75</td>
               </tr>
            </tbody>
         </Table>

         {/* Total */}
         <TotalContainer>
            <Total>
               <span>Total (CAD)</span>
               <span>$7,428.75</span>
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
            <DownloadButton>Download</DownloadButton>
         </DownloadBtnContainer>
      </Cotainer>
   );
};

export default Invoice;
