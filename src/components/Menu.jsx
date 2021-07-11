import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Menu(props) {
    return (

        <div>
            <nav>
                <ul>

                    <li>
                        <NavLink exact to="/">
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <Link exact to="/login">
                            Iniciar Sesión
                        </Link>
                    </li>
                    <li>
                        <Link exact to="/registro">
                            Registrarse
                        </Link>
                    </li>
                    <li>
                        <Link exact to="/perfil">
                            Perfil
                        </Link>
                    </li>
                    <li>
                        <Link exact to="/capacitaciones">
                            Capacitaciones
                        </Link>
                    </li>
                    <li>
                        <Link exact to="/emprendedores">
                            Emprendedores
                        </Link>
                    </li>

                    <li>
                        <button>
                            Cerrar Sesión
                        </button>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default Menu;