<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tipos de Câmbio Automático</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.6;
        }
        header {
            text-align: center;
            padding: 20px;
            background-color: #f4f4f4;
            border-bottom: 1px solid #ddd;
        }
        section {
            margin-bottom: 40px;
            transition: background-color 0.3s;
        }
        section:hover {
            background-color: #f9f9f9;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        .content {
            max-width: 800px;
            margin: auto;
        }
        .info-extra {
            display: none;
            margin-top: 10px;
            font-style: italic;
            color: #555;
        }
        .toggle-btn {
            margin-top: 10px;
            padding: 5px 10px;
            cursor: pointer;
            border: none;
            background-color: #007BFF;
            color: white;
            border-radius: 4px;
            transition: background-color 0.3s;
        }
        .toggle-btn:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <header>
        <h1>Explorando os Tipos de Câmbio Automático</h1>
        <p>Saiba mais sobre as tecnologias que estão revolucionando o mundo automotivo.</p>
    </header>
    <main class="content">
        <section id="cvt">
            <h2>Câmbio CVT (Transmissão Continuamente Variável)</h2>
            <img src="https://via.placeholder.com/800x400?text=CVT" alt="Imagem de um câmbio CVT">
            <p>
                O CVT é uma transmissão sem marchas fixas que utiliza polias e correias para ajustar continuamente a relação de transmissão. 
                Ele proporciona aceleração suave e eficiente, ideal para quem busca conforto e economia de combustível.
            </p>
            <button class="toggle-btn" onclick="toggleInfo('info-cvt')">Mais Informações</button>
            <p id="info-cvt" class="info-extra">
                O CVT é amplamente utilizado em veículos híbridos devido à sua eficiência no aproveitamento da energia do motor.
            </p>
        </section>
        <section id="convencional">
            <h2>Câmbio Automático Convencional</h2>
            <img src="https://via.placeholder.com/800x400?text=Automático+Convencional" alt="Imagem de um câmbio automático convencional">
            <p>
                Este tipo utiliza um conversor de torque para realizar as trocas de marcha automaticamente. 
                É conhecido pela sua durabilidade e facilidade de uso, embora possa consumir mais combustível comparado a outras transmissões.
            </p>
            <button class="toggle-btn" onclick="toggleInfo('info-convencional')">Mais Informações</button>
            <p id="info-convencional" class="info-extra">
                Ideal para motoristas que buscam praticidade em cidades com tráfego intenso.
            </p>
        </section>
        <section id="dupla-embreagem">
            <h2>Câmbio de Dupla Embreagem</h2>
            <img src="https://via.placeholder.com/800x400?text=Dupla+Embreagem" alt="Imagem de um câmbio de dupla embreagem">
            <p>
                Esse câmbio utiliza duas embreagens para alternar rapidamente entre marchas pares e ímpares, oferecendo trocas rápidas e suaves. 
                É frequentemente usado em carros esportivos de alto desempenho.
            </p>
            <button class="toggle-btn" onclick="toggleInfo('info-dupla')">Mais Informações</button>
            <p id="info-dupla" class="info-extra">
                Este câmbio é especialmente popular entre entusiastas de carros esportivos devido à sua eficiência e rapidez.
            </p>
        </section>
    </main>
    <footer>
        <p>Site desenvolvido para aprendizado. Imagens ilustrativas e conteúdo baseado em fontes confiáveis.</p>
    </footer>
    <script>
        function toggleInfo(id) {
            const info = document.getElementById(id);
            if (info.style.display === "none" || info.style.display === "") {
                info.style.display = "block";
            } else {
                info.style.display = "none";
            }
        }
    </script>
</body>
</html>
