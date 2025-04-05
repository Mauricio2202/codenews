import './Clases.css';
import ReactClass from '../assets/react-course.png';
import KaliClass from '../assets/kali-course.jpg';
import PythonClass from '../assets/python-course.png';
import JavaClass from '../assets/java-course.png';
import JavaScriptClass from '../assets/javascript-course.png';
import IngenieriaClass from '../assets/ing-course.png';
import RedesClass from '../assets/redes-course.png';
import JavaIntroClass from '../assets/javai-course.jpg';
import NodeClass from '../assets/cnodejs.png';
import Block from '../assets/block.png';
import Diamond from '../assets/diamond.png';
import Meet from '../assets/meet.png';
import { useState, useEffect } from 'react';
import { formatDistanceToNow, format } from 'date-fns';

function Clases() {
    const [timeLeft, setTimeLeft] = useState('');
    const [classDate, setClassDate] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const targetDate = new Date('2025-03-22T00:00:00');
        setClassDate(format(targetDate, 'dd MMMM yyyy'));
        const interval = setInterval(() => {
            setTimeLeft(formatDistanceToNow(targetDate, { addSuffix: true }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1 className='title-news'>Anuncio de próximas clases</h1>
            <section className="clases">
                <div className="class">
                <div className="react-class-container">
                        <img src={ IngenieriaClass } alt="ingenieria-class" className='class-new ingenieria-i' />
                        <div className="react-class-countdown">
                            <p className='classTitle'><strong>Curso Ingeniería de Software</strong></p>
                            {/* <p>El { classDate } - 07:30 p.m.</p>  */}
                            <p>PRÓXIMAMENTE</p> 
                            <a href="#" className="enlace-meet" onClick={(e) => { 
                                e.preventDefault(); 
                                setModalOpen(true); 
                            }}>
                            <img src={ Meet } alt="meet" className='meetIcon' />
                            <p className='join'>EXCLUSIVO</p>
                            </a>
                        </div>
                    </div>
                    <div className="lock-wrapper">
                        <img src={ KaliClass } alt="kali-class" className='class-new kali-i' />
                        <img src={Block} alt="block" className="block-icon" />
                    </div>
                    <div className="lock-wrapper">
                        <img src={ RedesClass } alt="redes-class" className='class-new redes-i' />
                        <img src={Block} alt="block" className="block-icon" />
                    </div>
                    <div className="lock-wrapper">
                        <img src={ JavaIntroClass } alt="kali-class" className='class-new javai-i' />
                        <img src={Block} alt="block" className="block-icon" />
                    </div>
                    <div className="lock-wrapper">
                        <img src={ReactClass} alt="react-class" className='class-new react-i' />
                        <img src={Block} alt="block" className="block-icon" />
                    </div>
                    <div className="lock-wrapper">
                        <img src={NodeClass} alt="node-class" className='class-new node-i' />
                        <img src={Block} alt="block" className="block-icon" />
                    </div>
                    <div className="lock-wrapper">
                        <img src={JavaClass} alt="java-class" className='class-new java-i' />
                        <img src={Block} alt="block" className="block-icon" />
                    </div>
                    <div className="lock-wrapper">
                        <img src={JavaScriptClass} alt="javascript-class" className='class-new javascript-i' />
                        <img src={Block} alt="block" className="block-icon" />
                    </div>
                    {/* <div className="lock-wrapper">
                        <img src={IngenieriaClass} alt="ingeniería-class" className='class-new ingenieria-i' />
                        <img src={Diamond} alt="block-diamond" className="block-icon" />
                    </div> */}
                    <div className="lock-wrapper">
                        <img src={PythonClass} alt="python-class" className='class-new python-i' />
                        <img src={Block} alt="block-diamond" className="block-icon" />
                    </div>
                </div>
            </section>
            {modalOpen && (
    <div className="modal-overlay" onClick={() => setModalOpen(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content-inner">
                <h1>¡Aprende la forma profesional de construir software escalable!</h1>
                <p style={{textAlign: 'center', marginBottom: '0.5rem'}}>Curso de 5 meses para tu preparación profesional</p>
                
                <div className="price-section">
                    <p style={{marginBottom: '0.5rem'}}>Oferta especial (primeros 5) Solo quedan 3 cupos:</p>
                    <div className="price-tag">$30 Dólares</div>
                    <p style={{marginTop: '0.5rem', fontSize: '0.9rem'}}>Precio regular: $40 Dólares</p>
                </div>
                
                <h2 style={{textAlign: 'center', margin: '0.8rem 0 0.5rem'}}>¿Qué incluye el curso?</h2>
                
                <div className="features-grid">
                    {[
                        "Proyecto real para portafolio",
                        "Mentoría individual",
                        "Materiales descargables",
                        "Reconocimiento en la plataforma CodePulse",
                        "Admin en el grupo de Desarrollo Web tras aportar recursos",
                        "Certificado de finalización",
                        "Archivo de Inglés B1"
                    ].map((feature, index) => (
                        <div key={index} className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
                
                <p className="coming-soon">Más novedades próximamente...</p>
                
                <button onClick={() => setModalOpen(false)}>
                    Cerrar
                </button>
            </div>
        </div>
    </div>
)}
        </div>
    );
}

export { Clases };
