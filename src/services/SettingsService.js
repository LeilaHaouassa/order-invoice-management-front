import http from "../http-common";

const getSettings = () => {
    return http.get(`settings`);
};


const SettingsService= {
    getSettings,
    
};

export default SettingsService;