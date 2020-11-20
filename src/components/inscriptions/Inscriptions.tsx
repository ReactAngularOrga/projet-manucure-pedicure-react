import React, { Component } from 'react';
import { DetailRdv } from '../../models/DetailRdv';
import InscriptionServices from '../../services/InscriptionService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { DetailClient } from '../../models/DetailClient';
interface IRecipeProps {
    onFetching: (fetching:boolean) => void
  }
  
  interface IRecipeState {
    inscriptions: [DetailClient],
    error:string
  }

library.add(faTimes);

class Inscriptions extends Component<IRecipeProps, IRecipeState> {
    constructor(props:any) {
        super(props)
        let detailClient = new DetailClient('','','',+33)
        this.state = {
            inscriptions : [detailClient],
            error: ''
        }
    }

    getInscriptions = () => {
      this.props.onFetching(true)
      InscriptionServices.getInscriptions().then(
          (data) => {
            setTimeout(() => {
              this.props.onFetching(false)
                this.setState((prevState, props) => {
                    return ({ inscriptions: data })
                  })     
            }, 500);
    
          },
          (error) => this.setState((prevState, props) => {
            return ({ error: error })
          })
        );
      }

      deleteInscription = (inscriptionId?:number) => {
        this.props.onFetching(true)
        InscriptionServices.deleteInscription(inscriptionId).then(
            (data) => {
              setTimeout(() => {
                this.props.onFetching(false)
                this.getInscriptions()
              }, 500);
      
            },
            (error) => this.setState((prevState, props) => {
              return ({ error: error })
            })
          );
        }



  componentDidMount= () =>{
    this.getInscriptions();
  }

      render() {
        return (
            <React.Fragment>
                    <div className="row">
                    {this.state.inscriptions.map((item, index) => (
                        <div  key={index} className="col-4-md">
                            <div className="card" style={{height: '382px', width: '260px'}}>               
                                <div className="list-group list-group-flush ">
                                <FontAwesomeIcon onClick={() =>this.deleteInscription(item.id)} icon={["fas", "times"]} />
                                    <a href='/'><i  className="fa fa-times-circle" aria-hidden="true"></i></a>
                                    <div className="list-group-item"><strong>Nom  :</strong> {item.nom}</div>
                                    <div className="list-group-item"><strong>Prenom :</strong> {item.prenom}</div>
                                    <div className="list-group-item"><strong>Email :</strong> {item.email}</div>
                                    <div className="list-group-item"><strong>Numéro de téléphone :</strong> {item.tel}</div>
                                </div>
                            </div>
                        </div>
                         ))}
                    </div>
            </React.Fragment>
        );
    }
}

export default Inscriptions;