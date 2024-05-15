import {determineCategory} from "../filter/category.filter";


export function extractCategoryMessages(messageArray : any) {
    return messageArray.map((message : any) => {
        return {
            message : message.message,
            category : determineCategory(message.message),
            link : message.link,
            username : message.username
        }
    })
}