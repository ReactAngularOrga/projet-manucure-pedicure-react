import { DetailRdv } from "../models/DetailRdv";

class ReservationServices {

    static getReservations = () => {
      return fetch("http://localhost:3001/reservations")
        .then(response => {
          if (response.ok) {
            return response.json();
  
          } else {
            return Promise.reject(response.status);
          }
        });
    };

    static addReservation = (reservation: DetailRdv) => {
        return fetch(`http://localhost:3001/reservations/`, {
          method: "POST",
          body: JSON.stringify(reservation),
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

      static deleteReservation = (reservationId?:number) => {
        return fetch(`http://localhost:3001/reservations/${reservationId}`, {
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