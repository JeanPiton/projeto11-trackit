import styled from "styled-components";
import Colors from "../../constants/colors";
import CalendarDisplay from "../../components/CalendarDisplay";

export default function History(){

    return(
        <Div>
            <TopDiv>
                <h1>Histórico</h1>
            </TopDiv>
            <CalendarDisplay/>
        </Div>
    );
}

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    padding: 17px;
    gap: 20px;
    background-color: ${Colors.page.Background};
`;

const TopDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;

    h1{
        font-size: 23px;
        color: ${Colors.top.Background};
    }
`;