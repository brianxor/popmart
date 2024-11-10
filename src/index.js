import generateSignature from "./signature.js";
import generateSData from "./st_data.js";

const signature_example = () => {
    const clientId = ""
    const signature = generateSignature(clientId);
    console.log(signature);
}

const st_data_example = () => {
    const data = {
        email: "example@example.com"
    };

    const st_data = generateSData(data);
    console.log(st_data);
}

signature_example();
st_data_example();