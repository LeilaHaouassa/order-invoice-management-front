import React from "react";

import { useField } from "formik";

import TextField from "@material-ui/core/TextField";



export default function InputField(props) {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    if (meta.touched && meta.error) {
      return meta.error;
    }
  }

  return (
    <TextField
      variant="standard"
      fullWidth
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  );
}


// return (
  // <Grid
  //   item
  //   xs={12}
  //   container
  //   spacing={12}
  //   direction="row"
  //   justifyContent="flex-start"
  // >
  //   <Grid item>
  //     <h3>{label}:</h3>
  //   </Grid>
  //   <Grid item>
  //     <Box sx={{ width: (theme) => theme.spacing(50) }}>
        // <TextField
        //   fullWidth
        //   id={props.id}
        //   label={label}
        //   value={formikProp.values.id}
        //   onChange={formikProp.handleChange}
        //   error={formikProp.touched.id && Boolean(formikProp.errors.id)}
        //   helperText={formikProp.touched.id && formikProp.errors.id}
        // />
  //     </Box>
  //   </Grid>
  // </Grid>
//);