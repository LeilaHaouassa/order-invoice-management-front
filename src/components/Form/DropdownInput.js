import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const generateOptions = (options) => {
  return options.map((option) => {
    return (
      <MenuItem key={option.id} value={option.id}>
        {option.name}
      </MenuItem>
    );
  });
};

const DropdownInput = ({ name, label, options }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useFormContext();

  const [selectedValue, setSelectedValue] = useState("");
  const handleChangeSelect = (event) => {
    setSelectedValue(event.target.value);
  };



  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Controller
        label={label}
        render={({ field }) => (
          <Select
            {...field}
            value={selectedValue}
            onChange={handleChangeSelect}
            variant="outlined"
            label={label}
          >
            {generateOptions(options)}
          </Select>
        )}
        control={control}
        name={name}
        
      />
    </FormControl>
  );
};

export default DropdownInput;
