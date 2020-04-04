//Import react libraries
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Import style
import './Navbar.css'

//Import logo
import Logo from '../../images/logo.png'

//Create component
export default class Navbar extends Component {

    state = {
        homeActive: "",
        aboutActive: "",
        productsActive: "",
        servicesActive: "",
        blogActive: "",
        contactActive: ""
    }

    componentWillMount() {
        switch (window.location.pathname) {
            case '/nosotros':
                this.setState({aboutActive: 'active'});
                break;
            case '/productos':
                this.setState({productsActive: 'active'});
                break;
            case '/servicios':
                this.setState({servicesActive: 'active'});
                break;
            case '/blog':
                this.setState({blogActive: 'active'});
                break;
            case '/contacto':
                this.setState({contactActive: 'active'});
                break;
            default:
                this.setState({homeActive: 'active'});
                break;
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container navbar-content">
                    <a className="logo" href="#">
                        <img src={Logo}></img>
                    </a>
                    <div className="sections">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className={"nav-item " + this.state.homeActive}>
                                    <Link className="nav-link" to="/">Inicio</Link>
                                </li>
                                <li className={"nav-item " + this.state.aboutActive}>
                                    <Link className="nav-link" to="/nosotros">Nosotros</Link>
                                </li>
                                <li className={"nav-item " + this.state.productsActive}>
                                    <Link className="nav-link" to="/productos">Productos</Link>
                                </li>
                                <li className={"nav-item " + this.state.servicesActive}>
                                    <Link className="nav-link" to="/servicios">Servicios</Link>
                                </li>
                                <li className={"nav-item " + this.state.blogActive}>
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li className={"nav-item " + this.state.contactActive}>
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