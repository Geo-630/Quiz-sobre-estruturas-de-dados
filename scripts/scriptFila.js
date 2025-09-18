var certasFila = 0;

function questaoFila1() {
    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        '<p>1 - Qual o princípio fundamnetal que define o funcionamento de uma fila simples?</p>' +
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
        '<label for="resposta3">Cicular - Entrada e saída dos extremos</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarFila1()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarFila1() {
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
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa.';
            certasFila++;
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'A fila simples segue o princípio FIFO: o primeiro a entrar é o primeiro a sair.';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red";
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'A fila simples segue o princípio FIFO: o primeiro a entrar é o primeiro a sair.';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'A fila simples segue o princípio FIFO: o primeiro a entrar é o primeiro a sair.';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoFila2()" class="btn__proximo">Próximo</button>';
    }
}

function questaoFila2() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>2 - Quais são as duas operações básicas de uma fila simples?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Inserção e Ordenação</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Inserção e Busca</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Enfileirar e Desenfileirar</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Empilhar e Desempilhar</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarFila2()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarFila2() {
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
            document.getElementById('devolutiva').innerHTML = 'As operações fundamentais da fila são: enfileirar (adicionar no final) e desenfileirar (remover do início).';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'As operações fundamentais da fila são: enfileirar (adicionar no final) e desenfileirar (remover do início).';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            certasFila++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'As operações fundamentais da fila são: enfileirar (adicionar no final) e desenfileirar (remover do início).';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoFila3()" class="btn__proximo">Próximo</button>';
    }
}

function questaoFila3() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>3 - O que acontece se você tentar remover um elemento de uma fila vazia?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">O programa reinicia automaticamente</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Um novo elemento é insirido</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">A operação retorna o valor 0</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Ocorre um erro ou comportamento indefinido</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarFila3()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarFila3() {
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
            document.getElementById('devolutiva').innerHTML = 'Remover de uma fila vazia causa underflow, o que pode gerar erro, exceção ou comportamento indefinido dependendo da implementação.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Remover de uma fila vazia causa underflow, o que pode gerar erro, exceção ou comportamento indefinido dependendo da implementação.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red";
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'Remover de uma fila vazia causa underflow, o que pode gerar erro, exceção ou comportamento indefinido dependendo da implementação.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            certasFila++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa.';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoFila4()" class="btn__proximo">Próximo</button>';
    }
}

function questaoFila4() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>4 - Qual operação retorna o elemento da frente da fila sem removê-lo?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">.pop()</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">.top()</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">.shift()</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">.push()</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarFila4()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarFila4() {
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
            document.getElementById('devolutiva').innerHTML = 'A operação .top() permite visualizar o primeiro elemento da fila sem removê-lo.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            certasFila++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa ';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'A operação .top() permite visualizar o primeiro elemento da fila sem removê-lo.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'A operação .top() permite visualizar o primeiro elemento da fila sem removê-lo.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo3').style.backgroundColor = "red"
            document.getElementById('fundo3').style.borderRadius = "5px";
            break;
        case -1:
            document.getElementById('devolutiva').innerHTML = 'Nenhuma alternativa escolhida, Por favor escolha uma.';
            break;
        default:
            document.getElementById('devolutiva').innerHTML = "ERRO";

    }

    if (resSelecionado != -1) {
        document.getElementById('botao').innerHTML = '<button onclick="questaoFila5()" class="btn__proximo">Próximo</button>';
    }
}

function questaoFila5() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>5 - Qual das situações abaixo representa um uso comum de filas?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Controle de chamadas recursivas</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Ordenação de dados em listas</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Atendimento em sistemas de senhas (como bancos)</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Armazenamento de grande volume de dados sem ordem</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarFila5()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarFila5() {
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
            document.getElementById('devolutiva').innerHTML = 'Filas são comumente usadas em situações como filas de atendimento, onde a ordem de chegada importa.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Filas são comumente usadas em situações como filas de atendimento, onde a ordem de chegada importa.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            certasFila++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa ';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'Filas são comumente usadas em situações como filas de atendimento, onde a ordem de chegada importa.';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoFila6()" class="btn__proximo">Próximo</button>';
    }
}

function questaoFila6() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>6 - Qual das estruturas de dados pode ser usado para implementar uma fila simples?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Lista encadeada</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Tabela hash</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Árvore binária</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Pilha</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarFila6()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarFila6() {
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
            certasFila++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa ';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Listas encadeadas são frequentemente usadas para implementar filas, pois permitem inserção no fim e remoção no início com eficiência.';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'Listas encadeadas são frequentemente usadas para implementar filas, pois permitem inserção no fim e remoção no início com eficiência.';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'Listas encadeadas são frequentemente usadas para implementar filas, pois permitem inserção no fim e remoção no início com eficiência.';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoFila7()" class="btn__proximo">Próximo</button>';
    }
}

function questaoFila7() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>7 - Em algoritmos de busca, como a fila é normalmente utilizada?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Para armazenar dados ordenados</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Para controlar a profundidade da recursão</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Para percorrer elementos em largura</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Para dividir tarefas paralelas em threads</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarFila7()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarFila7() {
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
            document.getElementById('devolutiva').innerHTML = 'Em algoritmos como a busca em largura (BFS), a fila garante que os elementos sejam processados na ordem em que foram descobertos';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Em algoritmos como a busca em largura (BFS), a fila garante que os elementos sejam processados na ordem em que foram descobertos';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'Em algoritmos como a busca em largura (BFS), a fila garante que os elementos sejam processados na ordem em que foram descobertos';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red"
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            certasFila++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa.';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoFila8()" class="btn__proximo">Próximo</button>';
    }
}

function questaoFila8() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>8 - Qual é a principal diferença entre uma fila e uma pilha em termos de ordem de processamento dos elementos?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">A fila processa os elementos em ordem inversa à da pilha</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">A fila remove sempre o elemento mais recente</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">A fila segue o modelo FIFO, enquanto a pilha segue LIFO</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Ambas seguem o mesmo princípio de processamento</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarFila8()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarFila8() {
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
            document.getElementById('devolutiva').innerHTML = 'A fila processa os elementos na ordem em que foram inseridos (FIFO), enquanto a pilha processa o último elemento inserido primeiro (LIFO).';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'A fila processa os elementos na ordem em que foram inseridos (FIFO), enquanto a pilha processa o último elemento inserido primeiro (LIFO).';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            certasFila++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa ';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'A fila processa os elementos na ordem em que foram inseridos (FIFO), enquanto a pilha processa o último elemento inserido primeiro (LIFO).';
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
        document.getElementById('botao').innerHTML = '<button onclick="placarFila()" class="btn__proximo">Próximo</button>';
    }
}

function placarFila() {
    let text = '<div class="container__questoes"> ' +
        "Perguntas acertadas: " + certasFila + "/8 <br> " + ((certasFila / 8) * 100) + "%" +
        '<div id="botao"> </div>' +
        '<div>';

    document.getElementById('main').innerHTML = text;

    document.getElementById('botao').innerHTML = '<button onclick="window.location.reload()" class="btn__voltar__inicial">Voltar à página inicial</button>';
}