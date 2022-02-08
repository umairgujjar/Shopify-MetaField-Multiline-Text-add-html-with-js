# Shopify MetaField Multiline Text add html using js
Here's a quick fix to Shopify Multi Line Metafield not rendering html tags on frontend. but showing character codes. example rather than showing image it shows image tag "&lt;img src="/image.jpg">"


All you have to do is add class "metafield"

or change '.metafield' to your theme's class name where you are using metafield.


Here's code

```
<script>
function htmlDecode(input) {
	var doc = new DOMParser().parseFromString(input, "text/html");
	return doc.documentElement.textContent;
}
document.querySelectorAll('.metafield').forEach(function(item) {
	item.innerHTML = htmlDecode(item.innerHTML);
});
</script>
```

Add this code to section/snippet where you are using metafield or to theme.liquid
