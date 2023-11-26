chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'loading') {
        if (tab.url.includes("youtube.com/shorts/")) {
            chrome.tabs.remove(tabId);
            chrome.tabs.create({
                url: chrome.runtime.getURL('../html/popup.html'),
                active: true
            });
        } else if (tab.url.includes("youtube.com") || tab.url.includes("reddit.com")) {
            chrome.tabs.create({ url: chrome.runtime.getURL('../html/confirm.html') + "#" + tabId });
        }
    }
});
