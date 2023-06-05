import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { formatDate } from "react-calendar/dist/cjs/shared/dateFormatter";
import { useState } from "react";
import customParseFormat from 'dayjs/plugin/customParseFormat';

export default function CalendarDisplay(props){
    dayjs.extend(customParseFormat);
    dayjs.locale('pt-br');
    const Completes = props.DaysComplete.map(e=>dayjs(e,"DD/MM/YYYY"));
    const Incompletes = props.DaysIncomplete.map(e=>dayjs(e,"DD/MM/YYYY"));
    const [value, setValue] = useState(new Date());

    function Complete({date, view}){
        if(view === 'month'){
            if(Completes.find(dDate=>isSameDay(dDate,date))){
                return "Completed";
            }
            if(Incompletes.find(dDate=>isSameDay(dDate,date))){
                return "Incomplete";
            }
        }
    }

    function isSameDay(a, b) {
        return a.diff(b) === 0;
    }

    console.log(Completes)
    return (
      <Div>
          <Calendar data-test="calendar"
              onChange={setValue}
              value={value}
              formatMonthYear ={(locale, date) => dayjs(date).format('MMMM [de] YYYY')}
              formatShortWeekday={(locale, date) => dayjs(date).format('ddd')}
              tileClassName={Complete}
          />
      </Div>
    );
}

const Div = styled.div`
    .react-calendar{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px;
    }
    .react-calendar__navigation{
        display: flex;
        .react-calendar__navigation__arrow{
            align-items: center;
            justify-content: center;
            flex-grow: 0.333;
        }
    }
    button{
        height: 52px;
        display: flex;
        align-items: center;

        abbr{
            width: 35px;
            height:35px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
        }
    }
    .Completed>abbr{
        background-color: #8cc654;
    }
    .Incomplete>abbr{
        background-color: #ea5766;
    }
`;