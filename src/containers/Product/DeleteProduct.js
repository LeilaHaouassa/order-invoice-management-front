import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";



function DeleteProduct(props) {
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
          <p>Êtes-vous sûr que vous voulez supprimer ce produit?</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              props.removeProduct(props.productId);
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (id) =>
      dispatch({
        type: actionTypes.PRODUCT_DELETED,
        payload: { productId: id },
      }),
  };
};

export default connect(null, mapDispatchToProps)(DeleteProduct);
