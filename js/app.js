let jogosAlugados = 1;

function alterarStatus (id) {
    // pega pelo id que tem no HTML
    let gameClicado = document.getElementById(`game-${id}`);
    // pega a tag que tem essa classe, referente a imagem que tem o id
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    // pega a tag que tem essa classe, referente a imagem que tem o id
    let botao = gameClicado.querySelector(".dashboard__item__button");

    //ve se na imagem possui a classe alugado
    if (imagem.classList.contains("dashboard__item__img--rented")) {
        let escolha = prompt("Tem certeza que quer devolver ?");

        // faz a verificação se quer ou não devolver o jogo, se sim tira a classe devolver e coloca a classe alugar, e tambem tirando um do contador
        if (escolha === "S" || escolha === "s") {
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";
            jogosAlugados--;
        } else {
            // caso não queira devolver e clique em cancelar, ele devolve uma mensagem
            alert("Ok, devolução não efetuada");
        }
    } else {
        // caso clique em alugar, adiciona a classe alugar e remove a classe devolver
        imagem.classList.add("dashboard__item__img--rented")
        botao.textContent = "Devolver";
        botao.classList.add("dashboard__item__button--return");
        jogosAlugados++;
    }

    //Mostra no console quantos jogos foram alugados, caso clique em devoolver ele subtrai, e se clica em alugar ele adiciona um
    imprimirJogosAlugados(jogosAlugados);
}

function imprimirJogosAlugados (quantidadeJogosAlugados) {
    // passando como parâmetro a quantidade de jogos que foram alugados
    console.log(`Quantidade de jogos alugados = ${quantidadeJogosAlugados}`);
}

// function palindromo (texto) {
//     //tira todos espaços (expressão regular)
//     let mensagemOriginal = texto.replace(/\s/g, '');

//     // inverte a mensagem atraves de uma função criada
//     let mensagemInvertida = inverteTexto(mensagemOriginal); 
//     // caso a mensagem invertida seja igual a mensagem original, então é um palíndromo
//     if (mensagemInvertida === mensagemOriginal) {
//         alert("Palíndromo");
//     } else { // caso caia para o else ele não é um palíndromo
//         alert("Nao");
//     }
// }

// // função para inverter o texto original
// function inverteTexto(mensagem) {
//     let retorno = '';
//     // pega o tamanho da mensagem e começa pela ultima letra e vai até o inicio, pois é um vetor
//     for (let i = mensagem.length - 1; i >= 0; i--) {
//         retorno += mensagem[i];
//     }
//     return retorno;
// }

// let mensagem = prompt('Qual mensagem: ');
// palindromo(mensagem);

// function verificaNumeros (n1, n2, n3) {
//     if (n1 > n2 && n1 > n3) {
//         alert('n1 é maior');
//     } else if ( n2 > n3) {
//         alert('n2 é maior');
//     } else {
//         alert('n3 é maior');
//     }
// }

// let n1 = parseInt(prompt('Digite o primeiro valor: '));
// let n2 = parseInt(prompt('Digite o segundo valor: '));
// let n3 = parseInt(prompt('Digite o terceiro valor: '));

// verificaNumeros(n1, n2, n3);
