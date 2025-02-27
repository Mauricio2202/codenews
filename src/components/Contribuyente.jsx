import './Contribuyente.css'
import Silueta from '../assets/silueta.jpg'
import ContributorTheMonth from '../assets/contributors/Jeilin-Developer.jpg';

function Contribuyente() {

    let nameContributor = 'Jeilin Developer';

    return (
        <div>
            <div className="cont-title">
            <div className="circle"></div>
                <h1 className='contribuyente'>Contribuyente del mes</h1>
            </div>
            <h2 className='subtitle-contribuyente'>Espacio libre para un nuevo contribuyente</h2><br />
            <section className='container-contribuyente'>
            <div className="marco">
                <img src={ Silueta } alt="silueta" className="colaborator" />
                {[...Array(15)].map((_, i) => (
                <span key={i} className="estrellas"></span>
                ))}
                </div>
            </section><br /><br />
            {/* <article className="features">
                <div className="caracter">
                    Programación de bot
                </div>
                <div className="caracter caract-i">
                    Ayuda continua
                </div>
                <div className="caracter">
                    Asesoramiento
                </div>
                <div className="caracter">
                    Creación de proyectos
                </div>
            </article> */}
        </div>
    )
}

export { Contribuyente };