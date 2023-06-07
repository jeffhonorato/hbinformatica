const recargas = document.querySelector(".js-cadastro-recargas");
const btnSalvar = document.querySelector(".js-btn-cadastro-salvar");

btnSalvar.addEventListener("click", (e) => {
    e.preventDefault()
    const recarga = recargas.value;
    console.log(recarga)
})

