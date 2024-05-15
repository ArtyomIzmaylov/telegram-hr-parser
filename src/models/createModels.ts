import {ChatModel} from "./chat.model";
import {MessageModel} from "./message.model";

export async function createModels (){
    await ChatModel.sync({force : true})
    await MessageModel.sync({force : true})
}