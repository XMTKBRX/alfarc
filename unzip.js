import AdmZip from "adm-zip";

const zip = new AdmZip("yourfile.zip");
zip.extractAllTo("./", true);

console.log("✅ تم فك الضغط بنجاح!");
