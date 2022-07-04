/**
 * https://developer.chrome.com/docs/extensions/reference/runtime/
 * Fired when a message is sent from either an extension process (by runtime.sendMessage) or a content script (by tabs.sendMessage).
 * The callback parameter looks like:
 * (message: any, sender: MessageSender, sendResponse: function) => boolean | undefined
 */
 chrome.runtime.onMessage.addListener(
    function(message, sender, callback) {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
            callback(tabs[0].title + '\n' + tabs[0].url);
        });
        return true;
    }
);
