(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[22],{175:function(n,t,e){"use strict";var a=e(12),r=e(0),o=e.n(r),i=e(38),u=e(61),c=e(21),l=function(n){var t=Object(i.a)(n,{activeKey:"onSelect"}),e=t.id,a=t.generateChildId,l=t.onSelect,s=t.activeKey,E=t.transition,m=t.mountOnEnter,d=t.unmountOnExit,b=t.children,v=Object(r.useMemo)((function(){return a||function(n,t){return e?e+"-"+t+"-"+n:null}}),[e,a]),O=Object(r.useMemo)((function(){return{onSelect:l,activeKey:s,transition:E,mountOnEnter:m||!1,unmountOnExit:d||!1,getControlledId:function(n){return v(n,"tabpane")},getControllerId:function(n){return v(n,"tab")}}}),[l,s,E,m,d,v]);return o.a.createElement(u.a.Provider,{value:O},o.a.createElement(c.a.Provider,{value:l||null},b))},s=e(2),E=e(4),m=e(7),d=e.n(m),b=e(8),v=o.a.forwardRef((function(n,t){var e=n.bsPrefix,a=n.as,r=void 0===a?"div":a,i=n.className,u=Object(E.a)(n,["bsPrefix","as","className"]),c=Object(b.a)(e,"tab-content");return o.a.createElement(r,Object(s.a)({ref:t},u,{className:d()(i,c)}))})),O=e(111);var f=o.a.forwardRef((function(n,t){var e=function(n){var t=Object(r.useContext)(u.a);if(!t)return n;var e=t.activeKey,a=t.getControlledId,o=t.getControllerId,i=Object(E.a)(t,["activeKey","getControlledId","getControllerId"]),l=!1!==n.transition&&!1!==i.transition,m=Object(c.b)(n.eventKey);return Object(s.a)({},n,{active:null==n.active&&null!=m?Object(c.b)(e)===m:n.active,id:a(n.eventKey),"aria-labelledby":o(n.eventKey),transition:l&&(n.transition||i.transition||O.a),mountOnEnter:null!=n.mountOnEnter?n.mountOnEnter:i.mountOnEnter,unmountOnExit:null!=n.unmountOnExit?n.unmountOnExit:i.unmountOnExit})}(n),a=e.bsPrefix,i=e.className,l=e.active,m=e.onEnter,v=e.onEntering,f=e.onEntered,x=e.onExit,p=e.onExiting,y=e.onExited,g=e.mountOnEnter,h=e.unmountOnExit,j=e.transition,C=e.as,P=void 0===C?"div":C,K=(e.eventKey,Object(E.a)(e,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),I=Object(b.a)(a,"tab-pane");if(!l&&!j&&h)return null;var N=o.a.createElement(P,Object(s.a)({},K,{ref:t,role:"tabpanel","aria-hidden":!l,className:d()(i,I,{active:l})}));return j&&(N=o.a.createElement(j,{in:l,onEnter:m,onEntering:v,onEntered:f,onExit:x,onExiting:p,onExited:y,mountOnEnter:g,unmountOnExit:h},N)),o.a.createElement(u.a.Provider,{value:null},o.a.createElement(c.a.Provider,{value:null},N))}));f.displayName="TabPane";var x=f,p=function(n){function t(){return n.apply(this,arguments)||this}return Object(a.a)(t,n),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.a.Component);p.Container=l,p.Content=v,p.Pane=x;t.a=p}}]);
//# sourceMappingURL=22.67ee4be6.chunk.js.map