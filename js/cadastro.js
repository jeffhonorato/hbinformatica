const recargas = document.querySelector(".js-cadastro-recargas");
const impressoras = document.querySelector(".js-cadastro-impressoras");
const setores = document.querySelector(".js-cadastro-setores");
const meses = document.querySelector(".js-cadastro-meses");
const data = document.querySelector('input[type="datetime-local"]');
const btnSalvar = document.querySelector(".js-btn-cadastro-salvar");


const recargas_janeiroLista = [];

const janeiro = () => {

    const recarga = recargas.value;
    const impressora = impressoras.value;
    const setor = setores.value;
    
    
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

    const janeiroBtnExcluir = document.createElement("p");
    janeiroBtnExcluir.classList.add("card__btnExcluir")
    janeiroBtnExcluir.innerText= "Excluir";
    divJaneiroCard.appendChild(janeiroBtnExcluir);

    janeiro_cards.appendChild(divJaneiroCard);
    recargas_janeiroLista.push(divJaneiroCard);
    alert("Janeiro");

    console.log("Janeiro")
   
}

const fevereiro = () => {
    const recarga = recargas.value;
    const impressora = impressoras.value;
    const setor = setores.value;


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

    const fevereiroSetor = document.createElement("p");
    fevereiroSetor.classList.add("card__setor");
    fevereiroSetor.innerText = `Setor: ${setor}`;
    divFevereiroCard.appendChild(fevereiroSetor);

    const fevereiroData = document.createElement("p");
    fevereiroData.classList.add("card__data");
    fevereiroData.innerText = `Data: ${dataPc()}`;
    divFevereiroCard.appendChild(fevereiroData);

    const fevereiroHora = document.createElement("p");
    fevereiroHora.classList.add("card__hora");
    fevereiroHora.innerText = `Data: ${horaPc()}`;
    divFevereiroCard.appendChild(fevereiroHora);

    const fevereiroBtnExcluir = document.createElement("p");
    fevereiroBtnExcluir.classList.add("card__btnExcluir")
    fevereiroBtnExcluir.innerText= "Excluir";
    divFevereiroCard.appendChild(fevereiroBtnExcluir);

    fevereiro__cards.appendChild(divFevereiroCard);
    alert("Fevereiro");

    console.log("Fevereiro")
}

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

btnSalvar.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const mes = meses.value;
    if (mes === "Janeiro") {
        janeiro();
       
    }

    if (mes === "Fevereiro") {
        fevereiro();
    }
    
    console.log(mes.value)
    console.log()
});

