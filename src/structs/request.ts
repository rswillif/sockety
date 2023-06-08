interface Request {
    protocol?: string,
    method?: string,
    url?: string,
    headers?: Map<string, string>,
    body?: string
}

export default Request;