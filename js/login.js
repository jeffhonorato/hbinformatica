const logar = () => {
    const login = document.querySelector(".js-input-login");
    const senha = document.querySelector(".js-input-senha");
    const btnLogin = document.querySelector(".js-btn-login");

    console.log(btnLogin)
    console.log(login)
    console.log(senha)

   

    btnLogin.addEventListener("click", (e) => {

        const valorInput = login.value;
        const senhaInput = senha.value;

        e.preventDefault();
        e.stopPropagation();

        if(valorInput == "admin" && senhaInput == "admin") {
            alert("Sucesso");
            location.href = "../index.html";
        } else {
            alert("Senha ou Usuario Incorreto")
        }
    })
}

logar()