import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function TelaTestes() {

    const tokenLS = localStorage.getItem("token");

    console.log(tokenLS);

    const navigate = useNavigate();

    return (
        <>
            <Header>
                <h1>Bem vindo meu chapa, selecione um teste para fazer!!</h1>
                </Header>
            <DivProva onClick = {() => navigate("/provinha")}>
                <h1>Provinha 1</h1>
                <button>Iniciar</button>
            </DivProva>
        </>
    )
}

const Header = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    background-color: var(--cor-botao);

    h1 {
        font-size: 15px;
        font-weight: bold;
    }
`

const DivProva = styled.div`
	display: flex;
    flex-direction: column;
	width: 200px;
	height: fit-content;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin: 10px auto;

	h1 {
		font-size: 18px;
		line-height: 24px;
        text-align: center;

	}
    button {
		font-size: 14px;
		line-height: 20px;
		
		text-decoration: none;
		border: none;
		cursor: pointer;
		
		color: #000000;
		
		text-align: center;
		background: current-color;
        margin-top: 20px;
	}	
`;


export default TelaTestes;