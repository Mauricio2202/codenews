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
                        <img src={ JavaScriptClass } alt="javascript-class" className='class-new javascript-i' />
                        <div className="react-class-countdown">
                            <p className='classTitle'><strong>Clase #2 JavaScript</strong></p>
                            <p>El { classDate } - 07:30 p.m.</p> 
                            <a href="#" className="enlace-meet" onClick={(e) => { 
                                e.preventDefault(); 
                                setModalOpen(true); 
                            }}>
                            <img src={ Meet } alt="meet" className='meetIcon' />
                            <p className='join'>Ahora si dame clic</p>
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
                    {/* <div className="lock-wrapper">
                        <img src={JavaScriptClass} alt="javascript-class" className='class-new javascript-i' />
                        <img src={Block} alt="block" className="block-icon" />
                    </div> */}
                    <div className="lock-wrapper">
                        <img src={IngenieriaClass} alt="ingeniería-class" className='class-new ingenieria-i' />
                        <img src={Diamond} alt="block-diamond" className="block-icon" />
                    </div>
                    <div className="lock-wrapper">
                        <img src={PythonClass} alt="python-class" className='class-new python-i' />
                        <img src={Block} alt="block-diamond" className="block-icon" />
                    </div>
                </div>
            </section>
            {modalOpen && (
                <div className="modal-overlay" onClick={() => setModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <p>¡Uy la clase ya acabó!</p>
                        <button onClick={() => setModalOpen(false)}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export { Clases };
