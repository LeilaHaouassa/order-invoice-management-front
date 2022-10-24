const getActionType = (action) => {
    switch(action) {
        case "CONFIRM":
            return "confirmer";
        case "REJECT":
            return "refuser";
        case "SEND":
            return "envoyer";
        case "CHANGE":
            return "modifier";
        case "NEGOTIATE":
            return "négocier";
        case "CANCEL":
            return "annuler";
    }
};
export default getActionType;