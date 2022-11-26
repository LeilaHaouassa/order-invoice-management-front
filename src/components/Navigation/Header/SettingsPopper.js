import React, { useState, useEffect } from "react";
import Popper from "@mui/material/Popper";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Typography } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import { useDispatch, useSelector } from "react-redux";
import * as settingsActions from "../../../store/actions/settings";

function SettingsPopper() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settingsReducer.settings);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  async function changeSettings(settings) {
    dispatch(settingsActions.setSettings(settings))
      .then()
      .catch((e) => {
        console.log(e.message);
      });
  }

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  useEffect(() => {
    dispatch(settingsActions.getSettings());
  }, []);

  return (
    <>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Grid container direction="row">
                <Grid item>
                  <Typography sx={{ p: 2 }}>Réponse obligatoire</Typography>
                </Grid>
                <Grid item>
                  <Switch
                    checked={settings}
                    onChange={(e) => changeSettings(e.target.checked)}
                    size="small"
                    sx={{ m: 2 }}
                  />
                </Grid>
              </Grid>
              <FormHelperText sx={{ marginInline: 2 }}>
                Lors de l'acceptation d'une commande
              </FormHelperText>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <IconButton onClick={handleClick("bottom-end")}>
            <SettingsOutlinedIcon color="disabled" fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}

export default SettingsPopper;
