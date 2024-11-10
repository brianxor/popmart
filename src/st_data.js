import { getTimestamp, md5Hash } from "./utils.js";

const secretKey = "W_ak^moHpMla";

const generateSData = (data) => {
    const timestamp = getTimestamp();
    const jsonData = JSON.stringify(data);
    const toHash = `${jsonData}${secretKey}`;
    const hash = md5Hash(toHash);
    
    return {
        s: hash,
        t: timestamp,
    };
}

export default generateSData;