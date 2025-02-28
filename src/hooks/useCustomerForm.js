import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useCustomerForm = () => {
   const { data } = useSelector((state) => state.customerInfo);

   const [formData, setFormData] = useState(data);

   const [errors, setErrors] = useState({});
   // const [isFormFilled, setIsFormFilled] = useState(false);

   const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      const newValue = type === 'checkbox' || type === 'radio' ? checked : value;

      setFormData((prevData) => {
         const keys = name.split('.'); // e.g., "billing.city"
         // Make a shallow copy of the root object
         const updatedData = { ...prevData };
         let current = updatedData;

         // Loop over the keys, cloning each nested object along the path
         for (let i = 0; i < keys.length - 1; i++) {
            // Clone the nested object to ensure we don't mutate the original
            current[keys[i]] = { ...current[keys[i]] };
            current = current[keys[i]];
         }
         // Set the new value on the final key
         current[keys[keys.length - 1]] = newValue;

         return updatedData;
      });

      // Remove error message when user types
      setErrors((prevErrors) => ({
         ...prevErrors,
         [name]: '',
      }));
   };

   useEffect(() => {
      setFormData((prevData) => ({ ...prevData, ...data }));
      console.log(data);
   }, [data]);

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

   // useEffect(() => {
   //    const isFilled = (obj) => {
   //       return Object.values(obj).every((value) => {
   //          if (typeof value === 'object' && value !== null) {
   //             return isFilled(value); // Recursively check nested objects
   //          }
   //          return value !== '' && value !== null && value !== undefined;
   //       });
   //    };

   //    setIsFormFilled(isFilled(formData));
   //    console.log('is filled', isFormFilled);
   // }, [formData, isFormFilled]);

   return {
      formData,
      handleInputChange,
      handleToggleShipping, // ✅ Return Toggle Function
      validateForm,
      errors,
      // isFormFilled,
   };
};

export default useCustomerForm;
