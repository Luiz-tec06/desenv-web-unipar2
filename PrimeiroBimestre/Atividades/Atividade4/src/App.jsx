import React from "react";
import "./App.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {

    const post = {
        titulo: "Grande final do Campeonato Brasileiro de Motocross",
        autor: "MX Brasil",
        data: "03 de outubro de 2026",
        categoria: "Campeonato",
        imagem: "https://motomundo.com.br/wp-content/uploads/2025/11/foto-destaque.001-29.jpeg",
        conteudo: [
            "A velocidade, a adrenalina e a disputa por cada posição marcaram mais uma grande etapa do Campeonato Brasileiro de Motocross.",
            "A prova reuniu os melhores pilotos do país em uma pista desafiadora, com saltos técnicos, curvas de alta velocidade e muita emoção.",
            "O público compareceu em peso e fez um verdadeiro espetáculo, vibrando a cada ultrapassagem e a cada manobra dos pilotos.",
            "Agora, a expectativa se volta para a próxima etapa, que promete ser ainda mais emocionante, com novos desafios e muito mais adrenalina."
        ]
    };

    return (
        <>
            <Header />

            <Navigation />

            <main>
                <Article
                    titulo={post.titulo}
                    autor={post.autor}
                    data={post.data}
                    categoria={post.categoria}
                    imagem={post.imagem}
                    conteudo={post.conteudo}
                />

                <Sidebar />
            </main>

            <Footer />
        </>
    );
}

export default App;