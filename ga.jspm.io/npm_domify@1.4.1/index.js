var e={};e=parse;var t=false;var l;if("undefined"!==typeof document){l=document.createElement("div");l.innerHTML='  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';t=!l.getElementsByTagName("link").length;l=void 0}var r={legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],_default:t?[1,"X<div>","</div>"]:[0,"",""]};r.td=r.th=[3,"<table><tbody><tr>","</tr></tbody></table>"];r.option=r.optgroup=[1,'<select multiple="multiple">',"</select>"];r.thead=r.tbody=r.colgroup=r.caption=r.tfoot=[1,"<table>","</table>"];r.polyline=r.ellipse=r.polygon=r.circle=r.text=r.line=r.path=r.rect=r.g=[1,'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">',"</svg>"];
/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */function parse(e,t){if("string"!=typeof e)throw new TypeError("String expected");t||(t=document);var l=/<([\w:]+)/.exec(e);if(!l)return t.createTextNode(e);e=e.replace(/^\s+|\s+$/g,"");var a=l[1];if("body"==a){var i=t.createElement("html");i.innerHTML=e;return i.removeChild(i.lastChild)}var o=Object.prototype.hasOwnProperty.call(r,a)?r[a]:r._default;var d=o[0];var n=o[1];var p=o[2];i=t.createElement("div");i.innerHTML=n+e+p;while(d--)i=i.lastChild;if(i.firstChild==i.lastChild)return i.removeChild(i.firstChild);var c=t.createDocumentFragment();while(i.firstChild)c.appendChild(i.removeChild(i.firstChild));return c}var a=e;export default a;

//# sourceMappingURL=index.js.map