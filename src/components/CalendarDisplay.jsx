import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";

export default function CalendarDisplay(){
    return(
        <Div>
            <Calendar/>
        </Div>
    );
}

const Div = styled.div`
    .react-calendar{
        height: 402px;
    }
    .react-calendar__navigation{
        display: flex;
        .react-calendar__navigation__arrow{
            flex-grow: 0.333;
        }
    }
    button{
        height: 52px;
    }
`;