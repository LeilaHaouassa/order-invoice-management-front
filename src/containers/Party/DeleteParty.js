import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/parties";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

function DeleteParty({
  openDeleteDialog,
  setOpenDeleteDialog,
  partyTechnicalId,
}) {
  const dispatch = useDispatch();

  const removeParty = (partyTechnicalId) => {
    dispatch(actions.deleteParty(partyTechnicalId))
    .catch((e) => {
      console.log(e);
    });
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  return (
    <>
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Attention</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Êtes-vous sûr que vous voulez supprimer cette entreprise?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              removeParty(partyTechnicalId);
              handleCloseDeleteDialog();
            }}
          >
            Supprimer
          </Button>
          <Button onClick={handleCloseDeleteDialog}>Annuler</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteParty;
