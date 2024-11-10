import generateSignature from "./signature.js";

const clientId = ""
const signature = generateSignature(clientId);

console.log(signature);

