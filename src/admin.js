let botonIngresar = document.querySelector('#editar');
var usuarioDropdown = document.querySelector('#editando');
var botonLogOut = document.querySelector('#cerrar');

botonIngresar.addEventListener('click', ()=>{
    usuarioDropdown.style.display = "block";
});
botonLogOut.addEventListener('click', ()=>{
    botonIngresar.style.display = "block";
    usuarioDropdown.style.display = "none";
});



var agregarbtn = document.querySelector('#agregar');
var cerrar2 = document.querySelector('#cerrar2');
var agregando = document.querySelector('#agregando');

agregarbtn.addEventListener('click', ()=>{
    agregando.style.display = "block";
});
cerrar2.addEventListener('click', ()=>{
    agregarbtn.style.display = "block";
    agregando.style.display = "none";
});