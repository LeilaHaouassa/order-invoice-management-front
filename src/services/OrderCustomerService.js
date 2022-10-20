import http from "../http-common";

const getSentOrders = (partyId) => {
    return http.get(`parties/${partyId}/customer-service/orders/sent`);
};

const placeOrder = (partyId, data) =>{
    return http.post(`parties/${partyId}/customer-service/orders/send`,data);
}


const OrderCustomerService= {
    getSentOrders,
    placeOrder,
    
};

export default OrderCustomerService;