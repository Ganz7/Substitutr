// Update HTML

chrome.storage.sync.get("wordsObj", function(obj){
	console.log("Object read - " + obj);
	var DOM = document.body.innerHTML;
	for(var wKey in obj){
		DOM = DOM.replace(new RegExp(wKey, "g"), obj[wKey]);
	}
	document.body.innerHTML = DOM;
});
//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Ganesh", "g"), "Ganz");