import CompanyLogo from '@/assets/logo.svg';
import BankLogo from '@/assets/refered_bank.svg';
import {
   Container,
   Description,
   DetailsContainer,
   Header,
   HeaderContant,
   ListItemContainer,
   Title,
   Text,
   DetailItem,
   Note,
   InputGrid,
   Input,
   SignatureSection,
   SignatureBox,
   SignatureInput,
   Disclaimer,
   ContactSection,
   ContactInfo,
   SubmitButtonContainer,
   SubmitButton,
   InputWrapper,
   ErrorMessage,
} from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { submitFinanceForm } from '@/redux/thunks/financeForm';

const FinanceForm = () => {
   const dispatch = useDispatch();
   const [formData, setFormData] = useState({
      businessName: '',
      taxId: '',
      address: '',
      cityStateZip: '',
      phone: '',
      email: '',
      owner1Name: '',
      owner1SSN: '',
      owner1Email: '',
      owner2Name: '',
      owner2SSN: '',
      owner2Email: '',
      owner1Signature: '',
      owner2Signature: '',
   });

   const [errors, setErrors] = useState({});

   // Handle Input Change
   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
      // Remove error when user starts typing
      setErrors((prev) => ({
         ...prev,
         [name]: '',
      }));
   };

   // Validate Form
   const validateForm = () => {
      const newErrors = {};
      Object.keys(formData).forEach((key) => {
         if (!formData[key]) {
            newErrors[key] = 'This field is required';
         }
      });

      if (formData.owner1Signature != formData.owner2Signature) {
         newErrors.owner2Signature = 'Signatures must match';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   // Handle Form Submission
   const handleSubmit = () => {
      if (validateForm()) {
         console.log('📌 Form Submitted Data:', formData);
         const { meta, payload } = dispatch(submitFinanceForm());
         if (meta.requestStatus === 'fulfilled') {
            alert(`${payload}`);
         }
      }
   };

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
               Certain restrictions apply. All finance requests are subject to credit approval. All
               rates, payments, and terms are subject to change at any time.
            </p>
         </Note>

         {/* ✅ Input Fields */}
         <InputGrid>
            {[
               { label: 'Legal Business Name', name: 'businessName' },
               { label: 'Federal Tax ID', name: 'taxId' },
               { label: 'Business Address', name: 'address' },
               { label: 'City, State, Zip', name: 'cityStateZip' },
               { label: 'Office Phone Number', name: 'phone' },
               { label: 'Office E-Mail', name: 'email' },
            ].map((field, index) => (
               <InputWrapper key={index}>
                  <Input
                     placeholder={field.label}
                     name={field.name}
                     value={formData[field.name]}
                     onChange={handleInputChange}
                     error={errors[field.name]}
                  />
                  {errors[field.name] && <ErrorMessage>{errors[field.name]}</ErrorMessage>}
               </InputWrapper>
            ))}

            {[
               { label: 'Owner Name (1)', name: 'owner1Name' },
               { label: 'Owner Social Security # (1)', name: 'owner1SSN' },
               { label: 'E-Mail Address (1)', name: 'owner1Email' },
               { label: 'Owner Name (2)', name: 'owner2Name' },
               { label: 'Owner Social Security # (2)', name: 'owner2SSN' },
               { label: 'E-Mail Address (2)', name: 'owner2Email' },
            ].map((field, index) => (
               <InputWrapper key={index}>
                  <Input
                     placeholder={field.label}
                     name={field.name}
                     value={formData[field.name]}
                     onChange={handleInputChange}
                     error={errors[field.name]}
                  />
                  {errors[field.name] && <ErrorMessage>{errors[field.name]}</ErrorMessage>}
               </InputWrapper>
            ))}
         </InputGrid>

         {/* ✅ Signature Section */}
         <SignatureSection>
            <SignatureBox>
               <SignatureInput
                  type="text"
                  placeholder="Sign here..."
                  name="owner1Signature"
                  value={formData.owner1Signature}
                  onChange={handleInputChange}
               />
               <span>Owner (1) Signature / Date:</span>
               {errors.owner1Signature && <ErrorMessage>{errors.owner1Signature}</ErrorMessage>}
            </SignatureBox>
            <SignatureBox>
               <SignatureInput
                  type="text"
                  placeholder="Sign here..."
                  name="owner2Signature"
                  value={formData.owner2Signature}
                  onChange={handleInputChange}
               />
               <span>Owner (2) Signature / Date:</span>
               {errors.owner2Signature && <ErrorMessage>{errors.owner2Signature}</ErrorMessage>}
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
            <SubmitButton on onClick={handleSubmit}>
               Submit
            </SubmitButton>
         </SubmitButtonContainer>
      </Container>
   );
};

export default FinanceForm;
