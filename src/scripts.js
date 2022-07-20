// ========================= Criação dos Itens =======================

// Cria a parte estática da página, como título, inputs 
// e containers da parte das tarefas.
function criaEstaticosTarefas() {
    const body = document.querySelector('body');

    const tituloPagina = document.createElement('h1');
    tituloPagina.classList.add('titulo-pagina');
    tituloPagina.innerText = 'To do List';
    body.appendChild(tituloPagina);

    const containerMain = document.createElement('main');
    containerMain.classList.add('container-conteudo');
    body.appendChild(containerMain);

    const secaoTarefas = document.createElement('section');
    secaoTarefas.classList.add('secao-tarefas');
    containerMain.appendChild(secaoTarefas);

    const tarefasTitulo = document.createElement('h2');
    tarefasTitulo.classList.add('secao-tarefas-titulo');
    tarefasTitulo.innerText = 'Tarefas';
    secaoTarefas.appendChild(tarefasTitulo);

    const inputsContainer = document.createElement('div');
    inputsContainer.classList.add('container-inputs');
    secaoTarefas.appendChild(inputsContainer);

    const tarefaInput = document.createElement('input');
    tarefaInput.classList.add('nome-nova-tarefa');
    tarefaInput.placeholder = 'Digite sua nova tarefa';
    tarefaInput.id = 'input-tarefa';
    inputsContainer.appendChild(tarefaInput);

    const tarefaButton = document.createElement('button');
    tarefaButton.classList.add('botao-nova-tarefa');
    tarefaButton.innerText = 'Criar Tarefa';
    inputsContainer.appendChild(tarefaButton);

    const tarefasLista = document.createElement('ul');
    tarefasLista.classList.add('lista-tarefas-container');
    secaoTarefas.appendChild(tarefasLista);
}

// Cria os "cards" das Tarefas
function criaItemTarefa() {
    const listaContainer = document.querySelector('.lista-tarefas-container');
    listaContainer.innerHTML = ''; // Limpa a lista para que os elementos não fiquem duplicados

    for (let i = 0; i < tarefas.length; i++) {

        const itemLista = document.createElement('li');
        itemLista.classList.add('lista-tarefas-item');
        listaContainer.appendChild(itemLista);

        const nomeTarefa = document.createElement('span');
        nomeTarefa.classList.add('nome-tarefa');
        nomeTarefa.innerText = tarefas[i].name;
        itemLista.appendChild(nomeTarefa);

        const finalizaTarefa = document.createElement('button');
        finalizaTarefa.classList.add('conclui-tarefa');
        finalizaTarefa.innerText = 'Concluir Tarefa';

        // A linha abaixo adiciona um 'id' ao botão, que corresponde ao índice
        // da tarefa dele no array de tarefas. Quando clicar nele, basta acessar
        // o valor desse id lá no array de tarefas e saberei qual tarefa será concluída!
        finalizaTarefa.id = `completa-${i}`; 
        itemLista.appendChild(finalizaTarefa);

        finalizaTarefa.addEventListener('click', concluiTarefa)
    }
}

// Cria os elementos estáticos da parte das Tarefas Concluídas
function criaEstaticosTarefasConcluidos() {
    const main = document.getElementsByClassName('container-conteudo')[0];
    
    const secaoTarefasConcluidas = document.createElement('section');
    secaoTarefasConcluidas.classList.add('secao-tarefas-concluidas');
    main.appendChild(secaoTarefasConcluidas);

    const tarefasConcluidasTitulo = document.createElement('h2');
    tarefasConcluidasTitulo.classList.add('secao-tarefas-concluidas-titulo');
    tarefasConcluidasTitulo.innerText = 'Tarefas Concluídas';
    secaoTarefasConcluidas.appendChild(tarefasConcluidasTitulo);

    const tarefasListaConcluidas = document.createElement('ul');
    tarefasListaConcluidas.classList.add('lista-tarefas-concluidas-container');
    secaoTarefasConcluidas.appendChild(tarefasListaConcluidas);
}

