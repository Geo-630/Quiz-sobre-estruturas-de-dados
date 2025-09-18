var certasPilha = 0;

function questaoPilha1() {
    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        '<p>1 - Qual das opções descreve corretamente o funcionamento de uma pilha?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">FIFO - First In, First Out</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">LIFO - Last In, First Out</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">LILO - Last In, Last Out</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">FIFA - Federação Internacional de Futebol Association</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarPilha1()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarPilha1() {
    let resposta = document.getElementsByName('respostas');

    let resSelecionado = -1;

    for (let i = 0; i < resposta.length; i++) {
        if (resposta[i].checked) {
            resSelecionado = parseInt(resposta[i].value);
            break;
        }
    }

    switch (resSelecionado) {
        case 0:
            document.getElementById('devolutiva').innerHTML = 'A pilha segue o princípio LIFO, ou seja, o último elemento inserido é o primeiro a ser removido.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa.';
            certasPilha++;
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'A pilha segue o princípio LIFO, ou seja, o último elemento inserido é o primeiro a ser removido.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'A pilha segue o princípio LIFO, ou seja, o último elemento inserido é o primeiro a ser removido.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo3').style.backgroundColor = "red";
            document.getElementById('fundo3').style.borderRadius = "5px";
            break;
        case -1:
            document.getElementById('devolutiva').innerHTML = 'Nenhuma alternativa escolhida, Por favor escolha uma.';
            break;
        default:
            document.getElementById('devolutiva').innerHTML = "ERRO";

    }

    if (resSelecionado != -1) {
        document.getElementById('botao').innerHTML = '<button onclick="questaoPilha2()" class="btn__proximo">Próximo</button>';
    }
}

function questaoPilha2() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>2 - Qual o método utilizado para remover o elemento no topo da pilha?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">.push()</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">.insert()</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">.pop()</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">.top()</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarPilha2()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarPilha2() {
    let resposta = document.getElementsByName('respostas');

    let resSelecionado = -1;

    for (let i = 0; i < resposta.length; i++) {
        if (resposta[i].checked) {
            resSelecionado = parseInt(resposta[i].value);
            break;
        }
    }

    switch (resSelecionado) {
        case 0:
            document.getElementById('devolutiva').innerHTML = 'O método .pop() é responsável por remover o elemento no topo da pilha.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'O método .pop() é responsável por remover o elemento no topo da pilha.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            certasPilha++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'O método .pop() é responsável por remover o elemento no topo da pilha.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo3').style.backgroundColor = "red";
            document.getElementById('fundo3').style.borderRadius = "5px";
            break;
        case -1:
            document.getElementById('devolutiva').innerHTML = 'Nenhuma alternativa escolhida, Por favor escolha uma.';
            break;
        default:
            document.getElementById('devolutiva').innerHTML = "ERRO";

    }

    if (resSelecionado != -1) {
        document.getElementById('botao').innerHTML = '<button onclick="questaoPilha3()" class="btn__proximo">Próximo</button>';
    }
}

function questaoPilha3() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>3 - Qual o método utilizado para inserir o elemento no topo da pilha?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">.delete()</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">.push()</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">.remove()</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">.top()</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarPilha3()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarPilha3() {
    let resposta = document.getElementsByName('respostas');

    let resSelecionado = -1;

    for (let i = 0; i < resposta.length; i++) {
        if (resposta[i].checked) {
            resSelecionado = parseInt(resposta[i].value);
            break;
        }
    }

    switch (resSelecionado) {
        case 0:
            document.getElementById('devolutiva').innerHTML = 'O método .push() adiciona um elemento no topo da pilha.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            certasPilha++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'O método .push() adiciona um elemento no topo da pilha.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'O método .push() adiciona um elemento no topo da pilha.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo3').style.backgroundColor = "red";
            document.getElementById('fundo3').style.borderRadius = "5px";
            break;
        case -1:
            document.getElementById('devolutiva').innerHTML = 'Nenhuma alternativa escolhida, Por favor escolha uma.';
            break;
        default:
            document.getElementById('devolutiva').innerHTML = "ERRO";

    }

    if (resSelecionado != -1) {
        document.getElementById('botao').innerHTML = '<button onclick="questaoPilha4()" class="btn__proximo">Próximo</button>';
    }
}

