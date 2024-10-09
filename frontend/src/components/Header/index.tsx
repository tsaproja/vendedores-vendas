import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="tsmeta-logo-container">
                <img src={logo} alt="TSMeta" />
                <h1>TSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/tiagotsa">@github-tiagotsa</a>
                </p>
            </div>
        </header>
    )
}

export default Header;

