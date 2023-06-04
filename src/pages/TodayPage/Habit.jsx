import styled from "styled-components";
import Check from "../../img/check.svg";
import Colors from "../../constants/colors";
import { useState } from "react";

export default function Habit(props){
    const check = props.done;

    function Checker(){
        props.func(props.id, !check);
    }

    return(
        <Div>
            <TextDiv $current={props.current} $highest={props.highest} $checked={check}>
                <h1>{props.name}</h1>
                <p>Sequencia atual: <h2>{props.current} dias</h2></p>
                <p>Seu recorde: <h3>{props.highest} dias</h3></p>
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
    p{
        h2{
            display: inline;
            color: ${prop=>prop.$checked?Colors.check.Checked:"#666666"};
        }

        h3{
            display: inline;
            color: ${prop=>(prop.$current==prop.$highest)&&(prop.$highest!=0)?Colors.check.Checked:"#666666"};
        }
    }
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