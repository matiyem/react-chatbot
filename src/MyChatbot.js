import { MessageParser, CustomMessage } from 'react-chatbot-kit';

function MyChatbot() {
    const shouldShowInput = false; // شرطی که اگر برقرار نباشد، input نمایش داده نمی‌شود

    const renderMessageContent = (message) => {
        if (message.type === 'text') {
            return <TextMessage key={message.id} message={message} />;
        } else if (message.type === 'custom' && message.content.type === 'MY_CUSTOM_TYPE') {
            return <CustomMessage key={message.id} message={message} />;
        } else if (message.type === 'custom' && message.content.type === 'input' && shouldShowInput) {
            return <Input key={message.id} />;
        } else {
            return null;
        }
    };

    return (
        <div>
            <MessageParser
                message={message}
                onSend={onSend}
                renderMessageContent={renderMessageContent}
            />
        </div>
    );
}