import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner';

function TelaCadastro() {

    const URL = "https://hackthon-driven-breno-app.herokuapp.com/SignUp";

    // const URL = "http://localhost:5000/cadastro";

    const loading = <ThreeDots color="#FFFFFF" />;

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [cadastrar, setCadastrar] = useState("Cadastrar");

    const navigate = useNavigate();

    function cadastrarUsuario (event) {
        event.preventDefault();
        setCadastrar(loading);
        if (password !== confirmPassword) {
            zerarInputs();
            return alert ("As senhas estão diferentes, digite novamente"); 
        }
        const promise = axios.post(URL,{
            username,
            email,
            password,
        });
        promise.then(response => {
            navigate("/");
        })
        promise.catch(error => {
            console.log("A requisição deu ruim");
            zerarInputs();
        })
    };

    function zerarInputs () {
        setCadastrar("Cadastrar")
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <Container>
            <Title>MyTests</Title>
            <form onSubmit={cadastrarUsuario}>
                <Inputs>
                    <Input type="text" placeholder="Nome" required
                        onChange={(e) => setUsername(e.target.value)} value={username}>
                    </Input>
                    <Input type="text" placeholder="E-mail" required
                        onChange={(e) => setEmail(e.target.value)} value={email}>
                    </Input>
                    <Input type="password" placeholder="Senha" required
                        onChange={(e) => setPassword(e.target.value)} value={password}>
                    </Input>
                    <Input type="password" placeholder="Confirme a senha" required
                        onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}>
                    </Input>
                    <SignUp type="submit">
                        {cadastrar}</SignUp>
                </Inputs>
            </form>
            <Hiperlink onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</Hiperlink>
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
    margin-top: 95px;
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
const SignUp = styled.button`
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
export default TelaCadastro;