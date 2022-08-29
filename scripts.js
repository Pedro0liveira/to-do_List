//Está função verifica se a caixa de texto não está vazia, em seguida
//adiciona a tarefa descrita pelo usuário, com a opcao de deletar a
//tarefa

//IMPORTANTE!!! ---- adicionar o recebimento dos possiveis detalhes
//inseridos
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



// Adiciona detalhes
document.querySelector('#details').onclick = function() {
    var btnLessDetails = document.createElement("button");
    btnLessDetails.id = 'lessDetails';

    // definir conteudo do botao
    var txtBtnLessDetails = document.createTextNode("Menos detalhes");
    
    // adicionar conteudo ao botao
    btnLessDetails.appendChild(txtBtnLessDetails);
    
    // definir elemento que sera trocado
    var replace = document.querySelector('#details');

    // selecionar elemento pai
    var dad = replace.parentNode;

    // trocar elementos
    // elementoPai.replaceChild('novo_elemento', 'elemento_substituido')
    dad.replaceChild(btnLessDetails, replace);
}


document.querySelector('#lessDetails').onclick = function() {
    var btnDetails = document.createElement("button");
    btnDetails.id = 'details';

    var txtBtnDetails = document.createTextNode("Adicionar detalhes");
    btnDetails.appendChild(txtBtnDetails);

    var replace = document.querySelector('#lessDetails');

    //var dad = replace.parentNode;

    dad.replaceChild(btnDetails, replace);
}