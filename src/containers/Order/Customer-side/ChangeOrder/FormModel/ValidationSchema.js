import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  id: Yup.object().shape({
    identifierContent: Yup.string().required(
      "Identifiant de la demande de modification est obligatoire"
    ),
  }),
  sequenceNumberID: Yup.object().shape({
    identifierContent: Yup.string().required(
      "Nombre de séquence est obligatoire"
    ),
  }),
  orderLine: Yup.array().of(
    Yup.object().shape({
      lineItem: Yup.object().shape({
        id: Yup.object().shape({
          identifierContent: Yup.string().required(
            "Identifiant du ligne de commande est obligatoire"
          ),
        }),
        quantity: Yup.object().shape({
          quantityContent: Yup.number()
            .min(1)
            .required("Quantité est obligatoire"),
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
  
});
export default validationSchema;
