import Auth from "./js/lib/auth.js";


fetch('http://localhost:3000/users/trues', {
    'method': 'GET',
    'headers': {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Auth.getToken()}`,
    }
})
.then(response => response.json())
.then((json) => {
    let newjson = JSON.stringify(json);
    newjson = JSON.parse(newjson);
    console.log(newjson[0]);
    let x = document.querySelector('.users');
    for (let i = 0; i < newjson.length; i++) {
        x.innerHTML += '<b>' + newjson[i].name + '</b>' + '<br><br>';
    }
    
})

async function UserName() {
    const userName = document.getElementById('user-name');

    window.signout = Auth.signout;
    const token = Auth.getToken();
    console.log(Auth.getToken());
    fetch('http://localhost:3000/users/refe', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
    }}
)
    .then(response => response.json())
    .then((json) => {
        let newjson = JSON.stringify(json);
        newjson = JSON.parse(newjson);
        console.log(newjson);
        
        userName.innerHTML = newjson.name;
        
        
    })
}



fetch('http://localhost:3000/users/refe2', 
{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Auth.getToken()}`,
    }}
)
.then(response => response.json())
.then((json) => {
    let newjson = JSON.stringify(json);
    newjson = JSON.parse(newjson);
    if (Auth.isAuthenticated()) {
    console.log(json);
    UserName();
    console.log(newjson[0].assunto);
    
    
    console.log(newjson.length);
    let x = -1;
    let a = -2;
    let z = document.querySelector('.tabelas');
    /*if (newjson.length > 12) {
        
        z.innerHTML += "<div class=turma4><h3>SEMANA " +  Math.floor(newjson.length/3) + "</h3></div><div class=progs4><table class=estud><thead><tr><th>Dia</th><th>Matéria</th><th>Assunto</th><th>Assunto</th><th>Assunto</th>   </tr></thead><tbody><tr><th class=th></th><th class=th></th><td class=td></td><td class=td></td><td class=td></tr><tr><th class=th></th><th class=th></th><td class=td></td><td class=td></td><td class=td></td></tr><tr><th class=th></th><th class=th></th><td></td><td class=td></td><td class=td></td></tr><tr><th class=th></th><th class=th></th><td class=td></td><td class=td></td><td class=td></td></tr></tbody></table></div>"
    }*/
    let th = document.querySelectorAll('.th');
    let abc = newjson.length;
    console.log(th);
    for (let c = 0; c < newjson.length; c++) {

        switch (c) {

            case 1:
                th[x+=2].innerHTML = newjson[1].materia;
                th[a+=2].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/refe?id=${newjson[1].id}>${newjson[1].dia}</a>`;
                break;
            
            case 2:
                th[x+=2].innerHTML = newjson[2].materia;
                th[a+=2].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqvq67-3000.app.github.dev/users/refe?id=${newjson[2].id}>${newjson[2].dia}</a>`;
                break;
            
            case 3:
                th[x+=2].innerHTML = newjson[3].materia;
                th[a+=2].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/refe?id=${newjson[3].id}>${newjson[3].dia}</a>`;
                break;
            
            case 4:
                th[x+=2].innerHTML = newjson[4].materia;
                th[a+=2].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/refe?id=${newjson[4].id}>${newjson[4].dia}</a>`;
                break;
            
            case 5:
                th[x+=2].innerHTML = newjson[5].materia;
                th[a+=2].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/refe?id=${newjson[5].id}>${newjson[5].dia}</a>`;
                break;
            
            case 6:
                th[x+=2].innerHTML = newjson[6].materia;
                th[a+=2].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/refe?id=${newjson[6].id}>${newjson[6].dia}</a>`;
                break;

            case 7:
                th[x+=2].innerHTML = newjson[7].materia;
                th[a+=2].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/refe?id=${newjson[7].id}>${newjson[7].dia}</a>`;
                break;

            case 8:
                th[x+=2].innerHTML = newjson[8].materia;
                th[a+=2].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/refe?id=${newjson[8].id}>${newjson[8].dia}</a>`;
                break;

            case 9:
                th[x+=2].innerHTML = newjson[9].materia;
                th[a+=2].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/refe?id=${newjson[9].id}>${newjson[9].dia}</a>`;
                break;

            case 10:
                th[x+=2].innerHTML = newjson[10].materia;
                th[a+=2].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/refe?id=${newjson[10].id}>${newjson[10].dia}</a>`;
                break;

            case 11:
                th[x+=2].innerHTML = newjson[11].materia;
                th[a+=2].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/refe?id=${newjson[11].id}>${newjson[11].dia}</a>`;
                break;
            
            case 0:
                th[x+=2].innerHTML = newjson[0].materia;
                th[a+=2].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/refe?id=${newjson[0].id}>${newjson[0].dia}</a>`;
        
        }

        
            /*for (let j = 0; j < newjson[0].length; j++) {
                
                switch (c) {

                    case 1:
                        th[x += 2].innerHTML = newjson[1].materia;
                        break;

                    case 2:
                        th[x += 2].innerHTML = newjson[2].semana[j].materia;
                        break;

                    case 3:
                        th[x += 2].innerHTML = newjson[3].semana[j].materia;
                        
                        break;

                    case 0:
                        th[x += 2].innerHTML = newjson[0].materia;
                    //    console.log(newjson[3].semana[j].materia);
                }
                
            }
    //        console.log(newjson[3].semana[0].materia);
            console.log(newjson[0].semana.length);
            for (let i = 0; i < newjson[0].semana.length; i++) {
                
                switch (c) {

                    case 1:
                        th[a += 2].innerHTML = newjson[1].semana[i].dia;
                        break;

                    case 2:
                        th[a += 2].innerHTML = newjson[2].semana[i].dia;
                        break;

                    case 3:
                        th[a += 2].innerHTML = newjson[3].semana[i].dia;
                        break;

                    case 0:
                        th[a += 2].innerHTML = newjson[0].semana[i].dia;
                }
                //console.log(newjson[0].semana[c].assuntos.length);
            }*/          
        
    }






    let y = document.querySelectorAll('.td');
    let us = document.querySelectorAll('.user');
    x = -1
    let n = -1
    console.log(y.length/3);
    //console.log(newjson[0].semana[0].assuntos.length);
    console.log(newjson.length);
    for (let c = 0; c < newjson.length; c++) {
   
                switch (c) {

                    case 1:
                        y[x += 1].innerHTML = newjson[1].assunto;
                        y[x += 1].innerHTML = newjson[1].assunto2;
                        y[x += 1].innerHTML = newjson[1].assunto3;
                        us[n += 1].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/ref?id=${newjson[1].user_id}>${newjson[1].user.name}</a>`;
                        

                        break;

                    case 2:
                        y[x += 1].innerHTML = newjson[2].assunto;
                        y[x += 1].innerHTML = newjson[2].assunto2;
                        y[x += 1].innerHTML = newjson[2].assunto3;
                        us[n += 1].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/ref?id=${newjson[2].user_id}>${newjson[2].user.name}</a>`;
                        break;

                    case 3:
                        y[x += 1].innerHTML = newjson[3].assunto;
                        y[x += 1].innerHTML = newjson[3].assunto2;
                        y[x += 1].innerHTML = newjson[3].assunto3;
                        us[n += 1].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/ref?id=${newjson[3].user_id}>${newjson[3].user.name}</a>`;
                        break;

                    case 4:
                        y[x += 1].innerHTML = newjson[4].assunto;
                        y[x += 1].innerHTML = newjson[4].assunto2;
                        y[x += 1].innerHTML = newjson[4].assunto3;
                        us[n += 1].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/ref?id=${newjson[4].user_id}>${newjson[4].user.name}</a>`;
                        break;
                    
                    case 5:
                        y[x += 1].innerHTML = newjson[5].assunto;
                        y[x += 1].innerHTML = newjson[5].assunto2;
                        y[x += 1].innerHTML = newjson[5].assunto3;
                        us[n += 1].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/ref?id=${newjson[5].user_id}>${newjson[5].user.name}</a>`;
                        break;

                    case 6:
                        y[x += 1].innerHTML = newjson[6].assunto;
                        y[x += 1].innerHTML = newjson[6].assunto2;
                        y[x += 1].innerHTML = newjson[6].assunto3;
                        us[n += 1].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/ref?id=${newjson[6].user_id}>${newjson[6].user.name}</a>`;
                        break;

                    case 7:
                        y[x += 1].innerHTML = newjson[7].assunto;
                        y[x += 1].innerHTML = newjson[7].assunto2;
                        y[x += 1].innerHTML = newjson[7].assunto3;
                        us[n += 1].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/ref?id=${newjson[7].user_id}>${newjson[7].user.name}</a>`;
                        break;

                    case 8:
                        y[x += 1].innerHTML = newjson[8].assunto;
                        y[x += 1].innerHTML = newjson[8].assunto2;
                        y[x += 1].innerHTML = newjson[8].assunto3;
                        us[n += 1].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/ref?id=${newjson[8].user_id}>${newjson[8].user.name}</a>`;
                        break;

                    case 9:
                        y[x += 1].innerHTML = newjson[9].assunto;
                        y[x += 1].innerHTML = newjson[9].assunto2;
                        y[x += 1].innerHTML = newjson[9].assunto3;
                        us[n += 1].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/ref?id=${newjson[9].user_id}>${newjson[9].user.name}</a>`;
                        break;

                    case 10:
                        y[x += 1].innerHTML = newjson[10].assunto;
                        y[x += 1].innerHTML = newjson[10].assunto2;
                        y[x += 1].innerHTML = newjson[10].assunto3;
                        us[n += 1].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/ref?id=${newjson[10].user_id}>${newjson[10].user.name}</a>`;
                        break;

                    case 11:
                        y[x += 1].innerHTML = newjson[11].assunto;
                        y[x += 1].innerHTML = newjson[11].assunto2;
                        y[x += 1].innerHTML = newjson[11].assunto3;
                        us[n += 1].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/ref?id=${newjson[11].user_id}>${newjson[11].user.name}</a>`;
                        break;

                    case 12:
                        console.log(newjson[12]);
                        y[x += 1].innerHTML = newjson[12].assunto;
                        y[x += 1].innerHTML = newjson[12].assunto2;
                        y[x += 1].innerHTML = newjson[12].assunto3;
                        us[n += 1].innerHTML = `<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/ref?id=${newjson[12].user_id}>${newjson[12].user.name}</a>`;
                        break;


                    case 0:
                        y[x += 1].innerHTML = newjson[0].assunto;
                        y[x += 1].innerHTML = newjson[0].assunto2;
                        y[x += 1].innerHTML = newjson[0].assunto3;
                        us[n += 1].innerHTML =`<a href=https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/users/ref?id=${newjson[0].user_id}>${newjson[0].user.name}</a>` ;
                }
                //console.log(newjson[0].semana[c].assuntos.length);
                
    }}
    else {
        console.log('Erro');
    }   
})
