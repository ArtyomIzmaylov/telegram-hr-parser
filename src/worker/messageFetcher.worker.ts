import {API_HASH, API_ID, MESSAGE_LIMIT, STRING_SESSION} from "../creds";
import {Api, TelegramClient} from "telegram";
import {StringSession} from "telegram/sessions";

const { workerData, parentPort } = require('worker_threads');

async function* messageIterator(messages: any) {
    for (const message of messages) {
        await new Promise(resolve => setTimeout(resolve, 100));
        yield message;
    }
}


async function main(chatName : any, client : TelegramClient) {
    try {
        const messages = await client.getMessages(chatName, {
            limit: MESSAGE_LIMIT,
        });
        const messagesAndUsernames = []
        for await (const message of messageIterator(messages)) {
            if (message.fromId) {
                try {
                    let user = await client.getEntity(message.fromId) as Api.User
                    messagesAndUsernames.push({username : user.username ? user.username : 'Юзер не найден', message : message.message ? message.message : 'Пустое сообщение', link : `t.me/${chatName}`})
                }
                catch (e) {
                    messagesAndUsernames.push({username : 'Юзер не найден', message : message.message, link : `t.me/${chatName}`})
                }
            }

        }
        return messagesAndUsernames
    }
    catch (e) {
        console.log(e)
    }



}


(async () => {
    const client = new TelegramClient(new StringSession(STRING_SESSION), API_ID, API_HASH, {})
    await client.connect();
    const result = await main(workerData.chatName, client)
    await client.disconnect()
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (parentPort) {
        parentPort.postMessage({ result: result });
    }
})()
