import http from "../http-common";


const getAllParties = () => {
  return http.get("/parties");
};

const PartyService= {
    getAllParties,
};

export default PartyService;

// axios.get(PARTY_API_BASE_URL)
// .then((response) => {
//     const recievedParties = response.data;
//     setParties(recievedParties);
// })
// .catch(error => console.error("ERROR: ${error}"));
