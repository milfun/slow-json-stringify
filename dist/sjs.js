var r=function(n,e){for(var t in n){if(t===e)return[t];if(n[t]&&"object"==typeof n[t]){var a=r(n[t],e);if(a)return a.unshift(t),a}}};exports.sjs=function(n){var e=function(n){var e={},t=new Map,a="",u=JSON.stringify(n,function(u,i){var o=Array.isArray(i);return("object"!=typeof i||o)&&(o&&t.set(u,i[0]),function(r){var n=new Set(["number","string","boolean","array-simple","function"]);if(Array.isArray(r)){if(n.has(r[0])||n.has(typeof r[0]))return;throw new Error('Expected either "array-simple" or a function. received '+r)}if("function"!=typeof r&&!n.has(r))throw new Error('Expected one of: "number", "string", "boolean". received '+r)}(i),e[u]=r(n,u),a+='"'+u+'"|'),i});return{map:e,arrais:t,props:a,str:u}}(n),t=e.map,a=e.arrais,u=function(r,n){var e=[],t=r.replace(n,function(r){switch(r){case'"string"':return'"__par__"';case'"number"':case'"boolean"':case'["array-simple"]':case"[null]":return"__par__";default:var n=r.match(/(?<=\").+?(?=\")/)[0];return e.push(n),r}}).split("__par__");return{queue:e,chunks:t}}(e.str,new RegExp(e.props+'"(string|number|boolean)"|\\[(.*?)\\]',"gm")),i=u.queue,o=u.chunks,s=o[o.length-1];return function(r){var n="";return i.forEach(function(e,u){var i=function(r,n){return t[e].reduce(function(r,n){return r&&r[n]},r)}(r),s=a.has(e)?function(r,n){if("array-simple"===n)return JSON.stringify(r);for(var e="",t=0,a=r;t<a.length;t+=1)e+=n(a[t])+",";return"["+e.substr(0,e.length-1)+"]"}(i,a.get(e)):i;n+=o[u]+s}),n+s}},exports.escape=function(r){var n=new RegExp(r||'\\n|\\r|\\t|\\"|\\\\',"gm");return function(r){return r.replace(n,function(r){return"\\"+r})}};
//# sourceMappingURL=sjs.js.map
