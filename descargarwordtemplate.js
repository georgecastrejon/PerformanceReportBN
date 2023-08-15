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

    if (docs.files.length === 0) {
      alert("No files selected");
    }
  
    reader.readAsBinaryString(docs.files.item(0));
  
    reader.onerror = function (evt) {
      console.log("error reading file", evt);
      alert("error reading file" + evt);
    };
  
    reader.onload = function (evt) {
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
        des_termino11: des_termino11
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