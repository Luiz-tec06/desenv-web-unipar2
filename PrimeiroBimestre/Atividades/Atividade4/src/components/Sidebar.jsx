import React from "react";

function Sidebar() {

    const noticias = [
        {
            titulo: "Grande final do Campeonato Brasileiro de Motocross",
            data: "03 de outubro de 2026"
        },
        {
            titulo: "Novos talentos começam a se destacar",
            data: "28 de setembro de 2026"
        },
        {
            titulo: "Confira as próximas etapas do campeonato",
            data: "22 de setembro de 2026"
        },
        {
            titulo: "Preparação dos pilotos para a próxima corrida",
            data: "18 de setembro de 2026"
        },
        {
            titulo: "Público lota arquibancadas na etapa de São Paulo",
            data: "12 de setembro de 2026"
        }
    ];

    return (
        <aside className="sidebar">

            <div className="sidebar-title">
                <span>📰</span>
                <h2>Últimas Notícias</h2>
            </div>

            <div className="news-list">

                {noticias.map((noticia, index) => (

                    <div className="news-item" key={index}>

                        <div className="news-number">
                            0{index + 1}
                        </div>

                        <div className="news-text">

                            <h3>
                                {noticia.titulo}
                            </h3>

                            <p>
                                📅 {noticia.data}
                            </p>

                        </div>

                        <span className="arrow">
                            →
                        </span>

                    </div>

                ))}

            </div>

            <div className="sidebar-highlight">

                <span className="helmet">
                    
                </span>

                <p>
                    <strong>O motocross é mais que um esporte,</strong>
                    <br />
                    é um estilo de vida!
                </p>

            </div>

        </aside>
    );
}

export default Sidebar;