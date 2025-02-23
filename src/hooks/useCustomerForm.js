import { useDispatch, useSelector } from 'react-redux';
import { updateForm, toggleShippingAddress } from '@/redux/slices/customerInfoSlice';

const useCustomerForm = () => {
   const dispatch = useDispatch();
   const formData = useSelector((state) => state.form);

   const handleInputChange = (e) => {
      dispatch(updateForm({ [e.target.name]: e.target.value }));
   };

   const handleToggleShipping = () => {
      dispatch(toggleShippingAddress());
   };

   return { formData, handleInputChange, handleToggleShipping };
};

export default useCustomerForm;
