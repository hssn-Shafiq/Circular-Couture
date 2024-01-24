var t="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;(function(t){t(jQuery)})((function(e){var s=0;var i=Array.prototype.hasOwnProperty;var n=Array.prototype.slice;e.cleanData=function(t){return function(s){var i,n,o;for(o=0;null!=(n=s[o]);o++){i=e._data(n,"events");i&&i.remove&&e(n).triggerHandler("remove")}t(s)}}(e.cleanData);e.widget=function(s,i,n){var o,r,a;var l={};var u=s.split(".")[0];s=s.split(".")[1];var h=u+"-"+s;if(!n){n=i;i=e.Widget}Array.isArray(n)&&(n=e.extend.apply(null,[{}].concat(n)));e.expr.pseudos[h.toLowerCase()]=function(t){return!!e.data(t,h)};e[u]=e[u]||{};o=e[u][s];r=e[u][s]=function(e,s){if(!(this||t)||!(this||t)._createWidget)return new r(e,s);arguments.length&&this._createWidget(e,s)};e.extend(r,o,{version:n.version,_proto:e.extend({},n),_childConstructors:[]});a=new i;a.options=e.widget.extend({},a.options);e.each(n,(function(e,s){l[e]="function"===typeof s?function(){function _super(){return i.prototype[e].apply(this||t,arguments)}function _superApply(s){return i.prototype[e].apply(this||t,s)}return function(){var e=(this||t)._super;var i=(this||t)._superApply;var n;(this||t)._super=_super;(this||t)._superApply=_superApply;n=s.apply(this||t,arguments);(this||t)._super=e;(this||t)._superApply=i;return n}}():s}));r.prototype=e.widget.extend(a,{widgetEventPrefix:o&&a.widgetEventPrefix||s},l,{constructor:r,namespace:u,widgetName:s,widgetFullName:h});if(o){e.each(o._childConstructors,(function(t,s){var i=s.prototype;e.widget(i.namespace+"."+i.widgetName,r,s._proto)}));delete o._childConstructors}else i._childConstructors.push(r);e.widget.bridge(s,r);return r};e.widget.extend=function(t){var s=n.call(arguments,1);var o=0;var r=s.length;var a;var l;for(;o<r;o++)for(a in s[o]){l=s[o][a];i.call(s[o],a)&&void 0!==l&&(e.isPlainObject(l)?t[a]=e.isPlainObject(t[a])?e.widget.extend({},t[a],l):e.widget.extend({},l):t[a]=l)}return t};e.widget.bridge=function(s,i){var o=i.prototype.widgetFullName||s;e.fn[s]=function(r){var a="string"===typeof r;var l=n.call(arguments,1);var u=this||t;if(a)(this||t).length||"instance"!==r?this.each((function(){var i;var n=e.data(this||t,o);if("instance"===r){u=n;return false}if(!n)return e.error("cannot call methods on "+s+" prior to initialization; attempted to call method '"+r+"'");if("function"!==typeof n[r]||"_"===r.charAt(0))return e.error("no such method '"+r+"' for "+s+" widget instance");i=n[r].apply(n,l);if(i!==n&&void 0!==i){u=i&&i.jquery?u.pushStack(i.get()):i;return false}})):u=void 0;else{l.length&&(r=e.widget.extend.apply(null,[r].concat(l)));this.each((function(){var s=e.data(this||t,o);if(s){s.option(r||{});s._init&&s._init()}else e.data(this||t,o,new i(r,this||t))}))}return u}};e.Widget=function(){};e.Widget._childConstructors=[];e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:false,create:null},_createWidget:function(i,n){n=e(n||(this||t).defaultElement||this||t)[0];(this||t).element=e(n);(this||t).uuid=s++;(this||t).eventNamespace="."+(this||t).widgetName+(this||t).uuid;(this||t).bindings=e();(this||t).hoverable=e();(this||t).focusable=e();(this||t).classesElementLookup={};if(n!==(this||t)){e.data(n,(this||t).widgetFullName,this||t);this._on(true,(this||t).element,{remove:function(t){t.target===n&&this.destroy()}});(this||t).document=e(n.style?n.ownerDocument:n.document||n);(this||t).window=e((this||t).document[0].defaultView||(this||t).document[0].parentWindow)}(this||t).options=e.widget.extend({},(this||t).options,this._getCreateOptions(),i);this._create();(this||t).options.disabled&&this._setOptionDisabled((this||t).options.disabled);this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){var s=this||t;this._destroy();e.each((this||t).classesElementLookup,(function(t,e){s._removeClass(e,t)}));(this||t).element.off((this||t).eventNamespace).removeData((this||t).widgetFullName);this.widget().off((this||t).eventNamespace).removeAttr("aria-disabled");(this||t).bindings.off((this||t).eventNamespace)},_destroy:e.noop,widget:function(){return(this||t).element},option:function(s,i){var n=s;var o;var r;var a;if(0===arguments.length)return e.widget.extend({},(this||t).options);if("string"===typeof s){n={};o=s.split(".");s=o.shift();if(o.length){r=n[s]=e.widget.extend({},(this||t).options[s]);for(a=0;a<o.length-1;a++){r[o[a]]=r[o[a]]||{};r=r[o[a]]}s=o.pop();if(1===arguments.length)return void 0===r[s]?null:r[s];r[s]=i}else{if(1===arguments.length)return void 0===(this||t).options[s]?null:(this||t).options[s];n[s]=i}}this._setOptions(n);return this||t},_setOptions:function(e){var s;for(s in e)this._setOption(s,e[s]);return this||t},_setOption:function(e,s){"classes"===e&&this._setOptionClasses(s);(this||t).options[e]=s;"disabled"===e&&this._setOptionDisabled(s);return this||t},_setOptionClasses:function(s){var i,n,o;for(i in s){o=(this||t).classesElementLookup[i];if(s[i]!==(this||t).options.classes[i]&&o&&o.length){n=e(o.get());this._removeClass(o,i);n.addClass(this._classes({element:n,keys:i,classes:s,add:true}))}}},_setOptionDisabled:function(e){this._toggleClass(this.widget(),(this||t).widgetFullName+"-disabled",null,!!e);if(e){this._removeClass((this||t).hoverable,null,"ui-state-hover");this._removeClass((this||t).focusable,null,"ui-state-focus")}},enable:function(){return this._setOptions({disabled:false})},disable:function(){return this._setOptions({disabled:true})},_classes:function(s){var i=[];var n=this||t;s=e.extend({element:(this||t).element,classes:(this||t).options.classes||{}},s);function bindRemoveEvent(){var t=[];s.element.each((function(s,i){var o=e.map(n.classesElementLookup,(function(t){return t})).some((function(t){return t.is(i)}));o||t.push(i)}));n._on(e(t),{remove:"_untrackClassesElement"})}function processClassString(t,o){var r,a;for(a=0;a<t.length;a++){r=n.classesElementLookup[t[a]]||e();if(s.add){bindRemoveEvent();r=e(e.uniqueSort(r.get().concat(s.element.get())))}else r=e(r.not(s.element).get());n.classesElementLookup[t[a]]=r;i.push(t[a]);o&&s.classes[t[a]]&&i.push(s.classes[t[a]])}}s.keys&&processClassString(s.keys.match(/\S+/g)||[],true);s.extra&&processClassString(s.extra.match(/\S+/g)||[]);return i.join(" ")},_untrackClassesElement:function(s){var i=this||t;e.each(i.classesElementLookup,(function(t,n){-1!==e.inArray(s.target,n)&&(i.classesElementLookup[t]=e(n.not(s.target).get()))}));this._off(e(s.target))},_removeClass:function(t,e,s){return this._toggleClass(t,e,s,false)},_addClass:function(t,e,s){return this._toggleClass(t,e,s,true)},_toggleClass:function(e,s,i,n){n="boolean"===typeof n?n:i;var o="string"===typeof e||null===e,r={extra:o?s:i,keys:o?e:s,element:o?(this||t).element:e,add:n};r.element.toggleClass(this._classes(r),n);return this||t},_on:function(s,i,n){var o;var r=this||t;if("boolean"!==typeof s){n=i;i=s;s=false}if(n){i=o=e(i);(this||t).bindings=(this||t).bindings.add(i)}else{n=i;i=(this||t).element;o=this.widget()}e.each(n,(function(n,a){function handlerProxy(){if(s||true!==r.options.disabled&&!e(this||t).hasClass("ui-state-disabled"))return("string"===typeof a?r[a]:a).apply(r,arguments)}"string"!==typeof a&&(handlerProxy.guid=a.guid=a.guid||handlerProxy.guid||e.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/);var u=l[1]+r.eventNamespace;var h=l[2];h?o.on(u,h,handlerProxy):i.on(u,handlerProxy)}))},_off:function(s,i){i=(i||"").split(" ").join((this||t).eventNamespace+" ")+(this||t).eventNamespace;s.off(i);(this||t).bindings=e((this||t).bindings.not(s).get());(this||t).focusable=e((this||t).focusable.not(s).get());(this||t).hoverable=e((this||t).hoverable.not(s).get())},_delay:function(e,s){function handlerProxy(){return("string"===typeof e?i[e]:e).apply(i,arguments)}var i=this||t;return setTimeout(handlerProxy,s||0)},_hoverable:function(s){(this||t).hoverable=(this||t).hoverable.add(s);this._on(s,{mouseenter:function(t){this._addClass(e(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(e(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(s){(this||t).focusable=(this||t).focusable.add(s);this._on(s,{focusin:function(t){this._addClass(e(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(e(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(s,i,n){var o,r;var a=(this||t).options[s];n=n||{};i=e.Event(i);i.type=(s===(this||t).widgetEventPrefix?s:(this||t).widgetEventPrefix+s).toLowerCase();i.target=(this||t).element[0];r=i.originalEvent;if(r)for(o in r)o in i||(i[o]=r[o]);(this||t).element.trigger(i,n);return!("function"===typeof a&&false===a.apply((this||t).element[0],[i].concat(n))||i.isDefaultPrevented())}};e.each({show:"fadeIn",hide:"fadeOut"},(function(s,i){e.Widget.prototype["_"+s]=function(n,o,r){"string"===typeof o&&(o={effect:o});var a;var l=o?true===o||"number"===typeof o?i:o.effect||i:s;o=o||{};"number"===typeof o?o={duration:o}:true===o&&(o={});a=!e.isEmptyObject(o);o.complete=r;o.delay&&n.delay(o.delay);a&&e.effects&&e.effects.effect[l]?n[s](o):l!==s&&n[l]?n[l](o.duration,o.easing,r):n.queue((function(i){e(this||t)[s]();r&&r.call(n[0]);i()}))}}));return e.widget}));var e={};export{e as default};

//# sourceMappingURL=widget.js.map