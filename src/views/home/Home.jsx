//Import react libraries
import React, { Component } from "react";

//Import components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

//Import style
import './Home.css';

//Create component
export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container content">
                    <h1>Inicio</h1>
                </div> 
                <Footer/>
            </div>
        )
    }
}