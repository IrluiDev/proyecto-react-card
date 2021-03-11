import React from 'react'
import '../assets/Menu.css'

function Menu() {
    return (
        <div className="Barra">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <a href="#" className="navbar-brand">Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#colapsado">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="colapsado">
                    <ul className="navbar-nav">   
                        <li className="nav-item"><a href="#" clas="nav-link">Enlace 1</a></li>
                        <li className="nav-item"><a href="#" clas="nav-link">Enlace 2</a></li>
                        <li className="nav-item dropdown">
                            <a href="#" clas="nav-link dropdown-toggle" data-toggle="dropdown" id="navbardrop">Enlace 3 +</a>
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item">Subenlace</a>
                                <a href="#" className="dropdown-item">Subenlace</a>
                                <a href="#" className="dropdown-item">Subenlace</a>
                                <a href="#" className="dropdown-item">Subenlace</a>
                            </div>
                        </li>
                    </ul> 
                </div>    
            </nav>
        </div>
    )
}

export default Menu