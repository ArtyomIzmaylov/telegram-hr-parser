import {ChatModel} from "./models/chat.model";
import {extractCategoryMessages} from "./extractor/categoryMessage.extracor";
import {allMessagesFilter} from "./filter/allMessages.filter";
import {run} from "./worker/index.worker";
import {MessageModel} from "./models/message.model";



async function* asyncArrayIterator(array : any) {
    for (const item of array) {
        try {
            console.log(item)
            let messages = (await run(item)).result
            const filteredMessages = allMessagesFilter(messages)
            const extractMessageWithCategory = extractCategoryMessages(filteredMessages)
            await MessageModel.bulkCreate(extractMessageWithCategory, {fields: ['message', 'username', 'link','category']});
            await new Promise(resolve => setTimeout(resolve, 60000));
            yield item;
        }
        catch (e) {
            console.log(e)
        }

    }
}

(async () => {

    const chats = (await ChatModel.findAll({
    })).map(el => {
        return el.dataValues.link
    })
    for await (const item of asyncArrayIterator(chats)) {

    }
})();
