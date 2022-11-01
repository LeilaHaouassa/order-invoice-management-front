import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  id: Yup.object().shape({
    identifierContent: Yup.string().required(
      "Identifiant de la confirmation est obligatoire"
    ),
  }),
 
});
export default validationSchema;