import styled from 'styled-components';
import CompanyLogo from '@/assets/logo.svg';
import BankLogo from '@/assets/refered_bank.svg';
const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background: #ffffff;
   padding: 1rem;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   border-radius: 24px;
`;

const Header = styled.div`
   background: #e6f7f7;
   padding: 1.5rem;
   text-align: center;
   border-radius: 10px;
   margin-bottom: 1.5rem;
`;

const HeaderContant = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;
`;
const Title = styled.h2`
   font-size: 1.5rem;
   font-weight: bold;
   color: #333;
`;

const Description = styled.p`
   font-size: 14px;
   color: #555;
`;

const DetailsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   text-align: left;
   padding-left: 1rem;
`;

const DetailItem = styled.div`
   font-size: 14px;
   color: #333;
   display: flex;
   gap: 8px;
   align-items: center;
   &::before {
      content: '•';
      color: #0d928d;
      font-size: 18px;
   }
`;

const Note = styled.div`
   padding: 1rem 18px;

   & p {
      font-size: 12px;
      color: #777;
      text-align: left;
   }
`;

const InputGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 15px;
   width: 100%;
   padding: 0 18px;

   @media (max-width: 600px) {
      grid-template-columns: 1fr;
   }
`;

const Input = styled.input`
   width: 100%;
   padding: 18px;
   border: 1px solid #ccc;
   border-radius: 5px;
   font-size: 14px;
   background: white;
   outline: none;

   &:focus {
      border-color: #0d928d;
   }
`;

const ListItemContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 1rem 0;
   gap: 6rem;
`;

const Text = styled.div`
   font-size: 14px;
   color: #000000;
   font-weight: bold;
`;

const SignatureSection = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   font-size: 14px;
   font-weight: bold;
   margin-top: 1.5rem;
   align-items: center;
   padding: 24px 22px;
`;

const SignatureBox = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 48%; /* Keeps both boxes equal */

   & span {
      color: #121722;
      font-size: 16px;
   }
`;

const SignatureInput = styled.input`
   width: 100%;
   padding: 10px;
   border: none; /* Removes all borders */
   border-bottom: 1px solid #33333352;
   border-radius: 0; /* Removes rounded corners */
   font-size: 14px;
   text-align: center;
   margin-bottom: 5px;
   background: transparent;
   outline: none; /* Removes all outlines */
   box-shadow: none; /* Ensures no shadow appears on focus */
`;

const Disclaimer = styled.p`
   font-size: 12px;
   color: #666;
   margin-top: 15px;
   text-align: justify;
   padding: 0 12px;
`;

const ContactSection = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   max-width: 900px;
   margin: auto;
   padding: 2rem 0;
   gap: 2rem;

   @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
   }
`;

const ContactInfo = styled.div`
   display: flex;
   flex-direction: column;
   flex: 1;
   padding: 0px 40px;

   img {
      width: 120px;
      height: 50px;
      object-fit: contain;
      margin-bottom: 10px;
   }

   h3 {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
   }

   p {
      font-size: 14px;
      color: #333;
      margin: 2px 0;
   }

   a {
      color: #0d928d;
      text-decoration: none;
      //   font-weight: bold;

      &:hover {
         text-decoration: underline;
      }
   }
`;
const SubmitButtonContainer = styled.div`
   display: flex;
   justify-content: flex-end; /* Aligns button to the right */
   width: 100%;
   padding: 1rem 0; /* Adds spacing */
`;

const SubmitButton = styled.button`
   padding: 12px 24px;
   background: #0d928d;
   color: white;
   font-size: 15px;
   font-weight: bold;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   transition: background 0.3s ease;

   &:hover {
      background: #098675;
   }
`;

