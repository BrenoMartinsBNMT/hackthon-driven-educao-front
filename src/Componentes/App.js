import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaTestes from "./TelaTestes";
import TelaProvinha from "./TelaProvinha";
import TelaTestesFazer from "./TelaTestes";
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
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;