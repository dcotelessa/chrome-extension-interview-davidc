console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

document.addEventListener(
  'click',
  function (event) {
    var txt = event.target.innerText;

    chrome.runtime.sendMessage({action: "saveClickedText", text: txt}, function(response) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log('Response received:', response);
      }
    });
  },
  false
);