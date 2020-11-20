import React, { Component } from 'react';
import PrestationServices from '../../services/PrestationService';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { DetailPrestation } from '../../models/DetailPrestation';
interface IRecipeProps {
    onFetching: (fetching: boolean) => void
}

interface IRecipeState {
    prestations: [DetailPrestation],
    error: string
}

library.add(faTimes);

class Prestation extends Component<IRecipeProps, IRecipeState> {
    constructor(props: any) {
        super(props)
        let detailPrestation = new DetailPrestation('', 0)
        this.state = {
            prestations: [detailPrestation],
            error: ''
        }
    }

    getPrestations = () => {
        this.props.onFetching(true)
        PrestationServices.getPrestations().then(
            (data) => {
                setTimeout(() => {
                    this.props.onFetching(false)

                    this.setState((prevState, props) => {
                        return ({ prestations: data })
                    })

                }, 500);

            },
            (error) => this.setState((prevState, props) => {
                return ({ error: error })
            })
        );
    }


    componentDidMount = () => {
        this.getPrestations();
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    {this.state.prestations.map((item, index) => (
                        <div key={index} className="col-4-md">
                            <div className="card" style={{ height: '382px', width: '260px' }}>
                                <div className="list-group list-group-flush ">
                                    <a href='/'><i className="fa fa-times-circle" aria-hidden="true"></i></a>
                                    <div className="list-group-item"><strong>Préstation :</strong> {item.nomPrestation}</div>
                                    <div className="list-group-item"><strong>Prix :</strong> {item.prix} €</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Prestation;