//Import react libraries
import React, { Component } from "react";

//Import components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

//Import style
import './Products.css';

//Create component
export default class Products extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container content">
                    <h1>Productos</h1>
                </div> 
                <Footer/>
            </div>
        )
    }
}