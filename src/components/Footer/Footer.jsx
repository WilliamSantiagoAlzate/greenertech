//Import react libraries
import React, { Component } from "react";

//Create component
export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-light" style={{height: "60px"}}>
                <div className="container h-100">
                    <span className="m-auto">Copyright © 2020 GREENERT - Todos los derechos reservados.</span>
                </div>
            </footer>
        )
    }
}