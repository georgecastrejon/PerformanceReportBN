document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('precargarDetalle');
    submitButton.addEventListener('click', cargarPredeterminadosModal);
});

function cargarPredeterminadosModal() {
    event.preventDefault();

    const introduccion = document.getElementById("introduccion");
    const consideraciones = document.getElementById('consideraciones');
    const alcance = document.getElementById('alcance');
    const estrategia = document.getElementById('estrategia');
    const conclusiones = document.getElementById('conclusiones');
    const recomendaciones = document.getElementById('recomendaciones');

    introduccion.value = 'El rendimiento de las aplicaciones suele ser considerado como un requerimiento no funcional de los sistemas informáticos. Sin embargo, dependiendo del tipo de sistema y del uso que se le dé al mismo, puede convertirse en una característica que, de no cumplirse, afecta la usabilidad, la aplicabilidad en una realidad dada e incluso, las funcionalidades que el mismo brinda.'
    consideraciones.value = '- El criterio de aceptación establecido por el usuario es de 2,000 operaciones en una hora.'
    alcance.value = `
    El alcance del servicio comprende la ejecución del Api de validation y Api OTP con las siguientes URLs:
    
    - Api Validation:
     http://10.7.106.69/WSGatewayEnrolaAlternoREST/v1/biometric/activationapi/v1/validation  
    
    - Api OTP:
    http://10.7.106.69/WSGatewayEnrolaAlternoREST/v1/biometric/activationapi/v1/otp
    `
    estrategia.value = 'Se planteó la siguiente estrategia para las pruebas.'
    conclusiones.value = `
    * Prueba de Carga

    - El Api Validation, presentó 1 transacción fallida en el minuto 38 de la ejecución con
    1 usuario concurrente, logrando alcanzar 5,672 transacciones en una hora de
    ejecución y 1.32 TPS.
    - El Api OTP, presentó 22 transacciones fallidas desde el minuto 9 de la ejecución con
    1 usuario concurrente, logrando alcanzar 4,243 transacciones en una hora de
    ejecución y 1.18 TPS.
    - El Api de Otp y Validation soporta más de 2,000 transacciones en una hora de
    manera correcta, por lo tanto, se está cumpliendo con el criterio de la cantidad de
    transacciones soportada en una hora por las Apis.

    * Prueba de estrés

    - Se concluye que el Api validation soporta en 20 minutos 2,335 transacciones de
    manera correcta y 2.7 TPS con un tiempo promedio de 0.324 segundos.
    - El Api validation al alcanzar los 5.2 TPS presenta errores de código 500.
    - Los errores que se obtuvieron en la prueba de estrés del Api de validation son de
    código 500/Internal Server Error y mensaje de error “status 403”, lo cual se atribuye
    a que se está rechazando la petición.
    - Se concluye que el Api de OTP obtuvo errores en todos los hitos de ejecución.
    - Los errores presentados en las pruebas de OTP son de código 500/Internal Server
    Error con mensaje de error (“status 403”, "Status 500 Internal Server Error" y
    “status 503”).
    - Se concluye que la Api de Validation cuando obtiene 31,320 (3,492 correctas y
    27,828 incorrectas) transacciones en 1 hora, el porcentaje de error se incrementa
    al 88.85%. El número de TPS alcanzados es de 8.7.
    - Se concluye que la Api de OTP de backbase cuando obtiene 24,854 (4,209 correctas
    y 20,645 incorrectas) transacciones en 1 hora, el porcentaje de error se incrementa
    al 83.07%. El número de TPS alcanzados es de 6.90.
    `
    recomendaciones.value = `
    - En caso se espere una carga mayor de transacciones que superen las 5,672
    muestras para el Api validation y 4,243 muestras para el Api OTP en una hora, se
    deben solucionar los errores de código 500 que se presentaron durante la prueba
    de estrés.

    - Se recomienda revisar el error presentado en la prueba de carga del Api validation
    de código 200, con respuesta: “No existe cuenta DNI”, esto debido a que se validó
    los datos usados en la prueba y son correctos.

    - Se recomienda replicar las pruebas de estrés una vez que se superen los errores de
    código antes mencionados.

    - Se recomienda utilizar el protocolo “HTTPS” con la finalidad de comparar los
    tiempos de respuesta frente al protocolo http.
    `
}