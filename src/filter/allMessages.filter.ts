import {containsKeywords, firstFilter, ignoreWordsFilter} from "./keywords.filter";

export function allMessagesFilter(messageArray : any) : Promise<any>{
    return messageArray.filter((message : any) => {
        if (containsKeywords(message.message, firstFilter) && !containsKeywords(message.message, ignoreWordsFilter)) {
            return message
        }
    })
}

