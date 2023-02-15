import { CartWidget } from "../CartWidget/CartWidget";
import { Categorias } from "./Categorias/Categorias";
import { Secciones } from "./Secciones/Secciones";
import { Logo } from "./Logo/Logo.jsx";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div>
            <Logo />
            </div>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Secciones />
                        <Categorias />
                    </ul>
                    <CartWidget cantCarrito={3} />
                </div>
            </div>
        </nav>
    );
}