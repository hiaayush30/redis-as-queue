import { createClient } from "redis";


const client = createClient();
client.connect()
    .then(async () => {
        while (true) {
            const problem = await client.brPop("submission", 0);
            console.log(problem);
            console.log(problem?.element)
            // run the users code in docker exec
            await new Promise((resolve)=>setTimeout(resolve,1000))
        }
    })