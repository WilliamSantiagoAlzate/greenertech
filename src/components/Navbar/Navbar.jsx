//Import react libraries
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Import style
import './Navbar.css'

//Import logo
import Logo from '../../images/logo.png'

//Create component
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="logo" href="#">
                        <img src={Logo}></img>
                    </a>
                    <div className="sections">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/nosotros">Nosotros</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/productos">Productos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/servicios">Servicios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contacto">Contacto</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}