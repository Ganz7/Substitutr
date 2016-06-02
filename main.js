// Update the HTML page

chrome.storage.sync.get('wordsObj', function(data){
	if (!chrome.runtime.error) {

		/* Get the object from the JSON String*/
		var list = JSON.parse(data.wordsObj);
		/* Get the HTML of the page */
		var DOM = document.body.innerHTML;

		/* Replace each of the words to be substituted from the list */
		for(var wKey in list){
			DOM = DOM.replace(new RegExp(wKey, "g"), list[wKey]);

			// TODO: Gotta ignore URLS.
		}

		/* Update the page */
		document.body.innerHTML = DOM;
	}
});