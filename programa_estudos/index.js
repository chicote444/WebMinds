







fetch('index.json')
.then(response => response.json())
.then((json) => {

    let newjson = JSON.stringify(json);
    newjson = JSON.parse(newjson);
    console.log(newjson.semanas[0].semana[0].assuntos[0]);
    let th = document.querySelectorAll('.th');
    console.log(th[0].innerHTML);
    let x = -1;
    let a = -2;

    for (let c = 0; c < 3; c++) {

        
            for (let j = 0; j < newjson.semanas[0].length; j++) {
                
                switch (c) {

                    case 1:
                        th[x += 2].innerHTML = newjson.semanas[1].semana[j].materia;
                        break;

                    case 2:
                        th[x += 2].innerHTML = newjson.semanas[2].semana[j].materia;
                        break;

                    case 0:
                        th[x += 2].innerHTML = newjson[0].semana[j].materia;
                }
                console.log(newjson.semana1[c].assuntos.length);
            }
            for (let i = 0; i < newjson.semanas[0].semana.length; i++) {
                
                switch (c) {

                    case 1:
                        th[a += 2].innerHTML = newjson.semanas[1].semana[i].dia;
                        break;

                    case 2:
                        th[a += 2].innerHTML = newjson.semanas[2].semana[i].dia;
                        break;

                    case 0:
                        th[a += 2].innerHTML = newjson.semanas[0].semana[i].dia;
                }
                console.log(newjson.semanas[0].semana[c].assuntos.length);
            }          
        
    }






    let y = document.querySelectorAll('td');
    x = -1
    console.log(y.length/3);
    console.log(newjson.semanas[0].semana[0].assuntos.length);
    console.log(newjson.length);
    for (let c = 0; c < 3; c++) {

        for (let i = 0; i < newjson.semanas[0].semana.length; i++) {
            for (let j = 0; j < newjson.semanas[0].semana[i].assuntos.length; j++) {
                
                switch (c) {

                    case 1:
                        y[x += 1].innerHTML = newjson.semanas[1].semana[i].assuntos[j];
                        break;

                    case 2:
                        y[x += 1].innerHTML = newjson.semanas[2].semana[i].assuntos[j];
                        break;

                    case 0:
                        y[x += 1].innerHTML = newjson.semanas[0].semana[i].assuntos[j];
                }
                console.log(newjson.semanas[0].semana[c].assuntos.length);
            }
            
        }
    }
})



.catch((error) => {
    console.error('Error:', error);
});