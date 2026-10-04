import React from "react";

function Article(props) {
    return (
        <article className="article">

            <div className="article-image">
                <img src={props.imagem} alt="Piloto de motocross durante uma corrida" />

                <span className="category">
                    {props.categoria}
                </span>
            </div>

            <div className="article-content">

                <h2>
                    {props.titulo}
                </h2>

                <div className="article-info">

                    <span>
                        👤 Autor: {props.autor}
                    </span>

                    <span>
                        📅 Data: {props.data}
                    </span>

                    <span>
                        🏷 {props.categoria}
                    </span>

                </div>

                {props.conteudo.map((paragrafo, index) => (
                    <p key={index}>
                        {paragrafo}
                    </p>
                ))}

                <div className="article-gallery">

                    <img
                        src="https://adzktgbqdq.cloudimg.io/https://dgaddcosprod.blob.core.windows.net/cxf-multisite/clsq2f30a001q11jxdnl95hst/attachments/clatq36qw194g01lcj6p19eet-mo-128-tire-michelin-starcross-6-medium-hard-product-in-use-landscape-1.full.jpg"
                        alt="MX1"
                    />

                    <img
                        src="https://s7g10.scene7.com/is/image/ktm/Husqvarna-Motocross-Segmentpage-Header-2027?wid=480&hei=300&dpr=off"
                        alt="MX2"
                    />

                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPgez4rwuA46basME47rA7abUbiZjJwAKVLTz_fDYSuvZIn6datvs3-M5&s=10"
                        alt="Infantil"
                    />

                </div>

            </div>

        </article>
    );
}

export default Article;