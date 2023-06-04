import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}){
    const [user, setUser] = useState();
    const [tasks, setTasks] = useState({done:0, total:0});

    function SetUser(p){
        setUser(p);
    }

    function SetTasks(o){
        setTasks(o);
    }

    return(
        <UserContext.Provider value={{user, SetUser, tasks, SetTasks}}>{children}</UserContext.Provider>
    );
}

export default UserContext;