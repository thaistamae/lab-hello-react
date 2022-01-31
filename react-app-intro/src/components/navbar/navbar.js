import Logo from '../logo/logo.js';
import MenuTop from '../menuTop/menuTop.js';
import './navbar.css'

function navbar(){
    return (
        <div className="navBar">
            <Logo />
            <MenuTop />
        </div>
    )
}

export default navbar;