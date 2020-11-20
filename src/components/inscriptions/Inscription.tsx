import React, { Component } from 'react';
import InscriptionServices from '../../services/InscriptionService';
import Alert from '@material-ui/lab/Alert';
import { DetailClient } from '../../models/DetailClient';

interface IRecipeProps {
    onFetching: (fetching: boolean) => void,
    history:any
}

interface IRecipeState {
    nom: string;
    prenom: string;
    email: string;
    tel:number
    error: string;
    afficerAlert:boolean
}

class Inscription extends Component<IRecipeProps, IRecipeState> {
    formulaireVide = false
    constructor(props: any) {
        super(props)
        this.state = {
            nom: "",
            prenom: "",
            email: "",
            tel: 0,
            error: "",
            afficerAlert:false
        }
    }

    addInscription = (event:any) => {
        event.preventDefault();
        let detailClient = new DetailClient(this.state.nom, this.state.prenom, this.state.email, this.state.tel)
        this.props.onFetching(true)
        if(detailClient.nom === '' || detailClient.prenom === '' || detailClient.email === '' || detailClient.tel === 0){
            this.formulaireVide = true;
            this.props.onFetching(false)
            return;
        }
        InscriptionServices.addInscription(detailClient).then(
            (data) => {
                setTimeout(() => {
                    this.props.onFetching(false)
                    this.formulaireVide = false;
                    this.setState((prevState, props) => {
                        return ({ 
                            afficerAlert: true,
                            nom: "",
                            prenom: "",
                            email: "",
                            tel: 0,
                            error: ""})
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
                                L'inscription a été prise en compte
                            </Alert>;
        } 
        if (this.formulaireVide) {
            requestSuccess = <Alert severity="error" color="error">
                                Le formulaire ne doit pas être vide
                            </Alert>;
        }
        return (
            <React.Fragment>
                {requestSuccess}
                <div className="container text-center">
                    <h2>Inscription</h2>
                    <hr />
                    <div className="row justify-content-md-center">
                        <form onSubmit={this.addInscription} >
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
                                <label>Numéro de téléphone : </label>
                                <input type="text" pattern="^\d+$" onChange={this.onchangeTel} className="form-control" />

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

    onchangeTel = (event: any) => {
        this.setState(
            (prevState, props) => {
                return { tel: event.target.value }
            })
    }

    onchangeEmail = (event: any) => {
        this.setState(
            (prevState, props) => {
                return { email: event.target.value }
            })
    }
}

export default Inscription;