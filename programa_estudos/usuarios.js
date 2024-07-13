
fetch('http://localhost:3000/users')
.then(response => response.json())
.then((json) => {
    let newjson = JSON.stringify(json);
    newjson = JSON.parse(newjson);
    let x = document.querySelector('.users');
    for (let i = 0; i < newjson.length; i++) {
        x.innerHTML += '<b>' + newjson[i].name + '</b>' + '<br><br>';
    }
    
})