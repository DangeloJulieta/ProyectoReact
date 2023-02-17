import { Link } from "react-router-dom"
export const Categorias = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className="btn btn-light">Tienda</button>
            </a>
            
            <ul className="dropdown-menu">
                <li><a href="#" className="dropdown-item">Vinos &raquo;</a>
                    <ul className="dropdown-menu submenu">
                        <li><Link className="dropdown-item" to={'/category/tintos'}>Tintos</Link></li>
                        <li><Link className="dropdown-item" to={'/category/blancos'}>Blancos</Link></li>
                        <li><Link className="dropdown-item" to={'/category/espumantes'}>Espumantes</Link></li>
                    </ul>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to={'/category/otras'}>Otras bebidas</Link></li>
            </ul>
        </li>
    );
}