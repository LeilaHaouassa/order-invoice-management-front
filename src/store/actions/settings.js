import * as actionTypes from "../actions/types";
import SettingsService from "../../services/SettingsService";

export const getSettings = () => async (dispatch) => {
  try {
    const res = await SettingsService.getSettings();
    dispatch({
      type: actionTypes.GET_SETTINGS,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      // client received an error response (5xx, 4xx)
      throw error.response.data;
    } else if (error.request) {
      // client never received a response, or request never left
      console.log(error);
    } else {
      // anything else
      console.log(error);
    }
  }
};

export const setSettings = (data) => async (dispatch) => {
  try {
    const res =await SettingsService.setSettings(data);
    dispatch({
      type: actionTypes.SETTINGS_CHANGED,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      // client received an error response (5xx, 4xx)
      throw error.response.data;
    } else if (error.request) {
      // client never received a response, or request never left
      console.log(error);
    } else {
      // anything else
      console.log(error);
    }
  }
};
