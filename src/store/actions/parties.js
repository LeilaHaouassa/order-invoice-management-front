import * as actionTypes from "../actions/types";
import PartyService from "../../services/PartyService";

export const retrieveParties = () => async (dispatch) => {
  try {
    const res = await PartyService.getAllParties();
    dispatch({
      type: actionTypes.GET_PARTIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