function questaoPilha4() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>4 - O que acontece quando você tenta remover um elemento de uma pilha vazia?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">O programa reinicia</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Um novo elemento é criado</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">O topo da pilha retorna 0</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Ocorre um erro de underflow</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarPilha4()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarPilha4() {
    let resposta = document.getElementsByName('respostas');

    let resSelecionado = -1;

    for (let i = 0; i < resposta.length; i++) {
        if (resposta[i].checked) {
            resSelecionado = parseInt(resposta[i].value);
            break;
        }
    }

    switch (resSelecionado) {
        case 0:
            document.getElementById('devolutiva').innerHTML = 'Tentar remover de uma pilha vazia pode levar a um erro de execução ou comportamento inesperado, conhecido como underflow.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Tentar remover de uma pilha vazia pode levar a um erro de execução ou comportamento inesperado, conhecido como underflow.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'Tentar remover de uma pilha vazia pode levar a um erro de execução ou comportamento inesperado, conhecido como underflow.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            certasPilha++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa ';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            break;
        case -1:
            document.getElementById('devolutiva').innerHTML = 'Nenhuma alternativa escolhida, Por favor escolha uma.';
            break;
        default:
            document.getElementById('devolutiva').innerHTML = "ERRO";

    }

    if (resSelecionado != -1) {
        document.getElementById('botao').innerHTML = '<button onclick="questaoPilha5()" class="btn__proximo">Próximo</button>';
    }
}

function questaoPilha5() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>5 - Qual o uso comum de uma pilha em linguagens de programação?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Armazenar arquivos temporários</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Gerenciar memório heap</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Controlar chamadas de funções (recursão)</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Ordenar elementos em ordem crescente</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarPilha5()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarPilha5() {
    let resposta = document.getElementsByName('respostas');

    let resSelecionado = -1;

    for (let i = 0; i < resposta.length; i++) {
        if (resposta[i].checked) {
            resSelecionado = parseInt(resposta[i].value);
            break;
        }
    }

    switch (resSelecionado) {
        case 0:
            document.getElementById('devolutiva').innerHTML = 'As pilhas são frequentemente usadas para gerenciar o fluxo de execução de funções, especialmente em chamadas recursivas.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'As pilhas são frequentemente usadas para gerenciar o fluxo de execução de funções, especialmente em chamadas recursivas.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            certasPilha++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa ';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'As pilhas são frequentemente usadas para gerenciar o fluxo de execução de funções, especialmente em chamadas recursivas.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo3').style.backgroundColor = "red";
            document.getElementById('fundo3').style.borderRadius = "5px";
            break;
        case -1:
            document.getElementById('devolutiva').innerHTML = 'Nenhuma alternativa escolhida, Por favor escolha uma.';
            break;
        default:
            document.getElementById('devolutiva').innerHTML = "ERRO";

    }

    if (resSelecionado != -1) {
        document.getElementById('botao').innerHTML = '<button onclick="questaoPilha6()" class="btn__proximo">Próximo</button>';
    }
}

function questaoPilha6() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>6 - Qual das estruturas abaixo pode ser usada para implementar uma pilha?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Fila</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Árvore</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Lista encadeada</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Tabela Hash</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarPilha6()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarPilha6() {
    let resposta = document.getElementsByName('respostas');

    let resSelecionado = -1;

    for (let i = 0; i < resposta.length; i++) {
        if (resposta[i].checked) {
            resSelecionado = parseInt(resposta[i].value);
            break;
        }
    }

    switch (resSelecionado) {
        case 0:
            document.getElementById('devolutiva').innerHTML = 'As pilhas podem ser implementadas usando uma lista encadeada, onde os elementos são inseridos e removidos do topo da lista.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'As pilhas podem ser implementadas usando uma lista encadeada, onde os elementos são inseridos e removidos do topo da lista.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            certasPilha++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'As pilhas podem ser implementadas usando uma lista encadeada, onde os elementos são inseridos e removidos do topo da lista.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo3').style.backgroundColor = "red";
            document.getElementById('fundo3').style.borderRadius = "5px";
            break;
        case -1:
            document.getElementById('devolutiva').innerHTML = 'Nenhuma alternativa escolhida, Por favor escolha uma.';
            break;
        default:
            document.getElementById('devolutiva').innerHTML = "ERRO";

    }

    if (resSelecionado != -1) {
        document.getElementById('botao').innerHTML = '<button onclick="questaoPilha7()" class="btn__proximo">Próximo</button>';
    }
}

