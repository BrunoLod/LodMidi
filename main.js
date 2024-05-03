function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

/* Criando uma lista com as teclas presentes no projeto: */

const listaTeclas = document.querySelectorAll('.tecla');

/* Iterando sobre listas no Js: */

/* Primeiramente com o ciclo while, que realiza
   um ciclo de operação até a condição na qual 
   ele opera não for mais verdadeiro, mas falso. */

// Utilizando o ciclo While: 

/* let contador = 0;

while (contador < listaTeclas.length) {

    const instrumento = listaTeclas[contador].classList[1];

    listaTeclas[contador].onclick = function () {
        tocaSom(`#som_${instrumento}`);
    };

    contador += 1;


}*/

// Utilizando o ciclo For:

for (let contador = 0; contador < listaTeclas.length; contador++) {

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    /* Importante notar que aqui estou utilizando uma função anônima 
       no código, a qual executa a função tocaSom. Nesse contexto, a 
       a função anônima funciona como um tipo de interface, ou entre
       ponto à função que toca os áudios. Mas por que estou fazendo isso? 
       
       Toda vez que coloco um valor ao parâmetro de uma função essa 
       já é executada, produzindo um resultado. Em termos de aplicações, 
       os navegadores, por padrão, produzem um erro se passamos junto de
       um onClick, por exemplo, uma função que logo será executada, 
       pois seria como a aplicação executar algo sem o consentimento 
       do usuário, o qual deveria ser atuante na execução. 
       
       Ao usar a função anônima nesse contexto, esse problema é solucionado, 
       de modo que quando é de fato clicado, executa a função, aqui, tocaSom. */

    listaTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

};