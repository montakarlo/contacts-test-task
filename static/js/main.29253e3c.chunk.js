(this["webpackJsonpreact-redux-test"]=this["webpackJsonpreact-redux-test"]||[]).push([[0],{130:function(e,t,a){e.exports=a.p+"static/media/backdrop.f7eab148.jpg"},133:function(e,t,a){e.exports=a.p+"static/media/react-logo.ee7cd8ed.svg"},137:function(e,t,a){e.exports=a.p+"static/media/wezom-logo.324b96ae.svg"},159:function(e,t,a){e.exports=a(296)},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},191:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},200:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},210:function(e,t,a){},296:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"form",(function(){return pe.a})),a.d(n,"app",(function(){return fe})),a.d(n,"contacts",(function(){return de}));var c={};a.r(c),a.d(c,"contactsSaga",(function(){return De}));var r=a(0),o=a.n(r),l=a(16),s=a.n(l),i=a(12),u=a(56),m=a(10),p=(a(168),a(313)),f=a(315),d=a(308),E=a(309),b=(a(169),a(40)),O=a(152),g=a(13),v=(a(170),a(311)),h=a(130),N={content:{backgroundImage:"url(".concat(a.n(h).a,")")}},j=o.a.memo((function(e){var t=e.children,a=Object(r.useMemo)((function(){return(new Date).getFullYear()}),[]);return o.a.createElement(v.a,{className:"layout layout--base"},o.a.createElement(v.a.Header,{className:"layout__header"},o.a.createElement(re,null)),o.a.createElement(v.a.Content,{className:"layout__content",style:N.content},t),o.a.createElement(v.a.Footer,{className:"layout__footer"},a," \xa9 ","Wezom React-Redux Test"))})),_=(a(191),a(133)),y=a.n(_),w=Object(m.compose)(Object(i.connect)((function(e){return{}}),null))((function(){return o.a.createElement("div",{className:"page page--home"},o.a.createElement("img",{className:"react-logo",src:y.a,alt:"React Logo"}),o.a.createElement("span",{className:"page__item"},"Go to the contacts page",o.a.createElement("br",null),"to check the task"))})),C=a(32),k=a(134),S=a.n(k),x=(a(193),a(314)),T=a(304),I=a(306),A=(a(194),a(195),Object(m.compose)(Object(i.connect)((function(e){return{}}),null))((function(e){var t=e.children,a=o.a.createElement(x.a,{id:"copyTooltip",className:"popOverWindow"},o.a.createElement("span",null,"Click to copy"));return o.a.createElement(I.a,{trigger:["hover","hover"],delay:{show:200,hide:100},placement:"bottom",overlay:a},t)}))),F=a(310),D=Object(m.compose)(Object(i.connect)((function(e){return{}}),null))((function(e){var t=e.contacts,a=e.page,n=e.copyData;return o.a.createElement("div",{className:"tiles"},t.slice(10*a-10,10*a).map((function(e){return o.a.createElement("div",{key:Object(F.a)(),className:"card"},o.a.createElement("span",{className:"row"},o.a.createElement("span",{className:"row__title"},"Name:\xa0"),e.name),o.a.createElement("span",{className:"row"},o.a.createElement("span",{className:"row__title"},"Phone:\xa0"),o.a.createElement(A,null,o.a.createElement("span",{className:"row__data",value:e.phone,onClick:function(e){return n(e)}},e.phone))),o.a.createElement("span",{className:"row"},o.a.createElement("span",{className:"row__title"},"Email:\xa0"),o.a.createElement(A,null,o.a.createElement("span",{className:"row__data",value:e.email,onClick:function(e){return n(e)}},e.email))),o.a.createElement("span",{className:"row"},o.a.createElement("span",{className:"row__title"},"Address:\xa0"),e.location.country,o.a.createElement("br",null),e.location.address),o.a.createElement("span",{className:"row"},o.a.createElement("span",{className:"row__title"},"DOB:\xa0"),e.dob),o.a.createElement("span",{className:"row"},o.a.createElement("span",{className:"row__title"},"Genger:\xa0"),e.gender),o.a.createElement("span",{className:"row"},o.a.createElement("span",{className:"row__title"},"Nationality:\xa0"),e.nat))})))})),H=(a(197),a(303)),L=Object(m.compose)(Object(i.connect)((function(e){return{}}),null))((function(e){var t=e.contacts,a=e.page,n=e.copyData;return o.a.createElement("div",{className:"table"},o.a.createElement(H.a,{striped:!0,bordered:!0,hover:!0,variant:"light"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"header__item header__item--avatar"}),o.a.createElement("th",{className:"header__item header__item--name"},"Name"),o.a.createElement("th",{className:"header__item header__item--phone"},"Phone"),o.a.createElement("th",{className:"header__item header__item--email"},"Email"),o.a.createElement("th",{className:"header__item header__item--location"},"Location"),o.a.createElement("th",{className:"header__item header__item--dob"},"DOB"),o.a.createElement("th",{className:"header__item header__item--gender"},"Gender"),o.a.createElement("th",{className:"header__item header__item--nationality"},"Nat"))),o.a.createElement("tbody",null,t.slice(10*a-10,10*a).map((function(e){return o.a.createElement("tr",{key:Object(F.a)()},o.a.createElement("td",{className:"cell cell--avatar"},o.a.createElement("img",{className:"avatar",src:e.picture.thumbnail,alt:"avatar"})),o.a.createElement("td",{className:"cell"},e.name),o.a.createElement("td",{className:"cell"},o.a.createElement(A,null,o.a.createElement("span",{className:"cell__item",value:e.phone,onClick:function(e){return n(e)}},e.phone))),o.a.createElement("td",{className:"cell"},o.a.createElement(A,null,o.a.createElement("span",{className:"cell__item",value:e.email,onClick:function(e){return n(e)}},e.email))),o.a.createElement("td",{className:"cell"},e.location.country,o.a.createElement("br",null),e.location.address),o.a.createElement("td",{className:"cell"},e.dob),o.a.createElement("td",{className:"cell"},e.gender),o.a.createElement("td",{className:"cell"},e.nat))})))))})),z=(a(198),a(312)),M=Object(m.compose)(Object(i.connect)((function(e){return{}}),null))((function(e){var t=e.contacts,a=e.amount,n=e.page,c=e.setView,r=e.view,l=(e.collection,Object(g.f)()),s=[];s.push(o.a.createElement(z.a.First,{key:"pagination-first",onClick:function(){return l.push("/contacts/1")}}),o.a.createElement(z.a.Prev,{key:"pagination-prev",onClick:function(){1!==n&&l.push("/contacts/".concat(n-1))}}));for(var i=function(e){a/10+1>=5?[n-2,n-1,n,n+1,n+2].includes(e)&&t.slice(10*e-10,10*e).length&&s.push(o.a.createElement(z.a.Item,{key:e,active:e===n,onClick:function(){return l.push("/contacts/".concat(e))}},e)):s.push(o.a.createElement(z.a.Item,{key:e,active:e===n,onClick:function(){return l.push("/contacts/".concat(e))}},e)),e===Math.trunc(a/10)+1&&s.push(o.a.createElement(z.a.Next,{key:"pagination-next",onClick:function(){n!==Math.trunc(a/10)+1&&l.push("/contacts/".concat(n+1))}}),o.a.createElement(z.a.Last,{key:"pagination-last",onClick:function(){return l.push("/contacts/".concat(Math.trunc(a/10)+1))}}))},u=1;u<=Math.trunc(a/10)+1;u++)i(u);return o.a.createElement("div",{className:"left-side"},o.a.createElement("button",{type:"button",className:"change-view",onClick:function(){return c("tiles")}},"table"===r?"Switch to tiles view":"Switch to  table view"),o.a.createElement(z.a,null,s))})),V=(a(200),a(36)),G=a(37),U=(a(203),Object(m.compose)(Object(i.connect)((function(e){return{}}),null))((function(e){var t=e.setSortOption,a=e.sortOption,n={aToZ:"A to Z",zToA:"Z to A",default:"Default"},c=o.a.createElement(x.a,{id:"sort-popup",className:"popOverOptions"},Object.keys(n).map((function(e){return o.a.createElement("button",{id:e,key:e,className:"optionsSelect",onClick:function(){return function(e){t(e),document.body.click()}(e)},type:"button"},o.a.createElement("span",{className:"option"},n[e]),e===a&&o.a.createElement(V.a,{icon:G.a,size:"sm"}))})));return o.a.createElement(I.a,{trigger:"click",placement:"bottom",overlay:c,rootClose:!0},o.a.createElement("button",{type:"button",className:"sortBtn button-unstyled"},o.a.createElement(V.a,{icon:G.b,size:"lg"}),o.a.createElement("span",null,"Sort: ".concat(n[a]))))}))),B=(a(204),Object(m.compose)(Object(i.connect)((function(e){return{}}),null))((function(e){var t=e.setFilterOption,a=e.filterOption,n=e.setFilterOptionItem,c=e.filterOptionItem,r=e.filterObject,l={gender:"gender",name:"name",nat:"nationality",clear:"clear"},s=function(){n("clear"),t("clear"),document.body.click()},i=o.a.createElement(x.a,{id:"sort-popup-item",className:"popOverFilterOptions"},"clear"!==a&&o.a.createElement("div",{className:"filter-options-container"},r[a].map((function(e){return o.a.createElement("button",{key:e,id:e,className:"optionsSelect",onClick:function(){return n(e)},type:"button"},o.a.createElement("span",{className:"option"},e),c===e&&o.a.createElement(V.a,{icon:G.a,size:"sm"}))})))),u=o.a.createElement(x.a,{id:"sort-popup",className:"popOverFilterOptions"},Object.keys(l).map((function(e){return o.a.createElement("div",{key:e},"clear"!==e?o.a.createElement(I.a,{trigger:"click",placement:"left-start",overlay:i,rootClose:!0},o.a.createElement("button",{id:e,className:"optionsSelect",onClick:function(){return t(e)},type:"button"},o.a.createElement("span",{className:"option"},l[e]),e===a&&o.a.createElement(V.a,{icon:G.a,size:"sm"}))):o.a.createElement("button",{id:e,className:"optionsSelect",onClick:s,type:"button"},o.a.createElement("span",{className:"option"},l[e]),e===a&&o.a.createElement(V.a,{icon:G.a,size:"sm"})))})));return o.a.createElement(I.a,{trigger:"click",placement:"bottom",overlay:u,rootClose:!0},o.a.createElement("button",{type:"button",className:"filterBtn button-unstyled"},o.a.createElement(V.a,{icon:G.b,size:"lg"}),l[a]===l.clear?o.a.createElement("span",null,"Filter by"):o.a.createElement("span",null,"Filter by: ".concat(l[a]))))}))),W=Object(m.compose)(Object(i.connect)((function(e){return{}}),null))((function(e){var t=e.setSortOption,a=e.sortOption,n=e.filterOption,c=e.setFilterOption,r=e.filterOptionItem,l=e.setFilterOptionItem,s=e.filterObject,i=e.updateContacts;return o.a.createElement("div",{className:"contacts-header"},o.a.createElement("button",{type:"button",className:"update",onClick:i},"Update contacts"),o.a.createElement("div",{className:"header-container"},o.a.createElement(B,{filterOption:n,setFilterOption:c,filterOptionItem:r,setFilterOptionItem:l,filterObject:s}),o.a.createElement(U,{setSortOption:t,sortOption:a})))})),P=a(106),R=function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a<n?-1:a>n?1:0},Z=function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a>n?-1:a<n?1:0},J=function(e,t){switch(t){case"aToZ":return Object(P.a)(e).sort(R);case"zToA":return Object(P.a)(e).sort(Z);default:return e}};function Y(e){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:e,payload:t}};return t.type=e,t}function q(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0,c=t[n.type];return c?c(a,n):a}}var K={getContacts:Y("FETCH_CONTACTS")},Q={prefix:"@app",setView:Y("SET_VIEW")},X={fetchContacts:K.getContacts,setView:Q.setView},$={home:{path:"/",page:w,name:"Home",link:function(){return this.path},exact:!0},contacts:{path:"/contacts",page:Object(m.compose)(Object(i.connect)((function(e){return{contacts:e.contacts.contacts,loading:e.contacts.loading,page:e.contacts.page,amount:e.app.contactsAmount,view:e.app.view}}),X))((function(e){var t=e.fetchContacts,a=e.setView,n=e.contacts,c=e.loading,l=e.page,s=e.amount,i=e.view,u=Object(g.f)(),m=Object(r.useState)("default"),p=Object(C.a)(m,2),f=p[0],d=p[1],E=Object(r.useState)("clear"),b=Object(C.a)(E,2),O=b[0],v=b[1],h=Object(r.useState)("clear"),N=Object(C.a)(h,2),j=N[0],_=N[1],y=Object(r.useState)(),w=Object(C.a)(y,2),k=w[0],A=w[1],F=Object(r.useState)(n),H=Object(C.a)(F,2),z=H[0],V=H[1],G=Object(r.useState)(n),U=Object(C.a)(G,2),B=U[0],P=U[1],R=Object(r.useState)(n),Z=Object(C.a)(R,2),Y=Z[0],q=Z[1],K=Object(r.useState)(n),Q=Object(C.a)(K,2),X=Q[0],$=Q[1],ee=Object(r.useState)(n),te=Object(C.a)(ee,2),ae=te[0],ne=te[1],ce=function(){t({page:1,amount:s})};Object(r.useEffect)((function(){ce()}),[]),Object(r.useEffect)((function(){var e={gender:[],name:[],nat:[]},t=0,a=0,c={};n.forEach((function(n){e.gender.includes(n.gender)||e.gender.push(n.gender),e.name.includes(n.name)||e.name.push(n.name),e.nat.includes(n.nat)||e.nat.push(n.nat),"male"===n.gender&&t++,"female"===n.gender&&a++,n.nat in c?c[n.nat]++:c[n.nat]=1})),P(t),q(a),$(n.length-t-a),V(J(n,f)),A(e),ne(c)}),[n]),Object(r.useEffect)((function(){var e=[];"clear"!==j?(n.forEach((function(t){t[O]===j&&e.push(t)})),V(J(e,f))):V(J(n,f)),u.push("/contacts/1")}),[j]);var re=function(e){var t=e.target.getAttribute("value");S()(t)};Object(r.useEffect)((function(){V("default"===f?n:J(z,f))}),[f]);var oe=o.a.createElement(x.a,{id:"sort-popup-item",className:"popOverNatAmount"},Object.keys(ae).map((function(e){return o.a.createElement("span",{key:e,className:"nat-amount-item"},e,": ",ae[e])})));return o.a.createElement(o.a.Fragment,null,o.a.createElement(W,{setSortOption:d,sortOption:f,filterOption:O,setFilterOption:v,filterOptionItem:j,setFilterOptionItem:_,filterObject:k,updateContacts:ce}),c?o.a.createElement("div",{className:"page page--contacts"},o.a.createElement("div",{className:"spinner-container"},o.a.createElement(T.a,{animation:"border",role:"status"}))):o.a.createElement("div",{className:"page page--contacts"},"table"===i?o.a.createElement(L,{contacts:z,page:l,copyData:re}):o.a.createElement(D,{contacts:z,page:l,copyData:re}),o.a.createElement("div",{className:"contacts-footer"},o.a.createElement("div",{className:"left-side"},o.a.createElement("span",{className:"stat"},"Total: ",n.length),o.a.createElement("span",{className:"stat"},"Male: ",B),o.a.createElement("span",{className:"stat"},"Female: ",Y),o.a.createElement("span",{className:"stat"},"Undecided: ",X),o.a.createElement(I.a,{trigger:"click",placement:"top",overlay:oe,rootClose:!0},o.a.createElement("span",{className:"stat stat--amount"},"Amount by nationality"))),o.a.createElement(M,{contacts:z,page:l,amount:z.length,setView:a,view:i}))))})),name:"Contacts",link:function(){return this.path}}},ee=($.home.link(),o.a.memo((function(){return o.a.createElement(g.c,null,Object.keys($).map((function(e){var t=$[e],a=t.page,n=Object(O.a)(t,["page"]);return o.a.createElement(g.a,Object.assign({key:n.path},n,{render:function(e){return o.a.createElement(j,null,o.a.createElement(a,e))}}))})))}))),te=a(137),ae=a.n(te),ne=o.a.memo((function(){return o.a.createElement(b.a,{to:$.home.link(),className:"logo",activeClassName:"is-active",exact:!0},o.a.createElement("img",{className:"logo__img",src:ae.a,alt:"Wezom"}))})),ce=(a(205),Object(m.compose)(Object(i.connect)((function(e){return{}}),null))((function(){var e=Object(r.useMemo)((function(){return[{name:"Home",key:"home"},{name:"Contacts",key:"contacts"}]}),[]);return o.a.createElement("div",{className:"navbar"},o.a.createElement("ul",{className:"navbar__list"},e.map((function(e){return o.a.createElement("li",{key:e.key,className:"navbar__item"},o.a.createElement(b.a,{to:$[e.key].link(),className:"navbar__link"},e.name))}))))}))),re=Object(m.compose)(Object(i.connect)((function(e){return{}}),null))((function(){return o.a.createElement("div",{className:"header"},o.a.createElement(p.a,{type:"flex",gutter:36,align:"middle"},o.a.createElement(f.a,null,o.a.createElement(ne,null)),o.a.createElement(f.a,{className:"_flex-grow"},o.a.createElement(p.a,{type:"flex",gutter:16,align:"middle"},o.a.createElement(f.a,{className:"_flex-grow"},o.a.createElement(ce,null)),o.a.createElement(f.a,null,o.a.createElement(d.a,{className:"sign-in",type:"link",htmlType:"button",icon:o.a.createElement(E.a,null)},"Sign In"))))))})),oe=(a(209),a(210),o.a.memo((function(){return o.a.createElement(ee,null)}))),le=a(21),se=Object(le.a)({basename:"/"}),ie=a(128),ue=(a(145),a(151)),me=a(19),pe=a(307),fe=q({},{"@@router/LOCATION_CHANGE":function(e){var t,a,n=localStorage.getItem("contactsAmount");return n||localStorage.setItem("contactsAmount",(t=20,a=500,Math.floor(Math.random()*(a-t+1))+t)),localStorage.getItem("view")||localStorage.setItem("view","table"),Object(me.a)(Object(me.a)({},e),{},{contactsAmount:n,view:localStorage.getItem("view")})},SET_VIEW:function(e){return"table"===localStorage.getItem("view")?localStorage.setItem("view","tiles"):localStorage.setItem("view","table"),Object(me.a)(Object(me.a)({},e),{},{view:localStorage.getItem("view")})}}),de=q({contacts:[],loading:!1,page:1},{FETCH_CONTACTS:function(e){return Object(me.a)(Object(me.a)({},e),{},{loading:!0})},FETCH_CONTACTS_SUCCEDED:function(e,t){return Object(me.a)(Object(me.a)({},e),{},{contacts:t.payload.contacts,loading:!1})},FETCH_CONTACTS_FAILED:function(e){return Object(me.a)(Object(me.a)({},e),{},{loading:!1})},"@@router/LOCATION_CHANGE_SUCCEDED":function(e,t){var a=t.payload.page,n=1;return Number(a)===parseInt(a)&&(n=Number(a)),Object(me.a)(Object(me.a)({},e),{},{page:n})}}),Ee=a(44),be=a.n(Ee),Oe=function(e){return Object(m.combineReducers)(Object(me.a)({router:Object(u.b)(e),toastr:Ee.reducer},n))},ge=a(14),ve=a.n(ge),he=a(26),Ne=a(60),je=function(){var e=Object(Ne.a)(ve.a.mark((function e(t){var a,n,c;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.page,n=t.amount,e.next=3,fetch("https://randomuser.me/api/1.3/?page=".concat(a,"&results=").concat(n,"&seed=abc&exc=login,id,cell,registered")).then((function(e){return e.json()}));case 3:return c=e.sent,e.abrupt("return",c.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_e=function(){var e=Object(Ne.a)(ve.a.mark((function e(t){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ee.toastr.error("Error",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=Object(Ne.a)(ve.a.mark((function e(t){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ee.toastr.success("Success",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=ve.a.mark(Te),Ce=ve.a.mark(Ie),ke=ve.a.mark(Ae),Se=ve.a.mark(Fe),xe=ve.a.mark(De);function Te(e){var t,a,n,c;return ve.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,a=Ge.getState(),n=a.router.location.pathname.slice(10),r.next=6,Object(he.b)(je,t);case 6:return(c=r.sent).forEach((function(e){e.name="".concat(e.name.first," ").concat(e.name.last),e.location={country:"/".concat(e.location.country,"/"),address:"".concat(e.location.street.number," \n        ").concat(e.location.street.name,", ").concat(e.location.city,", ").concat(e.location.state," ").concat(e.location.postcode)},e.dob="".concat(new Date(e.dob.date).getMonth()+1,"/").concat(new Date(e.dob.date).getDate(),"/").concat(new Date(e.dob.date).getFullYear())})),r.next=10,Object(he.b)(ye,"Contacts have been successfully received");case 10:return r.next=12,Object(he.c)({type:"FETCH_CONTACTS_SUCCEDED",payload:{contacts:c,page:n}});case 12:r.next=20;break;case 14:return r.prev=14,r.t0=r.catch(1),r.next=18,Object(he.b)(_e,r.t0.message);case 18:return r.next=20,Object(he.c)({type:"FETCH_CONTACTS_FAILED"});case 20:case"end":return r.stop()}}),we,null,[[1,14]])}function Ie(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.d)("FETCH_CONTACTS",Te);case 2:case"end":return e.stop()}}),Ce)}function Ae(){var e,t;return ve.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=Ge.getState(),t=e.router.location.pathname.slice(10),a.next=4,Object(he.c)({type:"@@router/LOCATION_CHANGE_SUCCEDED",payload:{page:t}});case 4:case"end":return a.stop()}}),ke)}function Fe(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.d)("@@router/LOCATION_CHANGE",Ae);case 2:case"end":return e.stop()}}),Se)}function De(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.a)([Ie(),Fe()]);case 2:case"end":return e.stop()}}),xe)}var He=ve.a.mark(Le);function Le(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.a)(Object.values(c).map((function(e){return e()})));case 2:case"end":return e.stop()}}),He)}var ze=Object(ue.a)(),Me=Object(m.applyMiddleware)(ze,Object(ie.a)(se)),Ve=Me,Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.__INITIAL_STATE__||{};return Object(m.createStore)(Oe(se),e,Ve)}();ze.run(Le);!function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};s.a.render(o.a.createElement(i.Provider,{store:Ge},o.a.createElement(u.a,{history:se},o.a.createElement(e,null),o.a.createElement(be.a,{timeOut:3e3,position:"bottom-right",transitionIn:"fadeIn",transitionOut:"fadeOut"}))),t,a)}(oe,document.getElementById("root"))}},[[159,1,2]]]);