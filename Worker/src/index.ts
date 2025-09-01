import { createClient } from "redis";


const client = createClient( );
client.connect()
    .then(async () => {
        while (true) {
            const problem = await client.brPop("submission", 0);
            console.log(problem);
            console.log(problem?.element)
            // run the users code in docker exec
            await new Promise((resolve)=>setTimeout(resolve,1000))
            // send it to pub sub wich will be picked up by the websocket connected to the target client
        }
    })