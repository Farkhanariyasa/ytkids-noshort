chrome.runtime.onInstalled.addListener(() => {
  chrome.scripting.registerContentScripts([
    {
      id: "hide_shorts",
      matches: ["https://www.youtubekids.com/*"],
      js: ["content.js"],
      runAt: "document_end"
    }
  ]);
});