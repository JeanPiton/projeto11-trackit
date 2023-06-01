import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}){
    const [user, setUser] = useState();

    function SetUser(p){
        setUser(p);
    }

    return(
        <UserContext.Provider value={{user, SetUser}}>{children}</UserContext.Provider>
    );
}

export default UserContext;