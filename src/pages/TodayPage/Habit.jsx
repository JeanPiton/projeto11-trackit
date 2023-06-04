import styled from "styled-components";
import Check from "../../img/check.svg";
import Colors from "../../constants/colors";
import { useState } from "react";

export default function Habit(props){
    const [check, setCheck] = useState(props.done);

    function Checker(){
        setCheck(!check);
    }

    return(
        <Div>
            <TextDiv>
                <h1>{props.name}</h1>
                <p>Sequencia atual: {props.current}</p>
                <p>Seu recorde: {props.highest}</p>
            </TextDiv>
            <Image onClick={()=>Checker()} $checked={check}>
                <img src={Check}/>
            </Image>
        </Div>
    );
};

const Image = styled.div`
    width: 69px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${prop=>prop.$checked?Colors.check.Checked:Colors.check.Unchecked};
`;

const TextDiv = styled.div`

`;

const Div = styled.div`
    width: 340px;
    height: 94px;
    display: flex;
    justify-content: space-between;
    padding: 13px;
    background-color: ${Colors.habit.Background};
    border-radius: 5px;

    h1{
        margin-bottom: 8px;
    }
`;