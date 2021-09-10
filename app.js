const listaTarefas = [];

let tarefa1 = {
    descricao: "Estudar para a prova de banco de dados",
    status: "emAberto",
    prioridade: "prioridade-alta",
};

let tarefa2 = {
    descricao: "estudar para prova de algoritimos",
    status: "emAberto",
    prioridades: "prioridade-baixa"
};

listaTarefas.push(tarefa1);
listaTarefas.push(tarefa2);

renderLista();

function fabricaTarefas() {
    let descricao = document.getElementById('descricaoTarefa');
    let prioridade = document.getElementsByName('prioridadeTarefa');
    let tarefa = {
        descricao: descricao,
        status: "aberto",
        prioridade: prioridade
    };
    listaTarefas.push(tarefa);
    alert("tarefa criada");
    renderLista();
}

function renderLista() {
    let divLista = document.getElementsById('divLista');
    let template = '';
    for (let i = 0; i < listaTarefas.length; i++) {
        template += `<div class= "tarefa ${listaTarefas[i].prioridade}">
                     <p class= "descTarefa"> ${listaTarefas[i].descricao} </p>
                    <button>Excluir</button>
                    <input type="checkbox" name="" id="">
                     </dv>`;

    }
    divLista.innerHTML = template;
}