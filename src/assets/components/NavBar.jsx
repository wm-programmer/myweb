import '../styles/Header.css'

export const NavBar = () =>{
    return( 
        <>
        <ul className='menu'>
            <li><a href="#about"><span>About</span></a></li>
            <li><a href="#portafolio"><span>Portafolio</span></a></li>
            <li><a href="#laboratorio"><span>Laboratorios</span></a></li>
            <li><a href="#contacto"><span>Contacto</span></a></li>
        </ul>
        </>
        )
}