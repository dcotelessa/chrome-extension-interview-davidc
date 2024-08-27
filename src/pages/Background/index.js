console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('Message received in background:', request);

    if (request.action === "saveClickedText") {
      chrome.storage.local.get(['clickedTextList'], function(result) {
        let clickedTextList = result.clickedTextList || [];
        clickedTextList.push(request.text);
        chrome.storage.local.set({clickedTextList: clickedTextList}, function() {
          console.log('Clicked text saved');
          sendResponse({status: "Clicked text saved"});
        });
      });
      return true;  // Will respond asynchronously.
    }
  }
);
