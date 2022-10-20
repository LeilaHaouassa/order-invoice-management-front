import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  id: Yup.object().shape({
    identifierContent: Yup.string().required(
      "Identifiant du bon de commande est obligatoire"
    ),
  }),
  sellerSupplierParty: Yup.object().shape({
    party: Yup.object().required("Sélectionnez un fournisseur"),
  }),
  orderLine: Yup.array().of(
    Yup.object().shape({
      lineItem: Yup.object()
        .shape({
          id: Yup.object().shape({
            identifierContent: Yup.string().required(
              "Identifiant du ligne de commande est obligatoire"
            ),
          }),
          quantity: Yup.object().shape({
            quantityContent: Yup.number()
              .min(1)
              .required("Identifiant du produit est obligatoire"),
          }),
          price: Yup.object().shape({
            priceAmount: Yup.object().shape({
              amountContent: Yup.number(),
            }),
          }),
          item: Yup.object().required("Sélectionnez un produit ou service"),
        }),
    })
  ),
  anticipatedMonetaryTotal:Yup.object().shape({
    payableAmount:Yup.object().shape({
      amountContent: Yup.number(),
    })
  }),
});
export default validationSchema;
