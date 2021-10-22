import React, { useState } from "react";

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
import DeleteSupplier from "./DeleteSupplier";
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
    bsupplier: 10,
    bsupplierRadius: 3,
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

const SupplierList = (props) => {
  const classes = useStyles();

  const [deleteModal, setDeleteModal] = useState(false);
  const [idOfClickedRow , setIdOfClickedRow] = useState('');
  const showDeleteModal = () => setDeleteModal(!deleteModal);

  return (
    <React.Fragment>
      <div className={classes.distanceForTableBloc}>
        <div className={classes.distanceForTitle}>
          <Typography component="h2" variant="h6" gutterBottom >
            Liste des Fournisseurs:
          </Typography>
        </div>
        {console.log(props.suppliers)}
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow border={1}>
                <StyledTableCell>Numéro</StyledTableCell>
                <StyledTableCell align="center">Nom</StyledTableCell>
                <StyledTableCell align="center">Numéro Télèphone</StyledTableCell>
                <StyledTableCell align="center">Address</StyledTableCell>
                {/* <StyledTableCell align="center">Détails</StyledTableCell> */}
                <StyledTableCell align="center">
                  Modifier/Supprimer
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.suppliers.map((supplier) => (
                <StyledTableRow key={supplier.id}>
                  <TableCell align="center">{supplier.id}</TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {supplier.name}
                  </TableCell>
                  <TableCell align="center">{supplier.phoneNumber}</TableCell>
                  <TableCell align="center">{supplier.address}</TableCell>
                  {/*In case there are more details to show about suppliers */}
                  {/* <TableCell align="center">
                    <VscIcons.VscOpenPreview ></VscIcons.VscOpenPreview>
                  </TableCell> */}
                  <TableCell align="center">
                    <AiIcons.AiOutlineEdit ></AiIcons.AiOutlineEdit>{" "}
                    /
                    <AiIcons.AiOutlineDelete
                      onClick={() => {
                        showDeleteModal();
                        setIdOfClickedRow(supplier.id);
                      }}
                    ></AiIcons.AiOutlineDelete>
                    {deleteModal && (
                      <DeleteSupplier
                        showDeleteModal={showDeleteModal}
                        supplierId={idOfClickedRow}
                      ></DeleteSupplier>
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

const mapStateToProps = (state) => {
  return {
    suppliers: state.supplierReducer.suppliers,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removesupplier: (id) =>
//       dispatch({ type: actionTypes.supplier_DELETED, payload: { supplierId: id } }),
//   };
// };

export default connect(mapStateToProps)(SupplierList);