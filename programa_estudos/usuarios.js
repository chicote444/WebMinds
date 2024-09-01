
fetch('http://localhost:3000/useres')
.then(response => response.json())
.then((json) => {
    let newjson = JSON.stringify(json);
    newjson = JSON.parse(newjson);
    console.log(newjson[0]);
    let x = document.querySelector('.users');
    for (let i = 0; i < newjson.length; i++) {
        x.innerHTML += '<b>' + newjson[i].nome + '</b>' + '<br><br>';
    }
    
})

fetch('http://localhost:3000/programas')
.then(response => response.json())
.then((json) => {
    let newjson = JSON.stringify(json);
    newjson = JSON.parse(newjson);
    console.log(json);
    console.log(newjson[0].semana[0].assuntos[0]);
    
    
    console.log(newjson.length);
    let x = -1;
    let a = -2;
    let z = document.querySelector('.tabelas');
    if (newjson.length > 3) {
        
        z.innerHTML += "<div class=turma4><h3>SEMANA " +  newjson.length + "</h3></div><div class=progs4><table class=estud><thead><tr><th>Dia</th><th>Matéria</th><th>Assunto</th><th>Assunto</th><th>Assunto</th>   </tr></thead><tbody><tr><th class=th></th><th class=th></th><td></td><td></td><td></tr><tr><th class=th></th><th class=th></th><td></td><td></td><td></td></tr><tr><th class=th></th><th class=th></th><td></td><td></td><td></td></tr><tr><th class=th></th><th class=th></th><td></td><td></td><td></td></tr></tbody></table></div>"
    }
    let th = document.querySelectorAll('.th');
    let abc = newjson.length;
    console.log(th);
    for (let c = 0; c < newjson.length; c++) {

        
            for (let j = 0; j < newjson[0].semana.length; j++) {
                
                switch (c) {

                    case 1:
                        th[x += 2].innerHTML = newjson[1].semana[j].materia;
                        break;

                    case 2:
                        th[x += 2].innerHTML = newjson[2].semana[j].materia;
                        break;

                    case 3:
                        th[x += 2].innerHTML = newjson[3].semana[j].materia;
                        
                        break;

                    case 0:
                        th[x += 2].innerHTML = newjson[0].semana[j].materia;
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
            }          
        
    }






    let y = document.querySelectorAll('td');
    x = -1
    console.log(y.length/3);
    console.log(newjson[0].semana[0].assuntos.length);
    console.log(newjson.length);
    for (let c = 0; c < newjson.length; c++) {

        for (let i = 0; i < newjson[0].semana.length; i++) {
            for (let j = 0; j < newjson[0].semana[i].assuntos.length; j++) {
                
                switch (c) {

                    case 1:
                        y[x += 1].innerHTML = newjson[1].semana[i].assuntos[j];
                        break;

                    case 2:
                        y[x += 1].innerHTML = newjson[2].semana[i].assuntos[j];
                        break;

                    case 3:
                        y[x += 1].innerHTML = newjson[3].semana[i].assuntos[j];
                        break;

                    case 0:
                        y[x += 1].innerHTML = newjson[0].semana[i].assuntos[j];
                }
                //console.log(newjson[0].semana[c].assuntos.length);
            }
            
        }
    }
    
})
