import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function TelaTestesFazer() {

    const tokenLS = localStorage.getItem("token");

    const URL = "https://hackthon-driven-breno-app.herokuapp.com/testes";

    const [tests, setTests] = useState([]);

    const config = {
        headers: {
            "Authorization": `Bearer ${tokenLS}`
        }
    }

    useEffect(() => {
        const promise = axios.get(URL, config);
        promise.then(response => {
            const { data } = response; 
            setTests(data);
        });
        promise.catch(err => console.log(err.response.statusText));
    }, []);


    return (
        <>
            <h1>Fazer os testes</h1>
            <DivProva>
            </DivProva>
        </>
    )
}

const DivProva = styled.div`
	display: flex;
	width: 80%;
	height: 300px;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
	border: 3px solid #000000;
	
	h1 {
		font-size: 18px;
		line-height: 24px;
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
	}	
`;


export default TelaTestesFazer;