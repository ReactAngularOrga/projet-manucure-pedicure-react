import React, { Component } from 'react';
import { DetailRdv } from '../../models/DetailRdv';
import ReservationServices from '../../services/ReservationService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
interface IRecipeProps {
    onFetching: (fetching:boolean) => void
  }
  
  interface IRecipeState {
    reservations: [DetailRdv],
    error:string
  }
 library.add(faTimes);
class Reservations extends Component<IRecipeProps, IRecipeState> {
    constructor(props:any) {
        super(props)
        let detailRDV = new DetailRdv('','','','','','')
        this.state = {
            reservations : [detailRDV],
            error: ''
        }
    }

    getReservations = () => {
      this.props.onFetching(true)
        ReservationServices.getReservations().then(
          (data) => {
            setTimeout(() => {
              this.props.onFetching(false)
              this.setState((prevState, props) => {
                return ({ reservations: data })
              })
            }, 500);
    
          },
          (error) => this.setState((prevState, props) => {
            return ({ error: error })
          })
        );
      }

      deleteRservation = (reservationId?:number) => {
        this.props.onFetching(true)
          ReservationServices.deleteReservation(reservationId).then(
            (data) => {
              setTimeout(() => {
                this.props.onFetching(false)
                this.getReservations()
              }, 500);
      
            },
            (error) => this.setState((prevState, props) => {
              return ({ error: error })
            })
          );
        }



  componentDidMount= () =>{ 
    this.getReservations();
  }


      render() {
        return (
            <React.Fragment>
                    <div className="row">
                    {this.state.reservations.map((reservation, index) => (
                        <div  key={index} className="col-4-md">
                            <div className="card" style={{height: '382px', width: '260px'}}>               
                                <div className="list-group list-group-flush ">
                                <FontAwesomeIcon onClick={() =>this.deleteRservation(reservation.id)} icon={["fas", "times"]} />

                                    <a href='/'><i  className="fa fa-times-circle" aria-hidden="true"></i></a>
                                    <div className="list-group-item"><strong>Nom  :</strong> {reservation.nom}</div>
                                    <div className="list-group-item"><strong>Prenom :</strong> {reservation.prenom}</div>
                                    <div className="list-group-item"><strong>Email :</strong> {reservation.email}</div>
                                    <div className="list-group-item"><strong>Categorie :</strong> {reservation.categorie}</div>
                                    <div className="list-group-item"><strong>Date :</strong> {reservation.date}</div>
                                    <div className="list-group-item"><strong>Heure :</strong> {reservation.heureRdv}</div>
                                </div>
                            </div>
                        </div>
                         ))}
                    </div>
            </React.Fragment>
        );
    }
}

export default Reservations;