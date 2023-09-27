import React from 'react';

const Chatbot = () => {
    return (
        <div
        style={{
            position: 'fixed',
            bottom: '5px',
            right: '0px',
            zIndex: '9999',
        }}
        >
            <iframe
                style={{ border: 'none', width: '400px', height: '100vh' }}
                srcDoc={`<html><body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
                    <script>
                        window.botpressWebChat.init({
                            "composerPlaceholder": "Chat with Andrew's AI Assistant",
                            "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
                            "botId": "6a6d2b9c-bcca-4ae8-b436-b6d58ed79695",
                            "hostUrl": "https://cdn.botpress.cloud/webchat/v0",
                            "messagingUrl": "https://messaging.botpress.cloud",
                            "clientId": "6a6d2b9c-bcca-4ae8-b436-b6d58ed79695",
                            "lazySocket": true,
                            "botName": "Andrew's AI Assistant",
                            "avatarUrl": "https://www.andrewfinsand.dev/chatbotAvatar.png",
                            "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/44dd69ea-88cf-4c0b-90ce-0b7d77a1cabe/v83574/style.css",
                            "frontendVersion": "v0",
                            "useSessionStorage": true,
                            "enableConversationDeletion": true
                        });
                    </script>
                </body></html>`}
            ></iframe>
        </div>
    );
};

export default Chatbot;
