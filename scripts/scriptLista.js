var certasLista = 0;

function questaoLista1() {
    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        '<p>1 - O que é uma lista encadeada?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Um conjunto de dados armazenados em posições consecutivas da memória</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Uma estrutura onde cada elemento aponta para o próximo</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Uma estrutura com elementos fixos e de tamanho constante</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Um tipo de árvore binária sem filhos</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarLista1()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarLista1() {
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
            document.getElementById('devolutiva').innerHTML = 'Na lista encadeada, cada nó contém um valor e um ponteiro para o próximo nó, permitindo inserções e remoções dinâmicas.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa.';
            certasLista++;
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'Na lista encadeada, cada nó contém um valor e um ponteiro para o próximo nó, permitindo inserções e remoções dinâmicas.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'Na lista encadeada, cada nó contém um valor e um ponteiro para o próximo nó, permitindo inserções e remoções dinâmicas.';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoLista2()" class="btn__proximo">Próximo</button>';
    }
}

function questaoLista2() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>2 - Qual é a principal vantagem da lista encadeada em relação a arrays?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Maior velocidade de acesso aleatório</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Menor uso de memória em todos os casos</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Inserções e remoções eficientes em posições intermediárias</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">A capacidade de ordenar automaticamente os elementos</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarLista2()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarLista2() {
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
            document.getElementById('devolutiva').innerHTML = 'Listas encadeadas são eficientes para inserções e remoções, pois não exigem realocação de elementos.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Listas encadeadas são eficientes para inserções e remoções, pois não exigem realocação de elementos.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            certasLista++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'Listas encadeadas são eficientes para inserções e remoções, pois não exigem realocação de elementos.';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoLista3()" class="btn__proximo">Próximo</button>';
    }
}

function questaoLista3() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>3 - Qual é o papel do ponteiro “próximo” (next) em uma lista encadeada simples?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Aponta para o elemento anterior</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Aponta para o próximo elemento na lista</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Armazena o valor do nó</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Define o fim da lista</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarLista3()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarLista3() {
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
            document.getElementById('devolutiva').innerHTML = 'O ponteiro "next" conecta cada nó ao próximo, formando a cadeia da lista.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            certasLista++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'O ponteiro "next" conecta cada nó ao próximo, formando a cadeia da lista.';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'O ponteiro "next" conecta cada nó ao próximo, formando a cadeia da lista.';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoLista4()" class="btn__proximo">Próximo</button>';
    }
}

function questaoLista4() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>4 - Como é possível identificar o fim de uma lista encadeada simples?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Quando o valor do nó for nulo</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Quando o ponteiro “próximo” for nulo</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Quando o índice da lista for zero</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Quando a lista estiver ordenada</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarLista4()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarLista4() {
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
            document.getElementById('devolutiva').innerHTML = 'O fim da lista é indicado quando o ponteiro “next” do último nó aponta para null (ou nullptr).';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            certasLista++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa ';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'O fim da lista é indicado quando o ponteiro “next” do último nó aponta para null (ou nullptr).';
            document.getElementById('fundo1').style.backgroundColor = "green";
            document.getElementById('fundo1').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;         
        case 3:
            document.getElementById('devolutiva').innerHTML = 'O fim da lista é indicado quando o ponteiro “next” do último nó aponta para null (ou nullptr).';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoLista5()" class="btn__proximo">Próximo</button>';
    }
}

function questaoLista5() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>5 - O que acontece se o ponteiro de início (head) da lista for perdido sem salvar a lista em outro lugar?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">A lista inteira será inacessível e pode causar vazamento de memória</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">A lista será automaticamente recuperada do último nó</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">A lista será convertida em array</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Os elementos restantes serão transferidos para uma pilha</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarLista5()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarLista5() {
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
            certasLista++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa ';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Sem o ponteiro head, a lista não pode ser percorrida, tornando seus nós inacessíveis e potencialmente gerando vazamento de memória.';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'Sem o ponteiro head, a lista não pode ser percorrida, tornando seus nós inacessíveis e potencialmente gerando vazamento de memória.';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'Sem o ponteiro head, a lista não pode ser percorrida, tornando seus nós inacessíveis e potencialmente gerando vazamento de memória.';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoLista6()" class="btn__proximo">Próximo</button>';
    }
}

