import IRequest from '../structs/request';

function parseRequestLine(str: string, target: string): [string, string] {
    const index: number = str.indexOf(target);
    const first: string = str.slice(0, index);
    const rest: string = str.slice(index + target.length);

    return [first, rest];
}

export function parseRequest(str: string): IRequest {
    const [firstLine, rest]: [string, string] = parseRequestLine(str, '\r\n');
    const [method, url, protocol]: string[] = firstLine.split(' ');
    const [headers, body]: string[] = parseRequestLine(rest, '\r\n\r\n');

    const parsedHeaders: Map<string, string> = headers.split('\r\n')
        .reduce((acc, header) => {
            const [key, value]: [string, string] = parseRequestLine(header, ': ');

            acc.set(key, value);

            return acc;
        }, new Map());

    return {
        protocol, 
        method, 
        url, 
        headers: parsedHeaders,
        body
    };
}
