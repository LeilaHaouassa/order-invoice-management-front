import * as actionTypes from "../actions/types";

const initialState = {
  parties: [],
};

const PartyReducer = (state = initialState, action) => {
  let tempParties =[];
  switch (action.type) {
    case actionTypes.GET_PARTIES:
      return {
        ...state,
        parties: action.payload,
      };
    case actionTypes.PARTY_DELETED:
      return {
        ...state,
        parties: state.parties.filter(
          ({ technicalId }) => technicalId !== action.payload.technicalId
        ),
      };
      return ;
    case actionTypes.PARTY_ADDED:
      tempParties = [...state.parties, action.payload];
      return {
        ...state,
        parties: tempParties,
      };

    case actionTypes.PARTY_UPDATED:
      tempParties = state.parties;
      tempParties = tempParties.map((party) => {
        if (party.technicalId === action.payload.technicalId) {
          return {
            ...party,
            ...action.payload,
          };
        } else {
          return party;
        }
      });
      return {
        ...state,
        parties: tempParties,
      };
    case actionTypes.PARTY_RETRIEVED:
      tempParties = [ action.payload];
      return {
        ...state,
        parties: tempParties,
      };
    default:
      return state;
  }
  
};

export default PartyReducer;
