import http from "../http-common";

const getSentInvoices = (partyId) => {
    return http.get(`parties/${partyId}/supplier-service/invoices/sent`);
};


const sendInvoice = (partyId, data) =>{
    return http.post(`parties/${partyId}/supplier-service/invoices/send`,data);
}

const getDocumentForInvoice = (partyId, orderId) => {
    return http.get(`parties/${partyId}/supplier-service/invoices/prep-document/${orderId}`);
};

const getReceivedInvoices = (partyId) => {
    return http.get(`parties/${partyId}/customer-service/invoices/received`);
};

const InvoiceService= {
    sendInvoice,
    getDocumentForInvoice,
    getSentInvoices,
    getReceivedInvoices
};

export default InvoiceService;