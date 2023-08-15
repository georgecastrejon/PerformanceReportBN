document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('precargarDetalle');
    submitButton.addEventListener('click', cargarPredeterminadosModalDetalle);
});

function cargarPredeterminadosModalDetalle() {
    event.preventDefault();

    const introduccion = document.getElementById("introduccion");
    const consideraciones = document.getElementById('consideraciones');
    const alcance = document.getElementById('alcance');

    introduccion.value = 'El rendimiento de las aplicaciones suele ser considerado como un requerimiento no funcional de los sistemas informáticos. Sin embargo, dependiendo del tipo de sistema y del uso que se le dé al mismo, puede convertirse en una característica que, de no cumplirse, afecta la usabilidad, la aplicabilidad en una realidad dada e incluso, las funcionalidades que el mismo brinda.'
    consideraciones.value = '- El criterio de aceptación establecido por el usuario es de 2,000 operaciones en una hora.'
    alcance.value = `El alcance del servicio comprende la ejecución del Api de validation y Api OTP con las siguientes URLs:
    
    - Api Validation:
     http://10.7.106.69/WSGatewayEnrolaAlternoREST/v1/biometric/activationapi/v1/validation  
    
    - Api OTP:
    http://10.7.106.69/WSGatewayEnrolaAlternoREST/v1/biometric/activationapi/v1/otp
    `
}