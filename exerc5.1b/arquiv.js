        // 5 Arrays paralelos com informações da Wikipédia
        const nomes    = ["Pedro Rafael", "Felipe Pedrosa", "Ana Livia", "Zacarias Santos"];
        const cpf  = ["123.456.789-00", "987.654.321-00", "456.789.123-00", "321.654.987-00"];
        const idades    = ["25 anos", "30 anos", "28 anos", "35 anos"];
        const doencas     = ["Hipertensão", "Diabetes", "Alergia", "Artrite"];
        const fotos = [
            "https://example.com/foto1.jpg",
            "https://example.com/foto2.jpg",
            "https://example.com/foto3.jpg",
            "https://example.com/foto4.jpg"
        ];

        // Mapeamento dos elementos da DOM
        const selectPacientes = document.getElementById("selectPacientes");
        const btnDetalhes   = document.getElementById("btnDetalhes");
        const divCpf    = document.getElementById("divCPF");
        const divIdade      = document.getElementById("divIdade");
        const divDoenca  = document.getElementById("divDoenca");
        const divFoto   = document.getElementById("divFoto");

        // EventListener para o evento onclick do botão
        btnDetalhes.addEventListener("click", function() {
            // Pega o índice selecionado na listbox (0 a 3)
            const index = selectPacientes.value;

            // Se houver seleção válida
            if (index !== "") {
                // Preenche as divs usando o mesmo índice nos arrays paralelos
                divCpf.textContent = cpf[index];
                divIdade.textContent = idades[index];
                divDoenca.textContent = doencas[index];
                
                // Exibe a imagem da bandeira no quarto quadro
                divFoto.innerHTML = `<img src="${fotos[index]}" alt="Foto de ${nomes[index]}">`;
            }
        });