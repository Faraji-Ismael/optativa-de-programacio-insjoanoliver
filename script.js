let nombre=prompt('Dime tu nombre');
let apellido=prompt('Dime tu apellido');
let mensaje=('Bienvenido '+nombre+apellido);
document.getElementById('boton').addEventListener('click', mostrar);
function mostrar() {
  alert(mensaje);
   window.location.href='ps5.html' ;
}
