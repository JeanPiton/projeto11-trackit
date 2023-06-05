import { useState, useContext, useEffect } from "react";
import { Div, Form, A } from "../../style/FormStyle";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../img/logo.svg";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import urls from "../../constants/urls";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //controls button text between Entrar and ThreeDots animation
    const [btn, setBtn] = useState("Entrar");
    //controls button and input disabled states
    const [input,setInput] = useState(false);
    const {user, SetUser} = useContext(UserContext);
    const navigate = useNavigate();

    //logins if UserContext alredy populated
    useEffect(()=>{
        if(user){
            navigate("/hoje")
        }
    },[])

    function doLogin(event){
        const data = {email, password}
        event.preventDefault();

        //disables form button and input
        setInput(true);
        setBtn(<ThreeDots color="white"/>);
        axios.post(urls.Login,data)
        .then(r=>{
            //stores user login data
            SetUser(r.data);
            localStorage.setItem("user",JSON.stringify(r.data));
            navigate("/hoje")
        })
        .catch(e=>{
            setInput(false);
            setBtn("Entrar");
            alert("erro");
        })
    }

    return(
        <Div>
            <img src={Logo}/>
            <Form onSubmit={doLogin}>
                <input data-test="email-input" type="email" name="email" placeholder="email" required disabled={input} value={email} onChange={e=>setEmail(e.target.value)}/>
                <input data-test="password-input" type="password" name="password" placeholder="senha" required disabled={input} value={password} onChange={e=>setPassword(e.target.value)}/>
                <button data-test="login-btn" disabled={input}>{btn}</button>
            </Form>
            <Link data-test="signup-link" to={"/cadastro"}><A>Não tem um conta? Cadastre-se!</A></Link>
        </Div>
    );
}