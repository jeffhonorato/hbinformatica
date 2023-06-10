const recargas = document.querySelector(".js-cadastro-recargas");
const impressoras = document.querySelector(".js-cadastro-impressoras");
const setores = document.querySelector(".js-cadastro-setores");
const meses = document.querySelector(".js-cadastro-meses");
const data = document.querySelector('input[type="datetime-local"]');
const btnSalvar = document.querySelector(".js-btn-cadastro-salvar");
const recargas_lista = [];

btnSalvar.addEventListener("click", (e) => {
    e.preventDefault();

    const recarga = recargas.value;
    const impressora = impressoras.value;
    const setor = setores.value;
    const mes = meses.value;
    // const dataAtual = data.value;

    const dataPc = () => {
        const dataAtualPc = new Date()
        const dia = String(dataAtualPc.getDate()).padStart(2, '0');
        const mes = String(dataAtualPc.getMonth() + 1).padStart(2, '0');
        const ano = String(dataAtualPc.getFullYear()).padStart(2, '0');
      

        const dataAtualPcFull = `${dia}/${mes}/${ano}`
        return dataAtualPcFull;
    }

    const horaPc = () => {
        const horaAtual = new Date()
        const hora = horaAtual.getHours();
        const minutos = horaAtual.getMinutes();

        const horaAtualFull = `${hora}:${minutos}`
        return horaAtualFull;
    }

    const janeiro = () => {
        const janeiro_cards = document.querySelector(".janeiro__cards");
        const divJaneiroCard = document.createElement("div");
        divJaneiroCard.classList.add("card__cadastro");
        
    
        const janeiroRecarga = document.createElement("p");
        janeiroRecarga.classList.add("card__recarga");
        janeiroRecarga.innerText = `Tipo de Recarga: ${recarga}`;
        divJaneiroCard.appendChild(janeiroRecarga);
        
        const janeiroImpressora = document.createElement("p");
        janeiroImpressora.classList.add("card__impressora");
        janeiroImpressora.innerText = `Impressora: ${impressora}`;
        divJaneiroCard.appendChild(janeiroImpressora);
    
        const janeiroSetor = document.createElement("p");
        janeiroSetor.classList.add("card__setor");
        janeiroSetor.innerText = `Local: ${setor}`;
        divJaneiroCard.appendChild(janeiroSetor);
    
        const janeiroData = document.createElement("p");
        janeiroData.classList.add("card__data");
        janeiroData.innerText = `Data: ${dataPc()}`;
        divJaneiroCard.appendChild(janeiroData);

        const janeiroHora = document.createElement("p");
        janeiroHora.classList.add("card__hora");
        janeiroHora.innerText = `Hora: ${horaPc()}`;
        divJaneiroCard.appendChild(janeiroHora);

        if(mes === "Janeiro") {
            janeiro_cards.appendChild(divJaneiroCard);
        }
    }

    const fevereiro = () => {
        const fevereiro__cards = document.querySelector(".fevereiro__cards");
        const divFevereiroCard = document.createElement("div");
        divFevereiroCard.classList.add("card__cadastro");

        const fevereiroRecarga = document.createElement("p");
        fevereiroRecarga.classList.add("card__recarga");
        fevereiroRecarga.innerText = `Recarga: ${recarga}`;
        divFevereiroCard.appendChild(fevereiroRecarga);

        const fevereiroImpressora = document.createElement("p");
        fevereiroImpressora.classList.add("card__impressora");
        fevereiroImpressora.innerText = `Impressora: ${impressora}`;
        divFevereiroCard.appendChild(fevereiroImpressora);




        if(mes === "Fevereiro") {
            fevereiro__cards.appendChild(divFevereiroCard);
        }
    }

   


    janeiro();
    fevereiro();

});

