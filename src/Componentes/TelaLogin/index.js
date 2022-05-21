import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner';

function TelaLogin() {

    const URL = "https://hackthon-driven-breno-app.herokuapp.com/SignIn"

    const loading = <ThreeDots color="#FFFFFF" />;

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [entrar, setEntrar] = useState("Entrar");

    function fazerLogin (event) {
        event.preventDefault();
        setEntrar(loading);
        const promise = axios.post(URL, {
            email,
            password
        });
        promise.then(response => {
            const {data} = response;
            localStorage.setItem("token", data);
            navigate("/testes");
        })
        promise.catch(error => {
            console.log("A requisição deu ruim");
            zerarInputs();
        })
    }

    function zerarInputs () {
        setEntrar("Entrar")
        setEmail("");
        setPassword("");
    }

    return (
        <Container>
            <Title>MyTests</Title>
            <form onSubmit={fazerLogin}>
                <Inputs>
                    <Input type="text" placeholder="E-mail" required
                        onChange={(e) => setEmail(e.target.value)} value={email}>
                    </Input>
                    <Input type="password" placeholder="Senha" required
                        onChange={(e) => setPassword(e.target.value)} value={password}>
                    </Input>
                    <Login type="submit">{entrar}</Login>
                </Inputs>
            </form>
            <Hiperlink onClick={() => navigate("/cadastro")}>Primeira vez? Cadastre-se!</Hiperlink>
        </Container>
    )
}

const Container = styled.div`
    width: 375px;
`
const Title = styled.h1`
    font-family: 'Saira Stencil One', cursive; 
    font-size: 32px;
    text-align: center;
    color: var(--cor-botao);
    margin-top: 159px;
    margin-bottom: 24px;
`
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
    padding-left: 25px;
`
const Input = styled.input`
        width: 326px;
        height: 58px;
        border-radius: 5px;
        padding-left: 15px;
`
const Login = styled.button`
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    width: 326px;
    height: 46px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--cor-botao);
`
const Hiperlink = styled.p`
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    margin-top: 36px;
`
export default TelaLogin;
