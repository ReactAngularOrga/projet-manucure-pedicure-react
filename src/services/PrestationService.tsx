import { DetailClient } from "../models/DetailClient";
import { DetailRdv } from "../models/DetailRdv";

class ReservationServices {

    static getPrestations = () => {
      return fetch("http://localhost:3001/prestations")
        .then(response => {
          if (response.ok) {
            return response.json();
  
          } else {
            return Promise.reject(response.status);
          }
        });
    };
}

export default ReservationServices;