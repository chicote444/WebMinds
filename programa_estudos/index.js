var chico = (a, b) => {
    return a + b
};



var min = () => {
    let w = document.querySelector('.progs2');
    let x = document.querySelector('.progs3');
    let y = document.querySelector('.turma3');
    let z = document.querySelector('.turma2');
    let li = document.querySelector('.link');
    let prog = document.querySelector('.progs');
    x.innerHTML = '';
    y.innerHTML = '';
    w.innerHTML = '';
    z.innerHTML = '';
    prog.style.padding = '0 0 0 0';
    li.innerHTML = '<a href="index.html">Máximizar</a>';
    console.log(3);
}

fetch('../index.json')
.then(response => response.json())
.then((json) => {

    newjson = JSON.stringify(json);
    newjson = JSON.parse(newjson);
    console.log(newjson.semana1[0].assuntos[0]);
    let y = document.querySelectorAll('td');
    let x = -1
    console.log(y.length/3);
   // y[0].innerHTML = newjson.semana1[0].assuntos[0];
    console.log(newjson.semana1[0].assuntos.length);
    console.log(newjson.length);
    for (c = 0; c < 3; c++) {

        for (i = 0; i < newjson.semana1.length; i++) {
            for (j = 0; j < newjson.semana1[i].assuntos.length; j++) {
                
                switch (c) {

                    case 1:
                        y[x += 1].innerHTML = newjson.semana2[i].assuntos[j];
                        break;

                    case 2:
                        y[x += 1].innerHTML = newjson.semana3[i].assuntos[j];
                        break;

                    case 0:
                        y[x += 1].innerHTML = newjson.semana1[i].assuntos[j];
                }
                console.log(newjson.semana1[c].assuntos.length);
            }
            
        }
    }
})
