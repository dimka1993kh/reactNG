'use strict';

const MessageHistory = ({list}) => {
    let result;
    let messageText
    result = list.length === 0 ? null : list;

    messageText = result.map(oneMessage => {
       if (oneMessage.type === "response") {
           return <Response from = {oneMessage.from} message = {oneMessage}/>
       } else if (oneMessage.type === "message") {
           return <Message from = {oneMessage.from} message = {oneMessage} />
       } else {
           return <Typing from = {oneMessage.from} message = {oneMessage} />
       }
    });
    return (
        <ul>{messageText}</ul>
    )

}

