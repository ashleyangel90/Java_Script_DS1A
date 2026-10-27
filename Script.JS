let botonAmarillo = document.getElementById("amarillo");
let botonMorado = document.getElementById("morado");
let botonNegro = document.getElementById("negro");

botonAmarrillo.addEventListener("click", function(){
    document.body.style.backgroundColor = "yellow";
});

botonMorado.addEventListener("click", function(){
    document.body.style.backgroundColor = "purple";
});

botonNegro.addEventListener("click", function(){
    document.body.style.backgroundColor = "black";
});
