import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import LoginformComponent from './LoginformComponent'
import HomeComponent from './HomeComponent'
import ErrorComponent from './ErrorComponent';
import HeaderComponent from './HeaderComponent';
import EmployeeListComponent from './EmployeeListComponent';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import AuthenticationRoute from './AuthenticationRoute'
function Employee(){
    return(
        <div>
            <Router>
                <HeaderComponent></HeaderComponent>
                <Switch>
                <Route path="/" exact component={LoginformComponent}></Route>
                <Route path="/login" exact  component={LoginformComponent}></Route>
                <AuthenticationRoute path="/home" exact  component={HomeComponent}></AuthenticationRoute>
                <AuthenticationRoute path="/employee-list" exact  component={EmployeeListComponent}></AuthenticationRoute>
                <AuthenticationRoute path="/logout" exact  component={LogoutComponent}></AuthenticationRoute>
                <Route    component={ErrorComponent}></Route>
                </Switch>
                <FooterComponent></FooterComponent>
            </Router>
        </div>
    )
}
export default Employee;