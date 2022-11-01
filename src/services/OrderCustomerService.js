import http from "../http-common";

const getSentOrders = (partyId) => {
    return http.get(`parties/${partyId}/customer-service/orders/sent`);
};

const placeOrder = (partyId, data) =>{
    return http.post(`parties/${partyId}/customer-service/orders/send`,data);
}

const cancelOrder = (partyId, data) => {
    return http.post(`parties/${partyId}/customer-service/orders/cancel`,data);
}

const changeOrder = (partyId , data) => {
    return http.post(`parties/${partyId}/customer-service/orders/change`,data);
}

const acceptOrder = (partyId , data) => {
    return http.post(`parties/${partyId}/customer-service/orders/accept`,data);
}

const getDocumentForOrderChange = (partyId, orderId) => {
    return http.get(`parties/${partyId}/customer-service/orders/${orderId}/prep-change-document`);
};

const OrderCustomerService= {
    getSentOrders,
    placeOrder,
    cancelOrder,
    changeOrder,
    acceptOrder,
    getDocumentForOrderChange
};

export default OrderCustomerService;