//Import react libraries
import React, { Component } from "react";

//Import components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

//Import style
import './Contact.css';

//Create component
export default class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container content">
                    <h1>Contacto</h1>
                </div> 
                <Footer/>
            </div>
        )
    }
}