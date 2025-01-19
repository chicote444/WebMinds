
const form = document.querySelector('form');
window.handleSubmit = handleSubmit;



async function handleSubmit(event) {
    event.preventDefault();
    const datas = document.querySelectorAll('.form-control');
    const name = datas[1].value;
    const email = datas[2].value;
    const emailcause = datas[2];
    const password = datas[3].value;
    const confirmPassword = datas[4].value;
    const confirmationPasswordcause = datas[4];
    if (form.checkValidity()) {
    
    
    console.log(name, email, password);
    console.log("Parabéns!! " + datas[3].value + "!");
    const user = Object.fromEntries(new FormData(form));
    if (password !== confirmPassword) {
        const error = 'As senhas não são iguais.';
       
        const confirmationPasswordError = document.querySelector(
          '#confirmationPassword + .invalid-feedback'
        );
       
        confirmationPasswordError.textContent = error;
       
        confirmationPasswordcause.setCustomValidity(error);
       
        confirmationPasswordcause.classList.add('is-invalid');
        return false;
    }   else {
                    confirmationPasswordcause.setCustomValidity('');
                }
        
                emailcause.oninput = () => {
        emailcause.classList.remove('is-invalid');
       
        const confirmationPasswordError = document.querySelector(
          '#email + .invalid-feedback'
        );
       
        confirmationPasswordError.textContent = 'Informe o email do usuário.';
      };
       
      confirmationPasswordcause.oninput = () => {
        const password = form.password.value;
       
        const confirmationPassword = confirmationPasswordcause.value;
       
         
      };
    console.log(user);
    
fetch (/*'https://refactored-space-rotary-phone-4jq7jw69vjw9h7xv6-3000.app.github.dev*/'http://localhost:3000/users/true', {
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
        if (newjson.email) {
            location.href = 'login.html';
        } else if (newjson === 'Email already exists') {
    
            const error = 'Email já cadastrado';
            console.log(error);
            const emailError = document.querySelector('#email + .invalid-feedback');
       
            emailError.textContent = error;
       
            email.setCustomValidity(error);
       
            email.classList.add('is-invalid');
          } else {
            showToast('Error no cadastro');
          }
        }) 
        .catch(error => console.error('Erro:', error));
      } else {
          form.classList.add('was-validated');
            }
       
      
    }  
    


    
    

console.log(window);


function showToast(message) {
    document.querySelector('.toast-header strong').innerText = message;
    const toast = new bootstrap.Toast(document.querySelector('#liveToast'));
    toast.show();
  }