import { getTimestamp, md5Hash } from "./utils.js";

const generateSignature = (clientId) => {
    const timestamp = getTimestamp();
    const toHash = `${timestamp},${clientId}`;
    const hash = md5Hash(toHash);
    const signature = `${hash},${timestamp}`;
    return signature
}

export default generateSignature;
