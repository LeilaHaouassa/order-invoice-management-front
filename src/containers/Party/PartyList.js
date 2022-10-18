import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/parties";

import { useStyles, StyledTableCell, StyledTableRow } from "../../components/List/Styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import * as VscIcons from "react-icons/vsc";
import * as AiIcons from "react-icons/ai";

import { Button } from "@material-ui/core";
import DeleteParty from "./DeleteParty";
import { Link } from "react-router-dom";

const PartyList = (props) => {
  const classes = useStyles();

  const [deleteModal, setDeleteModal] = useState(false);
  const [idOfClickedRow, setIdOfClickedRow] = useState("");
  const showDeleteModal = () => setDeleteModal(!deleteModal);
  const parties = useSelector((state) => state.partyReducer.parties);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actions.retrieveParties());
  }, []);

  return (
    <React.Fragment>
      <div className={classes.distanceForTableBloc}>
        <div className={classes.distanceForTitle}>
          <Typography component="h2" variant="h6" gutterBottom>
            Liste des Entreprises:
          </Typography>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow border={1}>
                <StyledTableCell align="center">Id</StyledTableCell>
                <StyledTableCell align="center">Nom</StyledTableCell>
                <StyledTableCell align="center">
                  Numéro Télèphone
                </StyledTableCell>
                <StyledTableCell align="center">Ville</StyledTableCell>
                {/* <StyledTableCell align="center">Détails</StyledTableCell> */}
                <StyledTableCell align="center">
                  Modifier/Supprimer
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {parties &&
                parties.map((party) => (
                  <StyledTableRow key={party.technicalId}>
                    <TableCell align="center">
                      {party.partyIdentification.id.identifierContent}
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      {party.partyName.name.textContent}
                    </TableCell>
                    <TableCell align="center">
                      {party.contact.telephone.textContent}
                    </TableCell>
                    <TableCell align="center">
                      {party.postalAddress.cityName.textContent}
                    </TableCell>

                    <TableCell align="center">
                      <Link
                        to={`/app/parties/edit/${party.technicalId}`}
                        key={party.technicalId}
                      >
                        <AiIcons.AiOutlineEdit></AiIcons.AiOutlineEdit>
                      </Link>
                      {/* <Button
                        variant="contained"
                        size="small"
                        className={classes.containedButton}
                        onClick={()=>{
                          navigate(`/app/parties/edit`,{ state: { technicalIdOfPartyToUpdate: party.technicalId } });
                        }}
                      >edit</Button> */}
                      /
                      <AiIcons.AiOutlineDelete
                        onClick={() => {
                          showDeleteModal();
                          setIdOfClickedRow(party.technicalId);
                        }}
                      ></AiIcons.AiOutlineDelete>
                      {deleteModal && (
                        <DeleteParty
                          showDeleteModal={showDeleteModal}
                          partyTechnicalId={idOfClickedRow}
                        ></DeleteParty>
                      )}
                    </TableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className={classes.distanceForAddButton}>
          <Link to="/app/parties/add">
            <Button
              variant="contained"
              size="large"
              className={classes.containedButton}
            >
              Ajouter une entreprise
              {/* <IoIcons.IoIosAddCircleOutline color="disabled"></IoIcons.IoIosAddCircleOutline> */}
            </Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PartyList;

{
  /*In case there are more details to show about partys */
}
{
  /* <TableCell align="center">
                    <VscIcons.VscOpenPreview ></VscIcons.VscOpenPreview>
                  </TableCell> */
}
