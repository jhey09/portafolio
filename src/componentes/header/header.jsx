import './header.css'

const Header = () => { 

    
    return(

        
    <header className="header" >
        <nav className="navbar">
            <span className="logo">
                <h1>JHEYSON M.</h1>
            </span>
            <input type="checkbox" aria-label="Checkbox para mostrar y quitar hamburger menu"
                className="checkbox"/>
            <div className="hamburger__lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <div className="header__info">
                <ul className="">
                   <a href=""><li >Sobre mí</li></a>
                    <a href=""><li>Proyectos</li></a>
                    <a href=""><li >Contacto</li></a>
                </ul>
            </div>
        </nav>
    </header>

) }

export default Header