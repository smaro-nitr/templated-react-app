import * as Axios from 'axios';

const ApiService = {
    serviceOne: (starshipsId) => {
        return Axios.get(`https://swapi.co/api/starships/${starshipsId}`)
        .then(function (response) {
            return response.data.name;
        })
        .catch(function (error) {
            throw error;
        })
        .finally(function () {
            // always executed
        });
    }
}

export default ApiService;