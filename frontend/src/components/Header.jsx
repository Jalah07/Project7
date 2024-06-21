import '../index.scss';
import logo from '../images/icon-left-font-monochrome-black.svg'

function Header() {
    return (
        <div>
            <header className="header">
                <img
                    src={logo}
                    className="header__img"
                    alt="Groupomania logo"
                />
            </header>
        </div>
    );
}

export default Header;