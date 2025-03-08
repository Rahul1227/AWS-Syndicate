exports.handler = async (event) => {
    const path = event.rawPath;
    const method = event.requestContext.http.method;

    if (path === '/hello' && method === 'GET') {
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Hello from Lambda!'
            })
        };
    } else {
        return {
            statusCode: 400,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `Cannot ${method} ${path}`
            })
        };
    }
};