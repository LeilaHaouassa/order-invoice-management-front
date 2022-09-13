
import OrderFormModel from "./OrderFormModel";

const {
    formField: {
        
        customerFullName,
        customerPhoneNumber,
        customerEmail,
        customerCity, 
        customerZipcode,
        noteOnCustomer,
        supplierFullName,
        supplierPhoneNumber,
        supplierEmail, 
        supplierCity,
        supplierZipcode,
        noteOnSupplier,
        itemName ,
        itemPrice,
        itemQuantity,
        itemDescription,
        expiryDate,

    }
} = OrderFormModel; 

export default {
  
  [customerFullName.name]: '',
  [customerPhoneNumber.name]: '',
  [customerEmail.name]: '',
  [customerCity.name]: '',
  [customerZipcode.name]: '',
  [noteOnCustomer.name]: '',
  [supplierFullName.name]: '',
  [supplierPhoneNumber.name]: '',
  [supplierEmail.name]: '',
  [supplierCity.name]: '',
  [supplierZipcode.name]: '',
  [noteOnSupplier.name]: '',
  [itemName.name]: '',
  [itemPrice.name]: '',
  [expiryDate.name]: '',
  [itemDescription.name]: '',
  [itemQuantity.name]: ''
};

  