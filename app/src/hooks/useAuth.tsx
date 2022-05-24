import React from "react";


let useAuth = () => {
    let isLogedin = localStorage.getItem('full_name');
    if(isLogedin) {
        return true;
    }
    return false;
}

export default useAuth;