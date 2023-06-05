import { useState } from "react";
import { Div, Form, A } from "../../style/FormStyle";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import urls from "../../constants/urls";
import Logo from "../../img/logo.svg";

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image,setImage] =useState("");
    const [btn, setBtn] = useState("Cadastrar");
    //controls button and inputs disabled state
    const [input,setInput] = useState(false);
    const navigate = useNavigate();

    function SignUp(event){
        const data = {email, name, image, password}
        event.preventDefault();

        setInput(true);
        setBtn(<ThreeDots color="white"/>);
        //creates account and sends user to login page
        axios.post(urls.SignUp, data)
        .then(()=>navigate("/"))
        .catch(e=>{
            setInput(false);
            setBtn("Cadastrar");
            alert("erro");
        })
    }

    return(
        <Div>
            <img src={Logo}/>
            <Form onSubmit={SignUp}>
                <input data-test="email-input" type="email" name="email" placeholder="email" required disabled={input} value={email} onChange={e=>setEmail(e.target.value)}/>
                <input data-test="password-input" type="password" name="password" placeholder="senha" required disabled={input} value={password} onChange={e=>setPassword(e.target.value)}/>
                <input data-test="user-name-input" type="text" name="name" placeholder="nome" required disabled={input} value={name} onChange={e=>setName(e.target.value)}/>
                <input data-test="user-image-input" type="url" name="image" placeholder="foto" required disabled={input} value={image} onChange={e=>setImage(e.target.value)}/>                
                <button data-test="signup-btn" disabled={input}>{btn}</button>
            </Form>
            <Link data-test="login-link" to={"/"}><A>Já tem uma conta? Faça login!</A></Link>
        </Div>
    );
}