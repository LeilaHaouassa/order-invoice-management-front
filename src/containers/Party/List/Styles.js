import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const useStyles = makeStyles((theme) => ({
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
  
  export const StyledTableCell = withStyles((theme) => ({
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
  
  export const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "#9CC5EB",
      },
      "&:nth-of-type(even)": {
        backgroundColor: "White",
      },
    },
  }))(TableRow);

  