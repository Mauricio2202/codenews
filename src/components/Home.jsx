import '../App.css'
import ReactLogo from '../assets/react.png';
import JavaLogo from '../assets/java.png';
import CSharpLogo from '../assets/csharp.png';
import PythonLogo from '../assets/python.png';
import KaliLogo from '../assets/kali.png';

function Home() {

    return (
        <div>
            <div className="cont-title">
                <div className="circle"></div>
                <h1>Noticias CodePulse</h1>
            </div>
            <article>
                <p>
                    ¡Hola a todos! <br /> En esta página encontrarás noticias sobre CodePulse, incluyendo actualizaciones
                    sobre nuevas clases, eventos tecnológicos relevantes y recursos descargables. También publicaremos 
                    explicaciones solicitadas por la comunidad de manera semanal. <br /><br />

                    Si aún no formas parte de nuestra comunidad, puedes unirse con el botón que encontrarás abajo. <br /><br />

                    Además, destacaremos a la persona más activa y colaborativa de la comunidad, mostrando su nombre y foto
                    en la sección de contribuyente del mes.
                </p>
                <a href="https://chat.whatsapp.com/GpZP3i6ePsgErmukEFcJl5" className='comunnity'>
                    Comunidad
                </a>
                <div className="languajes">
                    <img src={ ReactLogo } alt="React" className='react icon'/>
                    <img src={ JavaLogo } alt="Java" className='java icon'/>
                    <img src={ PythonLogo } alt="Python" className='python icon'/>
                    <img src={ CSharpLogo } alt="C#" className='csharp icon'/>
                    <img src={ KaliLogo } alt="Kali" className='kali icon'/>
                </div>
            </article>
        </div>
    )
}


export { Home };