

var min = () => {
    let w = document.querySelector('.progs2');
    let x = document.querySelector('.progs3');
    let y = document.querySelector('.turma3');
    let z = document.querySelector('.turma2');
    let li = document.querySelector('.link');
    let a = document.querySelector('.turma4');
    let b = document.querySelector('.progs4');
//    let user = document.querySelector('.usuarios');
    let prog = document.querySelector('.progs');
    x.innerHTML = '';
    y.innerHTML = '';
    w.innerHTML = '';
    z.innerHTML = '';
    fetch('http://localhost:3000/programas')
    .then(response => response.json())
    .then((json) => {
        let newjson = JSON.stringify(json);
        newjson = JSON.parse(newjson);
        console.log(json);
        if (newjson.length > 3) {
            a.innerHTML = '';
            b.innerHTML = '';
        }
       
    });
        
//    user.innerHTML = '';
    prog.style.padding = '0 0 0 0';
    li.innerHTML = '<a href="index.html">Máximizar</a>';
    console.log(3);
}