const recargas = document.querySelector(".js-cadastro-recargas");
const impressoras = document.querySelector(".js-cadastro-impressoras");
const setores = document.querySelector(".js-cadastro-setores");
const meses = document.querySelector(".js-cadastro-meses");
const data = document.querySelector('input[type="datetime-local"]');
const btnSalvar = document.querySelector(".js-btn-cadastro-salvar");

btnSalvar.addEventListener("click", (e) => {
    e.preventDefault();

    const recarga = recargas.value;
    const impressora = impressoras.value;
    const setor = setores.value;
    const mes = meses.value;
    const dataAtual = data.value;
    

    return console.log(recarga, impressora, setor, mes, dataAtual)
});

