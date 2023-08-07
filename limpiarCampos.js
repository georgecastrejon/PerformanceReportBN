document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('limpiar');
    submitButton.addEventListener('click', limpiarCampos);
});

function limpiarCampos() {
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

    titulo.value = ''
    banner.value = ''
    piepagina.value = ''
    cliente.value = ''
    tipoinforme.value = ''
    codigorq.value = ''
    nombrerq.value = ''
    fecharq.value = ''
    version.value = ''
    fechadoc.value = ''
    responsable.value = ''
    descambio.value = ''
}