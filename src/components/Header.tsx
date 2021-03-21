import logo from '../logo.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="header-brand">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Header</p>
            </div>
        </div>
    )
}

export default Header