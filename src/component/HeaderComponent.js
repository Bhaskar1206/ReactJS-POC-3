import {Link} from 'react-router-dom';
import {withRouter} from 'react-router'
import AuthenticationService from './AuthenticationService'

function HeaderComponent(){

    const user = AuthenticationService.isLogin();
    console.log(user);


    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav ">
                        {user && <li ><Link className="nav-link" to="/home">Home</Link></li>}
                        {user && <li ><Link className="nav-link" to="/employee-list">Employee-list</Link></li>}
                    </ul>
                    <ul className="navbar-nav  navbar-collapse justify-content-end">
                        {!user && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {user &&<li><Link className="nav-link" to="/logout" onClick={AuthenticationService.isLogout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        </div>
    )

}
export default withRouter(HeaderComponent);