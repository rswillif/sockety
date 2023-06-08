import { Chalk } from "chalk";
export function ejectMaySage(str) {
    const chalkInstance = new Chalk();
    console.log(chalkInstance.bgBlueBright(str));
    console.log(`=======\n`);
}
export function composeHeaders(headers) {
    const headerArr = new Array();
    for (let [key, value] of headers) {
        const headerStr = `${key}: ${value}`;
    }
    return headerArr.join('\r\n');
}
