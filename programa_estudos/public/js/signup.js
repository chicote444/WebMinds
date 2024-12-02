
const form = document.querySelector('form');
window.handleSubmit = handleSubmit;



async function handleSubmit(event) {
    event.preventDefault();
    const datas = document.querySelectorAll('.form-control');
    const name = datas[1].value;
    const email = datas[2].value;
    const password = datas[3].value;
    const confirmPassword = datas[4].value;
    if (password !== confirmPassword) {
        console.log('As senhas não são iguais');
        return;
    }
    console.log(name, email, password);
    console.log("Parabéns!! " + datas[3].value + "!");
    const user = Object.fromEntries(new FormData(form));

    console.log(user);
    
    fetch ('http://127.0.0.1:3000/users/true', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password}),

        
    })
    .then(response => response.json())
    .then(json => {
        let newjson = JSON.stringify(json);
        newjson = JSON.parse(newjson);
        console.log(newjson);
        href = login.html

    })
    .catch(error => console.error('Erro:', error));
    
    
    
     if (email) {
        location.href = 'login.html';
    } else {
        console.log('Erro ao cadastrar usuário');
    }


    
    }

await handleSubmit();
console.log(window);
