// Obter os elementos dos inputs
const nomeInput = document.getElementById("nome");
const cpfInput = document.getElementById("CPF");
const cvvInput = document.getElementById("CVV");
const cartaoInput = document.getElementById("cartão");
const endInput = document.getElementById("end");
const casaInput = document.getElementById("casa");
const preciosoInput = document.getElementById("precioso");

// Função para exibir o alerta com os dados
function exibirAlerta() {
    let nome = nomeInput.value;
    let cpf = cpfInput.value;
    let cvv = cvvInput.value;
    let cartao = cartaoInput.value;
    let end = endInput.value;
    let casa = casaInput.value;
    let precioso = preciosoInput.value;

    // Mensagem de confirmação
    let mensagem = "Olá " + nome + "!\n" +
                   "Seu número de CPF é: " + cpf + ".\n" +
                   "Seu número do cartão é: " + cartao + ".\n" +
                   "O número do seu CVV é: " + cvv + ".\n" +
                   "Seu endereço é: " + end + ".\n" +
                   "Sua casa fica vazia às: " + casa + ".\n" +
                   "Seu bem mais precioso é: " + precioso + ".\n\n" +
                   "Você confirma essas informações?";

    // Exibir mensagem de confirmação
    if (confirm(mensagem)) {
        alert("Informações confirmadas!");
    } else {
        alert("Informações não confirmadas. Por favor, revise.");
    }
}

// Adicionar evento de "keydown" para todos os inputs
[nomeInput, cpfInput, cvvInput, cartaoInput, endInput, casaInput, preciosoInput].forEach(input => {
    input.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) { // Verifica se a tecla Enter foi pressionada
            exibirAlerta();
        }
    });
});