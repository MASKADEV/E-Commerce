
let useAuth = () => {
    let token = localStorage.getItem('token');
    if(token) {
        return true;
    }
    return false;
}

export default useAuth;