import { Link, Outlet } from 'react-router-dom';
import { Home } from './Home';
import { Clases } from './Clases';

const Layout = () => {
    
return (
    <div>
    <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="news">Noticias</Link></li>
            <li><Link to="contribuyente">Contribuyente</Link></li>
        </ul>
    </nav>

    <Outlet /> 
    <Home />
    <Clases />
    </div>
);
};

export default Layout;
