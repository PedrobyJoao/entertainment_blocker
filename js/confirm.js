const targetTabId = parseInt(location.hash.substring(1));

document.getElementById('confirmBtn').addEventListener('click', function() {
    // Close the current confirmation tab.
    window.close();
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    // Close the Reddit or YouTube tab.
    chrome.tabs.remove(targetTabId);
    // Close the current confirmation tab.
    window.close();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'x' || event.key === 'X') {
        // Close the Reddit or YouTube tab.
        chrome.tabs.remove(targetTabId);
        // Close the current confirmation tab.
        window.close();
    }
});
