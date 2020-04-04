//Import react libraries
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Import components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import BlogModal from '../../components/BlogModal/BlogModal';

//Import style
import './Home.css';

//Create component
export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Slider/>
                <div className="container home-content">
                    <div className="home-description">
                        <h3>La calidad de vida comienza en el aire que respiran</h3>
                        <p>Combinamos conocimiento y tecnología para mejorar la calidad de aire que respiras.</p>
                        <h3>¿Por qué GREENT?</h3>
                        <p>Los beneficios de purificación de aire van más allá de la limpieza y el control de calidad. Nuestros productos impactan positivamente en la vida de los clientes.</p>
                        <h3>Beneficios</h3>
                        <ul>
                            <li>Mayor control de salud</li>
                            <li>Reducción de costos</li>
                            <li>Mayor productividad</li>
                            <li>Bienestar para todos</li>
                        </ul>
                    </div>
                </div> 
                <div className="home-soluctions">
                    <h3>Descubre nuestras soluciones</h3>
                    <div className="home-buttons">
                        <Link to="/productos" className="btn btn-light btn-lg">Productos</Link>
                        <Link to="/servicios" className="btn btn-light btn-lg">Servicios</Link>
                    </div>
                </div>
                <Footer/>
                <BlogModal/>
            </div>
        )
    }
}