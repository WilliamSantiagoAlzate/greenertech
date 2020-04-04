//Import react libraries
import React, { Component } from "react";

//Import style
import './Footer.css';

//Create component
export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-light">
                <div className="container h-100 footer">
                    <span>Copyright © 2020 GREENERT - Todos los derechos reservados.</span>
                </div>
            </footer>
        )
    }
}