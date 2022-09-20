import * as Yup from 'yup';
import "yup-phone";
import moment from 'moment';

export default  
    //The party object
  Yup.object().shape({
    partyIdentification : Yup.object().shape({
      id: Yup.object().shape({
        identifierContent: Yup.string().required('Identifiant de l\'entreprise est obligatoire'),
      })
    }),
    partyName : Yup.object().shape({
      name: Yup.object().shape({
        textContent: Yup.string().required('Nom de l\'entreprise est obligatoire'),
      })
    }),
    postalAddress : Yup.object().shape({
      id: Yup.object().shape({
        identifierContent: Yup.string(),
      }),
      cityName: Yup.object().shape({
        textContent: Yup.string().required('Ville de l\'entreprise est obligatoire'),
      }),
      postalZone: Yup.object().shape({
        textContent: Yup.string()
        .required('Code postal de l\'entreprise est obligatoire')
        .test(
          'len',
          `Code postal non valid (e.g. 4002)`,
          val => val && val.length === 4
        ),
      }),
      country : Yup.object().shape({
        name: Yup.object().shape({
          textContent: Yup.string().required('Pays de l\'entreprise est obligatoire'),
        })
      }),
    }),
    contact : Yup.object().shape({
      id: Yup.object().shape({
        identifierContent: Yup.string(),
      }),
      name: Yup.object().shape({
        textContent: Yup.string().required('Nom du contact est obligatoire'),
      }),
      telephone: Yup.object().shape({
        textContent: Yup.string()
        .required('Numéro téléphone du contact est obligatoire'),
      }),
      electronicMail: Yup.object().shape({
        textContent: Yup.string()
        .required('Email du contact est obligatoire')
        .email('Pas un mail valide'),
      }),
    }),
    financialAccount : Yup.object().shape({
      id: Yup.object().shape({
        identifierContent: Yup.string().required("Numéro du compte bancaire est obligatoire"),
      }),
      currencyCode: Yup.object().shape({
        codeContent: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
      }),
      paymentNote: Yup.object().shape({
        textContent: Yup.string(),
      }),
      
    }),  
  });
