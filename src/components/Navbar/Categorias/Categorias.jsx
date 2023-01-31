export const Categorias = () => {
    return (
        <li className="nav-item dropdown" id="Cat">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tienda</a>
            <ul className="dropdown-menu">
                <li><a href="#" className="dropdown-item">Vinos &raquo;</a>
                    <ul className="dropdown-menu submenu">
                    <li><a className="dropdown-item" href="#">Tintos</a></li>
                    <li><a className="dropdown-item" href="#">Blancos</a></li>
                    <li><a className="dropdown-item" href="#">Espumantes</a></li>
                    <li><a className="dropdown-item" href="#">Otros</a></li>
                    </ul>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Otras bebidas</a></li>
            </ul>
        </li>
    );
}