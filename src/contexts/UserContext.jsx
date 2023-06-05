import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}){
    //gets localStorage user info = [{id:int,name:"",image:"",email:"",password:"",token:""}]
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    //info for the progress wheel
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

//context with user information
export default UserContext;