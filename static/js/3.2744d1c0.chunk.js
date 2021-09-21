(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[3],{207:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(2),c=a(0),i=a(128),l=a(1);function s(e){var t=e.value,a=e.onChange,s=e.className,r=void 0===s?"":s,d=e.disabled,o=void 0!==d&&d,u=e.float,j=void 0!==u&&u,b=e.placeholder,h=e.allowEmpty,v=void 0!==h&&h,x=e.max,O=e.min,m=Object(c.useState)(""),f=Object(n.a)(m,2),p=f[0],y=f[1],g=Object(c.useCallback)((function(){if(v&&""===p)return a(void 0);if(""===p)return a(0);var e=j?parseFloat:parseInt;a(e(p))}),[a,p,j,v]);return Object(c.useEffect)((function(){var e;return y(null!==(e=null===t||void 0===t?void 0:t.toString())&&void 0!==e?e:"")}),[t,y]),Object(l.jsx)(i.a,{value:p,"aria-label":"custom-input",className:"hide-appearance ".concat(r),type:"number",placeholder:b,onChange:function(e){return y(e.target.value)},onBlur:g,disabled:o,onKeyDown:function(e){return"Enter"===e.key&&g()},max:x,min:O})}},208:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(29),c=a(10),i=a(0),l=a(222),s=a(217),r=a(334),d=a(97),o=a(204),u=a(1);function j(e){var t,a,j=e.field,b=e.index,h=e.className,v=void 0===h?"p-2":h,x=Object(i.useContext)(d.a),O=x.newBuild,m=x.equippedBuild,f=x.compareBuild,p=O||m,y=Object(i.useMemo)((function(){var e;return!!p&&(null===j||void 0===j||null===(e=j.canShow)||void 0===e?void 0:e.call(j,p))}),[j,p]),g=(null===j||void 0===j?void 0:j.fixed)||0,N=Object(i.useMemo)((function(){if(j.value)return o.a.getTalentFieldValue(j,"value",p);if(j.formula){var e,t,a=null===(e=o.a.getTalentFieldValue(j,"formula",p))||void 0===e||null===(t=e[0])||void 0===t?void 0:t.call(e,p);if(f&&m&&"number"===typeof a){var n,c,i,l,s,r,d,b,h,v=j.value?j.value:null===(n=j.formula)||void 0===n||null===(c=n.call(j,m))||void 0===c||null===(i=c[0])||void 0===i?void 0:i.call(c,m);"function"===typeof v&&(v=parseInt(null===(l=v)||void 0===l||null===(s=l(m))||void 0===s||null===(r=s.toFixed)||void 0===r?void 0:r.call(s,g)));var x=a-v;a=Object(u.jsxs)("span",{children:[null!==(d=null===(b=v)||void 0===b?void 0:b.toFixed(g))&&void 0!==d?d:v,x?Object(u.jsxs)("span",{className:x>0?"text-success":"text-danger",children:[" (",x>0?"+":"",(null===x||void 0===x||null===(h=x.toFixed)||void 0===h?void 0:h.call(x,g))||x,")"]}):""]})}return a}}),[f,g,m,j,p]),S=Object(i.useMemo)((function(){return o.a.getTalentFieldValue(j,"text",p)}),[j,p]),k=Object(i.useMemo)((function(){return o.a.getTalentFieldValue(j,"variant",p)}),[j,p]),V=Object(i.useMemo)((function(){var e=o.a.getTalentFieldValue(j,"formulaText",p);return e?Object(u.jsx)(l.a,{placement:"top",overlay:Object(u.jsx)(s.a,{id:"field-formula",children:e}),children:Object(u.jsx)(c.a,{icon:n.x,className:"ml-2",style:{cursor:"help"}})}):null}),[j,p]),C=Object(i.useMemo)((function(){return o.a.getTalentFieldValue(j,"unit",p)}),[j,p]);return y?Object(u.jsxs)(r.a.Item,{variant:b%2?"customdark":"customdarker",className:v,children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("b",{children:S}),V]}),Object(u.jsxs)("span",{className:"float-right text-right text-".concat(k),children:[null!==(t=null===N||void 0===N||null===(a=N.toFixed)||void 0===a?void 0:a.call(N,g))&&void 0!==t?t:N,C]})]}):null}},213:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(8),c=a(0),i=a(45),l=a(36);function s(e){var t=Object(c.useContext)(i.b);return Object(c.useCallback)((function(a){if(e)if("type"in a)switch(a.type){case"weapon":t.setWeaponLocation(a.id,e);break;case"bonusStats":var c=t._getChar(e),i=a.statKey,s=a.value,r=c.bonusStats;if(r[i]===s)return;!s||l.d.includes(i)&&Object(l.a)(c)[i]===s?delete r[i]:r[i]=s,t.updateChar(Object(n.a)(Object(n.a)({},c),{},{bonusStats:r}))}else t.updateChar(Object(n.a)(Object(n.a)({},t._getChar(e)),a))}),[e,t])}},223:function(e,t,a){"use strict";a.d(t,"a",(function(){return N}));var n=a(0),c=a.n(n),i=a(334),l=a(97),s=a(11),r=a(2),d=a(12),o=a(187),u=a(100),j=a(29),b=a(10),h=a(188),v=a(118),x=a(186),O=a(1);function m(e){var t=e.conditional,a=e.conditionalValue,n=e.setConditional,i=e.name,l=e.disabled,o=e.stats,u=Object(r.a)(a,2),m=u[0],f=void 0===m?0:m,p=u[1];if(!t)return i;if("states"in t){var y=p?t.states[p]:Object.values(t.states)[0],g=0===f?"Not Active":Object(O.jsxs)("span",{children:[y.name," ",Object(s.f)(y.maxStack,o)>1?": ".concat(f," stack").concat(f>1?"s":""):""]}),N=Object(O.jsx)(h.a,{variant:0===f?"secondary":"success",children:g});return Object(O.jsxs)(x.a,{children:[Object(O.jsx)(x.a.Toggle,{size:"sm",disabled:l,children:Object(O.jsxs)("h6",{className:"mb-0 d-inline",style:{whiteSpace:"normal"},children:[i," ",N]})}),Object(O.jsxs)(x.a.Menu,{children:[Object(O.jsx)(x.a.Item,{onClick:function(){return n([0])},children:Object(O.jsx)("span",{children:"Not Active"})}),Object.entries(t.states).map((function(e,t){var a=Object(r.a)(e,2),i=a[0],l=a[1];return Object(O.jsx)(c.a.Fragment,{children:Object(d.a)(Array(l.maxStack).keys()).map((function(e){return e+1})).map((function(e,t){return Object(O.jsxs)(x.a.Item,{onClick:function(){return n([e,i])},children:[l.name,l.maxStack>1?": ".concat(e," stack").concat(e>1?"s":""):""]},i+t)}))},t)}))]})]})}var S=Object(s.f)(t.maxStack,o);if(S>1){var k=Object(O.jsx)(h.a,{variant:0===f?"secondary":"success",children:f>0?"".concat(f," stack").concat(f>1?"s":""):"Not Active"});return Object(O.jsxs)(x.a,{children:[Object(O.jsx)(x.a.Toggle,{size:"sm",disabled:l,children:Object(O.jsxs)("h6",{className:"mb-0 d-inline",style:{whiteSpace:"normal"},children:[i," ",k]})}),Object(O.jsxs)(x.a.Menu,{children:[Object(O.jsx)(x.a.Item,{onClick:function(){return n([0])},children:Object(O.jsx)("span",{children:"Not Active"})}),Object(d.a)(Array(S).keys()).map((function(e){return e+1})).map((function(e){return Object(O.jsx)(x.a.Item,{onClick:function(){return n([e])},children:"".concat(e," stack").concat(e>1?"s":"")},e)}))]})]})}return 1===S?Object(O.jsx)(v.a,{size:"sm",onClick:function(){return n([f?0:1])},disabled:l,children:Object(O.jsxs)("h6",{className:"mb-0",children:[Object(O.jsx)(b.a,{icon:f?j.f:j.B})," ",i]})}):null}var f=a(213),p=a(98),y=a(208);function g(e){var t=e.conditional,a=e.characterKey,c=e.fieldClassName,j=Object(n.useContext)(l.a),b=j.newBuild,h=j.equippedBuild,v=Object(f.a)(a),x=b||h,g=Object(n.useMemo)((function(){return u.a.canShow(t,x)}),[t,x]),N=Object(n.useMemo)((function(){return g&&u.a.resolve(t,x,void 0)}),[g,t,x]),S=N.stats,k=void 0===S?{}:S,V=N.fields,C=void 0===V?[]:V,F=N.conditionalValue,w=Object(n.useMemo)((function(){return g&&[].concat(Object(d.a)(Object(p.a)(k,x)),Object(d.a)(C))}),[g,k,x,C]),B=Object(n.useCallback)((function(e){if(x){var a=Object(r.a)(e,1)[0];(void 0===a?0:a)?t.keys&&Object(s.k)(x.conditionalValues,t.keys,e):(Object(s.e)(x.conditionalValues,t.keys),Object(s.l)(x.conditionalValues)),v({conditionalValues:x.conditionalValues})}}),[t,x,v]);return g&&x?Object(O.jsxs)(o.a,{bg:"darkcontent",text:"lightfont",className:"mb-2 w-100",children:[Object(O.jsx)(o.a.Header,{className:"p-2",children:Object(O.jsx)(m,{conditional:t,conditionalValue:F,setConditional:B,name:t.name,stats:x})}),Object(O.jsx)(i.a,{className:"text-white",variant:"flush",children:w.map((function(e,t){return Object(O.jsx)(y.a,{index:t,field:e,className:c},t)}))})]}):null}function N(e){var t=e.sections,a=e.characterKey,c=Object(n.useContext)(l.a),r=c.newBuild,d=c.equippedBuild,o=r||d;return o?Object(O.jsx)("div",{className:"w-100",children:null===t||void 0===t?void 0:t.map((function(e,t){var n,c;if(!e.canShow(o))return null;var l=Object(s.f)(e.text,o),r=null!==(n=e.fields)&&void 0!==n?n:[];return Object(O.jsxs)("div",{className:"my-2",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"mb-2",children:l}),r.length>0&&Object(O.jsx)(i.a,{className:"text-white mb-2",children:null===r||void 0===r||null===(c=r.map)||void 0===c?void 0:c.call(r,(function(e,t){return Object(O.jsx)(y.a,{index:t,field:e},t)}))})]}),!!e.conditional&&Object(O.jsx)(g,{conditional:e.conditional,characterKey:a})]},"section"+t)}))}):null}},286:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(187),c=a(188),i=a(334),l=a(223),s=a(208),r=a(111),d=a(98),o=a(112),u=a(1);function j(e){var t=e.setKey,a=e.setNumKey,j=e.equippedBuild,b=e.newBuild,h=e.characterKey,v=Object(r.a)(o.a.get(t),[t]);if(!v)return null;var x=null!==b&&void 0!==b?b:j,O=v.setEffectDesc(a),m=v.setNumStats(a,x),f=Object(d.a)(m,x),p=v.setEffectDocument(a);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(n.a,{bg:"darkcontent",text:"lightfont",className:"mb-2 w-100",children:[Object(u.jsxs)(n.a.Header,{className:"p-2",children:[Object(u.jsxs)(c.a,{variant:"success",children:[a,"-Set"]})," ",O]}),Object(u.jsx)(i.a,{className:"text-white",variant:"flush",children:f.map((function(e,t){return Object(u.jsx)(s.a,{index:t,field:e},t)}))})]}),p?Object(u.jsx)(l.a,{sections:p,characterKey:h}):null]})}},287:function(e,t,a){"use strict";a.d(t,"e",(function(){return M})),a.d(t,"f",(function(){return _})),a.d(t,"d",(function(){return A})),a.d(t,"b",(function(){return R})),a.d(t,"a",(function(){return D})),a.d(t,"g",(function(){return z})),a.d(t,"c",(function(){return L}));var n=a(12),c=a(8),i=a(2),l=a(29),s=a(10),r=a(0),d=a(186),o=a(541),u=a(335),j=a(187),b=a(558),h=a(118),v=a(121),x=a(70),O=a(239),m=a(188),f=a(289),p=a(97),y=a(115),g=a(69),N=a(213),S=a(111),k=a(33),V=a(210),C=a(15),F=a(36),w=a(204),B=a(212),K=a(288),E=a(1),T={"":Object(E.jsx)("span",{children:"No External Infusion"}),pyro:Object(E.jsxs)("span",{children:[y.b.pyro," Pyro Infusion"]}),cryo:Object(E.jsxs)("span",{children:[y.b.cryo," Cryo Infusion"]})};function M(e){var t=e.characterSheet,a=e.character,n=a.infusionAura,c=void 0===n?"":n,l=a.key,s=e.className,r=e.disabled,o=void 0!==r&&r,u=Object(N.a)(l);return t.isMelee()?Object(E.jsxs)(d.a,{className:s,children:[Object(E.jsx)(d.a.Toggle,{variant:c||"secondary",disabled:o,children:T[c]}),Object(E.jsx)(d.a.Menu,{children:Object.entries(T).map((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(E.jsx)(d.a.Item,{className:"text-".concat(a),onClick:function(){return u({infusionAura:a})},children:n},a)}))})]}):null}function _(e){var t=e.character,a=t.reactionMode,n=void 0===a?null:a,c=t.infusionAura,i=t.key,l=e.build,s=e.className,r=e.disabled,d=void 0!==r&&r,j=Object(N.a)(i);if(!l)return null;var b=l.characterEle;if(!["pyro","hydro","cryo"].includes(b)&&!["pyro","hydro","cryo"].includes(c))return null;var h=function(e){return e?"success":"secondary"};return Object(E.jsxs)(o.a,{className:s,type:"radio",name:"reactionMode",value:n,onChange:function(e){return j({reactionMode:"none"===e?null:e})},children:[Object(E.jsx)(u.a,{value:"none",variant:h(!n),disabled:d,children:"No Reactions"}),("pyro"===b||"pyro"===c)&&Object(E.jsx)(u.a,{value:"pyro_vaporize",variant:h("pyro_vaporize"===n),disabled:d,children:Object(E.jsxs)("span",{className:"text-vaporize",children:["Vaporize(Pyro) ",y.a.hydro,"+",y.a.pyro]})}),("pyro"===b||"pyro"===c)&&Object(E.jsx)(u.a,{value:"pyro_melt",variant:h("pyro_melt"===n),disabled:d,children:Object(E.jsxs)("span",{className:"text-melt",children:["Melt(Pyro) ",y.a.cryo,"+",y.a.pyro]})}),("hydro"===b||"hydro"===c)&&Object(E.jsx)(u.a,{value:"hydro_vaporize",variant:h("hydro_vaporize"===n),disabled:d,children:Object(E.jsxs)("span",{className:"text-vaporize",children:["Vaporize(Hydro) ",y.a.pyro,"+",y.a.hydro]})}),("cryo"===b||"cryo"===c)&&Object(E.jsx)(u.a,{value:"cryo_melt",variant:h("cryo_melt"===n),disabled:d,children:Object(E.jsxs)("span",{className:"text-melt",children:["Melt(Cryo) ",y.a.pyro,"+",y.a.cryo]})})]})}function A(e){var t=e.characterKey,a=e.hitMode,n=e.className,c=e.disabled,i=void 0!==c&&c,l=Object(N.a)(t),s=function(e){return e?"success":"secondary"};return Object(E.jsxs)(o.a,{type:"radio",value:a,name:"hitOptions",onChange:function(e){return l({hitMode:e})},className:n,children:[Object(E.jsx)(u.a,{value:"avgHit",variant:s("avgHit"===a),disabled:i,children:"Avg. DMG"}),Object(E.jsx)(u.a,{value:"hit",variant:s("hit"===a),disabled:i,children:"Non Crit DMG"}),Object(E.jsx)(u.a,{value:"critHit",variant:s("critHit"===a),disabled:i,children:"Crit Hit DMG"})]})}function H(e){var t=e.sheets,a=e.build,n=Object(r.useMemo)((function(){return a&&w.a.getDisplayStatKeys(a,t)}),[a,t]);return a?Object(E.jsx)("div",{children:Object.entries(n).map((function(e){var n=Object(i.a)(e,2),c=n[0],l=n[1],s=Object(B.a)(c,t,a.characterEle);return Object(E.jsxs)(j.a,{bg:"darkcontent",text:"lightfont",className:"w-100 mb-2",children:[Object(E.jsx)(j.a.Header,{children:s}),Object(E.jsx)(j.a.Body,{className:"p-2",children:Object(E.jsx)(b.a,{className:"mb-n2",children:l.map((function(e,t){if(Array.isArray(e))return Object(E.jsx)(I,{fieldKeys:e,build:a,fieldIndex:t},t);if("string"===typeof e){var n=k.b.getPrintableFormulaStatKeyList(Object(V.a)(a,null===a||void 0===a?void 0:a.modifiers,[e]),null===a||void 0===a?void 0:a.modifiers).reverse();return Boolean(n.length)&&Object(E.jsxs)(j.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(E.jsx)(b.a.Toggle,{as:j.a.Header,className:"p-2 cursor-pointer",variant:"link",eventKey:"field".concat(t),children:k.b.printStat(e,a)}),Object(E.jsx)(b.a.Collapse,{eventKey:"field".concat(t),children:Object(E.jsx)(j.a.Body,{className:"p-2",children:Object(E.jsx)("div",{className:"mb-n2",children:n.map((function(e){return Object(E.jsxs)("p",{className:"mb-2",children:[k.b.printStat(e,a)," = ",Object(E.jsx)("small",{children:Object(E.jsx)(k.a,{statKey:e,stats:a,modifiers:a.modifiers,expand:!1})})]},e)}))})})})]},t)}return null}))})})]},c)}))}):null}function R(e){var t=e.character,a=e.character.key,i=e.bsProps,r=void 0===i?{xs:12,xl:6}:i,d=Object(N.a)(a),o=Object(F.a)(t);return Object(E.jsxs)(j.a,{className:"mb-2",bg:"darkcontent",text:"lightfont",children:[Object(E.jsx)(j.a.Header,{children:Object(E.jsx)("h6",{children:"Enemy Editor"})}),Object(E.jsxs)(j.a.Body,{className:"p-2",children:[Object(E.jsx)(h.a,{variant:"warning",size:"sm",className:"mb-2",children:Object(E.jsx)("a",{href:"https://genshin-impact.fandom.com/wiki/Resistance#Base_Enemy_Resistances",target:"_blank",rel:"noreferrer",children:"To get the specific resistance values of enemies, please visit the wiki."})}),Object(E.jsxs)(v.a,{children:[Object(E.jsx)(x.a,Object(c.a)(Object(c.a)({className:"mb-2"},r),{},{children:Object(E.jsx)(K.a,{name:Object(E.jsx)("b",{children:"Enemy Level"}),value:w.a.getStatValueWithBonus(t,"enemyLevel"),placeholder:k.b.getStatNameRaw("enemyLevel"),defaultValue:o.enemyLevel,onValueChange:function(e){return d({type:"bonusStats",statKey:"enemyLevel",value:e})}})})),["physical"].concat(Object(n.a)(C.d)).map((function(e){var a="".concat(e,"_enemyRes_"),n="".concat(e,"_enemyImmunity"),i=w.a.getStatValueWithBonus(t,n);return Object(E.jsx)(x.a,Object(c.a)(Object(c.a)({className:"mb-2"},r),{},{children:Object(E.jsx)(K.a,{prependEle:Object(E.jsxs)(h.a,{variant:e,onClick:function(){return d({type:"bonusStats",statKey:n,value:!i})},className:"text-darkcontent",children:[Object(E.jsx)(s.a,{icon:i?l.f:l.B,className:"fa-fw"})," Immunity"]}),name:Object(E.jsx)("b",{children:k.b.getStatName(a)}),value:w.a.getStatValueWithBonus(t,a),placeholder:k.b.getStatNameRaw(a),defaultValue:o[a],onValueChange:function(e){return d({type:"bonusStats",statKey:a,value:e})},disabled:i,percent:!0})}),e)})),Object(E.jsx)(x.a,Object(c.a)(Object(c.a)({className:"mb-2"},r),{},{children:Object(E.jsx)(K.a,{name:Object(E.jsx)("b",{children:k.b.getStatName("enemyDEFRed_")}),value:w.a.getStatValueWithBonus(t,"enemyDEFRed_"),placeholder:k.b.getStatNameRaw("enemyDEFRed_"),defaultValue:o.enemyDEFRed_,onValueChange:function(e){return d({type:"bonusStats",statKey:"enemyDEFRed_",value:e})},percent:!0})}))]}),Object(E.jsx)("small",{children:"Note: Genshin Impact halves resistance shred values below 0%. For the sake of calculations enter the RAW value and GO will do the rest. (e.g. 10% - 20% = -10%)"})]})]})}function I(e){var t,a,n,c,l=e.fieldKeys,s=e.build,r=e.fieldIndex,d=Object(S.a)(g.a.get(l),[l]);if(!d)return null;var o=d.field,u=w.a.getTalentFieldValue(o,"text",s),h=w.a.getTalentFieldValue(o,"variant",s),v=w.a.getTalentFieldValue(o,"formulaText",s),x=null!==(t=w.a.getTalentFieldValue(o,"fixed",s))&&void 0!==t?t:0,O=null!==(a=w.a.getTalentFieldValue(o,"unit",s))&&void 0!==a?a:"",m=w.a.getTalentFieldValue(o,"formula",s,[]),f=Object(i.a)(m,2),p=f[0],y=f[1];if(!p||!y)return null;var N=null===p||void 0===p||null===(n=p(s))||void 0===n||null===(c=n.toFixed)||void 0===c?void 0:c.call(n,x),C=k.b.getPrintableFormulaStatKeyList(Object(V.a)(s,null===s||void 0===s?void 0:s.modifiers,y),null===s||void 0===s?void 0:s.modifiers).reverse();return Object(E.jsxs)(j.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(E.jsxs)(b.a.Toggle,{as:j.a.Header,className:"p-2 cursor-pointer",variant:"link",eventKey:"field".concat(r),children:[Object(E.jsx)("b",{className:"text-".concat(h),children:u})," ",Object(E.jsxs)("span",{className:"text-info",children:[N,O]})]}),Object(E.jsx)(b.a.Collapse,{eventKey:"field".concat(r),children:Object(E.jsx)(j.a.Body,{className:"p-2",children:Object(E.jsxs)("div",{className:"mb-n2",children:[Object(E.jsxs)("p",{className:"mb-2",children:[Object(E.jsx)("b",{className:"text-".concat(h),children:u})," ",Object(E.jsx)("span",{className:"text-info",children:N})," = ",Object(E.jsx)("small",{children:v})]}),C.map((function(e){return Object(E.jsxs)("p",{className:"mb-2",children:[k.b.printStat(e,s)," = ",Object(E.jsx)("small",{children:Object(E.jsx)(k.a,{statKey:e,stats:s,modifiers:s.modifiers,expand:!1})})]},e)}))]})})})]})}var D=function(e){var t=e.eventKey,a=e.callback,n=Object(r.useContext)(O.a),c=Object(f.b)(t,(function(){return a&&a(t)})),i=n===t;return Object(E.jsxs)(h.a,{onClick:c,variant:"info",size:"sm",children:[Object(E.jsx)(s.a,{icon:i?l.L:l.K,className:"fa-fw ".concat(i?"fa-rotate-180":"")}),Object(E.jsx)("span",{children:" "}),i?"Retract":"Expand"]})};function z(e){var t=e.sheets,a=e.sheets,c=a.characterSheet,i=(a.weaponSheet,e.character),l=e.character,s=l.hitMode,d=l.key,o=Object(r.useContext)(p.a),u=o.newBuild,O=o.equippedBuild,f=u||O;return Object(E.jsxs)("div",{className:"mb-2",children:[Object(E.jsx)(j.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(E.jsx)(j.a.Header,{children:Object(E.jsxs)(v.a,{className:"mb-n2",children:[Object(E.jsx)(x.a,{xs:"auto",children:Object(E.jsx)(M,{characterSheet:c,character:i,className:"mb-2"})}),Object(E.jsx)(x.a,{xs:"auto",children:Object(E.jsx)(A,{characterKey:d,hitMode:s,className:"mb-2"})}),Object(E.jsx)(x.a,{xs:"auto",children:Object(E.jsx)(_,{character:i,build:f,className:"mb-2"})})]})})}),Object(E.jsx)(b.a,{children:Object(E.jsxs)(j.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(E.jsx)(j.a.Header,{children:Object(E.jsxs)(v.a,{children:[Object(E.jsxs)(x.a,{children:["Formulas ","&"," Calculations"]}),Object(E.jsx)(x.a,{xs:"auto",children:Object(E.jsx)(D,{callback:void 0,as:h.a,eventKey:"details"})})]})}),Object(E.jsx)(b.a.Collapse,{eventKey:"details",children:Object(E.jsx)(j.a.Body,{className:"p-2",children:Object(E.jsx)(H,{sheets:t,build:f})})})]})}),Object(E.jsx)(b.a,{children:Object(E.jsxs)(j.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(E.jsx)(j.a.Header,{children:Object(E.jsxs)(v.a,{children:[Object(E.jsx)(x.a,{children:Object(E.jsxs)("h4",{className:"mb-0",children:[Object(E.jsxs)(m.a,{pill:!0,variant:"success",className:"mr-2",children:[k.b.getStatName("enemyLevel")," ",Object(E.jsx)("strong",{children:w.a.getStatValueWithBonus(i,"enemyLevel")})]}),["physical"].concat(Object(n.a)(C.d)).map((function(e){return Object(E.jsx)("span",{className:"mr-2",children:Object(E.jsx)(L,{element:e,character:i})},e)})),Object(E.jsx)("span",{children:Object(E.jsxs)("h6",{className:"d-inline",children:["DEF Reduction ",w.a.getStatValueWithBonus(i,"enemyDEFRed_"),"%"]})})]})}),Object(E.jsx)(x.a,{xs:"auto",children:Object(E.jsx)(D,{callback:void 0,as:h.a,eventKey:"enemyEditor"})})]})}),Object(E.jsx)(b.a.Collapse,{eventKey:"enemyEditor",children:Object(E.jsx)(j.a.Body,{className:"p-2",children:Object(E.jsx)(R,{character:i})})})]})})]})}function L(e){var t=e.character,a=e.element,n=!!w.a.getStatValueWithBonus(t,"".concat(a,"_enemyImmunity")),c="".concat(a,"_enemyRes_"),i=n?Object(E.jsxs)("span",{children:[y.b[a]," IMMUNE"]}):Object(E.jsxs)("span",{children:[y.b[a],"RES ",Object(E.jsxs)("strong",{children:[w.a.getStatValueWithBonus(t,c),"%"]})]});return Object(E.jsx)("h6",{className:"text-".concat(a," d-inline"),children:i})}},288:function(e,t,a){"use strict";var n=a(8),c=a(124),i=a(29),l=a(10),s=a(118),r=a(230),d=a(222),o=a(217),u=a(207),j=a(1);t.a=function(e){var t=e.name,a=e.prependEle,b=e.value,h=e.placeholder,v=e.defaultValue,x=void 0===v?0:v,O=e.onValueChange,m=e.percent,f=void 0!==m&&m,p=e.disabled,y=void 0!==p&&p,g=Object(c.a)(e,["name","prependEle","value","placeholder","defaultValue","onValueChange","percent","disabled"]);return Object(j.jsxs)(r.a,Object(n.a)(Object(n.a)({},g),{},{children:[a?Object(j.jsx)(r.a.Prepend,{children:a}):null,Object(j.jsx)(r.a.Prepend,{children:Object(j.jsx)(r.a.Text,{children:t})}),Object(j.jsx)(u.a,{float:f,placeholder:h,value:b,onChange:O,disabled:y}),Object(j.jsxs)(r.a.Append,{children:[Boolean(f)&&Object(j.jsx)(r.a.Text,{children:"%"}),void 0!==x&&Object(j.jsx)(d.a,{placement:"top",overlay:Object(j.jsx)(o.a,{id:"reset-tooltip",children:"Reset this override to the default value."}),children:Object(j.jsx)("span",{className:"d-inline-block",children:Object(j.jsx)(s.a,{onClick:function(){return O(x)},disabled:y||b===x,style:b===x?{pointerEvents:"none"}:{},children:Object(j.jsx)(l.a,{icon:i.H})})})})]})]}))}},290:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(2),c=a(121),i=a(70),l=a(187),s=a(291),r=a(212),d=a(1);function o(e){var t=e.sheets,a=e.sheets,o=a.characterSheet,u=a.weaponSheet,j=e.character,b=e.equippedBuild,h=e.newBuild,v=e.statsDisplayKeys,x=e.cardbg,O=void 0===x?"darkcontent":x,m=h||b;return Object(d.jsx)(c.a,{className:"mb-n2",children:Object.entries(v).map((function(e){var a=Object(n.a)(e,2),v=a[0],x=a[1],f=Object(r.a)(v,t,null===m||void 0===m?void 0:m.characterEle);return Object(d.jsx)(i.a,{className:"mb-2",xs:12,md:6,xl:4,children:Object(d.jsxs)(l.a,{bg:O,text:"lightfont",className:"h-100",children:[Object(d.jsx)(l.a.Header,{children:f}),Object(d.jsx)(l.a.Body,{children:Object(d.jsx)(c.a,{children:x.map((function(e){return Object(d.jsx)(s.a,{characterSheet:o,weaponSheet:u,character:j,equippedBuild:b,newBuild:h,statKey:e},JSON.stringify(e))}))})})]})},v)}))})}},291:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),c=a(70),i=a(121),l=a(204),s=a(69),r=a(111),d=a(33),o=a(115),u=a(1);function j(e){var t,a,n=e.label,l=void 0===n?"":n,s=e.val,r=e.oldVal,d=e.fixed,o=void 0===d?0:d,j=e.unit,b=void 0===j?"":j,h=e.variant,v=void 0===h?"":h;"undefined"===typeof r&&"number"===typeof s&&(r=s,s=void 0);var x=void 0!==s?s-r:0,O="",m="";return r||0===x?O=null===(t=r)||void 0===t?void 0:t.toFixed(o):void 0===r&&(O=null===(a=s)||void 0===a?void 0:a.toFixed(o)),O&&(O=Object(u.jsxs)("span",{className:"text-".concat(v),children:[O,b]})),0!==x&&(m=Object(u.jsxs)("span",{className:"text-".concat(x>0?"success":"danger"),children:[x>0?"+":"",null===x||void 0===x?void 0:x.toFixed(o),b]})),Object(u.jsx)(c.a,{xs:"12",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(c.a,{children:Object(u.jsx)("b",{children:l})}),Object(u.jsxs)(c.a,{xs:"auto",children:[O,x?" ":"",m]})]})})}function b(e){var t=e.character,a=e.equippedBuild,c=e.newBuild,i=e.statKey,b=Object(r.a)(Array.isArray(i)?s.a.get(i):void 0,[i]),h=Object(n.useMemo)((function(){var e,n,s,r,j,h="";if("string"===typeof i){if(c&&a){var v,x;e=null!==(v=null===c||void 0===c?void 0:c[i])&&void 0!==v?v:0,n=null!==(x=null===a||void 0===a?void 0:a[i])&&void 0!==x?x:0}else{var O,m,f=c||a;e=null!==(O=null===f||void 0===f?void 0:f[i])&&void 0!==O?O:0;var p="invalid";(n=null!==(m=l.a.getStatValueWithBonus(t,i))&&void 0!==m?m:p)===p&&(n=void 0),f&&("finalHP"===i?n=f.characterHP:"finalDEF"===i?n=f.characterDEF:"finalATK"===i&&(n=f.characterATK+f.weaponATK))}r=d.b.getStatUnit(i),s=d.b.fixedUnit(i),h=Object(u.jsxs)("span",{children:[o.a[i]," ",d.b.getStatName(i)]})}else if(b){var y,g,N,S,k=c||a,V=b.field,C=l.a.getTalentFieldValue(V,"variant",k);if(h=Object(u.jsx)("span",{className:"text-".concat(C),children:l.a.getTalentFieldValue(V,"text",k)}),s=l.a.getTalentFieldValue(V,"fixed",k,0),r=l.a.getTalentFieldValue(V,"unit",k,""),e=null===(y=l.a.getTalentFieldValue(V,"formula",k))||void 0===y||null===(g=y[0])||void 0===g?void 0:g.call(y,k),c&&a)n=null===(N=l.a.getTalentFieldValue(V,"formula",a))||void 0===N||null===(S=N[0])||void 0===S?void 0:S.call(N,a)}return l.a.hasOverride(t,i)&&(j="warning"),{val:e,oldVal:n,fixed:s,unit:r,variant:j,label:h}}),[t,a,c,i,b]),v=h.val,x=h.oldVal,O=h.fixed,m=h.unit,f=h.variant,p=h.label;return Object(u.jsx)(j,{val:v,oldVal:x,fixed:O,unit:m,variant:f,label:p})}}}]);
//# sourceMappingURL=3.2744d1c0.chunk.js.map