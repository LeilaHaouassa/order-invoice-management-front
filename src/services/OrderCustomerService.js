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


const OrderCustomerService= {
    getSentOrders,
    placeOrder,
    cancelOrder,
};

export default OrderCustomerService;