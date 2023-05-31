import { useState } from "react";
import { Div, Form, A } from "../../style/FormStyle";
import { ThreeDots } from "react-loader-spinner";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [btn, setBtn] = useState("Entrar");
    const [input,setInput] = useState(false);

    function doLogin(event){
        event.preventDefault();

        setInput(true);
        setBtn(<ThreeDots color="white"/>);
    }

    return(
        <Div>
            <Form onSubmit={doLogin}>
                <input type="email" name="email" placeholder="email" required disabled={input} value={email} onChange={e=>setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="senha" required disabled={input} value={password} onChange={e=>setPassword(e.target.value)}/>
                <button disabled={input}>{btn}</button>
            </Form>
            <A>Não tem um conta? Cadastre-se!</A>
        </Div>
    );
}