import './Contribuyente.css'
import Silueta from '../assets/silueta.jpg'
import Dancar from '../assets/contributors/dancarDev.jpg';

function Contribuyente() {

    let nameContributor = '¿Qué esperas para serlo?, el mes aún no termina';

    return (
        <div>
            <div className="cont-title">
            <div className="circle"></div>
                <h1 className='contribuyente'>Contribuyente del mes</h1>
            </div>
            <h2 className='subtitle-contribuyente'>{ nameContributor }</h2><br />
            <section className='container-contribuyente'>
            <div className="marco">
                <img src={ Silueta } alt="silueta" className="colaborator" />
                {[...Array(15)].map((_, i) => (
                <span key={i} className="estrellas"></span>
                ))}
                </div>
            </section><br /><br />
            <article className="features">
                <div className="caracter">
                    Destaca tu actividad en la comunidad
                </div>
                <div className="caracter caract-i">
                    Resuelve dudas en la comunidad
                </div>
                <div className="caracter">
                    Comparte recursos tecnológicos
                </div>
                <div className="caracter">
                    Se influyente
                </div>
            </article>
        </div>
    )
}

export { Contribuyente };