import http from "../http-common";

const getSentOrders = (partyId) => {
    return http.get(`parties/${partyId}/customer-service/orders/sent`);
};


const OrderCustomerService= {
    getSentOrders,
    
};

export default OrderCustomerService;