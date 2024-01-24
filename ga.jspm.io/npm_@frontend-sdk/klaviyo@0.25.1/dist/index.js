import*as e from"react";var t={};Object.defineProperty(t,"__esModule",{value:true});t.subscribeToBackInStock=void 0;function subscribeToBackInStock$1({siteId:e,email:t,variant:r,product:o,listId:c,shouldSubscribe:n,platform:i,hostname:a,abortSignal:d}){const u={a:e,email:t,variant:r,product:o,platform:i};if(n){u.g=null!==c&&void 0!==c?c:"";u.subscribe_for_newsletter="true"}const l=new URLSearchParams(u);const s=null!==a&&void 0!==a?a:"a.klaviyo.com";return fetch(`//${s}/onsite/components/back-in-stock/subscribe`,{method:"POST",body:l,signal:d})}t.subscribeToBackInStock=subscribeToBackInStock$1;var r={};
/* TODO: update @typescript-eslint to fix "Parsing error: Cannot read property 'map' of undefined" when using following types */Object.defineProperty(r,"__esModule",{value:true});r.trackAddedToCart=r.trackVisitedProduct=r.trackRecentlyViewedItem=r.identifyUser=r.trackEvent=void 0;function trackEvent$1(e,t){window._learnq=window._learnq||[];return window._learnq.push(["track",e,t])}r.trackEvent=trackEvent$1;function identifyUser$1(e){window._learnq=window._learnq||[];return window._learnq.push(["identify",e])}r.identifyUser=identifyUser$1;function trackRecentlyViewedItem$1(e){const t={Title:e.Name,ItemId:e.ProductID,Categories:e.Categories,ImageUrl:e.ImageURL,Url:e.URL,Metadata:{Brand:e.Brand,Price:e.Price,CompareAtPrice:e.CompareAtPrice}};window._learnq=window._learnq||[];return window._learnq.push(["trackViewedItem",t])}r.trackRecentlyViewedItem=trackRecentlyViewedItem$1;function trackVisitedProduct$1(e){trackEvent$1("Viewed Product",e);trackRecentlyViewedItem$1(e)}r.trackVisitedProduct=trackVisitedProduct$1;function trackAddedToCart$1(e){return trackEvent$1("Added to Cart",e)}r.trackAddedToCart=trackAddedToCart$1;var o="default"in e?e.default:e;var c={};Object.defineProperty(c,"__esModule",{value:true});c.useKlaviyoForceReload=c.useKlaviyo=void 0;const n=o;function useKlaviyo$1(e){n.useEffect((()=>{const t=document.querySelector('[data-script^="klaviyo"]');if(t){const r=t.getAttribute("src");const o="string"===typeof r&&r.includes(e);if(o)return;t.remove()}injectScript(e)}),[e])}c.useKlaviyo=useKlaviyo$1;function useKlaviyoForceReload$1(e){n.useEffect((()=>{if(document.querySelector('[data-script="klaviyo"]')){console.group("Problem running `useKlaviyoForceReload`");console.info("Looks like you’ve already used `useKlaviyo`");console.info("Replace all `useKlaviyo` usages with `useKlaviyoForceReload`");console.groupEnd()}else try{const t=document.querySelector('[data-script="klaviyo-force-reload"]');if(t){delete window.klaviyoModulesObject;delete window.klFormsObject;t.remove()}Object.defineProperty(window,"klaviyoModulesObject",{configurable:true});Object.defineProperty(window,"klFormsObject",{configurable:true});const r=injectScript(e,"klaviyo-force-reload");return()=>{r.remove()}}catch(e){}}),[e])}c.useKlaviyoForceReload=useKlaviyoForceReload$1;function injectScript(e,t){const r=document.createElement("script");r.async=true;r.src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id="+e;r.dataset.script=null!==t&&void 0!==t?t:"klaviyo";document.head.append(r);return r}var i={};Object.defineProperty(i,"__esModule",{value:true});i.useKlaviyoForceReload=i.useKlaviyo=i.trackAddedToCart=i.trackVisitedProduct=i.trackRecentlyViewedItem=i.identifyUser=i.trackEvent=i.subscribeToBackInStock=void 0;var a=t;Object.defineProperty(i,"subscribeToBackInStock",{enumerable:true,get:function(){return a.subscribeToBackInStock}});var d=r;Object.defineProperty(i,"trackEvent",{enumerable:true,get:function(){return d.trackEvent}});Object.defineProperty(i,"identifyUser",{enumerable:true,get:function(){return d.identifyUser}});Object.defineProperty(i,"trackRecentlyViewedItem",{enumerable:true,get:function(){return d.trackRecentlyViewedItem}});Object.defineProperty(i,"trackVisitedProduct",{enumerable:true,get:function(){return d.trackVisitedProduct}});Object.defineProperty(i,"trackAddedToCart",{enumerable:true,get:function(){return d.trackAddedToCart}});var u=c;Object.defineProperty(i,"useKlaviyo",{enumerable:true,get:function(){return u.useKlaviyo}});Object.defineProperty(i,"useKlaviyoForceReload",{enumerable:true,get:function(){return u.useKlaviyoForceReload}});const l=i.__esModule,s=i.useKlaviyoForceReload,y=i.useKlaviyo,k=i.trackAddedToCart,v=i.trackVisitedProduct,f=i.trackRecentlyViewedItem,b=i.identifyUser,m=i.trackEvent,p=i.subscribeToBackInStock;export{l as __esModule,i as default,b as identifyUser,p as subscribeToBackInStock,k as trackAddedToCart,m as trackEvent,f as trackRecentlyViewedItem,v as trackVisitedProduct,y as useKlaviyo,s as useKlaviyoForceReload};

//# sourceMappingURL=index.js.map