import http from "../http-common";


const getAllParties = () => {
  return http.get("parties");
};

const getAllOtherParties = id => {
  return http.get(`parties/${id}/others`);
};

const getPartyById = id => {
  return http.get(`parties/${id}`);
};

const removeParty = id => {
  return http.delete(`parties/${id}`);
};

const addParty= data => {
  return http.post('parties/new',data);
}

const updateParty = (id, data) => {
  return http.put(`parties/${id}`, data);
};

const PartyService= {
    getAllParties,
    getAllOtherParties,
    getPartyById,
    removeParty,
    addParty,
    updateParty,
};

export default PartyService;