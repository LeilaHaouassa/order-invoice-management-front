import http from "../http-common";

const getOrderHistory = (orderId) => {
    return http.get(`orders/${orderId}/history`);
};


const getOrderById = (orderId) => {
    return http.get(`orders/${orderId}`);
};



const OrderService= {
    getOrderHistory,
    getOrderById,
};

export default OrderService;