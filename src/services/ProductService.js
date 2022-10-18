import http from "../http-common";

const getProducts = () => {
    return http.get(`products`);
};


const ProductService= {
    getProducts,
    
};

export default ProductService;