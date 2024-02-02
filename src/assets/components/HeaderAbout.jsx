import '../styles/Header.css'
import { NavBarAbout } from './NavBarAbout'
import logo from '../images/perfil.jpg'
export const HeaderAbout = () =>{
    return( 
        <header className='topheader-about'>
            <nav className='topnav'>
                <a href="#" className='logo-about'>
                    <img src={logo} alt="perfil" 
                    height="50"
                    width="50"/>
                    <div>
                        Ing.William Muzo
                    </div>
                </a>
                <NavBarAbout/>
            </nav>
        </header>
    )
}