function questaoPilha7() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>7 - Qual o método utilizado para ver o elemento no topo da pilha sem removê-lo?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">.top()</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">.push()</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">.empty()</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">.shift()</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarPilha7()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarPilha7() {
    let resposta = document.getElementsByName('respostas');

    let resSelecionado = -1;

    for (let i = 0; i < resposta.length; i++) {
        if (resposta[i].checked) {
            resSelecionado = parseInt(resposta[i].value);
            break;
        }
    }

    switch (resSelecionado) {
        case 0:
            certasPilha++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa.';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'O método .top() retorna o elemento no topo da pilha sem removê-lo.';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'O método .top() retorna o elemento no topo da pilha sem removê-lo.';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red"
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'O método .top() retorna o elemento no topo da pilha sem removê-lo.';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            document.getElementById('fundo3').style.backgroundColor = "red";
            document.getElementById('fundo3').style.borderRadius = "5px";
            break;
        case -1:
            document.getElementById('devolutiva').innerHTML = 'Nenhuma alternativa escolhida, Por favor escolha uma.';
            break;
        default:
            document.getElementById('devolutiva').innerHTML = "ERRO";

    }

    if (resSelecionado != -1) {
        document.getElementById('botao').innerHTML = '<button onclick="questaoPilha8()" class="btn__proximo">Próximo</button>';
    }
}

function questaoPilha8() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>8 - Considerando a sequência de operações em uma pilha: pilha.push(10); pilha.push(20); pilha.pop(); pilha.push(30); pilha.top();. Qual será o valor retornado por pilha.top()?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">10</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">20</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">30</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Erro</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarPilha8()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarPilha8() {
    let resposta = document.getElementsByName('respostas');

    let resSelecionado = -1;

    for (let i = 0; i < resposta.length; i++) {
        if (resposta[i].checked) {
            resSelecionado = parseInt(resposta[i].value);
            break;
        }
    }

    switch (resSelecionado) {
        case 0:
            document.getElementById('devolutiva').innerHTML = 'Após a sequência de operações, o valor no topo da pilha será 30, já que 20 foi removido com o pop() e 30 foi inserido depois.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Após a sequência de operações, o valor no topo da pilha será 30, já que 20 foi removido com o pop() e 30 foi inserido depois.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            certasPilha++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa ';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'Após a sequência de operações, o valor no topo da pilha será 30, já que 20 foi removido com o pop() e 30 foi inserido depois.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo3').style.backgroundColor = "red";
            document.getElementById('fundo3').style.borderRadius = "5px";
            break;
        case -1:
            document.getElementById('devolutiva').innerHTML = 'Nenhuma alternativa escolhida, Por favor escolha uma.';
            break;
        default:
            document.getElementById('devolutiva').innerHTML = "ERRO";

    }

    if (resSelecionado != -1) {
        document.getElementById('botao').innerHTML = '<button onclick="placarPilha()" class="btn__proximo">Próximo</button>';
    }
}

function placarPilha() {
    let text = '<div class="container__questoes"> ' +
        "Perguntas acertadas: " + certasPilha + "/8 <br> " + ((certasPilha / 8) * 100) + "%" +
        '<div id="botao"> </div>' +
        '<div>';

    document.getElementById('main').innerHTML = text;

    document.getElementById('botao').innerHTML = '<button onclick="window.location.reload()" class="btn__voltar__inicial">Voltar à página inicial</button>';
}