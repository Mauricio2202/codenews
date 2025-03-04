import './Contribuyente.css'
import Silueta from '../assets/silueta.jpg'
import ContributorTheMonth from '../assets/contributors/dancarDev.jpg';

function Contribuyente() {

    let nameContributor = 'Dancar Dev Cibersecurity';

    return (
        <div>
            <div className="cont-title">
            <div className="circle"></div>
                <h1 className='contribuyente'>Contribuyente del mes</h1>
            </div>
            <h2 className='subtitle-contribuyente'>{ nameContributor }</h2><br />
            <section className='container-contribuyente'>
            <div className="marco">
                <img src={ ContributorTheMonth } alt="silueta" className="colaborator" />
                {[...Array(15)].map((_, i) => (
                <span key={i} className="estrellas"></span>
                ))}
                </div>
            </section><br /><br />
            <article className="features">
                <div className="caracter">
                    Clases de forma activa
                </div>
                <div className="caracter caract-i">
                    Resolución de dudas
                </div>
                <div className="caracter">
                    Ciberseguridad
                </div>
                <div className="caracter">
                    Apoyo emocional
                </div>
            </article>
        </div>
    )
}

export { Contribuyente };