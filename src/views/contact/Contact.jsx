//Import react libraries
import React, { Component } from "react";

//Import components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

//Import style
import './Contact.css';

//Import images
import WhatsApp from '../../images/whatsapp.png'

//Create component
export default class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container bg-light contact-content">
                    <div className="contact-header">
                        <h1>Comunícate con nosotros</h1>
                        <h5>Conocer la opinión de nuestros clientes es muy importante para nosotros, extendemos la invitación a llenar nuestro formulario para solicitar información sobre los productos y servicios que ofrecemos. A la brevedad posible, uno de nuestros representantes atenderá la solicitud.</h5>
                    </div>
                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" placeholder="Nombre *"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" placeholder="Correo electronico *"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="workName" placeholder="Nombre de la empresa"/>
                            </div>
                            <div className="form-group">
                                <input type="number" className="form-control" id="phone" placeholder="Número de teléfono"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="content" rows="4" placeholder="Mensaje"></textarea>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="checkbox"/>
                                <label className="form-check-label" forhtml="checkbox">Inscríbete para nuestra lista de correo electrónico para recibir actualizaciones, promociones y más.</label>
                            </div>
                            <button type="submit" className="btn btn-outline-secondary btn-lg">Enviar</button>
                        </form>
                    </div>
                    <div className="wa-content">
                        <a href="" className="wa-button"><img alt="whatsapp" src={WhatsApp}/> Háblanos por WhatsApp</a>
                    </div>
                    <div className="contact-info">
                        <div className="info">
                            <h4>GREENERT</h4>
                            <br/>
                            <p>Bolivia</p>
                            <br/>
                            <p>¡Llámanos!</p>
                            <p>(+59) 178312224</p>
                        </div>
                        <div className="info">
                            <h4>Horario</h4>
                            <br/>
                            <p>Lunes a Viernes de 08:00 am a 05:00 pm</p>
                            <br/>
                            <p>Aceptamos</p>
                            <p>Efectivo, Cheque, Visa, MasterCard, American Express, Transferencia Electrónica</p>
                        </div>
                    </div>
                </div> 
                <Footer/>
            </div>
        )
    }
}