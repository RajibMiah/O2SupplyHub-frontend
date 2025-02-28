import { createAsyncThunk } from '@reduxjs/toolkit';

const url = import.meta.env.VITE_API_URL;

export const submitFinanceForm = createAsyncThunk(
   'finance/submitFinanceForm',
   async (formData, { rejectWithValue }) => {
      // Build the owners array from the individual fields
      const owners = [];

      if (formData.owner1Name) {
         owners.push({
            name: formData.owner1Name,
            ssn: formData.owner1SSN,
            email: formData.owner1Email,
            signature: formData.owner1Signature,
         });
      }

      if (formData.owner2Name) {
         owners.push({
            name: formData.owner2Name,
            ssn: formData.owner2SSN,
            email: formData.owner2Email,
            signature: formData.owner2Signature,
         });
      }

      // Build the final form data object
      const submissionData = {
         businessName: formData.businessName,
         taxId: formData.taxId,
         address: formData.address,
         cityStateZip: formData.cityStateZip, // you might want to parse this on the backend
         phone: formData.phone,
         email: formData.email,
         owners, // now grouped as an array of owner objects
      };

      try {
         // Retrieve token from localStorage
         const token = localStorage.getItem('authToken');

         const response = await fetch(`${url}/customer/finance-form`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`, // Attach token here
            },
            body: JSON.stringify(submissionData),
         });

         console.log('🔍 Response Status:', response.status);

         // Parse JSON response
         const data = await response.json();

         // If API sends { success: false }, handle rejection
         if (data.success === false) {
            return rejectWithValue(data.message || 'Submission failed');
         }

         return data;
      } catch (error) {
         console.error('❌ Error Submitting Finance Form:', error);
         return rejectWithValue(error.message || 'Something went wrong');
      }
   }
);
