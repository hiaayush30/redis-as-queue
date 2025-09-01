import { createClient } from "redis";
const client = createClient();
client.connect()
    .then(async () => {
    while (true) {
        const problem = await client.brPop("submission", 0);
        console.log(problem);
        console.log(problem?.element);
    }
});
//# sourceMappingURL=index.js.map