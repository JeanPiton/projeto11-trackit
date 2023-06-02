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
    const [input,setInput] = useState(false);
    const navigate = useNavigate();

    function SignUp(event){
        const data = {email, name, image, password}
        console.log(data);
        event.preventDefault();

        setInput(true);
        setBtn(<ThreeDots color="white"/>);
        axios.post(urls.SignUp, data)
        .then(()=>navigate("/"))
        .catch(e=>{
            console.log(e);
            setInput(false);
            setBtn("Cadastrar");
            alert("erro");
        })
    }

    return(
        <Div>
            <img src={Logo}/>
            <Form onSubmit={SignUp}>
                <input type="email" name="email" placeholder="email" required disabled={input} value={email} onChange={e=>setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="senha" required disabled={input} value={password} onChange={e=>setPassword(e.target.value)}/>
                <input type="text" name="name" placeholder="nome" required disabled={input} value={name} onChange={e=>setName(e.target.value)}/>
                <input type="url" name="image" placeholder="foto" required disabled={input} value={image} onChange={e=>setImage(e.target.value)}/>                
                <button disabled={input}>{btn}</button>
            </Form>
            <Link to={"/"}><A>Já tem uma conta? Faça login!</A></Link>
        </Div>
    );
}