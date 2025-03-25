let nombre=prompt('Per accedir, introdueix el teu nom complet: ');
let mensaje=('Benvingut '+nombre);
document.getElementById('boton').addEventListener('click', mostrar);
function mostrar() {
alert(mensaje);
}
