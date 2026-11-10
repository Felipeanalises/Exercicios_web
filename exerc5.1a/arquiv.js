        // 5 Arrays paralelos com informações da Wikipédia
        const siglas    = ["QROO", "CDMX", "PUE", "ZAC"];
        const capitais  = ["Chetumal", "Cidade do México", "Puebla de Zaragoza", "Zacatecas"];
        const areas     = ["44.705,2 km²", "1.494,3 km²", "	34.309,6 km²", "75.275,3 km²"];
        const populacoes= ["1.857.985 hab.", "9.209.944 hab.", "6.583.278 hab.", "1.622.138 hab."];
        const bandeiras = [
            "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Quintana_Roo.svg/1280px-Flag_of_Quintana_Roo.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
            "https://static.vecteezy.com/ti/vetor-gratis/p1/21805263-simples-bandeira-do-cidade-do-mexico-vetor.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYlXTjb2IGo1wQs5GUUgLmq49JeKIKgXn4aDuzUqA4g&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR90tnoXGeb0yWevX7cDc3gbR58nXaAo1d33MWoO1zVWw&s=10"
        ];

        // Mapeamento dos elementos da DOM
        const selectEstados = document.getElementById("selectEstados");
        const btnDetalhes   = document.getElementById("btnDetalhes");
        const divCapital    = document.getElementById("divCapital");
        const divArea       = document.getElementById("divArea");
        const divPopulacao  = document.getElementById("divPopulacao");
        const divBandeira   = document.getElementById("divBandeira");

        // EventListener para o evento onclick do botão
        btnDetalhes.addEventListener("click", function() {
            // Pega o índice selecionado na listbox (0 a 3)
            const index = selectEstados.value;

            // Se houver seleção válida
            if (index !== "") {
                // Preenche as divs usando o mesmo índice nos arrays paralelos
                divCapital.textContent = capitais[index];
                divArea.textContent = areas[index];
                divPopulacao.textContent = populacoes[index];
                
                // Exibe a imagem da bandeira no quarto quadro
                divBandeira.innerHTML = `<img src="${bandeiras[index]}" alt="Bandeira de ${siglas[index]}">`;
            }
        });