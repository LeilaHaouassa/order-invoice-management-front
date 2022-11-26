import * as Yup from "yup";

const validationSchema = Yup.object({
    email: Yup
      .string()
      .email('Saisissez une adresse e-mail valide')
      .required('Adresse e-mail obligatoire'),
    password: Yup
      .string()
      .min(8, 'Trop court')
      .required('Mot de pass est obligatoire'),
    username : Yup.string()
    .required("nom d'utilisateur obligatoire.")
    .min(5, "Trop court")
  });

  export default validationSchema;