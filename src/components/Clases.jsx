import './Clases.css';
import ReactClass from '../assets/react-course.png';
import KaliClass from '../assets/kali-course.jpg';
import PythonClass from '../assets/python-course.png';
import CsharpClass from '../assets/csharp-course.png';
import JavaClass from '../assets/java-course.png';
import JavaScriptClass from '../assets/javascript-course.png';
import IngenieriaClass from '../assets/ing-course.png';
import Block from '../assets/block.png';
import Diamond from '../assets/diamond.png';
import Meet from '../assets/meet.png';
import { useState, useEffect } from 'react';
import { formatDistanceToNow, format } from 'date-fns';

function Clases() {
    const [timeLeft, setTimeLeft] = useState('');
    const [classDate, setClassDate] = useState('');

    useEffect(() => {
        const targetDate = new Date('2025-02-13T00:00:00'); 

        setClassDate(format(targetDate, 'dd MMMM yyyy'));

        const interval = setInterval(() => {
            setTimeLeft(formatDistanceToNow(targetDate, { addSuffix: true }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function alertJoin() {
        alert("Acceso no habilitado por el administrador.");
    }

    function alertProx() {
        alert("Intente nuevamente en el horario establecido.");
    }

    function alertEnd() {
        alert("La clase finalizó.");
    }

    let priceClass = 100;

    return (
        <div>
            <h1 className='title-news'>Anuncio de próximas clases</h1>
            <section className="clases">
                <div className="class">
                {/* Esta es la clase que hace el diseño de una clase activa = react-class-container */}
                    <div className="react-class-container">
                    
                        
                        {/* <div className="react-class-countdown">
                            <p><strong>Primera clase de Kali:</strong></p>
                            <p>El {classDate}</p> 
                            <p>19:20 p.m. Hora México (7:20)</p>
                            <a href="#" className='enlace-meet'>
                                <img src={ Meet } alt="meet" onClick={ alertEnd } className='meetIcon' />
                                <p className='join'>Finalizada</p>
                            </a>
                        </div> */}
                    </div>
                    <div className="lock-wrapper">
                    <img src={ KaliClass } alt="kali-class" className='class-new kali-i' />
                    <img src={ Block } alt="block" className="block-icon" />
                    </div>
                    <div className="lock-wrapper">
                    
                        <img src={ ReactClass } alt="react-class" className='class-new react-i' />
                        <img src={ Block } alt="block" className="block-icon" />
                    </div>
                    <div className="lock-wrapper">
                        <img src={ PythonClass } alt="python-class" className='class-new python-i' />
                        <img src={ Block } alt="block" className="block-icon" />
                    </div>
                    <div className="lock-wrapper">
                        <img src={ CsharpClass } alt="csharp-class" className='class-new cs-i' />
                        <img src={ Block } alt="block" className="block-icon" />
                    </div>
                    <div className="lock-wrapper">
                        <img src={ JavaClass } alt="java-class" className='class-new java-i' />
                        <img src={ Block } alt="block" className="block-icon" />
                    </div>
                    <div className="lock-wrapper">
                        <img src={ JavaScriptClass } alt="javascript-class" className='class-new javascript-i' />
                        <img src={ Block } alt="block" className="block-icon" />
                    </div>
                    <div className="lock-wrapper">
                        <img src={ IngenieriaClass } alt="ingeniería-class" className='class-new ingenieria-i' />
                        <img src={ Diamond } alt="block-diamond" className="block-icon" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export { Clases };
