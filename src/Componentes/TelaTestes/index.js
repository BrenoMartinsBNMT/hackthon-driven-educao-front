import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function TelaTestes() {

    const navigate = useNavigate();
    return (
        <>
            <Container onClick={() => navigate("/testes-a-fazer")}>
               <p>Provas em aberto</p>
            </Container>
            <Container onClick={() => navigate("/testes-feitos")}>
                <p>Provas já respondidas</p>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 300px;
    height: 50px;
    background-color: blue;
    margin: 10px;
`

export default TelaTestes