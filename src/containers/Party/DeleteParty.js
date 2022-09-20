import React from "react";
import ReactDom from "react-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/parties";

function DeleteParty(props) {
  const dispatch = useDispatch();
  

  const removeParty = (partyTechnicalId) => {
    dispatch(actions.deleteParty(partyTechnicalId)).catch((e) => {
      console.log(e);
    });
  };

  return ReactDom.createPortal(
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeBtn">
          <button onClick={props.showDeleteModal}>X</button>
        </div>

        <div className="head">
          <h1>Attention</h1>
        </div>
        <div className="body">
          <p>Êtes-vous sûr que vous voulez supprimer cette entreprise?</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              removeParty(props.partyTechnicalId);
              props.showDeleteModal();
            }}
          >
            Supprimer
          </button>
          <button id="cancelBtn" onClick={props.showDeleteModal}>
            Annuler
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default DeleteParty;
