import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  id: Yup.object().shape({
    identifierContent: Yup.string().required(
      "Identifiant de la facture est obligatoire"
    ),
  }),
  invoiceLine: Yup.array().of(
    Yup.object().shape({
      id: Yup.object().shape({
        identifierContent: Yup.string().required(
          "Identifiant du ligne de facture est obligatoire"
        ),
      }),
      invoicedQuantity: Yup.object().shape({
        quantityContent: Yup.number()
          .min(1)
          .required("Quantité est obligatoire"),
      }),
      lineExtensionAmount: Yup.object().shape({
        amountContent: Yup.number()
          .required("prix est obligatoire")
          .notOneOf([0], "prix doit être non null"),
      }),
      item: Yup.object().required("Sélectionnez un produit ou service"),
    })
  ),
});
export default validationSchema;
