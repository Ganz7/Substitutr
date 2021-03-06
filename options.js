
function save_options(){
	var wordSubstitutions = document.getElementById('sList').value;

	chrome.storage.sync.set({
    	'wordsObj': wordSubstitutions
	}, function() {
	    // Update status to let user know options were saved.
	    var status = document.getElementById('status');
	    status.textContent = 'Options saved.';
	    setTimeout(function() {
	      status.textContent = '';
	    }, 750);
	});
}

document.getElementById('save').addEventListener('click', save_options);

chrome.storage.sync.get('wordsObj', function(data){
	if (!chrome.runtime.error) {
		document.getElementById("sList").innerHTML = data.wordsObj;
	}
});