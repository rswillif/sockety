import { composeHeaders } from './appHelper.js';
export function composeResponse(resp) {
    return `${resp.protocol} ${resp.statusCode} ${resp.status}\n`
        .concat(`${composeHeaders(resp.headers)}\n`)
        .concat(`${resp.body}`);
}
