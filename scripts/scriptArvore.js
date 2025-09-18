var certasArvore = 0;

function questaoArvore1() {
    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        '<p>1 - O que é uma árvore binária?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Uma estrutura onde cada nó pode ter até três filhos</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Uma estrutura hieráquica sem restrições de ramificações</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Uma estrutura onde cada nó tem no máximo dois filhos</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Uma estrutura onde todos os nós tem exatamente dois filhos</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarArvore1()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarArvore1() {
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
            document.getElementById('devolutiva').innerHTML = 'Na árvore binária, cada nó pode ter no máximo dois filhos: geralmente chamados de "esquerda" e "direita".';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Na árvore binária, cada nó pode ter no máximo dois filhos: geralmente chamados de "esquerda" e "direita".';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red";
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa.';
            certasArvore++;
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'Na árvore binária, cada nó pode ter no máximo dois filhos: geralmente chamados de "esquerda" e "direita".';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoArvore2()" class="btn__proximo">Próximo</button>';
    }
}

function questaoArvore2() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>2 - Qual o nome da travessia em que os nós de uma árvore binária são visitados na ordem: esquerda, raiz, direita?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Pré-ordem</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Pós-ordem</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Nível</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Em ordem</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarArvore2()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarArvore2() {
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
            document.getElementById('devolutiva').innerHTML = 'A travessia in-order percorre a subárvore esquerda, depois o nó atual (raiz), e por fim a subárvore direita.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'A travessia in-order percorre a subárvore esquerda, depois o nó atual (raiz), e por fim a subárvore direita.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'A travessia in-order percorre a subárvore esquerda, depois o nó atual (raiz), e por fim a subárvore direita.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            certasArvore++;
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoArvore3()" class="btn__proximo">Próximo</button>';
    }
}

function questaoArvore3() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>3 - Qual das alternativas representa uma árvore balanciada</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Uma árvore em que todos os nós tem dois filhos</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Uma árvore com profundidade uniforme em todos os caminhos</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Uma árvore onde as alturas das subárvores esquerda e direita de qualquer nó diferem no máximo em 1</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Uma árvore ordenada em ordem crescente</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarArvore3()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarArvore3() {
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
            document.getElementById('devolutiva').innerHTML = 'Uma árvore balanceada evita que um lado fique muito mais profundo que o outro, o que garante melhor desempenho em buscas e inserções.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Uma árvore balanceada evita que um lado fique muito mais profundo que o outro, o que garante melhor desempenho em buscas e inserções.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red";
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            certasArvore++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'Uma árvore balanceada evita que um lado fique muito mais profundo que o outro, o que garante melhor desempenho em buscas e inserções.';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoArvore4()" class="btn__proximo">Próximo</button>';
    }
}

function questaoArvore4() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>4 - O que é um nó folha em uma árvore</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Um nó com apenas um filho</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Um nó que tem dois filhos</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Um nó que não possui filhos</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Um nó que aponta para a raiz</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarArvore4()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarArvore4() {
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
            document.getElementById('devolutiva').innerHTML = 'Nó folha é o que está no nível mais baixo e não possui filhos.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Nó folha é o que está no nível mais baixo e não possui filhos.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red";
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            certasArvore++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa ';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'Nó folha é o que está no nível mais baixo e não possui filhos.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoArvore5()" class="btn__proximo">Próximo</button>';
    }
}

function questaoArvore5() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>5 - Qual é a altura de uma árvore composta por apenas um nó (a raiz)?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">0</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">1</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">2</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Não é possível definir</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarArvore5()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarArvore5() {
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
            certasArvore++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa ';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'A altura de uma árvore é o número de arestas do nó mais profundo até a raiz. Se há só um nó, a altura é 0.';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'A altura de uma árvore é o número de arestas do nó mais profundo até a raiz. Se há só um nó, a altura é 0.';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'A altura de uma árvore é o número de arestas do nó mais profundo até a raiz. Se há só um nó, a altura é 0.';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoArvore6()" class="btn__proximo">Próximo</button>';
    }
}

function questaoArvore6() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>6 - Qual das aplicações abaixo utiliza árvores como estruturas de dados?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Armazenamento sequencial de arquivos</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Implementação de filas de prioridade</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Compressão de dados em blocos fixos</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Representação de hierarquias e expressões matemáticos</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarArvore6()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarArvore6() {
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
            document.getElementById('devolutiva').innerHTML = 'Árvores são ideais para representar hierarquias, como diretórios ou expressões (árvore de expressão).';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Árvores são ideais para representar hierarquias, como diretórios ou expressões (árvore de expressão).';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'Árvores são ideais para representar hierarquias, como diretórios ou expressões (árvore de expressão).';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            certasArvore++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoArvore7()" class="btn__proximo">Próximo</button>';
    }
}

function questaoArvore7() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>7 - O que é uma árvore binária completa?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Uma árvore onde todos os nós tem exatamente dois filhos</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Uma árvore onde todos os nós folha estão no mesmo nível</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Uma árvore onde todos os níveis, exceto possivelmente o último, estão completamente preenchidos</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Uma árvore em que os filhos são preenchidos da direita para a esquerda</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarArvore7()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarArvore7() {
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
            document.getElementById('devolutiva').innerHTML = 'Em uma árvore binária completa, todos os níveis estão totalmente preenchidos, exceto possivelmente o último, que é preenchido da esquerda para a direita.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Em uma árvore binária completa, todos os níveis estão totalmente preenchidos, exceto possivelmente o último, que é preenchido da esquerda para a direita.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            certasArvore++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'Em uma árvore binária completa, todos os níveis estão totalmente preenchidos, exceto possivelmente o último, que é preenchido da esquerda para a direita.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoArvore8()" class="btn__proximo">Próximo</button>';
    }
}

function questaoArvore8() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>8 - Em uma árvore binária, qual travessia é ideal para remover todos os nós da árvore segura (liberando memória)?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Em ordem</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Nível</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Pré-ordem</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Pós-ordem</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarArvore8()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarArvore8() {
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
            document.getElementById('devolutiva').innerHTML = 'Na travessia pós-ordem, os filhos são processados antes do nó pai. Isso garante que ao remover um nó, seus filhos já tenham sido removidos, evitando acessos inválidos.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Na travessia pós-ordem, os filhos são processados antes do nó pai. Isso garante que ao remover um nó, seus filhos já tenham sido removidos, evitando acessos inválidos.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'Na travessia pós-ordem, os filhos são processados antes do nó pai. Isso garante que ao remover um nó, seus filhos já tenham sido removidos, evitando acessos inválidos.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            certasArvore++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa';
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
        document.getElementById('botao').innerHTML = '<button onclick="placarArvore()" class="btn__proximo">Próximo</button>';
    }
}

function placarArvore() {
    let text = '<div class="container__questoes"> ' +
        "Perguntas acertadas: " + certasArvore + "/8 <br> " + ((certasArvore / 8) * 100) + "%" +
        '<div id="botao"> </div>' +
        '<div>';

    document.getElementById('main').innerHTML = text;

    document.getElementById('botao').innerHTML = '<button onclick="window.location.reload()" class="btn__voltar__inicial">Voltar à página inicial</button>';
}