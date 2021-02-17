import funciones from './data.js';
import data from './data/pokemon/pokemon.js';

const lista = document.getElementById("lista");

/* FUNCIÓN DE APOYO */

function mostrarCard(array){
        array.forEach(function(element){
        let node = document.createElement("figure");
        let node2 = document.createElement("img");
        let node3 = document.createElement("figcaption");
        let animacion = document.createElement("div");
        let node4 = document.createElement("a");
        let node5 = document.createElement("p");
        animacion.className = 'capa';
        node5.innerText = element.about;
        node4.innerText = element.num;
        node2.src = element.img;
        node3.innerText = element.name;
        let figura= document.getElementById("lista").appendChild(node);
        figura.appendChild(node2);
        figura.appendChild(node3);
        figura.appendChild(animacion);
        animacion.appendChild(node4);
        animacion.appendChild(node5);   
    })}


/* FILTRO TIPO DE POKEMON */

const botones = document.querySelectorAll(".fa");
const elegir = (evento) => {
    lista.innerHTML = "";
    let a = funciones.FilterData(data,evento.target.id);
    console.log(a)
    mostrarCard(a)}; 

botones.forEach(boton => {
    boton.addEventListener("click", elegir)
});

/* ORDEN A-Z */

const ordera = document.querySelector("#selecta");
ordera.addEventListener('change', (event) => {
    lista.innerHTML = "";
    let valor = event.target.value;
    let a = funciones.sortData(data,valor);
    mostrarCard(a)
     }); 
const ordera2  = document.querySelector("#selecta1");
ordera2.addEventListener('change', (event) => {
    lista.innerHTML = "";
    let valor = event.target.value;
    let a = funciones.sortData(data,valor);
    mostrarCard(a)
     }); 
     
  /* BUSQUEDA POR TEXTO */
  const text = document.querySelector("#text");
const filtrar = () => {
   lista.innerHTML = "";
   const valorTexto = text.value.toLowerCase();
   let a = funciones.AllData(data);
   console.log(a)
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
    let a = funciones.AllData(data);
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


//Pantalla Modal

const modalMode = getById('modal-mode'); // trae el div de la pantalla modal
const modalWindow = getById('modal-window'); //llamada a la ventana modal