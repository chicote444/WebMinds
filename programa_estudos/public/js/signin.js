import auth from './lib/auth.js';
import Auth from './lib/auth.js';

const form = document.querySelector('form');

const data = document.querySelectorAll('.form-control');
window.handleSubmit = handleSubmit;

async function handleSubmit(event) {
    console.log(data);
    event.preventDefault();
    const user = Object.fromEntries(new FormData(form));

    const email = data[1].value;
    const password = data[2].value;
    console.log(email, password);
    console.log(user);
    let auth;
    fetch(/*'https://refactored-space-rotary-phone-4jq7jw69vjw9h7xv6-3000.app.github.dev*/'http://localhost:3000/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, auth }),
    })
    .then(response => response.json())
    .then(json => {
        let newjson = JSON.stringify(json);
        newjson = JSON.parse(newjson);
        console.log(newjson);
        auth = newjson.auth;
        if (auth) {
            Auth.signin(newjson.token);
            Auth.setId(newjson.userId);
        } else {
            console.log('Erro no Login');
        }
        console.log(auth);
        return auth;

    })
    return email, password;
}
    export default { email, password };
