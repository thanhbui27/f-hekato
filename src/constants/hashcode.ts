import * as crypto from "crypto";

function generateRandomCode(id : number) {
    const hash = crypto.createHash('sha256').update(id.toString()).digest('hex');
    const code = hash.slice(0, 10).replace(/[^\d]/g, '1');
    return code;
}
  

