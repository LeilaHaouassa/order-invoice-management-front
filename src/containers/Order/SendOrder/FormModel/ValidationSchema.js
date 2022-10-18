import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  id: Yup.object().shape({
    identifierContent: Yup.string().required(
      "Identifiant du bon de commande est obligatoire"
    ),
  }),
  sellerSupplierParty: Yup.object().shape({
    party: Yup.object().defined("valeur non défini n'est pas accepté"),
  }),
  orderLine: Yup.array().of(
    Yup.object().shape({
      lineItem: Yup.object()
        //.required()
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
          item: Yup.object().shape({
            name: Yup.object().shape({
              textContent: Yup.string()
                .defined("valeur non défini n'est pas accepté")
                .required("Sélectionnez un produit"),
            }),
          }),
        }),
    })
  ),
});
export default validationSchema;
