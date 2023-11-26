const redditTabId = parseInt(location.hash.substring(1));


document.getElementById('confirmBtn').addEventListener('click', function() {
    // Continue to Reddit.
    window.close();
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    // Close the Reddit tab.
    chrome.tabs.remove(redditTabId);
    // Close the current confirmation tab.
    window.close();
});

