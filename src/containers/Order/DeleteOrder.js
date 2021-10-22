import React from "react";
import "./DeleteOrder.css";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

// { showDeleteModal, orderId , removeOrder }
function DeleteOrder(props) {
 

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
          <p>Êtes-vous sûr que vous voulez supprimer ce bon de commande?</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              props.removeOrder(props.orderId);
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



const mapDispatchToProps = dispatch => {
  return{
    removeOrder: (id) => dispatch({type:actionTypes.ORDER_DELETED,payload:{orderId:id}}) 
  };
};

export default connect(null,mapDispatchToProps)(DeleteOrder);

