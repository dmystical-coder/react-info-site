import reactLogo from '../assets/react.svg'

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <img src={reactLogo} className='navbar--logo' alt="react logo" />
                <span className='navbar--logo_text'>ReactFacts</span>
            </div>
            <h4 className="navbar--title">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar