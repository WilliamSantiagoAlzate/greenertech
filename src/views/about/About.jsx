//Import react libraries
import React, { Component } from "react";

//Import components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

//Import style
import './About.css';

//Create component
export default class About extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container content">
                    <h1>Nosotros</h1>
                </div> 
                <Footer/>
            </div>
        )
    }
}