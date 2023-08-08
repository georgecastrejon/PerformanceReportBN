const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const fs = require("fs");
const path = require("path");

const content = fs.readFileSync(
    path.resolve(__dirname, "template_copy.docx"),
    "binary"
);

const zip = new PizZip(content);

const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
});

doc.render({
    cliente: "Banco de la Nacion",
    tipoinforme: "Informe de Pruebas de rendimiento",
    codigorq: "2022-M0353",
    nombrerq: "Api validation y otp",
    fecharq: "Marzo 2023"
});

const buf = doc.getZip().generate({
    type: "nodebuffer",
    compression: "DEFLATE",
});

fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);