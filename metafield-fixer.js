function htmlDecode(input) {
	var doc = new DOMParser().parseFromString(input, "text/html");
	return doc.documentElement.textContent;
}

//change .metafield with your class name
document.querySelectorAll('.metafield').forEach(function(item) {
	item.innerHTML = htmlDecode(item.innerHTML);
});
