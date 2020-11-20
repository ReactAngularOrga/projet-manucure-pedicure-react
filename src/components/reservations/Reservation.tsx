import React, { Component } from 'react';
import { DetailRdv } from '../../models/DetailRdv';
import ReservationServices from '../../services/ReservationService';
import Alert from '@material-ui/lab/Alert';

interface IRecipeProps {
    onFetching: (fetching: boolean) => void,
}

interface IRecipeState {
    nom: string;
    prenom: string;
    email: string;
    categorie: string
    date: string;
    heureRdv: string;
    error: string;
    afficerAlert:boolean,
    formulaireVide:boolean
}

class Reservation extends Component<IRecipeProps, IRecipeState> {
    constructor(props: any) {
        super(props)
        this.state = {
            nom: "",
            prenom: "",
            email: "",
            categorie: 'Manucure',
            date: '',
            heureRdv: '',
            error: "",
            afficerAlert:false,
            formulaireVide:false
        }
        
    }

    addReservation = (event:any) => {
        event.preventDefault();
        const detailRDV = new DetailRdv(this.state.nom, this.state.prenom, this.state.email, this.state.categorie, this.state.date, this.state.heureRdv)
        this.props.onFetching(true)
        if(detailRDV.nom === '' || detailRDV.prenom === '' || detailRDV.email === '' || detailRDV.categorie === '' || detailRDV.date === '' || detailRDV.heureRdv === '' ){
            this.setState((prevState, props) => {
                this.props.onFetching(false)
                return ({ formulaireVide: true })
            })
            return;
        }
        ReservationServices.addReservation(detailRDV).then(
            (data) => {
                setTimeout(() => {
                    this.props.onFetching(false)
                    this.setState((prevState, props) => {
                        return ({ afficerAlert: true, formulaireVide: false  })
                    })
                }, 500);
            },
            (error) => this.setState((prevState, props) => {
                return ({ error: error })
            })
        );
    }

    render() {
        let requestSuccess
        if (this.state.afficerAlert) {
            requestSuccess = <Alert severity="success" color="success">
                                La réservation a été prise en compte
                        </Alert>;
        } 
        if (this.state.formulaireVide) {
            requestSuccess = <Alert severity="error" color="error">
                                Le formulaire doit être rempli
                        </Alert>;
        } 
        return (
            <React.Fragment>
                {requestSuccess}
                <div className="container text-center">
                    <h2>Réservation</h2>
                    <hr />
                    <div className="row justify-content-md-center">
                        <form onSubmit={this.addReservation} >
                            <div className="form-group">
                                <label>Nom : </label>
                                <input type="text" onChange={this.onchangeName} name='nom' pattern="^([a-zA-Z]*)$" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Prénom : </label>
                                <input type="text" pattern="^([a-zA-Z]*)$" onChange={this.onchangePrenom} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>email : </label>
                                <input type="text" className="form-control" onChange={this.onchangeEmail} pattern="^.*@.*\.[a-zA-Z]+$" />

                            </div>
                            <div className="form-group">
                                <label>Catégorie : </label>
                                <select className="form-control" onChange={this.onchangeCategorie}>
                                    <option>Manucure</option>
                                    <option>Pédicure</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Date du rendez vous : </label>
                                <input type="date" className="form-control" onChange={this.onchangeDate} />
                            </div>
                            <div className="form-group">
                                <label>heure du rendez vous : </label>
                                <input type="time" className="form-control" onChange={this.onchangeHeure} />
                            </div>
                            <div className="form-check">
                                <button type="submit" className="btn btn-primary mt-2">Envoyer</button>
                            </div>
                        </form>
                    </div>

                </div>
            </React.Fragment>
        );
    }
    onchangeName = (event: any) => {
        this.setState(
            (prevState, props) => {
                return { nom: event.target.value }
            })
    }

    onchangePrenom = (event: any) => {
        this.setState(
            (prevState, props) => {
                return { prenom: event.target.value }
            })
    }

    onchangeCategorie = (event: any) => {
        this.setState(
            (prevState, props) => {
                return { categorie: event.target.value }
            })
    }

    onchangeEmail = (event: any) => {
        this.setState(
            (prevState, props) => {
                return { email: event.target.value }
            })
    }

    onchangeDate = (event: any) => {
        this.setState(
            (prevState, props) => {
                return { date: event.target.value }
            })
    }

    onchangeHeure = (event: any) => {
        this.setState(
            (prevState, props) => {
                return { heureRdv: event.target.value }
            })
    }
}

export default Reservation;