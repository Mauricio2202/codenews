import './Contribuyente.css'
import Silueta from '../assets/silueta.jpg'
import Caballero from '../assets/contributors/caballero.jpg';

function Contribuyente() {

    let nameContributor = 'Isaias Caballero';

    return (
        <div>
            <div className="cont-title">
            <div className="circle"></div>
                <h1 className='contribuyente'>Contribuyente del mes</h1>
            </div>
            <h2 className='subtitle-contribuyente'>{ nameContributor }</h2><br />
            <section className='container-contribuyente'>
            <div className="marco">
                <img src={ Caballero } alt="silueta" className="colaborator" />
                {[...Array(15)].map((_, i) => (
                <span key={i} className="estrellas"></span>
                ))}
                </div>
            </section><br /><br />
            <article className="features">
                <div className="caracter">
                    Creación de aplicaciones móviles
                </div>
                <div className="caracter caract-i">
                    Obtuvo trabajo haciendo proyectos
                </div>
                <div className="caracter">
                    Da los buenos días
                </div>
                <div className="caracter">
                    Es influyente
                </div>
            </article><br />
            <article className="features">
                <div className="caracter">
                    Carismático
                </div>
            </article>
        </div>
    )
}

export { Contribuyente };