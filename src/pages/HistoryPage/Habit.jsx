import styled from "styled-components";
import Colors from "../../constants/colors";

//History page habit
export default function Habit(props){
    return(
        <Div $done={props.done}>
            {props.name}
        </Div>
    );
}

const Div = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 10px;
    background-color: ${Colors.habit.Background};
    color: ${prop=>prop.$done?"#8cc654":"#ea5766"};
`;