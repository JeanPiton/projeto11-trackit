import styled from "styled-components";
import {week,Days,Day} from "../../components/DaysButton";
import Colors from "../../constants/colors";
import dump from "../../img/dump.svg";

//Habits page habits
export default function Habit(props){
    return(
        <Div data-test="habit-container">
            <div>
                <h1 data-test="habit-name">{props.name}</h1>
                <Days>
                   {week.map((e,i)=><Day data-test="habit-day" key={i} $selected={props.days.includes(i)} type="button">{e}</Day>)}
                </Days>
            </div>
            <BtnDiv>
                <img data-test="habit-delete-btn" src={dump} onClick={()=>props.func(props.id)}/>
            </BtnDiv>
        </Div>
    );
}

const Div = styled.div`
    width: 340px;
    height: 90px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background-color: ${Colors.habit.Background};
    border-radius: 5px;

    h1{
        margin-bottom: 8px;
        color: #666666;
    }
`;

const BtnDiv = styled.div`
`;