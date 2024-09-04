document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.botao-circular').addEventListener('click', criarDiv);
    document.getElementById('btnCarregarJSON').addEventListener('click', carregarDadosDoJSON);
});

function criarDiv() {
    var divCard = document.createElement('div');
    divCard.classList.add('card', 'border-secondary', 'mb-3');
    divCard.style.maxWidth = '18rem';

    var divCardHeader = document.createElement('div');
    divCardHeader.classList.add('card-header');

    var inputHeader = document.createElement('input');
    inputHeader.classList.add('form-control');
    inputHeader.placeholder = 'Tema';
    inputHeader.type = 'text';

    var divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body', 'text-primary');

    var inputTitle = document.createElement('input');
    inputTitle.classList.add('form-control');
    inputTitle.placeholder = 'Título';
    inputTitle.type = 'text';

    var inputText = document.createElement('input');
    inputText.classList.add('form-control');
    inputText.placeholder = 'Texto';
    inputText.type = 'text';

    var btnConcluir = document.createElement('a');
    btnConcluir.classList.add('btn', 'btn-primary');
    btnConcluir.innerText = 'Concluir';
    btnConcluir.href = '#';
    btnConcluir.onclick = function() {
        deletarDiv(divCard);
    };

    divCardHeader.appendChild(inputHeader);
    divCardBody.appendChild(inputTitle);
    divCardBody.appendChild(inputText);
    divCardBody.appendChild(btnConcluir);

    divCard.appendChild(divCardHeader);
    divCard.appendChild(divCardBody);
    document.getElementById('cardContainer').appendChild(divCard);
}

function deletarDiv(div) {
    div.remove();
}

function criarCardsFromJSON(data) {
    var cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // Limpa o contêiner antes de adicionar novos cartões

    data.forEach(function(item) {
        var divCardContainer = document.createElement('div');
        divCardContainer.classList.add('col');

        var divCard = document.createElement('div');
        divCard.classList.add('card', 'border-secondary', 'mb-3');
        divCard.style.maxWidth = '18rem';

        var divCardHeader = document.createElement('div');
        divCardHeader.classList.add('card-header');
        divCardHeader.innerText = item.header;

        var divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body', 'text-primary');

        var cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = item.title;

        var cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerText = item.text;

        var btnConcluir = document.createElement('a');
        btnConcluir.classList.add('btn', 'btn-primary');
        btnConcluir.innerText = 'Concluir';
        btnConcluir.href = '#';
        btnConcluir.onclick = function() {
            deletarDiv(divCardContainer);
        };

        divCardBody.appendChild(cardTitle);
        divCardBody.appendChild(cardText);
        divCardBody.appendChild(btnConcluir);

        divCard.appendChild(divCardHeader);
        divCard.appendChild(divCardBody);

        divCardContainer.appendChild(divCard);
        cardContainer.appendChild(divCardContainer);
    });
}

function carregarDadosDoJSON() {
    fetch('http://localhost:3000/api/routines/all') // URL do Back-end
        .then(response => response.json())
        .then(data => criarCardsFromJSON(data))
        .catch(error => console.error('Erro ao carregar dados do JSON:', error));
}