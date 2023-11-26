chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        if (tab.url.includes("youtube.com/shorts/")) {
            chrome.tabs.remove(tabId);
            chrome.tabs.create({
                url: chrome.runtime.getURL('popup.html'),
                active: true
            });
        } else if (tab.url.includes("youtube.com")) {
            chrome.tabs.create({ url: chrome.runtime.getURL('confirm.html') + "#" + tabId });
        }
        } else if (tab.url.includes("reddit.com")) {
            chrome.tabs.create({ url: chrome.runtime.getURL('confirm.html') + "#" + tabId });
    }
});
