import crypto from "crypto";

const md5Hash = (input) => {
    return crypto.createHash("md5").update(input).digest("hex");
}

const getTimestamp = () => {
    return Math.floor(Date.now() / 1000);
}

export {
    md5Hash,
    getTimestamp
}