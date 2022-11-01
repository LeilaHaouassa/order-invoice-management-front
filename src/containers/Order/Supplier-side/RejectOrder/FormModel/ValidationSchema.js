import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  id: Yup.object().shape({
    identifierContent: Yup.string().required(
      "Identifiant du refus est obligatoire"
    ),
  }),
  rejectionNote: Yup.array().of(
    Yup.object().shape({
        textContent: Yup.string()
    })
  ),
 
});
export default validationSchema;