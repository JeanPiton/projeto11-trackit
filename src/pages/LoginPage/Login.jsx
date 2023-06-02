import { useState, useContext } from "react";
import { Div, Form, A } from "../../style/FormStyle";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import urls from "../../constants/urls";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [btn, setBtn] = useState("Entrar");
    const [input,setInput] = useState(false);
    const {user, SetUser} = useContext(UserContext);
    const navigate = useNavigate();

    function doLogin(event){
        const data = {email, password}
        event.preventDefault();

        setInput(true);
        setBtn(<ThreeDots color="white"/>);
        axios.post(urls.Login,data)
        .then(r=>{
            SetUser(r.data);
            navigate("/hoje")
        })
        .catch(e=>{
            console.log(e);
            setInput(false);
            setBtn("Cadastrar");
            alert("erro");
        })
    }

    return(
        <Div>
            <Form onSubmit={doLogin}>
                <input type="email" name="email" placeholder="email" required disabled={input} value={email} onChange={e=>setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="senha" required disabled={input} value={password} onChange={e=>setPassword(e.target.value)}/>
                <button disabled={input}>{btn}</button>
            </Form>
            <Link to={"/cadastro"}><A>Não tem um conta? Cadastre-se!</A></Link>
        </Div>
    );
}