function checkLocalStorageSupport() {
    if (typeof localStorage !== 'undefined') {
        alert('Local Storage is supported');
    } else {
        alert('Local Storage is not supported');
    }
}

function checkFetchAPISupport() {
    if ('fetch' in window) {
        alert('The Fetch API is supported');
    } else {
        alert('The Fetch API is not supported');
    }
}

function identifyBrowser() {
    const userAgent = navigator.userAgent;

    if (userAgent.includes('Chrome')) {
        alert('User is using Chrome');
    } else if (userAgent.includes('Firefox')) {
        alert('User is using Firefox');
    } else if (userAgent.includes('Safari')) {
        alert('User is using Safari');
    } else if (userAgent.includes('Edge')) {
        alert('User is using Microsoft Edge');
    } else if (userAgent.includes('MSIE')) {
        alert('User is using Internet Explorer');
    } else {
        alert('Could not identify the browser');
    }
}

document.getElementById('checkButton').addEventListener('click', function() {
    checkLocalStorageSupport();
    checkFetchAPISupport();
    identifyBrowser();
});