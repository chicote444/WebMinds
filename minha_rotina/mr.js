
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.botao-circular').addEventListener('click', function() {
        criarDiv();
    });
});

function criarDiv() {
    // Criação dos elementos da div
    var divCard = document.createElement('div');
    divCard.classList.add('card', 'border-secondary', 'mb-3');
    divCard.style.maxWidth = '18rem'; // Adiciona uma largura máxima para corresponder ao estilo do JSON

    var divCardHeader = document.createElement('div');
    divCardHeader.classList.add('card-header');

    var inputHeader = document.createElement('input');
    inputHeader.classList.add('form-control');
    inputHeader.placeholder = 'Tema'; // Placeholder correspondente ao JSON
    inputHeader.type = 'text';

    var divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body', 'text-primary');

    var inputTitle = document.createElement('input');
    inputTitle.classList.add('form-control');
    inputTitle.placeholder = 'Título'; // Placeholder correspondente ao JSON
    inputTitle.type = 'text';

    var inputText = document.createElement('input');
    inputText.classList.add('form-control');
    inputText.placeholder = 'Texto'; // Placeholder correspondente ao JSON
    inputText.type = 'text';

    var btnConcluir = document.createElement('a');
    btnConcluir.classList.add('btn', 'btn-primary');
    btnConcluir.innerText = 'Concluir';
    btnConcluir.href = '#';
    btnConcluir.onclick = function() {
        deletarDiv(divCard);

    };

    // Anexa os elementos criados à div principal
    divCardHeader.appendChild(inputHeader);
    divCardBody.appendChild(inputTitle);
    divCardBody.appendChild(inputText);
    divCardBody.appendChild(btnConcluir);

    divCard.appendChild(divCardHeader);
    divCard.appendChild(divCardBody);

    // Adiciona a div criada ao documento
    document.getElementById('cardContainer').appendChild(divCard);
}

function deletarDiv(div) {
    div.remove();
    
}

// parte do json

// Função para criar os cards a partir do JSON
function criarCardsFromJSON(data) {
    var cardContainer = document.getElementById('cardContainer');

    // Limpa o contêiner antes de adicionar novos cards
    cardContainer.innerHTML = '';

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

// Função para carregar dados do JSON
function carregarDadosDoJSON() {
    fetch('rm.json')
        .then(response => response.json())
        .then(data => criarCardsFromJSON(data))
        .catch(error => console.error('Erro ao carregar dados do JSON:', error));
}

// Chama a função para carregar dados do JSON quando o botão for clicado
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btnCarregarJSON').addEventListener('click', function() {
        carregarDadosDoJSON();
    });
});
