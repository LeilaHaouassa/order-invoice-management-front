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
import DeleteOrder from "./DeleteOrder/DeleteOrder";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
      backgroundColor: "#DDE2DC",
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
    border: 10,
    borderRadius: 3,
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

const OrderList = (props) => {
  const classes = useStyles();

  const [deleteModal, setDeleteModal] = useState(false);
  const showDeleteModal = () => setDeleteModal(!deleteModal);

  const [idOfClickedRow, setIdOfClickedRow] = useState("");

  

  return (
    <React.Fragment>
      <div className={classes.distanceForTableBloc}>
        <div className={classes.distanceForTitle}>
          <Typography component="h2" variant="h6" gutterBottom>
            Liste des Bons de Commande:
          </Typography>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow border={1}>
                <StyledTableCell>Numéro</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Fourniseur</StyledTableCell>
                <StyledTableCell align="center">Montant (DT)</StyledTableCell>
                <StyledTableCell align="center">Détails</StyledTableCell>
                <StyledTableCell align="center">
                  Modifier/Supprimer
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.orders.map((order) => (
                <StyledTableRow key={order.id}>
                  <TableCell align="center">{order.id}</TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {order.date.toLocaleDateString()}
                  </TableCell>
                  <TableCell align="center">{order.supplier}</TableCell>
                  <TableCell align="center">{order.total}</TableCell>
                  <TableCell align="center">
                    <VscIcons.VscOpenPreview color="disabled"></VscIcons.VscOpenPreview>
                  </TableCell>
                  <TableCell align="center">
                    <AiIcons.AiOutlineEdit color="disabled"></AiIcons.AiOutlineEdit>{" "}
                    /
                    <AiIcons.AiOutlineDelete
                      onClick={() => {
                        showDeleteModal();
                        setIdOfClickedRow(order.id);
                      }}
                    ></AiIcons.AiOutlineDelete>
                    {deleteModal && (
                      <DeleteOrder
                        showDeleteModal={showDeleteModal}
                        orderId={idOfClickedRow}
                      ></DeleteOrder>
                    )}
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className={classes.distanceForAddButton}>
          <Link to="/app/customerSide/orders/add">
          <Button
            variant="contained"
            size="large"
            className={classes.containedButton}
          >
            Ajouter un bon de commande
            {/* <IoIcons.IoIosAddCircleOutline color="disabled"></IoIcons.IoIosAddCircleOutline> */}
          </Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
  };
};


export default connect(mapStateToProps)(OrderList);
