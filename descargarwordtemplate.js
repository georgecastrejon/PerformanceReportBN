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

    const nombreaplicacion1 = document.getElementById('nombreaplicacion1').value;

    const tipofuncionalidad1 = document.getElementById('tipofuncionalidad1').value;
    const tipofuncionalidad2 = document.getElementById('tipofuncionalidad2').value;
    const tipofuncionalidad3 = document.getElementById('tipofuncionalidad3').value;
    const tipofuncionalidad4 = document.getElementById('tipofuncionalidad4').value;

    const tipoprueba1 = document.getElementById('tipoprueba1').value;
    const tipoprueba2 = document.getElementById('tipoprueba2').value;
    const tipoprueba3 = document.getElementById('tipoprueba3').value;
    const tipoprueba4 = document.getElementById('tipoprueba4').value;

    const criterioaceptacion = document.getElementById('criterioaceptacion').value;
    const graficocriterioaceptacion1 = document.getElementById('graficocriterioaceptacion1').value;
    const graficocriterioaceptacion2 = document.getElementById('graficocriterioaceptacion2').value;


    const resultadocarga1 = document.getElementById('resultadocarga1').value;
    const promediocarga1 = document.getElementById('promediocarga1').value;
    const rangocarga1 = document.getElementById('rangocarga1').value;
    const tpscarga1 = document.getElementById('tpscarga1').value;
    const resultadocarga2 = document.getElementById('resultadocarga2').value;
    const promediocarga2 = document.getElementById('promediocarga2').value;
    const rangocarga2 = document.getElementById('rangocarga2').value;
    const tpscarga2 = document.getElementById('tpscarga2').value;
    const resultadocarga3 = document.getElementById('resultadocarga3').value;
    const promediocarga3 = document.getElementById('promediocarga3').value;
    const rangocarga3 = document.getElementById('rangocarga3').value;
    const tpscarga3 = document.getElementById('tpscarga3').value;
    const resultadocarga4 = document.getElementById('resultadocarga4').value;
    const promediocarga4 = document.getElementById('promediocarga4').value;
    const rangocarga4 = document.getElementById('rangocarga4').value;
    const tpscarga4 = document.getElementById('tpscarga4').value;

    const resultadoestres1 = document.getElementById('resultadoestres1').value;
    const promedioestres1 = document.getElementById('promedioestres1').value;
    const rangoestres1 = document.getElementById('rangoestres1').value;
    const tpsestres1 = document.getElementById('tpsestres1').value;
    const resultadoestres2 = document.getElementById('resultadoestres2').value;
    const promedioestres2 = document.getElementById('promedioestres2').value;
    const rangoestres2 = document.getElementById('rangoestres2').value;
    const tpsestres2 = document.getElementById('tpsestres2').value;
    const resultadoestres3 = document.getElementById('resultadoestres3').value;
    const promedioestres3 = document.getElementById('promedioestres3').value;
    const rangoestres3 = document.getElementById('rangoestres3').value;
    const tpsestres3 = document.getElementById('tpsestres3').value;


    const conclusionespruebacarga = document.getElementById('conclusionespruebacarga').value;
    const conclusionespruebaestres = document.getElementById('conclusionespruebaestres').value;

    const recomendaciones = document.getElementById('recomendaciones').value;


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

        nombreaplicacion1: nombreaplicacion1,

        tipofuncionalidad1: tipofuncionalidad1,
        tipofuncionalidad2: tipofuncionalidad2,
        tipofuncionalidad3: tipofuncionalidad3,
        tipofuncionalidad4: tipofuncionalidad4,

        tipoprueba1: tipoprueba1,
        tipoprueba2: tipoprueba2,
        tipoprueba3: tipoprueba3,
        tipoprueba4: tipoprueba4,

        criterioaceptacion: criterioaceptacion,
        graficocriterioaceptacion1: graficocriterioaceptacion1,
        graficocriterioaceptacion2: graficocriterioaceptacion2,


        resultadocarga1: resultadocarga1,
        promediocarga1: promediocarga1, 
        rangocarga1: rangocarga1,
        tpscarga1: tpscarga1,
        resultadocarga2: resultadocarga2,
        promediocarga2: promediocarga2, 
        rangocarga2: rangocarga2,
        tpscarga2: tpscarga2,
        resultadocarga3: resultadocarga3,
        promediocarga3: promediocarga3, 
        rangocarga3: rangocarga3,
        tpscarga3: tpscarga3,
        resultadocarga4: resultadocarga4,
        promediocarga4: promediocarga4, 
        rangocarga4: rangocarga4,
        tpscarga4: tpscarga4,

        resultadoestres1: resultadoestres1,
        promedioestres1: promedioestres1,
        rangoestres1: rangoestres1,
        tpsestres1: tpsestres1,
        resultadoestres2: resultadoestres2,
        promedioestres2: promedioestres2,
        rangoestres2: rangoestres2,
        tpsestres2: tpsestres2,
        resultadoestres3: resultadoestres3,
        promedioestres3: promedioestres3,
        rangoestres3: rangoestres3,
        tpsestres3: tpsestres3,


        conclusionespruebacarga: conclusionespruebacarga,
        conclusionespruebaestres: conclusionespruebaestres,

        recomendaciones: recomendaciones
      });
  
      const blob = doc.getZip().generate({
        type: "blob",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        compression: "DEFLATE",
      });
  
      saveAs(blob, "output.docx");
    };
  }

function init() {
    const form = document.getElementById("formulario");
    form.onsubmit = function (event) {
      event.preventDefault(); 
      generateDocument();
    };
}
  
document.addEventListener("DOMContentLoaded", init);