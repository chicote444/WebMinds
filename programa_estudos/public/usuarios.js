
fetch('https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/useres')
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

fetch('https://jubilant-fiesta-x5rw5vxqv66jfvq67-3000.app.github.dev/semana')
.then(response => response.json())
.then((json) => {
    let newjson = JSON.stringify(json);
    newjson = JSON.parse(newjson);
    console.log(json);
    console.log(newjson[0].assunto);
    
    
    console.log(newjson.length);
    let x = -1;
    let a = -2;
    let z = document.querySelector('.tabelas');
    if (newjson.length > 12) {
        
        z.innerHTML += "<div class=turma4><h3>SEMANA " +  newjson.length/3 + "</h3></div><div class=progs4><table class=estud><thead><tr><th>Dia</th><th>Matéria</th><th>Assunto</th><th>Assunto</th><th>Assunto</th>   </tr></thead><tbody><tr><th class=th></th><th class=th></th><td></td><td></td><td></tr><tr><th class=th></th><th class=th></th><td></td><td></td><td></td></tr><tr><th class=th></th><th class=th></th><td></td><td></td><td></td></tr><tr><th class=th></th><th class=th></th><td></td><td></td><td></td></tr></tbody></table></div>"
    }
    let th = document.querySelectorAll('.th');
    let abc = newjson.length;
    console.log(th);
    for (let c = 0; c < newjson.length; c++) {

        switch (c) {

            case 1:
                th[x+=2].innerHTML = newjson[1].materia;
                th[a+=2].innerHTML = newjson[1].dia;
                break;
            
            case 2:
                th[x+=2].innerHTML = newjson[2].materia;
                th[a+=2].innerHTML = newjson[2].dia;
                break;
            
            case 3:
                th[x+=2].innerHTML = newjson[3].materia;
                th[a+=2].innerHTML = newjson[3].dia;
                break;
            
            case 4:
                th[x+=2].innerHTML = newjson[4].materia;
                th[a+=2].innerHTML = newjson[4].dia;
                break;
            
            case 5:
                th[x+=2].innerHTML = newjson[5].materia;
                th[a+=2].innerHTML = newjson[5].dia;
                break;
            
            case 6:
                th[x+=2].innerHTML = newjson[6].materia;
                th[a+=2].innerHTML = newjson[6].dia;
                break;

            case 7:
                th[x+=2].innerHTML = newjson[7].materia;
                th[a+=2].innerHTML = newjson[7].dia;
                break;

            case 8:
                th[x+=2].innerHTML = newjson[8].materia;
                th[a+=2].innerHTML = newjson[8].dia;
                break;

            case 9:
                th[x+=2].innerHTML = newjson[9].materia;
                th[a+=2].innerHTML = newjson[9].dia;
                break;

            case 10:
                th[x+=2].innerHTML = newjson[10].materia;
                th[a+=2].innerHTML = newjson[10].dia;
                break;

            case 11:
                th[x+=2].innerHTML = newjson[11].materia;
                th[a+=2].innerHTML = newjson[11].dia;
                break;
            
            case 0:
                th[x+=2].innerHTML = newjson[0].materia;
                th[a+=2].innerHTML = newjson[0].dia;
        
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






    let y = document.querySelectorAll('td');
    x = -1
    console.log(y.length/3);
    //console.log(newjson[0].semana[0].assuntos.length);
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
