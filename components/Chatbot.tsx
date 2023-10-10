import React, { useEffect } from 'react';

const Chatbot = () => {

    // Update width of iframe based on state of class "bp-widget-widget" or "bp-widget-side".
    // Use smaller iframe width when the chatbot is closed to prevent the iframe from obstructing any buttons/elements. Otherwise the default iframe width prevent's interacting with any buttons.
    useEffect(() => {
        const chatbotIframe = document.getElementById('chatbot-iframe') as HTMLIFrameElement;
        let chatbotIframeLoaded = false;

        chatbotIframe.onload = () => {
            chatbotIframeLoaded = true;
            const chatbotIframeWindow = chatbotIframe.contentWindow;

            // If loaded with content window
            if (chatbotIframeLoaded && chatbotIframeWindow) {
                const chatbotIframeDoc = chatbotIframe.contentDocument || chatbotIframeWindow.document;
                const chatbotIframeBody = chatbotIframeDoc.body;

                const observer = new MutationObserver((mutationsList) => {
                for (const mutation of mutationsList) {

                    // Update width on child/attribute changes 
                    if (mutation.type === 'childList' || mutation.type === 'attributes') {
                    const bpWidgetWidget = chatbotIframeBody.querySelector('.bp-widget-widget');
                    const bpWidgetSide = chatbotIframeBody.querySelector('.bp-widget-side');
                    const chatbotIframeStyle = chatbotIframe.style;

                    if (bpWidgetWidget) {
                        // console.log('Child element has class bp-widget-widget');
                        chatbotIframeStyle.width = '90px';
                    } else if (bpWidgetSide) {
                        // console.log('Child element has class bp-widget-side');
                        chatbotIframeStyle.width = '400px';
                    }
                    }
                }
                });

                observer.observe(chatbotIframeBody, { childList: true, attributes: true, subtree: true });

                // Disconnect observer on unmount
                return () => {
                observer.disconnect();
                };
            }
        };

        chatbotIframe.style.width = '90px';

        }, []);

    return (
        // Wrap iframe to prevent white background color.
        <div
        style={{
            position: 'fixed',
            bottom: '5px',
            right: '0px',
            zIndex: '9999',
            colorScheme: 'none',
        }}
        >
            {/* Configure chatbot manually */}
            <iframe
                id="chatbot-iframe"
                style={{ border: 'none', width: 'auto', height: '100vh' }}
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
                            "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/44dd69ea-88cf-4c0b-90ce-0b7d77a1cabe/v47093/style.css",
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
