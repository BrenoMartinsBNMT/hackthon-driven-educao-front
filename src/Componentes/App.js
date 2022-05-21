import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaTestes from "./TelaTestes";
import TelaProvinha from "./TelaProvinha";
import TelaTestesFazer from "./TelaTestesFazer";
import TelaTestesFeitos from "./TelaTestesFeitos";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/testes" element={<TelaTestes />} />
                    <Route path="/provinha" element={<TelaProvinha />} />
                    <Route path="/testes-a-fazer" element={<TelaTestesFazer />} />
                    <Route path="/testes-feitos" element={<TelaTestesFeitos />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;