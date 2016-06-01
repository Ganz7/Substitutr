// Update HTML

chrome.storage.sync.get("wordsObj", function(obj){
	alert("Object read - " + obj);
	for(var wKey in obj){
		document.body.innerHTML = document.body.innerHTML.replace(new RegExp(wKey, "g"), obj[wKey]);
	}
});
//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Ganesh", "g"), "Ganz");