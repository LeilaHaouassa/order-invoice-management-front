import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  id: Yup.object().shape({
    identifierContent: Yup.string().required(
      "Identifiant de la demande d'annulation est obligatoire"
    ),
  }),
  cancellationNote: Yup.array().of(
    Yup.object().shape({
        textContent: Yup.string().required("Raison d'annulation est obligatoire")
    })
  ),
  orderReference: Yup.array().of(
    Yup.object().shape({
      technicalId: Yup.string() ,
    })
  ),
 
});
export default validationSchema;