import { Link } from 'react-router-dom';

// import the scss style for the header
import './header.scss';

// create the header for the app
const Header = (props) =>{
    return(
        <header>
            <h1 className="App-header">
                RESTy
            </h1>
            <nav>
                <ul>
                    
                    <Link to="/">Home</Link>&nbsp; &nbsp;
                    <Link to="/history">History</Link>&nbsp; &nbsp;
                    <Link to="/help">Help</Link>
                </ul>
            </nav>
        </header>
    );
}


// export the header to add it to the app
export default Header;