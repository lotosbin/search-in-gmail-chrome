function genericOnClick(info, tab) {
	//alert(JSON.stringify(info));
	window.open("https://mail.google.com/mail/u/0/?#apps/"+info.selectionText)
} 
var contexts = ["selection","editable"];
for ( var i = 0; i < contexts.length; i++) {
	var context = contexts[i];
	{
		var title = "Search '%s' in google mail";
		var id = chrome.contextMenus.create({
			"title" : title,
			"contexts" : [ context ],
			"onclick" : genericOnClick
		});
		console.log("'" + context + "' item:" + id);
	} 
}