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
    throw err;
  }
};

export const deleteParty = (technicalId) => async (dispatch) => {
  try {
    await PartyService.removeParty(technicalId);
    dispatch({
      type: actionTypes.PARTY_DELETED,
      payload: { technicalId },
    });
  } catch (err) {
    if (err.response) {
      // client received an error response (5xx, 4xx)
      throw err.response.data;
    } else if (err.request) {
      // client never received a response, or request never left
      console.log(err);
    } else {
      // anything else
      console.log(err);
    }
  }
};

export const addParty = (data) => async (dispatch) => {
  try {
    const res = await PartyService.addParty(data);

    dispatch({
      type: actionTypes.PARTY_ADDED,
      payload: res.data,
    });
  } catch (err) {
    if (err.response) {
      // client received an error response (5xx, 4xx)
      throw err.response.data;
    } else if (err.request) {
      // client never received a response, or request never left
      console.log(err);
    } else {
      // anything else
      console.log(err);
    }
  }
};


export const updateParty = (id, data) => async (dispatch) => {
  try {
    const res = await PartyService.updateParty(id, data);

    dispatch({
      type: actionTypes.PARTY_UPDATED,
      payload: data,
    });

  } catch (err) {
    if (err.response) {
      // client received an error response (5xx, 4xx)
      throw err.response.data;
    } else if (err.request) {
      // client never received a response, or request never left
      console.log(err);
    } else {
      // anything else
      console.log(err);
    }
  }
};

export const getPartyById = (id) => async (dispatch) => {
  try {
    const res = await PartyService.getPartyById(id);
    dispatch({
      type: actionTypes.PARTY_RETRIEVED,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    if (err.response) {
      // client received an error response (5xx, 4xx)
      throw err.response.data;
    } else if (err.request) {
      // client never received a response, or request never left
      console.log(err);
    } else {
      // anything else
      console.log(err);
    }
  }
};