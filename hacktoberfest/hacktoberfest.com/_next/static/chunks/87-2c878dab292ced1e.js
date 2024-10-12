"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87],{6267:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(5893),r=n(508),c=n(5065),a=n(4951);let s=r.ZP.input.withConfig({displayName:"Input.styles__StyledInput",componentId:"sc-d87cb36-0"})([""," background:transparent;border:1px solid currentColor;color:currentColor;font-weight:500;margin:0;padding:12px 24px;width:100%;","{padding:16px 24px;}&:focus{outline:0;}&:focus-visible{outline:0;box-shadow:",";color:",";}&:user-invalid:not(:placeholder-shown){box-shadow:",";border-color:",";}&::placeholder{color:currentColor;}&::-webkit-calendar-picker-indicator{","}"],a.eN,(0,c.X)(c.A.desktop),e=>{let{theme:t}=e;return"-1px -1px 10px 0px ".concat(t.colors.deepPink,", 1px 1px 10px 0px ").concat(t.colors.deepPink)},e=>{let{theme:t}=e;return t.colors.deepPink},e=>{let{theme:t}=e;return"-1px -1px 10px 0px ".concat(t.colors.error,", 1px 1px 10px 0px ").concat(t.colors.error)},e=>{let{theme:t}=e;return t.colors.error},e=>{let{$isDark:t}=e;return t&&"\n      filter: invert(1);\n    "}),i=r.ZP.label.withConfig({displayName:"Input.styles__StyledInputLabel",componentId:"sc-d87cb36-1"})([""," color:currentColor;font-weight:500;display:block;margin:0 0 8px;"],a.Y5);var l=e=>{let{name:t,label:n,type:r="text",isDark:c,...a}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)(i,{htmlFor:t,children:n}),(0,o.jsx)(s,{id:t,name:t,type:r,$isDark:c,...a})]})}},7966:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(5893),r=n(508),c=n(5065),a=n(4951);let s=r.ZP.div.withConfig({displayName:"Select.styles__StyledSelect",componentId:"sc-779014f7-0"})(['position:relative;&::before{content:\'\';position:absolute;top:50%;right:24px;transform:translateY(-50%);background:url(\'data:image/svg+xml,<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.50563 10.2556C7.05481 9.70646 7.94519 9.70646 8.49437 10.2556L15 16.7613L21.5056 10.2556C22.0548 9.70646 22.9452 9.70646 23.4944 10.2556C24.0435 10.8048 24.0435 11.6952 23.4944 12.2444L15.9944 19.7444C15.4452 20.2935 14.5548 20.2935 14.0056 19.7444L6.50563 12.2444C5.95646 11.6952 5.95646 10.8048 6.50563 10.2556Z" fill="%231c1c1c"/></svg>\');width:30px;height:30px;z-index:1;pointer-events:none;',"}select{"," appearance:none;background:transparent;border:1px solid currentColor;color:currentColor;font-weight:500;margin:0;padding:12px 78px 12px 24px;width:100%;","{padding:16px 78px 16px 24px;}&:focus{outline:0;}&:focus-visible{outline:0;box-shadow:",";color:",";}&::placeholder{color:currentColor;}}"],e=>{let{$isDark:t}=e;return t&&"\n      filter: invert(1);\n    "},a.eN,(0,c.X)(c.A.desktop),e=>{let{theme:t}=e;return"-1px -1px 10px 0px ".concat(t.colors.deepPink,", 1px 1px 10px 0px ").concat(t.colors.deepPink)},e=>{let{theme:t}=e;return t.colors.deepPink}),i=r.ZP.label.withConfig({displayName:"Select.styles__StyledSelectLabel",componentId:"sc-779014f7-1"})([""," color:currentColor;font-weight:500;display:block;margin:0 0 8px;"],a.Y5);var l=e=>{let{name:t,label:n,items:r,isDark:c,...a}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)(i,{htmlFor:t,children:n}),(0,o.jsx)(s,{$isDark:c,children:(0,o.jsx)("select",{id:t,name:t,...a,children:r.map(e=>{let[t,n]=e;return(0,o.jsx)("option",{value:t,children:n},t)})})})]})}},8639:function(e,t,n){var o=n(5893),r=n(7294),c=n(508),a=n(6323);let s=(0,r.forwardRef)((e,t)=>{let{children:n,success:r,error:s,...i}=e,l=(0,c.Fg)();return(0,o.jsxs)("form",{ref:t,...i,children:[r&&(0,o.jsx)(a.Z,{title:"Success",color:l.colors.success,children:(0,o.jsx)("p",{children:r})}),s&&(0,o.jsx)(a.Z,{title:"Error",color:l.colors.error,children:(0,o.jsx)("p",{children:s})}),n]})});t.Z=s},9366:function(e,t,n){var o=n(5893),r=n(7294),c=n(508);let a=c.ZP.div.withConfig({displayName:"loader__StyledLoaderWrapper",componentId:"sc-35e6f1d1-0"})(["display:flex;justify-content:flex-start;align-items:center;gap:24px;height:40px;"]),s=c.ZP.p.withConfig({displayName:"loader__StyledLoader",componentId:"sc-35e6f1d1-1"})(["font-family:'JetBrains Mono',monospace;font-variant-ligatures:none;margin:0;",""],e=>{let{$animated:t}=e;return t&&(0,c.iv)(["margin:0;@media (prefers-reduced-motion){display:none;}"])});t.Z=e=>{let{message:t}=e,n=(0,r.useMemo)(()=>["[    ]","[=   ]","[==  ]","[=== ]","[ ===]","[  ==]","[   =]","[    ]","[   =]","[  ==]","[ ===]","[====]","[=== ]","[==  ]","[=   ]"].map(e=>e.replace(/ /g,"\xa0")),[]),[c,i]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=setInterval(()=>{i(e=>(e+1)%n.length)},100);return()=>clearInterval(e)},[n]),(0,o.jsxs)(a,{children:[(0,o.jsx)(s,{children:t}),(0,o.jsx)(s,{$animated:!0,children:n[c]})]})}},6323:function(e,t,n){var o=n(5893),r=n(508),c=n(4951);let a=r.ZP.div.withConfig({displayName:"notification__StyledNotification",componentId:"sc-5ca91e9c-0"})(["width:100%;padding:40px;transition:0.2s ease;border:1px solid ",";color:currentColor;> h2{margin:0 0 16px;","}> *:last-child{margin-bottom:0;}a{color:",";text-decoration:underline;&:hover,&:focus{text-decoration:none;}}b{font-weight:500;}",""],e=>{let{$color:t}=e;return t},c.yI,e=>{let{theme:t}=e;return t.colors.deepPink},e=>{let{$paragraphs:t}=e;return t&&(0,r.iv)(["> p{margin:0 0 16px;","}"],c.Y5)});t.Z=e=>{let{title:t,children:n,color:r,className:c}=e,s=n&&("p"===n.type||Array.isArray(n)&&n.every(e=>"p"===e.type));return(0,o.jsxs)(a,{$color:r,$paragraphs:s,className:c,children:[(0,o.jsx)("h2",{children:t}),n]})}},2627:function(e,t,n){var o=n(1163),r=n(7294),c=n(8845),a=n(2317);t.Z=function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,r.useMemo)(()=>new Date>=new Date(a.bI)&&new Date<new Date(a.Ln),[]),[n,s]=(0,r.useState)(null),[i,l]=(0,r.useState)(null),[u,d]=(0,r.useState)(null),[p,h]=(0,r.useState)("loading"),f=(0,o.useRouter)(),m=(0,r.useMemo)(()=>"loading"===p||e&&f.pathname!=="/".concat(p),[p,e,f.pathname]);(0,r.useEffect)(()=>{"loading"!==p&&f.pathname!=="/".concat(p)&&(console.log("useAuth: switching to ".concat(p)),e&&f.push("/".concat(p)).then())},[p,f.pathname,e,f.push]);let[g,x]=(0,r.useState)({token:!1,user:!1,registration:!1});(0,r.useEffect)(()=>{if(g.token&&g.user&&g.registration&&"loading"===p){if(!t){h("");return}if(!n||!i){h("auth");return}if(!u){h("register");return}h("profile")}},[g,p,n,i,u]);let y=(0,r.useCallback)(()=>{let e=new URL(window.location.origin+f.asPath);if(e.searchParams.has("token")){let t=e.searchParams.get("token");return e.searchParams.delete("token"),e.searchParams.delete("expiration"),f.replace(e.toString()).then(),t}return localStorage.getItem("token")||null},[null==f?void 0:f.asPath,null==f?void 0:f.replace]),C=(0,r.useCallback)(()=>{h("loading"),s(null)},[]);(0,r.useEffect)(()=>{t?s(y()):s(null),x(e=>({...e,token:!0})),console.log("useAuth: token loaded")},[y]),(0,r.useEffect)(()=>{n&&localStorage.setItem("token",n),!n&&g.token&&localStorage.removeItem("token")},[n,g.token]);let v=(0,r.useCallback)(async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e||(h("loading"),x(e=>({...e,user:!1}))),console.log("useAuth: user loading",n),l(await (0,c.BT)("@me",n).catch(e=>{if(401===e.status){C();return}throw e})),x(e=>({...e,user:!0}))},[n,C]);(0,r.useEffect)(()=>{(async()=>{g.token&&(n?await v():(l(null),x(e=>({...e,user:!0}))),console.log("useAuth: user loaded"))})()},[g.token,v]);let I=(0,r.useCallback)(async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e||(h("loading"),x(e=>({...e,registration:!1}))),console.log("useAuth: registration loading",i.id,n),d(await (0,c.qJ)(i.id,n).catch(e=>{if(401===e.status)return C(),null;if(404===e.status)return null;throw e})),x(e=>({...e,registration:!0}))},[n,null==i?void 0:i.id,C]);return(0,r.useEffect)(()=>{(async()=>{g.user&&(n&&i?await I():(d(null),x(e=>({...e,registration:!0}))),console.log("useAuth: registration loaded"))})()},[g.user,I]),{loading:m,active:t,state:p,token:n,reset:C,user:i,getUser:v,registration:u,getRegistration:I}}},8845:function(e,t,n){n.d(t,{BT:function(){return i},M8:function(){return I},Mq:function(){return f},Nq:function(){return l},SK:function(){return y},_Y:function(){return x},aY:function(){return h},co:function(){return d},dm:function(){return m},ec:function(){return C},m$:function(){return u},qJ:function(){return g},rG:function(){return w},t_:function(){return s},uI:function(){return v},w9:function(){return p}});let o=()=>{let e="https://hacktoberfest.com".replace(/\/*$/,"");if(!e)throw Error("BASE_URL must be set for API calls");return e},r=()=>{let e="https://hackathon-tracker.digitalocean.com".replace(/\/*$/,"");if(!e)throw Error("API_BASE_URL must be set for API calls");return e},c=()=>"6",a=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=!(arguments.length>3)||void 0===arguments[3]||arguments[3],c=!(arguments.length>4)||void 0===arguments[4]||arguments[4],a=await fetch("".concat(r()).concat(e),{...n,...t?{headers:{...n.headers||{},Authorization:"Bearer ".concat(t)}}:{}});if(o&&!a.ok){let t=Error("API error: ".concat(n.method||"GET"," ").concat(e,": ").concat(a.status," ").concat(a.statusText));throw t.status=a.status,t.response=a,t}return c?a.json():a},s=e=>"".concat(r(),"/users/oauth/").concat(encodeURIComponent(e),"?success_redirect=").concat(encodeURIComponent("".concat(o(),"/auth")),"&error_redirect=").concat(encodeURIComponent("".concat(o(),"/auth"))),i=async(e,t)=>a("/users/".concat(encodeURIComponent(e)),t),l=async(e,t,n)=>a("/users/".concat(encodeURIComponent(e)),t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),u=async(e,t)=>a("/users/".concat(encodeURIComponent(e),"/emails"),t),d=async(e,t)=>a("/users/".concat(encodeURIComponent(e),"/avatars"),t),p=async(e,t)=>a("/users/".concat(encodeURIComponent(e),"/oauth"),t),h=async(e,t,n)=>a("/users/".concat(encodeURIComponent(e),"/oauth/").concat(encodeURIComponent(n),"?success_redirect=").concat(encodeURIComponent("".concat(o(),"/auth")),"&error_redirect=").concat(encodeURIComponent("".concat(o(),"/auth"))),t),f=async(e,t,n)=>a("/users/".concat(encodeURIComponent(e),"/oauth/").concat(encodeURIComponent(n)),t,{method:"DELETE"},!0,!1),m=async(e,t)=>a("/users/".concat(encodeURIComponent(e),"/ingest"),t,{method:"POST"}),g=async(e,t)=>a("/events/".concat(encodeURIComponent(c()),"/registrations/").concat(encodeURIComponent(e)),t),x=async(e,t,n)=>a("/events/".concat(encodeURIComponent(c()),"/registrations/").concat(encodeURIComponent(e)),t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),y=async(e,t,n)=>a("/events/".concat(encodeURIComponent(c()),"/registrations/").concat(encodeURIComponent(e)),t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),C=async e=>a("/events/".concat(encodeURIComponent(c()),"/metadata"),e),v=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return a("/events/".concat(encodeURIComponent(c()),"/pull_requests/users/").concat(encodeURIComponent(e),"?excludeState=").concat(encodeURIComponent(n.join(","))),t)},I=async(e,t)=>a("/events/".concat(encodeURIComponent(c()),"/gift_codes/users/").concat(encodeURIComponent(e)),t),w=async(e,t,n)=>a("/events/".concat(encodeURIComponent(c()),"/excluded_repositories"),t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}}]);