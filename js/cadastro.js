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

const marco = () => {
    const recarga = recargas.value;
    const impressora = impressoras.value;
    const setor = setores.value;

    const marco__cards = document.querySelector(".marco__cards");
    const divMarcoCard = document.createElement("div");
    divMarcoCard.classList.add("card__cadastro");

    const marcoRecarga = document.createElement("p");
    marcoRecarga.classList.add("card__recarga");
    marcoRecarga.innerText = `Recarga: ${recarga}`;
    divMarcoCard.appendChild(marcoRecarga);

    const marcoImpressora = document.createElement("p");
    marcoImpressora.classList.add("card__impressora");
    marcoImpressora.innerText = `Impressora: ${impressora}`;
    divMarcoCard.appendChild(marcoImpressora);

    const marcoSetor = document.createElement("p");
    marcoSetor.classList.add("card__setor");
    marcoSetor.innerText = `Setor: ${setor}`;
    divMarcoCard.appendChild(marcoSetor);

    const marcoData = document.createElement("p");
    marcoData.classList.add("card__data");
    marcoData.innerText = `Data: ${dataPc()}`;
    divMarcoCard.appendChild(marcoData);

    const marcoHora = document.createElement("p");
    marcoHora.classList.add("card__hora");
    marcoHora.innerText = `Data: ${horaPc()}`;
    divMarcoCard.appendChild(marcoHora);

    const marcoBtnExcluir = document.createElement("p");
    marcoBtnExcluir.classList.add("card__btnExcluir")
    marcoBtnExcluir.innerText= "Excluir";
    divMarcoCard.appendChild(marcoBtnExcluir);

    marco__cards.appendChild(divMarcoCard);
    alert("Março");

    console.log("Março")
}

const abril = () => {
    const recarga = recargas.value;
    const impressora = impressoras.value;
    const setor = setores.value;

    const abril__cards = document.querySelector(".abril__cards");
    const divAbrilCard = document.createElement("div");
    divAbrilCard.classList.add("card__cadastro");

    const abrilRecarga = document.createElement("p");
    abrilRecarga.classList.add("card__recarga");
    abrilRecarga.innerText = `Recarga: ${recarga}`;
    divAbrilCard.appendChild(abrilRecarga);

    const abrilImpressora = document.createElement("p");
    abrilImpressora.classList.add("card__impressora");
    abrilImpressora.innerText = `Impressora: ${impressora}`;
    divAbrilCard.appendChild(abrilImpressora);

    const abrilSetor = document.createElement("p");
    abrilSetor.classList.add("card__setor");
    abrilSetor.innerText = `Setor: ${setor}`;
    divAbrilCard.appendChild(abrilSetor);

    const abrilData = document.createElement("p");
    abrilData.classList.add("card__data");
    abrilData.innerText = `Data: ${dataPc()}`;
    divAbrilCard.appendChild(abrilData);

    const abrilHora = document.createElement("p");
    abrilHora.classList.add("card__hora");
    abrilHora.innerText = `Data: ${horaPc()}`;
    divAbrilCard.appendChild(abrilHora);

    const abrilBtnExcluir = document.createElement("p");
    abrilBtnExcluir.classList.add("card__btnExcluir")
    abrilBtnExcluir.innerText= "Excluir";
    divAbrilCard.appendChild(abrilBtnExcluir);

   abril__cards.appendChild(divAbrilCard);
    alert("Abril");

    console.log("Abril")
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

    if (mes === "Março") {
        marco();
    }

    if (mes === "Abril") {
        abril();
    }
});

