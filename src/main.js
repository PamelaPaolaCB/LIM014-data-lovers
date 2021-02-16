import filtrara from './data.js';
import data from './data/pokemon/pokemon.js';

const ordera = document.querySelector("#selecta");
ordera.addEventListener('change', (event) => {
    lista.innerHTML = "";
    let valor = event.target.value;
    let a = filtrara.sorted(data,valor);
     for(let i=0;i<a.length;i++){
        let node = document.createElement("figure");
        let node2 = document.createElement("img");
        let node3 = document.createElement("figcaption");
        let animacion = document.createElement("div");
        let node4 = document.createElement("a");
        let node5 = document.createElement("p");
        animacion.className = 'capa';
        node5.innerText = a[i].about;
        node4.innerText = a[i].num;
        node2.src = a[i].img;
        node3.innerText = a[i].name;
        let figura= document.getElementById("lista").appendChild(node);
        figura.appendChild(node2);
        figura.appendChild(node3);
        figura.appendChild(animacion);
        animacion.appendChild(node4);
        animacion.appendChild(node5);   
    }
     }); 

const botones = document.querySelectorAll(".fa");
const elegir = (evento) => {
    lista.innerHTML = "";
    let a = filtrara.filterData(data,evento.target.id);
    for(let i=0;i<a[0].length;i++){
        let node = document.createElement("figure");
        let node2 = document.createElement("img");
        let node3 = document.createElement("figcaption");
        let animacion = document.createElement("div");
        let node4 = document.createElement("a");
        let node5 = document.createElement("p");
        animacion.className = 'capa';
        node5.innerText = a[2][i];
        node4.innerText = a[3][i];
        node2.src = a[0][i];
        node3.innerText = a[1][i];
        let figura= document.getElementById("lista").appendChild(node);
        figura.appendChild(node2);
        figura.appendChild(node3);
        figura.appendChild(animacion);
        animacion.appendChild(node4);
        animacion.appendChild(node5);
}
};

botones.forEach(boton => {
    boton.addEventListener("click", elegir)
});

const text = document.querySelector("#text");
const lista = document.getElementById("lista");
const filtrar = () => {
   lista.innerHTML = "";
   const valorTexto = text.value.toLowerCase();
   let a = filtrara.sortdata(data);
   for(let i=0;i<a[1].length;i++){
   let nombre = a[1][i].toLowerCase();
        if(nombre.indexOf(valorTexto) !==-1){            
            let node = document.createElement("figure");
            let node2 = document.createElement("img");
            let node3 = document.createElement("figcaption");
            let animacion = document.createElement("div");
            let node5 = document.createElement("p");
            let node4 = document.createElement("a");
            animacion.className = 'capa';
            node.className = "fig"
            node5.innerText = a[2][i];
            node4.innerText = a[3][i];
            node2.src = a[0][i];
            node3.innerText = a[1][i];
            let figura= document.getElementById("lista").appendChild(node);
            figura.appendChild(node2);
            figura.appendChild(node3);
            figura.appendChild(animacion);
            animacion.appendChild(node4);
            animacion.appendChild(node5);
        }
    if(lista.innerHTML === ""){
        lista.innerHTML = "<p></p>"
    }}};

    text.addEventListener("keyup", filtrar);
    filtrar();


//Audio de Pokemon
/* const audio = document.getElementById('audio');
const playPauseBTN = document.getElementById('playPauseBTN');
let count = 0;
playPauseBTN.addEventListener("click", function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "Pause &#9208;";
    }else{
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "Play &#9658;";
    }
});  
 */

/* Ingresar a la segunda pantalla */
const entrar = document.getElementById("entrar");

entrar.addEventListener("click", ()=>{
    document.getElementById("firstscreen").classList.add("hide");
    document.getElementById("firstscreen").classList.remove("display");     
    document.getElementById("secondscreen").classList.add("display");
    document.getElementById("secondscreen").classList.remove("hide");
    document.body.style.background = "#fff";
   
}); 
 
/* Menú desplegable */

const menu = document.getElementById("menu");
menu.addEventListener("click", function press2(){
    let siteNav = document.getElementById("site-nav");
        siteNav.classList.toggle("site-nav-open");
        menu.classList.toggle("menu-open");
});

/*sin filtro*/
const incicio = document.getElementById("inicio2");
incicio.addEventListener("click", function(){
    lista.innerHTML = "";
    let a = filtrara.sortdata(data);
    for(let i=0;i<a[1].length;i++){
    let node = document.createElement("figure");
    let node2 = document.createElement("img");
    let node3 = document.createElement("figcaption");
    let animacion = document.createElement("div");
    let node5 = document.createElement("p");
    let node4 = document.createElement("a");
    animacion.className = 'capa';
    node5.innerText = a[2][i];
    node4.innerText = a[3][i];
    node2.src = a[0][i];
    node3.innerText = a[1][i];
    let figura= document.getElementById("lista").appendChild(node);
    figura.appendChild(node2);
    figura.appendChild(node3);
    figura.appendChild(animacion);
    animacion.appendChild(node4);
    animacion.appendChild(node5);
    }});

    //Audio de Pokemon
const audio = document.getElementById('audio');
const playPauseBTN = document.getElementById('playPauseBTN');
let count = 0;
playPauseBTN.addEventListener("click", function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "Pause &#9208;";
    }else{
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "Play &#9658;";
    }
});  

