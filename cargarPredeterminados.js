document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('precargar');
    submitButton.addEventListener('click', cargarPredeterminados);
});

function cargarPredeterminados() {
    event.preventDefault();

    const titulo = document.getElementById('titulo');
    const banner = document.getElementById('bannercli');
    const piepagina = document.getElementById('piepagina');
    const cliente = document.getElementById('cliente');
    const tipoinforme = document.getElementById('tipoinforme');
    const codigorq = document.getElementById('codigorq');
    const nombrerq = document.getElementById('nombrerq');
    const fecharq = document.getElementById('fecharq');
    const version = document.getElementById('version');
    const fechadoc = document.getElementById('fechadoc');
    const responsable = document.getElementById('responsable');
    const descambio = document.getElementById('descambio');

    titulo.value = 'Banco de la Nación 2022-M0353 - Api Validation y otp'
    banner.value = 'img/portada.png'
    piepagina.value = 'Banco de la Nación – Pruebas de Rendimiento'
    cliente.value = 'Banco de la Nación'
    tipoinforme.value = 'Informe de pruebas de rendimiento'
    codigorq.value = '2022-M0353'
    nombrerq.value = 'Api Validation y otp'
    fecharq.value = '01/03/2023'
    version.value = '1.0'
    fechadoc.value = '09/03/2023'
    responsable.value = 'Saul Galán'
    descambio.value = 'Creación del documento'
}