const FinanceForm = () => {
   return (
      <Container>
         <Header>
            <HeaderContant>
               <Title>ON2 SmartLease Program</Title>
               <Description>
                  ON2 Systems has partnered with Highland Capital to provide flexible financing
                  solutions for your capital equipment needs.
               </Description>
            </HeaderContant>
            <ListItemContainer>
               <Text>Details:</Text>
               <DetailsContainer>
                  <DetailItem>Quick & Simple Application Process</DetailItem>
                  <DetailItem>One-Time Documentation Fee of $25</DetailItem>
                  <DetailItem>Interest-Free Early Buyout After 12 Monthly Payments</DetailItem>
               </DetailsContainer>
            </ListItemContainer>
         </Header>
         <Note>
            <p>
               {' '}
               Certain restrictions apply. All finance requests are subject to credit approval. All
               rates, payments, and terms are subject to change at any time.
            </p>
         </Note>
         <InputGrid>
            <Input placeholder="Legal Business Name" />
            <Input placeholder="Federal Tax ID" />
            <Input placeholder="Business Address" />
            <Input placeholder="City, State, Zip" />
            <Input placeholder="Office Phone Number" />
            <Input placeholder="Office E-Mail" />
            <Input placeholder="Owner Name (1)" />
            <Input placeholder="Owner Social Security # (1)" />
            <Input placeholder="E-Mail Address (1)" />
            <Input placeholder="Owner Name (2)" />
            <Input placeholder="Owner Social Security # (2)" />
            <Input placeholder="E-Mail Address (2)" />
         </InputGrid>

         <SignatureSection>
            <SignatureBox>
               <SignatureInput type="text" placeholder="Sign here..." />
               <span>Owner (1) Signature / Date:</span>
            </SignatureBox>
            <SignatureBox>
               <SignatureInput type="text" placeholder="Sign here..." />
               <span>Owner (2) Signature / Date:</span>
            </SignatureBox>
         </SignatureSection>

         <Disclaimer>
            <strong>AUTHORIZATION:</strong> By submitting or signing and faxing the above
            application, you certify that the information provided in this credit application is
            accurate and complete and you authorize Highland Capital Corporation, its successors
            and/or assigns to obtain information from the references listed and obtain a consumer
            credit report that will be ongoing and relate not only to the evaluation and/or
            extension of the business credit requested, but also for purposes of reviewing the
            account, increasing the credit line on the account (if applicable), taking collection
            action on the account, and for any other legitimate purpose associated with the account
            as may be needed from time to time. The individual signing or submitting this
            application further waives any right or claim, which such individual would otherwise
            have under Fair Credit Reporting Act in the absence of t this continuing consent. If
            more than one person signs above, it is the intent of the above signed to apply for
            joint credit.
         </Disclaimer>

         <Disclaimer>
            <strong>ECOA NOTICE (TO BE RETAINED BY APPLICANT) ::</strong> Your business credit
            application will be reviewed carefully and a decision will be rendered promptly. If your
            business credit application is denied. you have the right to a written Statement of the
            specific reasons for denial. To obtain a statement, please contact us within 60 days
            from the date that you are notified of our decision. We will send you a written
            statement of the reasons for denial within 30 days of your request.
         </Disclaimer>
         <Disclaimer>
            <strong>NOTICE:</strong> The Federal Equal Credit Opportunity Act prohibits creditors
            from discriminating against credit applicants on the basis of race, color, religion,
            national origin, gender, marital status, age (provided applicant has the capacity to
            enter into a binding contract), because all or part of the applicant&apos;s income
            derives from any public assistance program, or because the applicant has, in good faith,
            exercised any right under the Consumer Credit Protection Act. The federal agency that
            administers our compliance with this law is the Burea of Consumer Financial Protection,
            1700 G Street NW, Wsahington, DC 20006.
         </Disclaimer>
         <ContactSection>
            <ContactInfo>
               <img src={CompanyLogo} alt="ON2 Solutions Logo" />
               <h3>ON2 Solutions</h3>
               <p>Address / Contact Info</p>
               <p>7901 4th St N Suite 2319</p>
               <p>St. Petersburg, FL 33702</p>
               <p>Phone: 850-988-5948</p>
               <p>Toll Free: 1-866-579-4921</p>
               <p>
                  Website: <a href="https://www.on2solutions.ca">www.on2solutions.ca</a>
               </p>
            </ContactInfo>

            <ContactInfo>
               <img src={BankLogo} alt="HCC Highland Capital Corporation Logo" />
               <h3>CONTACT US TODAY FOR MORE INFORMATION</h3>
               <p>Contact: Sophia Gardner</p>
               <p>Phone: (973) 557-5277</p>
               <p>
                  Email:{' '}
                  <a href="mailto:sophia.gardner@highlandcc.com">sophia.gardner@highlandcc.com</a>
               </p>
            </ContactInfo>
         </ContactSection>

         <SubmitButtonContainer>
            <SubmitButton>Submit</SubmitButton>
         </SubmitButtonContainer>
      </Container>
   );
};

export default FinanceForm;
