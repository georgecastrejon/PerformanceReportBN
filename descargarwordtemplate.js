function generateDocument() {
    const docs = document.getElementById("doc");
    const reader = new FileReader();
  
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
  
    const introduccion = document.getElementById('introduccion').value;
    const consideraciones = document.getElementById('consideraciones').value;
    const alcance = document.getElementById('alcance').value;
    
    const termino1 = document.getElementById('termino1').value;
    const termino2 = document.getElementById('termino2').value;
    const termino3 = document.getElementById('termino3').value;
    const termino4 = document.getElementById('termino4').value;
    const termino5 = document.getElementById('termino5').value;
    const termino6 = document.getElementById('termino6').value;
    const termino7 = document.getElementById('termino7').value;
    const termino8 = document.getElementById('termino8').value;
    const termino9 = document.getElementById('termino9').value;
    const termino10 = document.getElementById('termino10').value;
    const termino11 = document.getElementById('termino11').value;

    const des_termino1 = document.getElementById('des_termino1').value;
    const des_termino2 = document.getElementById('des_termino2').value;
    const des_termino3 = document.getElementById('des_termino3').value;
    const des_termino4 = document.getElementById('des_termino4').value;
    const des_termino5 = document.getElementById('des_termino5').value;
    const des_termino6 = document.getElementById('des_termino6').value;
    const des_termino7 = document.getElementById('des_termino7').value;
    const des_termino8 = document.getElementById('des_termino8').value;
    const des_termino9 = document.getElementById('des_termino9').value; 
    const des_termino10 = document.getElementById('des_termino10').value; 
    const des_termino11 = document.getElementById('des_termino11').value; 

    const tipofuncionalidad1 = document.getElementById('tipofuncionalidad1').value;
    const tipofuncionalidad2 = document.getElementById('tipofuncionalidad2').value;
    const tipofuncionalidad3 = document.getElementById('tipofuncionalidad3').value;
    const tipofuncionalidad4 = document.getElementById('tipofuncionalidad4').value;

    const tipoprueba1 = document.getElementById('tipoprueba1').value;
    const tipoprueba2 = document.getElementById('tipoprueba2').value;
    const tipoprueba3 = document.getElementById('tipoprueba3').value;
    const tipoprueba4 = document.getElementById('tipoprueba4').value;

    const numerousuariocarga1 = document.getElementById('numerousuariocarga1').value;
    const numerousuariocarga2 = document.getElementById('numerousuariocarga2').value;
    //const numerousuariocarga3 = document.getElementById('numerousuariocarga3').value;
    //const numerousuariocarga4 = document.getElementById('numerousuariocarga4').value;

    const tiempopruebacarga1 = document.getElementById('tiempopruebacarga1').value;
    const tiempopruebacarga2 = document.getElementById('tiempopruebacarga2').value;
    //const tiempopruebacarga3 = document.getElementById('tiempopruebacarga3').value;
    //const tiempopruebacarga4 = document.getElementById('tiempopruebacarga4').value;

    const graficocarga1 = document.getElementById('graficocarga1').value;
    const graficocarga2 = document.getElementById('graficocarga2').value;
    //const graficocarga3 = document.getElementById('graficocarga3').value;
    //const graficocarga4 = document.getElementById('graficocarga4').value;

    const numerousuarioestres1 = document.getElementById('numerousuarioestres1').value;
    const numerousuarioestres2 = document.getElementById('numerousuarioestres2').value;
    const numerousuarioestres3 = document.getElementById('numerousuarioestres3').value;
    const numerousuarioestres4 = document.getElementById('numerousuarioestres4').value;
    const numerousuarioestres5 = document.getElementById('numerousuarioestres5').value;
    const numerousuarioestres6 = document.getElementById('numerousuarioestres6').value;

    const tiempopruebaestres1 = document.getElementById('tiempopruebaestres1').value;
    const tiempopruebaestres2 = document.getElementById('tiempopruebaestres2').value;
    const tiempopruebaestres3 = document.getElementById('tiempopruebaestres3').value;
    const tiempopruebaestres4 = document.getElementById('tiempopruebaestres4').value;
    const tiempopruebaestres5 = document.getElementById('tiempopruebaestres5').value;
    const tiempopruebaestres6 = document.getElementById('tiempopruebaestres6').value;

    const graficoestres1 = document.getElementById('graficoestres1').value;
    //const graficoestres2 = document.getElementById('graficoestres2').value;
    //const graficoestres3 = document.getElementById('graficoestres3').value;

    const criterioaceptacion = document.getElementById('criterioaceptacion').value;
    const graficocriterioaceptacion = document.getElementById('graficocriterioaceptacion').value;


    if (docs.files.length === 0) {
      alert("No files selected");
    }
  
    reader.readAsBinaryString(docs.files.item(0));
  
    reader.onerror = function (evt) {
      console.log("error reading file", evt);
      alert("error reading file" + evt);
    };
  
    reader.onload = function (evt) {
      const imageData = evt.target.result;

      const content = evt.target.result;
      const zip = new PizZip(content);
      const doc = new window.docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });
  
      doc.render({
        cliente: cliente,
        tipoinforme: tipoinforme,
        codigorq: codigorq,
        nombrerq: nombrerq,
        fecharq: fecharq,
        version: version,
        fecha: fechadoc,
        responsable: responsable,
        descripcioncambio: descambio,

        introduccion: introduccion,
        consideraciones: consideraciones,
        alcance: alcance,
        
        termino1: termino1,
        termino2: termino2,
        termino3: termino3,
        termino4: termino4,
        termino5: termino5,
        termino6: termino6,
        termino7: termino7,
        termino8: termino8,
        termino9: termino9,
        termino10: termino10,
        termino11: termino11,

        des_termino1: des_termino1,
        des_termino2: des_termino2,
        des_termino3: des_termino3,
        des_termino4: des_termino4,
        des_termino5: des_termino5,
        des_termino6: des_termino6,
        des_termino7: des_termino7,
        des_termino8: des_termino8,
        des_termino9: des_termino9,
        des_termino10: des_termino10,
        des_termino11: des_termino11,

        tipofuncionalidad1: tipofuncionalidad1,
        tipofuncionalidad2: tipofuncionalidad2,
        tipofuncionalidad3: tipofuncionalidad3,
        tipofuncionalidad4: tipofuncionalidad4,

        tipoprueba1: tipoprueba1,
        tipoprueba2: tipoprueba2,
        tipoprueba3: tipoprueba3,
        tipoprueba4: tipoprueba4,

        numerousuariocarga1: numerousuariocarga1,
        numerousuariocarga2: numerousuariocarga2,
        //numerousuariocarga3: numerousuariocarga3,
        //numerousuariocarga4: numerousuariocarga4,

        tiempopruebacarga1: tiempopruebacarga1,
        tiempopruebacarga2: tiempopruebacarga2,
        //tiempopruebacarga3: tiempopruebacarga3,
        //tiempopruebacarga4: tiempopruebacarga4,

        graficocarga1: graficocarga1,
        graficocarga2: graficocarga2,
        //graficocarga3: graficocarga3,
        //graficocarga4: graficocarga4,

        numerousuarioestres1: numerousuarioestres1,
        numerousuarioestres2: numerousuarioestres2,
        numerousuarioestres3: numerousuarioestres3,
        numerousuarioestres4: numerousuarioestres4,
        numerousuarioestres4: numerousuarioestres5,
        numerousuarioestres4: numerousuarioestres6,

        tiempopruebaestres1: tiempopruebaestres1,
        tiempopruebaestres2: tiempopruebaestres2,
        tiempopruebaestres3: tiempopruebaestres3,
        tiempopruebaestres4: tiempopruebaestres4,
        tiempopruebaestres5: tiempopruebaestres5,
        tiempopruebaestres6: tiempopruebaestres6,

        graficoestres1: graficoestres1,
        //graficoestres2: graficoestres2,
        //graficoestres3: graficoestres3,

        criterioaceptacion: criterioaceptacion,
        graficocriterioaceptacion: graficocriterioaceptacion
      });
  
      const blob = doc.getZip().generate({
        type: "blob",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        compression: "DEFLATE",
      });
  
      saveAs(blob, "output.docx");
    };

    reader.readAsDataURL(graficocarga1File);
  }

function init() {
    const form = document.getElementById("formulario");
    form.onsubmit = function (event) {
      event.preventDefault(); 
      generateDocument();
    };
}
  
document.addEventListener("DOMContentLoaded", init);