document.addEventListener('DOMContentLoaded', function() {
    const limpiarBoton = document.getElementById('limpiarcampos');
    const inputs = document.querySelectorAll('input[type="text"]');

    limpiarBoton.addEventListener('click', function() {
        inputs.forEach(input => {
            input.value = '';
        });
    });
});