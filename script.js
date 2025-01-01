let nombre=prompt('Dime tu nombre completo');
let mensaje=('Bienvenido '+nombre);
document.getElementById('boton').addEventListener('click', mostrar);
function mostrar() {
  alert(mensaje);
   window.location.href='ps5.html' ;
}
