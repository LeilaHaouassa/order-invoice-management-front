const getOrderStatus = (status) => {
    switch(status) {
        case "CONFIRMED":
            return "confirmé";
        case "REJECTED":
            return "refus";
        case "PENDING":
            return "en attente";
        case "CHANGED":
            return "modifié";
        case "NEGOTIATING":
            return "en négociation";
        case "CANCELLED":
            return "annulé";
        case "ACCEPTED":
            return "accepté"
    }
};
export default getOrderStatus;