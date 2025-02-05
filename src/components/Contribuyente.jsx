import './Contribuyente.css'
import Silueta from '../assets/silueta.jpg'

function Contribuyente() {
    return (
        <div>
            <div className="cont-title">
            <div className="circle"></div>
                <h1 className='contribuyente'>Contribuyente del mes</h1>
            </div>
            <h2 className='subtitle-contribuyente'>Aún no hay...¿Qué esperas para serlo?</h2><br />
            <section className='container-contribuyente'>
            <div className="marco">
                <img src={Silueta} alt="silueta" className="colaborator" />
                {[...Array(15)].map((_, i) => (
                <span key={i} className="estrellas"></span>
                ))}
                </div>
            </section>
        </div>
    )
}

export { Contribuyente };