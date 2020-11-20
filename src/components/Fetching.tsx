import React, {Component} from 'react';
import { FaSpinner } from 'react-icons/fa';
import '../App.css';
class Fetching extends Component {

    render() {
        return ( 
        <div className="fetching">
            <FaSpinner className="spinner" />
        </div>
        )}
};

export default Fetching;