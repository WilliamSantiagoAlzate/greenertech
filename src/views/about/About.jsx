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
                <div className="container">
                    <h1>TU BIENESTAR ES NUESTRO PUNTO DE PARTIDA</h1>
                    <div className="about-container">
                        <div className="about-info about-content">
                            <h3>Quiénes somos:</h3>
                            <p>Greener Tech Bolivia nació en el año 2020, la cual siempre ha estado cimentada en el compromiso auténtico con la satisfacción del cliente. Este estándar de excelencia nos ha permitido crecer hasta llegar a donde estamos ahora. Para más información sobre nuestros productos y servicios.</p>
                            <h3>Visión 2023:</h3>
                            <p>Consolidarnos como una empresa líder a nivel nacional en el sector de la ingeniería y la construcción con proyectos que cumplen con los tiempos establecidos, con alta calidad y con total respeto al medio ambiente, logrando así exportar nuestra experiencia a países latinoamericanos.</p>
                            <h3>Misión:</h3>
                            <p>Proporcionar una solución total para problemas ambientales de interiores en estructuras comerciales y nuevas construcciones residenciales. Nuestro papel es proporcionar productos de calidad, capacitación, pruebas y recursos a nuestros distribuidores, diseñados para servir a clientes comerciales e institucionales con profesionalismo, cortesía y experiencia. Es así que nuestra tecnología ActivePure® en los productos de Ecoquest ha sido rigurosamente probada para determinar su efectividad en el aire y en las superficies expuestas. </p>
                        </div>
                        <div className="about-picture about-content">

                        </div>
                    </div>
                </div> 
                <Footer/>
            </div>
        )
    }
}