function questaoLista6() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>6 - O que diferencia uma lista duplamente encadeada de uma simples?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Possui um nó a mais no início</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Permite acesso direto por índice</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Cada nó possui ponteiros para o próximo e o anterior</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Todos os nós contêm dois valores de dados</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarLista6()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarLista6() {
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
            document.getElementById('devolutiva').innerHTML = 'Na lista duplamente encadeada, cada nó possui dois ponteiros: um para o próximo e outro para o anterior, permitindo navegação nos dois sentidos.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Na lista duplamente encadeada, cada nó possui dois ponteiros: um para o próximo e outro para o anterior, permitindo navegação nos dois sentidos.';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            certasLista++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa';
            document.getElementById('fundo2').style.backgroundColor = "green";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'Na lista duplamente encadeada, cada nó possui dois ponteiros: um para o próximo e outro para o anterior, permitindo navegação nos dois sentidos.';
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoLista7()" class="btn__proximo">Próximo</button>';
    }
}

function questaoLista7() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>7 - Qual é a complexidade de tempo para inserir um elemento no início de uma lista encadeada simples?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">O(n)</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">O(log n)</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">O(n²)</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">O(1)</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarLista7()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarLista7() {
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
            document.getElementById('devolutiva').innerHTML = 'A inserção no início da lista é feita em tempo constante, pois não depende do tamanho da lista.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo0').style.backgroundColor = "red";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'A inserção no início da lista é feita em tempo constante, pois não depende do tamanho da lista.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'A inserção no início da lista é feita em tempo constante, pois não depende do tamanho da lista.';
            document.getElementById('fundo3').style.backgroundColor = "green";
            document.getElementById('fundo3').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red"
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            certasLista++;
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
        document.getElementById('botao').innerHTML = '<button onclick="questaoLista8()" class="btn__proximo">Próximo</button>';
    }
}

function questaoLista8() {

    document.getElementById('main').innerHTML = '<div class="container__questoes"> ' +
        ' <p>8 - Qual das situações abaixo representa uma desvantagem das listas encadeadas?</p>' +
        '<div id="res">' +
        '<div id="fundo0">' +
        '<input type="radio" name="respostas" id="resposta0" value="0">' +
        '<label for="resposta0">Consumo de memória maior por conta dos ponteiros</label><br>' +
        '</div>' +
        '<div id="fundo1">' +
        '<input type="radio" name="respostas" id="resposta1" value="1">' +
        '<label for="resposta1">Inserções em posições intermediárias são lentas</label><br>' +
        '</div>' +
        '<div id="fundo2">' +
        '<input type="radio" name="respostas" id="resposta2" value="2">' +
        '<label for="resposta2">Dificuldade de expandir o tamanho da estrutura</label>' +
        '</div>' +
        '<div id="fundo3">' +
        '<input type="radio" name="respostas" id="resposta3" value="3">' +
        '<label for="resposta3">Acesso rápido por índice</label>' +
        '</div>' +
        '</div>' +
        '<div id="devolutiva"></div>' +
        '<div id="botao"><button onclick="verificarLista8()" class="btn__verificar">Verificar</button></div>' +
        '</div>';
}

function verificarLista8() {
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
            certasLista++;
            document.getElementById('devolutiva').innerHTML = 'Parabéns, resposta certa ';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            break;
        case 1:
            document.getElementById('devolutiva').innerHTML = 'Cada nó da lista precisa armazenar um ponteiro, o que aumenta o uso de memória em comparação com arrays.';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            document.getElementById('fundo1').style.backgroundColor = "red"
            document.getElementById('fundo1').style.borderRadius = "5px";
            break;
        case 2:
            document.getElementById('devolutiva').innerHTML = 'Cada nó da lista precisa armazenar um ponteiro, o que aumenta o uso de memória em comparação com arrays.';
            document.getElementById('fundo0').style.backgroundColor = "green";
            document.getElementById('fundo0').style.borderRadius = "5px";
            document.getElementById('fundo2').style.backgroundColor = "red";
            document.getElementById('fundo2').style.borderRadius = "5px";
            break;
        case 3:
            document.getElementById('devolutiva').innerHTML = 'Cada nó da lista precisa armazenar um ponteiro, o que aumenta o uso de memória em comparação com arrays.';
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
        document.getElementById('botao').innerHTML = '<button onclick="placarLista()" class="btn__proximo">Próximo</button>';
    }
}

function placarLista() {
    let text = '<div class="container__questoes"> ' +
        "Perguntas acertadas: " + certasLista + "/8 <br> " + ((certasLista / 8) * 100) + "%" +
        '<div id="botao"> </div>' +
        '<div>';

    document.getElementById('main').innerHTML = text;

    document.getElementById('botao').innerHTML = '<button onclick="window.location.reload()" class="btn__voltar__inicial">Voltar à página inicial</button>';
}