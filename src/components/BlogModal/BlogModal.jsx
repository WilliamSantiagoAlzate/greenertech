//Import react libraries
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Import jquery selector
import $ from 'jquery';

//Import image
import Image from '../../images/logo.png'

export default class BlogModal extends Component {

    componentDidMount() {
        $("#exampleModal").modal("show");
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog" role="document" style={{maxWidth: "350px"}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Blog</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                <img src={Image} className="card-img-top" alt="picture"/>
                                <div className="card-body">
                                    <h5 className="card-text">Pruebas estadounidenses confirman la efectividad de la tecnología IRC contra la cepa de Coronavirus.</h5>
                                    <Link className="btn btn-primary mt-3" to="/blog">Leer</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}