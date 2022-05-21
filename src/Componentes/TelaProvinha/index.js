import { useState } from "react";
import styled from "styled-components";

function TelaProvinha() {

    const [indice, setIndice] = useState(0);
    const [respostas, setRespostas] = useState(new Map());
    const [selecionado, setSelecionado] = useState("");

    console.log(selecionado);

    const questoes = [
        { titulo: "Questao 1", enunciado: "enunciado 1", alternativas: ["a", "b", "c","d"]},
        { titulo: "Questao 2", enunciado: "enunciado 2", alternativas: ["a", "b", "c", "d"]},
        { titulo: "Questao 3", enunciado: "enunciado 3", alternativas: ["a", "b", "c", "d"]},
    ]

    function mudarQuestao() {
        if (selecionado === "") {
            alert ("Selecione uma questão meu chapa")
            return;
        }
        setRespostas(new Map(respostas.set(questoes[indice].titulo,selecionado)));
        if (indice < questoes.length-1) {
            setIndice(indice+1);
            setSelecionado("");
        }
        else {
            alert("teste finalizado");
        }
    }

    return (
        <>
            <Title>{questoes[indice].titulo}</Title>
            <Container>
                <h2>{questoes[indice].enunciado}</h2>
                <form>
                    <Alternativas>
                {questoes[indice].alternativas.map(alternativa => {
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
    )
}

const Container = styled.div`
	display: flex;
    flex-direction: column;
	width: 200px;
	height: 200px;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin: 10px;

        h2 {
            font-size: 14px;
        }
`

const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
`

const Alternativas = styled.div`
    display: flex;
`
const Button = styled.button`
    width: 100px;
    height: 25px;
    background-color: var(--cor-botao);
    font-size: 10px;
`




export default TelaProvinha;