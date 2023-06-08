// std lib imports
import * as net from 'net';
import * as wp from 'workerpool';
// local imports
import Request from './structs/request';
import { parseRequest } from './helpers/requestHelper.js';
import { composeResponse } from './helpers/responseHelper.js';
import { ejectMaySage } from './helpers/appHelper.js';

const maySage: string = `SOCKETY`;

ejectMaySage(maySage);

const port: number = 1337;
const ip: string = '127.0.0.1';
const backlog: number = 100;

const workerPool: wp.WorkerPool = wp.pool();

try
{
    net.createServer()
    .listen(port, ip, backlog)
    .on('connection', socket => {
        console.log(`new connection address => ${socket.remoteAddress}:${socket.remotePort}`);

        socket.on('data', buffer => {
            // const request: string = buffer.toString();
            const request: Request = parseRequest(buffer.toString());

            workerPool.exec((params: Request) => JSON.stringify(params), [request])
                .then(res => {
                    console.log(`res => ${res}`);

                    socket.write(
                        composeResponse(
                            {
                                protocol: 'HTTP/1.1',
                                headers: new Map(),
                                status: 'OK',
                                statusCode: 200,
                                body: `request => ${res}`
                            }
                        )
                    );

                    socket.end();
                }); 
        });
    });
}
catch (e: any)
{
    console.log(`e => ${e.message}`)
}