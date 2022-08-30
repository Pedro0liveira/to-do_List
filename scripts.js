//IMPORTANTE!!! ---- adicionar o recebimento dos possiveis detalhes
//inseridos

var dateTask = document.createElement("input");
dateTask.type = 'date'
dateTask.id = 'dateTask';

var description = document.createElement("input");
description.type = 'text';
description.id = 'description';
description.placeholder = 'Descreva a sua tarefa aqui...';

//Está função verifica se a caixa de texto não está vazia, em seguida
//adiciona a tarefa descrita pelo usuário, com a opcao de deletar a
// tarefa
document.querySelector('#push').onclick = function() {
    if(document.querySelector('#newTask input').value.length == 0) {
        alert("Indique um nome para a tarefa!!")
    } 
    
    else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskName">
                ${document.querySelector('#newTask input').value}
            </span>
            <button class="delete">
            trash
            </button>
        </div>
        `;


        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
    
    document.getElementById('inputTask').value = '';
}



// define a div pai para a operação dos botoes
    var divPai = document.getElementById('divDetails');

// botao "adicionar detalhes"

var btnDetails = document.createElement("button");
btnDetails.id = 'btnDetails';
btnDetails.textContent = "Adicionar detalhes";
btnDetails.setAttribute('onclick', 'changeBtn()');
btnDetails.setAttribute('name', 'btn');


// Insere o botao "adicionar detalhes" na pagina
divPai.appendChild(btnDetails);



//botao "menos detalhes"

var btnLessDetails = document.createElement("button");
btnLessDetails.id = 'btnLessDetails';
btnLessDetails.textContent = "Menos detalhes";
btnLessDetails.setAttribute('onclick', 'changeBtn()');
btnLessDetails.setAttribute('name', 'btn');

//define variavel x, que altera seu valor entre 0 e 1 toda vez que 
//o onclick do botao de detalhes é acionado
var x = 1;



function changeBtn() {

    txtButton = (document.getElementsByName('btn')).textContent;

    if (x == 1) {

        btnDetails.remove();

        divPai.appendChild(dateTask);
        divPai.appendChild(description);

        divPai.appendChild(btnLessDetails);

        x = 0;

    } else {

        btnLessDetails.remove();
        dateTask.remove();
        description.remove();

        divPai.appendChild(btnDetails);

        x = 1;

    }
}