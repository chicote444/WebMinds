const data = document.querySelectorAll('.form-control');
window.handleSubmit = handleSubmit;

async function handleSubmit(event) {
    console.log(data);
    event.preventDefault();
    const email = data[1].value;
    const password = data[2].value;
    console.log(email);
    console.log(password);
    
   
    
}