export default {
    formId: 'checkoutForm',
    formField: {
      customerFullName : {
        name: 'customerFullName',
        label: 'Nom Complet *',
        requiredErrorMsg: 'Nom est obligatoire'
      },
      customerPhoneNumber: {
        name: 'customePhoneNumber',
        label: 'Telephone *',
        requiredErrorMsg: 'Telephone est obligatoire'
      },
      customerEmail: {
        name: 'customerEmail',
        label: 'Adresse mail *',
        requiredErrorMsg: 'Adresse mail est obligatoire'
      },
      noteOnCustomer: {
        name: 'noteonCustomer',
        label: 'Remarque'
      },
      
      customerCity: {
        name: 'customerCity',
        label: 'Ville *',
        requiredErrorMsg: 'Ville est obligatoire'
      },
      customerZipcode: {
        name: 'customerZipcode',
        label: 'Code postal *',
        requiredErrorMsg: 'Code postal est obligatoire',
        invalidErrorMsg: 'Code postal non valid (e.g. 4002)'
      },
      supplierFullName : {
        name: 'supplierFullName',
        label: 'Nom Complet *',
        requiredErrorMsg: 'Nom est obligatoire'
      },
      supplierPhoneNumber: {
        name: 'supplierPhoneNumber',
        label: 'Telephone *',
        requiredErrorMsg: 'Telephone est obligatoire'
      },
      supplierEmail: {
        name: 'supplierEmail',
        label: 'Adresse mail *',
        requiredErrorMsg: 'Adresse mail est obligatoire'
      },
      noteOnSupplier: {
        name: 'noteOnSupplier',
        label: 'Remarque'
      },
      
      supplierCity: {
        name: 'supplierCity',
        label: 'Ville *',
        requiredErrorMsg: 'Ville est obligatoire'
      },
      supplierZipcode: {
        name: 'supplierZipcode',
        label: 'Code postal *',
        requiredErrorMsg: 'Code postal est obligatoire',
        invalidErrorMsg: 'Code postal non valid (e.g. 4002)'
      },
      itemName : {
        name: 'itemName',
        label: 'Nom de l\'article *',
        requiredErrorMsg: 'Nom de l\'article  est obligatoire'
      },
      itemPrice: {
        name: 'itemPrice',
        label: 'Prix de l\'article *',
        requiredErrorMsg: 'Prix de l\'article  est obligatoire'
      },
      itemQuantity: {
        name: 'itemQuantity',
        label: 'Quantité *',
        requiredErrorMsg: 'Quantité est obligatoire'
      },
      itemDescription: {
        name: 'itemDescription',
        label: 'Description'
        // invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
      },
      expiryDate: {
        name: 'expiryDate',
        label: 'Expiry date *',
        requiredErrorMsg: 'Expiry date est obligatoire',
        invalidErrorMsg: 'Expiry date is not valid'
      },
      
    }
  };
  