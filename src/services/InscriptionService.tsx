import { DetailClient } from "../models/DetailClient";
import { DetailRdv } from "../models/DetailRdv";

class ReservationServices {

    static getInscriptions = () => {
      return fetch("http://localhost:3001/inscription")
        .then(response => {
          if (response.ok) {
            return response.json();
  
          } else {
            return Promise.reject(response.status);
          }
        });
    };

    static addInscription = (inscription: DetailClient) => {
        return fetch(`http://localhost:3001/inscription/`, {
          method: "POST",
          body: JSON.stringify(inscription),
          headers: { 'Content-Type': 'application/json' }
        })
          .then(response => {
            if (response.ok) {
              return response.json();
    
            } else {
              return Promise.reject(response.status);
            }
          })
      };

      static deleteInscription = (inscriptionId?:number) => {
        return fetch(`http://localhost:3001/inscription/${inscriptionId}`, {
          method: "DELETE",
          headers: { 'Content-Type': 'application/json' }
        })
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