/**
 * https://developer.chrome.com/docs/extensions/reference/runtime/
 * Sends a single message to event listeners within your extension/app or a different extension/app.
 * chrome.runtime.sendMessage(
 *   extensionId?: string,
 *   message: any,
 *   options?: object,
 *   callback?: function,
 * )
 */
 chrome.runtime.sendMessage({
    message: "message"
}, function(result) {
    console.log(result);
    navigator.clipboard.writeText(result);
});