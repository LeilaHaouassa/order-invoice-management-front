import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";

import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Aux from "../../components/hoc/Aux";
import DropdownInput from "../../components/Form/DropdownInput";
import supplierData from "../Supplier/SupplierData";
import AddMultiProducts from "../../components/Form/AddMultiProducts";


const useStyles = makeStyles((theme) => ({
  footerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "150px",
    height: "45px",
    margin: "10px",
    border: "none",
    backgroundColor: "cornflowerblue",
    color: "white",
    borderRadius: "8px",
    fontSize: "20px",
    cursor: "pointer",
  },
}));

const AddOrder = (props) => {
  const classes = useStyles();

  const methods = useForm();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => console.log(data);
  const [dateOfOrder, setDateOfOrder] = useState(new Date());

  //To hook up the DatePicker with RHF
  useEffect(() => {
    register("DateOfOrder");
  }, []);

  

  return (
    <Aux>
      <div>
        <h2>Ajouter un bon de commande</h2>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DatePicker
            name="DateOfOrder"
            label="Date de l'order"
            value={dateOfOrder}
            onChange={(date) => {
              setDateOfOrder(date);
              setValue("DateOfOrder", date, {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
            renderInput={(params) => <TextField {...params} />}
          />

          <section>
            <Box sx={{ width: (theme) => theme.spacing(50) }}>
              <DropdownInput
                name="OrderSupplier"
                label="Fournisseur de l'ordre"
                options={supplierData}
              />
            </Box>
          </section>
          
          <AddMultiProducts/>


          <div  className={classes.footerContainer}>
            <button className={classes.button} onClick={onSubmit}>
              Envoyer
            </button>
            <button onClick={props.showAddModal} className={classes.button}>
              Annuler
            </button>
          </div>
        </form>
      </FormProvider>
    </Aux>
  );
};

export default AddOrder;
