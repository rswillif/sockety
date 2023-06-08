function parseRequestLine(str, target) {
    const index = str.indexOf(target);
    const first = str.slice(0, index);
    const rest = str.slice(index + target.length);
    return [first, rest];
}
export function parseRequest(str) {
    const [firstLine, rest] = parseRequestLine(str, '\r\n');
    const [method, url, protocol] = firstLine.split(' ');
    const [headers, body] = parseRequestLine(rest, '\r\n\r\n');
    const parsedHeaders = headers.split('\r\n')
        .reduce((acc, header) => {
        const [key, value] = parseRequestLine(header, ': ');
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
