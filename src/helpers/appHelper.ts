import { ChalkInstance, Chalk } from "chalk";

export function ejectMaySage(str: string) {
    const chalkInstance: ChalkInstance = new Chalk();
    console.log(chalkInstance.bgBlueBright(str));
    console.log(`=======\n`);
}

export function composeHeaders(headers: Map<string, string>): string {
    const headerArr: string[] = new Array();

    for (let [key, value] of headers) {
        const headerStr: string = `${key}: ${value}`;
    }

    return headerArr.join('\r\n');
}