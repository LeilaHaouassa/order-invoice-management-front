import * as Yup from 'yup';
import moment from 'moment';
import OrderFormModel from './OrderFormModel';
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

//const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default  [
    //Customer Info
  Yup.object().shape({
    [customerFullName.name]: Yup.string().required(`${customerFullName.requiredErrorMsg}`),
    [customerEmail.name]: Yup.string()
        .required(`${customerEmail.requiredErrorMsg}`)
        .email('Pas un mail valide'),
    [customerPhoneNumber.name]: Yup.string().required(`${customerPhoneNumber.requiredErrorMsg}`),
    [customerCity.name]: Yup.string()
      .nullable()
      .required(`${customerCity.requiredErrorMsg}`),
    [customerZipcode.name]: Yup.string()
      .required(`${customerZipcode.requiredErrorMsg}`)
      .test(
        'len',
        `${customerZipcode.invalidErrorMsg}`,
        val => val && val.length === 4
      ),
    
    [noteOnCustomer.name]: Yup.string(),
  }),
  //Supplier Info
  Yup.object().shape({
    [supplierFullName.name]: Yup.string().required(`${supplierFullName.requiredErrorMsg}`),
    [supplierEmail.name]: Yup.string()
        .required(`${supplierEmail.requiredErrorMsg}`)
        .email('Pas un mail valide'),
    [supplierPhoneNumber.name]: Yup.string().required(`${supplierPhoneNumber.requiredErrorMsg}`),
    [supplierCity.name]: Yup.string()
      .nullable()
      .required(`${supplierCity.requiredErrorMsg}`),
    [supplierZipcode.name]: Yup.string()
      .required(`${supplierZipcode.requiredErrorMsg}`)
      .test(
        'len',
        `${supplierZipcode.invalidErrorMsg}`,
        val => val && val.length === 4
      ),
    
    [noteOnSupplier.name]: Yup.string(),
  }),
  //Order Items
  Yup.object().shape({
    [itemName.name]: Yup.string().required(`${itemName.requiredErrorMsg}`),
    [itemPrice.name]: Yup.string()
      .required(`${itemPrice.requiredErrorMsg}`),
    [itemQuantity.name]: Yup.string()
      .required(`${itemQuantity.requiredErrorMsg}`),
    [itemDescription.name]: Yup.string(),
    // [expiryDate.name]: Yup.string()
    //   .nullable()
    //   .required(`${expiryDate.requiredErrorMsg}`)
    //   .test('expDate', expiryDate.invalidErrorMsg, val => {
    //     if (val) {
    //       const startDate = new Date();
    //       const endDate = new Date(2050, 12, 31);
    //       if (moment(val, moment.ISO_8601).isValid()) {
    //         return moment(val).isBetween(startDate, endDate);
    //       }
    //       return false;
    //     }
    //     return false;
    //   }),
    // [cvv.name]: Yup.string()
    //   .required(`${cvv.requiredErrorMsg}`)
    //   .test('len', `${cvv.invalidErrorMsg}`, val => val && val.length === 3)
  })
];
