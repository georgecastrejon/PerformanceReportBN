document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('descargar');
    submitButton.addEventListener('click', descargarWord);
});

function descargarWord() {
    
    const titulo = document.getElementById('titulo').value;
    const cliente = document.getElementById('cliente').value;
    const tipoinforme = document.getElementById('tipoinforme').value;
    const codigorq = document.getElementById('codigorq').value;
    const nombrerq = document.getElementById('nombrerq').value;
    const fecharq = document.getElementById('fecharq').value;
    const version = document.getElementById('version').value;
    const fechadoc = document.getElementById('fechadoc').value;
    const responsable = document.getElementById('responsable').value;
    const descambio = document.getElementById('descambio').value;

    const dataToSave = 
    `Titulo: ${titulo}
    \nCliente: ${cliente}
    \nTipo Informe: ${tipoinforme}
    \nCodigo Requerimiento: ${codigorq}
    \nNombre Requerimiento: ${nombrerq}
    \nFecha Requerimiento: ${fecharq}
    \nVersion: ${version}
    \nFecha documento: ${fechadoc}
    \nResponsable: ${responsable}
    \nDescripcion: ${descambio}
    `;

    const blob = new Blob([dataToSave], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);  
    const link = document.createElement('a');
    link.href = url;
    link.download = 'archivo_vacio.doc';
    link.textContent = 'Descargar Archivo';
    link.click();
    URL.revokeObjectURL(url);
}