import auth from './auth.js';

const form = document.querySelector('form');

const data = document.querySelectorAll('.form-control');
window.handleSubmit = handleSubmit;

async function handleSubmit(event) {
    console.log(data);
    event.preventDefault();
    const email = data[1].value;
    const password = data[2].value;
    console.log(email);
    console.log(password);
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(json => {
        let newjson = JSON.stringify(json);
        newjson = JSON.parse(newjson);
        console.log(newjson);
        if (a) {}
    })
   
    
}