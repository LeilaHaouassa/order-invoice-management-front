import http from "../http-common";

const getReceivedOrders = (partyId) => {
    return http.get(`parties/${partyId}/supplier-service/orders/received`);
};

const rejectOrder = (partyId, data) =>{
    return http.post(`parties/${partyId}/supplier-service/orders/reject`,data);
}

const addDetail = (partyId, data) => {
    return http.post(`parties/${partyId}/supplier-service/orders/add-detail`,data);
}

const acceptWithNoFurtherAction = (partyId, orderId) => {
    return http.post(`parties/${partyId}/supplier-service/orders/accept`,orderId);
}

const acceptWithResponse = (partyId, data) => {
    return http.post(`parties/${partyId}/supplier-service/orders/accept-required`,data);
}

const getNegotiatingDocument = (partyId, orderId) => {
    return http.get(`parties/${partyId}/supplier-service/orders/${orderId}/negotiating-document`);
};

const OrderSupplierService= {
    getReceivedOrders,
    rejectOrder,
    addDetail,
    acceptWithNoFurtherAction,
    acceptWithResponse,
    getNegotiatingDocument,
    
};

export default OrderSupplierService;