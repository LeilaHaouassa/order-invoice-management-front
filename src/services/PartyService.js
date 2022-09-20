import http from "../http-common";


const getAllParties = () => {
  return http.get("/parties");
};

const getPartyById = id => {
  return http.get(`/parties/${id}`);
};

const removeParty = id => {
  return http.get(`/parties/delete/${id}`);
};

const addParty= data => {
  return http.post('/parties/add',data);
}

const updateParty = (id, data) => {
  return http.post(`/parties/update/${id}`, data);
};

const PartyService= {
    getAllParties,
    getPartyById,
    removeParty,
    addParty,
    updateParty,
};

export default PartyService;