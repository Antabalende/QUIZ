export function decodeHtmlEntities(str) {

 if (!str) return "";

 const entities = {
 "&amp;": "&",
 "&quot;": '"',
 "&#039;": "'",
 "&lt;": "<",
 "&gt;": ">",
 };

 return str.replace(
 /&amp;|&quot;|&#039;|&lt;|&gt;/g,
 (match) => entities[match]
 );
}
