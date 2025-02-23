import { useState } from 'react';

const useCustomerForm = () => {
   const [formData, setFormData] = useState({
      customer: {
         details: '',
         contractPerson: '',
         referenceNumber: '',
         preparedBy: '',
         location: '',
      },
      billing: {
         facilityName: '',
         streetAddress: '',
         city: '',
         state: '',
         zip: '',
         country: '',
         taxId: '',
         receivingType: '',
         receivingHours: '',
         differentShipping: false,
      },
      shipping: {
         facilityName: '',
         streetAddress: '',
         city: '',
         state: '',
         zip: '',
         country: '',
         taxId: '',
         receivingType: '',
         receivingHours: '',
      },
      instructions: {
         constructionSite: false, // ✅ Now boolean
         liftGate: false, // ✅ Now boolean
         insideDelivery: false, // ✅ Now boolean
         whiteGlove: false, // ✅ Now boolean
      },
   });

   // ✅ Handle Input Change
   const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      const newValue = type === 'checkbox' || type === 'radio' ? checked : value;

      setFormData((prevData) => {
         const keys = name.split('.'); // Splitting keys like billing.city
         const updatedData = { ...prevData };

         let current = updatedData;
         for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
         }
         current[keys[keys.length - 1]] = newValue;

         return { ...updatedData };
      });

      console.log('Updated Form Data:', formData);
   };

   return {
      formData,
      handleInputChange,
   };
};

export default useCustomerForm;
