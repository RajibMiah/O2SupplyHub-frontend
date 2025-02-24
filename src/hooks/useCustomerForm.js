import { useEffect, useState } from 'react';

const useCustomerForm = () => {
   const [formData, setFormData] = useState({
      customer: {
         details: '',
         contractPerson: '',
         referenceNumber: '',
         preparedBy: '',
         location: '',
         contact: {
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
         differentShipping: false, // ✅ Toggle This
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
         constructionSite: false,
         liftGate: false,
         insideDelivery: false,
         whiteGlove: false,
      },
   });

   const [errors, setErrors] = useState({});
   const [isFormFilled, setIsFormFilled] = useState(false);

   // ✅ Handle Input Change & Remove Errors
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

      // ✅ Remove error message when user types
      setErrors((prevErrors) => ({
         ...prevErrors,
         [name]: '',
      }));
   };

   // ✅ Toggle Different Shipping Address Checkbox
   const handleToggleShipping = () => {
      setFormData((prevData) => ({
         ...prevData,
         billing: {
            ...prevData.billing,
            differentShipping: !prevData.billing.differentShipping, // ✅ Toggle Value
         },
      }));
   };

   // ✅ Validate Form Before Submission
   const validateForm = () => {
      const newErrors = {};

      const checkFields = (obj, parentKey = '') => {
         Object.entries(obj).forEach(([key, value]) => {
            const fieldName = parentKey ? `${parentKey}.${key}` : key;
            if (typeof value === 'object' && value !== null) {
               checkFields(value, fieldName);
            } else if (value === '' || value === null || value === undefined) {
               newErrors[fieldName] = 'This field is required';
            }
         });
      };

      // ✅ Always Validate Customer & Billing Fields
      checkFields(formData.customer, 'customer');
      checkFields(formData.billing, 'billing');

      // ✅ Only Validate Shipping Fields if `differentShipping` is TRUE
      if (formData.billing.differentShipping) {
         checkFields(formData.shipping, 'shipping');
      }

      setErrors(newErrors);
      console.log('Errors:', formData);
      return Object.keys(newErrors).length === 0;
   };

   useEffect(() => {
      const isFilled = (obj) => {
         return Object.values(obj).every((value) => {
            if (typeof value === 'object' && value !== null) {
               return isFilled(value); // Recursively check nested objects
            }
            return value !== '' && value !== null && value !== undefined;
         });
      };

      setIsFormFilled(isFilled(formData));
      console.log('is filled', isFormFilled);
   }, [formData, isFormFilled]);

   return {
      formData,
      handleInputChange,
      handleToggleShipping, // ✅ Return Toggle Function
      validateForm,
      errors,
      isFormFilled,
   };
};

export default useCustomerForm;
