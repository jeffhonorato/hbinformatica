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
    const dataAtual = data.value;
    

    const janeiro_cards = document.querySelector(".js-janeiro-cards");

    janeiro_cards.innerHTML = `
    <div class="janeiro__card">
        <p class="card__recarga"><strong>Recarga:</strong> ${recarga}</p>
        <p class="card__impressora"><strong>Impressora:</strong> ${impressora}</p>
        <p class="card__setor"><strong>Setor:</strong> ${setor}</p>
        <p class="card__data"><strong>Data:</strong> ${dataAtual}</p>
    </div>
    `

    const janeiro = document.querySelector(".js-janeiro");
    janeiro.appendChild(janeiro_cards);

    recargas_lista.push(janeiro_cards);
    
    console.log(recargas_lista);

   


});

