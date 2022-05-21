import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function TelaProvinha() {

    const tokenLS = localStorage.getItem("token");

    const navigate = useNavigate();

    const [indice, setIndice] = useState(0);
    const [respostas, setRespostas] = useState(new Map());
    const [selecionado, setSelecionado] = useState("");
    const [questions, setQuestions] = useState([]);

    const URL = `https://hackthon-driven-breno-app.herokuapp.com/exams/${tokenLS}`;

    useEffect(() => {
        const promise = axios.get(URL);
        promise.then(response => {
            const { data } = response;
            setQuestions(data.exams);
        });
        promise.catch(err => console.log(err.response.statusText));
    }, []);


    const questoes = [
        { titulo: "Questao 1", enunciado: "enunciado 1", alternativas: ["a", "b", "c", "d"] },
        { titulo: "Questao 2", enunciado: "enunciado 2", alternativas: ["a", "b", "c", "d"] },
        { titulo: "Questao 3", enunciado: "enunciado 3", alternativas: ["a", "b", "c", "d"] },
    ]

    function mudarQuestao() {
        if (selecionado === "") {
            alert("Selecione uma questão meu chapa")
            return;
        }
        setRespostas(new Map(respostas.set(questions[indice].titulo, selecionado)));
        if (indice < questions.length - 1) {
            setIndice(indice + 1);
            setSelecionado("");
        }
        else {
            alert("teste finalizado");
            navigate("/testes")
        }
    }

    let conteudo = null;
    if (questions.length === 0) {
        conteudo = <></>;
    }
    else {
        conteudo = <>   
            <Header>
                <h1>Provinha 1</h1>
            </Header>
            <Title>{questions[indice].titulo}</Title>
            <Container>
                <h2>{questions[indice].enunciado}</h2>
                <p>Selecione a alternativa correta</p>
                <form>
                    <Alternativas>
                        {questions[indice].alternativas.map(alternativa => {
                            return (
                                <>
                                    <div>
                                        <label>
                                            <input type="radio" value={alternativa}
                                                checked={selecionado === alternativa}
                                                onChange={(e) => setSelecionado(e.target.value)} />
                                            {alternativa}
                                        </label>
                                    </div>
                                </>
                            )
                        })}
                    </Alternativas>
                </form>
            </Container>
            <Button onClick={() => mudarQuestao()}>Próxima Questão</Button>

        </>
    }
    return (
        conteudo
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

const Container = styled.div`
	display: flex;
    flex-direction: column;
	width: fit-content;
	height: fit-content;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin: 10px;
    padding: 10px;

        h2 {
            font-size: 18px;
            line-height: 24px;
        }

        p {
            font-size: 12px;
            margin: 10px 0;
        }
`

const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
`

const Alternativas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Button = styled.button`
    width: 100px;
    height: 25px;
    background-color: var(--cor-botao);
    font-size: 10px;
    margin-left: 10px;
`




export default TelaProvinha;