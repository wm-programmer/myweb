import React,{useState} from 'react'
import '../styles/Header.css'
import btn_abrir from '../images/hamburger-icon.svg'
import btn_cerrar from '../images/close-icon.svg'

export const NavBar = () =>{
    const [burgerActive, setBurgerActive] = useState(true)

    const toggleMenu = () => {
        setBurgerActive(!burgerActive)
    }
    return( 
        <>
        <button className={`open-menu ${burgerActive ? '' : 'hide'}`}
        onClick={toggleMenu} src={btn_abrir}>
            {/* <img src={btn_abrir} alt="abrir menú" /> */}
            <div></div>
            <div></div>
            <div></div>
        </button>
        
        
        <ul className={`menu ${burgerActive ? '' : 'open'}`}>
            <button className={`close-menu ${burgerActive ? 'hide' : ''}`}
            onClick={toggleMenu}>
                <img src={btn_cerrar} alt="cerrar menú" />
             
            </button>
            <li><a href="#about" className='btn1'><span>About</span></a></li>
            <li><a href="#portafolio"><span>Portafolio</span></a></li>
            <li><a href="#laboratorio"><span>Laboratorios</span></a></li>
            <li><a href="#contacto"><span>Contacto</span></a></li>
          
            
        </ul>
        
        </>
        )
}