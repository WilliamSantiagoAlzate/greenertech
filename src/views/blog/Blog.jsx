//Import react libraries
import React, { Component } from "react";

//Import jquery
import $ from 'jquery';

//Import components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

//Import style
import './Blog.css';

//Import images
import Chart1 from '../../images/chart1.jpeg';
import Chart2 from '../../images/chart2.jpeg';
import Chart3 from '../../images/chart3.jpeg';
import Chart4 from '../../images/chart4.jpeg';

//Create component
export default class Blog extends Component {
    //Remove modal
    componentWillMount() {
        let element = document.getElementsByClassName('modal-backdrop');
        if (element.length === 1) {
            element[0].parentNode.removeChild(element[0]);
            $('body').removeClass('modal-open');
        };
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container blog-content">
                    <h1>Pruebas estadounidenses confirman la efectividad de la tecnología IRC contra la cepa de Coronavirus.</h1>
                    <div className="author">
                        <p><span>Por: </span>Ecoquest</p>
                        <p><span>Publicado: </span>4 de marzo de 2020</p>
                    </div>
                    <p>Las pruebas realizadas hace unos días por la FDA (Food and Drug Administration) en asociación con Aerus, trajeron buenas noticias sobre la lucha contra el coronavirus.</p>
                    <p>Los estudios de laboratorio han demostrado que la tecnología IRC (ionización catalítica radioeléctrica) fue capaz de eliminar, en solo 15 minutos, el 99,99% de los patógenos de tipo ARN, de la misma cepa de coronavirus.</p>
                    <p>Las pruebas se llevaron a cabo utilizando el virus MS2, un tipo de organismo con la misma estructura celular que el coronavirus. Según los científicos, si la tecnología es capaz de eliminar MS2, también podrá desactivar el coronavirus.</p>
                    <p>La tecnología IRC, patentada por la NASA y ofrecida en Bolivia por Greener teck, se basa en los principios activos del poder de la luz sobre los metales catalizadores nobles, que reaccionan con el agua y la humedad ambiental. Esta reacción genera especies activas de purificación de aire sanitario, ecológicas y naturales, basadas en oxígeno e hidrógeno, y capaces de destruir potentes contaminantes químicos, microbiológicos y gaseosos, que representan un riesgo para la salud humana.</p>
                    <p>La implementación del sistema de purificación IRC en las unidades centrales de aire acondicionado de los edificios se muestra cada vez más como una medida primaria de seguridad sanitaria.</p>
                    <p>En la crisis de la gripe aviar en 2006, la tecnología IRC de Ecoquest mostró resultados en la desactivación del virus y fue ampliamente utilizada en entornos con alta circulación de personas, como aeropuertos.</p>
                    <p>En 2009, en la crisis de la gripe porcina, se produjo un nuevo estudio científico preliminar que muestra la inactivación del virus en unas pocas horas. Los hospitales en los Estados Unidos  han adoptado tecnología en atención de emergencia y convulsiones para prevenir el contagio.</p>
                    <p>La tecnología IRC se ofrece exclusivamente en Bolivia por Greener teck. Desarrollada y patentada por la NASA, la agencia espacial estadounidense, la solución IRC se utiliza para garantizar la calidad del aire interior en naves espaciales y estaciones espaciales.</p>
                    <p>La estrategia de la NASA fue agregar diferentes tecnologías en un solo sistema. Por lo tanto, la luz ultravioleta germicida reacciona con el agua y la humedad ambiental, generando especies activas de purificación sanitaria en el aire, a base de oxígeno e hidrógeno, capaces de destruir el virus de la gripe entre otros microorganismos (bacterias, hongos, etc.) . La ventaja es que este sistema de purificación es ecológico, natural y no presenta riesgos para la salud humana, animal o vegetal.</p>
                    <p>En este momento delicado, debemos comprender que cada actitud, desde el simple lavado de manos hasta el uso de tecnologías avanzadas de prevención, es fundamental para prevenir nuevos brotes.</p>
                    <p>A continuación, los gráficos con los resultados del estudio, recibidos por Ecoquest:</p>
                    <div className="images">
                        <img src={Chart1} alt="chart1"/>
                        <img src={Chart2} alt="chart1"/>
                        <img src={Chart3} alt="chart1"/>
                        <img src={Chart4} alt="chart1"/>
                    </div>
                </div> 
                <Footer/>
            </div>
        )
    }
}