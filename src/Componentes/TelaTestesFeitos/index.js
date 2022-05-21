import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function TelaTestesFeitos () {

    const tokenLS = localStorage.getItem("token");

    const URL = "https://hackthon-driven-breno-app.herokuapp.com/resultados";

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
        <h1>Testes feitos</h1>
    )
}

export default TelaTestesFeitos;