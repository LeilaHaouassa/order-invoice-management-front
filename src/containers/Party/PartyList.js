import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/parties"

import { withStyles, makeStyles } from "@material-ui/core/styles";
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
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  distanceForAddButton: {
    marginTop: theme.spacing(3),
  },
  distanceForTitle: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  distanceForTableBloc: {
    marginInline: theme.spacing(5),
  },
  table: {
    minWidth: 500,
  },
  containedButton: {
    color: theme.palette.getContrastText("#9CC5EB"),
    backgroundColor: "#9CC5EB",
    "&:hover": {
      backgroundColor: "#335495",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "#9CC5EB",
      },
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#B9BAC5",
    color: theme.palette.common.black,
    bparty: 10,
    bpartyRadius: 3,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#9CC5EB",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "White",
    },
  },
}))(TableRow);

const PartyList = (props) => {
  const classes = useStyles();

  const [deleteModal, setDeleteModal] = useState(false);
  const [idOfClickedRow , setIdOfClickedRow] = useState('');
  const showDeleteModal = () => setDeleteModal(!deleteModal);
  const parties = useSelector(state => state.partyReducer.parties);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.retrieveParties());
  }, []);
  return (
    <React.Fragment>
      <div className={classes.distanceForTableBloc}>
        <div className={classes.distanceForTitle}>
          <Typography component="h2" variant="h6" gutterBottom >
            Liste des Fournisseurs:
          </Typography>
        </div>
        {console.log(props.partys)}
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow border={1}>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="center">Nom</StyledTableCell>
                <StyledTableCell align="center">Numéro Télèphone</StyledTableCell>
                <StyledTableCell align="center">Ville</StyledTableCell>
                {/* <StyledTableCell align="center">Détails</StyledTableCell> */}
                <StyledTableCell align="center">
                  Modifier/Supprimer
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log(parties)}
              {parties &&
               parties.map((party) => (
                <StyledTableRow key={party.id}>
                  <TableCell align="center">{party.id}</TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {party.partyName.name.textContent}
                  </TableCell>
                  <TableCell align="center">{party.contact.telephone.textContent}</TableCell>
                  <TableCell align="center">{party.postalAddress.cityName.textContent}</TableCell>
                  
                  <TableCell align="center">
                    <AiIcons.AiOutlineEdit ></AiIcons.AiOutlineEdit>{" "}
                    /
                    <AiIcons.AiOutlineDelete
                      onClick={() => {
                        showDeleteModal();
                        // setIdOfClickedRow(party.id);
                      }}
                    ></AiIcons.AiOutlineDelete>
                    {deleteModal && (
                      <DeleteParty
                        showDeleteModal={showDeleteModal}
                        partyId={idOfClickedRow}
                      ></DeleteParty>
                    )}
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className={classes.distanceForAddButton}>
          <Button
            variant="contained"
            size="large"
            href="#"
            className={classes.containedButton}
          >
            Ajouter un produit
            {/* <IoIcons.IoIosAddCircleOutline color="disabled"></IoIcons.IoIosAddCircleOutline> */}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PartyList;

// const mapStateToProps = (state) => {
//   return {
//     parties: state..partys,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeparty: (id) =>
//       dispatch({ type: actionTypes.party_DELETED, payload: { partyId: id } }),
//   };
// };

// export default connect(mapStateToProps)(PartyList);


{/*In case there are more details to show about partys */}
                  {/* <TableCell align="center">
                    <VscIcons.VscOpenPreview ></VscIcons.VscOpenPreview>
                  </TableCell> */}