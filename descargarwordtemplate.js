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
        descripcioncambio: descambio
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