// Cria os "cards" das Tarefas Concluídas
function criaItemTarefaConcluida() {
    const listaConcluidasContainer = document.querySelector('.lista-tarefas-concluidas-container');
    listaConcluidasContainer.innerHTML = '';


    for (let i = 0; i < tarefasCompletas.length; i++) {
        const itemListaConcluida = document.createElement('li');
        itemListaConcluida.classList.add('lista-tarefas-concluidas-item');
        listaConcluidasContainer.appendChild(itemListaConcluida);

        const nomeTarefaConcluida = document.createElement('span');
        nomeTarefaConcluida.classList.add('nome-tarefa-concluida');
        nomeTarefaConcluida.innerText = tarefasCompletas[i].name;
        itemListaConcluida.appendChild(nomeTarefaConcluida);

        const excluirTarefa = document.createElement('button');
        excluirTarefa.classList.add('exclui-tarefa');
        excluirTarefa.innerText = 'Excluir Tarefa';

        // A linha abaixo adiciona um 'id' ao botão, que corresponde ao índice
        // da tarefa dele no array de tarefasCompletas. Quando clicar nele, basta acessar
        // o valor desse id lá no array de tarefasCompletas e saberei qual tarefa será excluída!
        excluirTarefa.id = `exclui-${i}`;
        itemListaConcluida.appendChild(excluirTarefa);

        excluirTarefa.addEventListener('click', exlcuiTarefa)
    }
}

criaEstaticosTarefas();
criaItemTarefa();
criaEstaticosTarefasConcluidos();
criaItemTarefaConcluida();


// ===================== Funcionalidades ====================

/**
Função que cria uma tarefa nova:
Quando o usuário clicar no botão "Criar Tarefa" o código deve:
1 - Pegar o valor que está digitado no input (que será a nova tarefa);
2 - Criar um objeto com esse novo valor, que tenha o mesmo formato (as mesmas chaves) dos objetos já existentes no array tarefas;
3 - Inserir esse novo objeto (nova tarefa) no array de tarefas;
4 - Chamar a função que renderiza os "cards"/tarefas na tela.
*/ 
function criaNovaTarefa() {
    // Passo 1 (ver passo a passo acima):
    const tarefaInput = document.getElementById('input-tarefa');
    const nomeTarefa = tarefaInput.value;

    // Passo 2:
    const novaTarefa = {
        name: nomeTarefa
    }

    // Passo 3:
    tarefas.push(novaTarefa);

    // Passo 4:
    criaItemTarefa();
}

const botaoCriaTarefa = document.querySelector('.botao-nova-tarefa');
botaoCriaTarefa.addEventListener('click', criaNovaTarefa)


/**
Função que conclui uma tarefa. Quando isso acontece, a tarefa deve
sair da lista de Tarefas normais, e deve ser colocada na lista de
Tarefas Concluídas. Quando o usuário clicar em algum botão "Concluir Tarefa",
o código deve:

1 - Identificar qual tarefa deverá ser concluída, através do id que foi atribuído àquele botão na função criaItemTarefa;
    Tente entender a estrutura do 'id' para entneder a tratativa de string que está sendo feita!
2 - Remover essa tarefa da lista de Tarefas;
3 - Chamar a função que renderiza as tarefas na tela, para que essa remoção seja atualizada na tela;
4 - Colocar a tarefa removida no array de tarefasCompletas;
5 - Chamar a função que renderiza as tarefas Completas na tela.
*/
function concluiTarefa (evt) {
    // Passo 1:
    const idBtnClicado = evt.target.id.split('-')[1];
    // Passo 2:
    let tarefaCompleta = tarefas.splice(idBtnClicado, 1);
    // Passo 3:
    criaItemTarefa();

    // Passo 4:
    tarefasCompletas.push(tarefaCompleta[0]);
    // Passo 5:
    criaItemTarefaConcluida();
}

/*
Função que remove a tarefa da lista de Tarefas Concluídas. Quando o usuário
clicar em algum botão "Excluir Tarefa", o código deve:

1 - Identificar qual tarefa deverá será ser excluída, através do id que foi atribuiído àquele botão na função criaItemTarefaConcluida;
2 - Remover essa tarefa do array tarefasCompletas;
3 - Chamar a função que renderiza as tarefasCompletas na tela.

*/
function exlcuiTarefa (evt) {
    // Passo 1:
    const btnId = evt.target.id.split('-')[1];
    // Passo 2:
    tarefasCompletas.splice(btnId, 1);
    // Passo 3:
    criaItemTarefaConcluida();
}