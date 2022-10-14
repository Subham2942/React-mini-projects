import React from "react";

const AuthContext = React.createContext({
    isLoggIn: false,
    onLogOut: ()=>{}
});

export default AuthContext;