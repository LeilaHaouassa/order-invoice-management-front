import http from "../http-common";

const getSettings = () => {
    return http.get(`settings`);
};

const setSettings = (data) => {
    return http.post(`settings`,data);
};

const SettingsService= {
    getSettings,
    setSettings
};

export default SettingsService;