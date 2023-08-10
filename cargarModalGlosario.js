document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('precargarTerminos');
    submitButton.addEventListener('click', cargarPredeterminadosModalGloasrio);
});

function cargarPredeterminadosModalGloasrio() {
    event.preventDefault();

    const termino1 = document.getElementById('termino1')
    const termino2 = document.getElementById('termino2')
    const termino3 = document.getElementById('termino3')
    const termino4 = document.getElementById('termino4')
    const termino5 = document.getElementById('termino5')
    const termino6 = document.getElementById('termino6')
    const termino7 = document.getElementById('termino7')
    const termino8 = document.getElementById('termino8')
    const termino9 = document.getElementById('termino9')

    const des_termino1 = document.getElementById('des_termino1')
    const des_termino2 = document.getElementById('des_termino2')
    const des_termino3 = document.getElementById('des_termino3')
    const des_termino4 = document.getElementById('des_termino4')
    const des_termino5 = document.getElementById('des_termino5')
    const des_termino6 = document.getElementById('des_termino6')
    const des_termino7 = document.getElementById('des_termino7')
    const des_termino8 = document.getElementById('des_termino8')
    const des_termino9 = document.getElementById('des_termino9')

    termino1.value = 'Jmeter'
    termino2.value = 'Transacción'
    termino3.value = 'Escenario'
    termino4.value = 'Usuarios concurrentes'
    termino5.value = 'Proceso de negocio'
    termino6.value = 'Ventana de ejecución'
    termino7.value = 'Prueba de carga'
    termino8.value = 'Prueba de estrés'
    termino9.value = 'TPS'

    des_termino1.value = `Open Source que permite realizar las pruebas de Rendimiento o Estrés`
    des_termino2.value = `Es operación final del Proceso de Negocio, que puede ser una consulta, registro o Actualización.`
    des_termino3.value = `Los Procesos de Negocio que formaran parte de la Prueba de Rendimiento.`
    des_termino4.value = `Se considera usuarios concurrentes cuando se encuentran en el mismo Proceso de Negocio pero no haciendo el mismo paso.`
    des_termino5.value = `Es el flujo que realiza el usuario para completar una tarea en el sistema. Por ejemplo: Consultar DNI, todos los pasos que se tienen que hacer en el sistema para realizar la consulta de DNI.`
    des_termino6.value = `Periodo en el cual se acuerda con el equipo de trabajo llevar a cabo la ejecución de un proceso o una prueba. Esto se define con el objetivo de cumplir los requisitos definidos para el proyecto y especialmente para la etapa de ejecución.`
    des_termino7.value = `Son pruebas que establece objetivos determinados,sin forzarlo a una capacidad mayor a la esperada.
    Las pruebas de carga nos permiten observar cómo se comportará la aplicación y que oportunidades de mejora encontramos para dicho escenario.
    Este tipo de pruebas puede mostrar los tiempos de respuesta de todas las transacciones de la aplicación.`
    des_termino8.value = `Se utiliza normalmente para poner a prueba la robustez y confiabilidad de la aplicación.
    El objetivo de estas pruebas es saturar la aplicación hasta un punto de quiebre donde aparezcan defectos.
    Nos permite determinar si la aplicación rendirá lo suficiente en caso de que la carga real supere a la carga esperada.`
    des_termino9.value = `Transacciones por segundo.`
}