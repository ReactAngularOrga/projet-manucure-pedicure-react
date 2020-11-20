import React, { Component } from 'react';


class Accueil extends Component {
    constructor(props:any) {
        super(props)
    }

   

      render() {
        return (
            <React.Fragment>
                <div className="container text-center">
                    <h1>Présentation du site</h1>
                </div>
            </React.Fragment>
        );
    }
}

export default Accueil;