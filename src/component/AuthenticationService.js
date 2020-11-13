

class AuthenticationService{
    registrationSuccesLogin(username,password){
        sessionStorage.setItem('authenticatedUser',username);
    }
    isLogout(){
        sessionStorage.removeItem('authenticatedUser');
    }
    isLogin(){
        let item = sessionStorage.getItem('authenticatedUser');
        if(item===null) return false;
        return true;
    }
}
export default new AuthenticationService()