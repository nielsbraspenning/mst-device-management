const { app } = require('@azure/functions');

app.http('create_device', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        if(request.method != 'POST'){
            return {
                status: 500,
                body:  JSON.stringify({'error' : 'unknown method'}) 
            };
        }

        const inboundData = JSON.parse(await request.text());

        let returnBody = {'result' : 'ok'}

        context.log("CREATE DEVICE ENDPOINT, INBOUND MESSAGE " + JSON.stringify(inboundData));
            


        return {
            status: 200,
            body:  JSON.stringify(returnBody) 
        };
 
    }
});
