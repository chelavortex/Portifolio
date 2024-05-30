const form = document.querySelector ("#form")
const nameInput = document.querySelector ("#name")
const emailInput = document.querySelector("#email")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome está vazio 
    if (nameInput.value === "") {
        alert ("Por favor, preencha o seu nome");
        return;
    }


// Verifica se o e-mail está preenchido e se é valido

if(emailInput.value === "" || !isEmailValid(emailInput.value))  {
    alert ("Por favor, preencha o seu e-mail");
        return;
}


 form.submit ();

});

// Função que valida e-mail 

function isEmailValid (email) {
    const emailRegex = new RegExp (
        // usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@ [a-zA-Z0-9._-]+\.[a-z-Z]{2,}$/

    );

    if (emailRegex.test(email)){
        return true;
    }
    return false;;
}