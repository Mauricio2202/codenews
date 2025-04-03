import './News.css'
import NoticeReact from '../assets/notices/react-notice.png';
import NoticeCodeFlow from '../assets/notices/codeflow.jpg';

function News() {
    return (
        <div>
            <div className="cont-title">
                <div className="circle"></div>
                <h1 className='news'>Noticias tecnológicas</h1>
            </div>
            <article className='cont-notices'>
                <div className="notice">
                    <h2 className='subtitle-news'>Create-React-App queda - <span className='recalc'>Obsoleto</span></h2>
                    <a href="https://github.com/facebook/create-react-app">
                    <img src={ NoticeReact } alt="notice" className='image' />
                    </a>
                </div>
                <p className='desc-notice'>
                    Create React App (CRA) ya no se recomienda para crear nuevos proyectos de React. El equipo de desarrollo 
                    de React lo ha eliminado de la cuenta oficial. Como se muestra en GitHub como <br />
                    Deprecated (Obsoleto). Y ahora se ha marcado como "en desuso". Por lo que ahora se <br />
                    recomienda utilizar React con Vite, lo que hará más rápidos los proyectos que trabajes en este dichoso
                    Framwork o Librería de Javascript.
                </p>
            </article>
        </div>
    )
}

export { News };