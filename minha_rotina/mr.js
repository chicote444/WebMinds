
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.botao-circular').addEventListener('click', function() {
        criarDiv();
    });
});

function criarDiv() {
    // Criação dos elementos da div
    var divCard = document.createElement('div');
    divCard.classList.add('card', 'border-primary', 'mb-3');

    var divCardHeader = document.createElement('div');
    divCardHeader.classList.add('card-header');

    var inputHeader = document.createElement('input');
    inputHeader.classList.add('form-control');
    inputHeader.placeholder = 'Tema';
    inputHeader.type = 'text';

    var divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body', 'text-primary');

    var cardText = document.createElement('textarea');
    cardText.classList.add('form-control');
    cardText.placeholder = 'Texto.';
    cardText.rows = '3';

    var btnConcluir = document.createElement('a');
    btnConcluir.classList.add('btn', 'btn-primary');
    btnConcluir.innerText = 'Concluir';
    btnConcluir.href = '#';
    btnConcluir.onclick = function() {
        deletarDiv(divCard);
    };

    // Anexa os elementos criados à div principal
    divCardHeader.appendChild(inputHeader);
    divCardBody.appendChild(cardText);
    divCardBody.appendChild(btnConcluir);

    divCard.appendChild(divCardHeader);
    divCard.appendChild(divCardBody);

    // Adiciona a div criada ao documento
    document.getElementById('cardContainer').appendChild(divCard);
}

function deletarDiv(div) {
    div.remove();
}