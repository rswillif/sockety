interface IResponse {
    status: string,
    statusCode: number;
    protocol: string,
    headers: Map<string, string>,
    body: string
}

export default IResponse;