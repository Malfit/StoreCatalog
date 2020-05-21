(this.webpackJsonpname=this.webpackJsonpname||[]).push([[0],{142:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=a(20),u=a(40),i=a(77),s=a(19),m=a(27),p=a(24),d=a.n(p),f=a(32),E=a(78).create({baseURL:"https://prostorecatalog.firebaseio.com"}),b={postNewProduct:function(e,t,a,n,r,c){return E.post("/products.json",{title:e,photo:t,description:a,price:n,sale:r,dateEndSale:c})},getProductList:function(){return E.get("/products.json")},getOneProduct:function(e){return E.get("/products/".concat(e,".json"))},editProduct:function(e,t,a,n,r,c,o){return E.put("/products/".concat(e,".json"),{title:t,photo:a,description:n,price:r,sale:c,dateEndSale:o})},deleteProduct:function(e){return E.delete("products/".concat(e,".json"))}},h=function(e){return Object.keys(e).map((function(t){var a=e[t];return a.id=t,a}))},g=function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_PRODUCTS_REQUEST"}),e.prev=1,e.next=4,b.getProductList();case 4:a=e.sent,n=h(a.data),t({type:"GET_PRODUCTS_SUCCESS",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"GET_PRODUCTS_FAIL",payload:e.t0,error:!0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},v={products:[{title:"",photo:"",description:"",price:"",sale:"",dateEndSale:""}],currentProduct:{}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{products:t.payload});case"GET_ONE_PRODUCT_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{currentProduct:t.payload});case"ADD_PRODUCT_DATA_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{products:[].concat(Object(s.a)(e.products),[t.payload])});case"GET_PRODUCTS_FAIL":return Object(m.a)(Object(m.a)({},e),{},{products:e.products.filter((function(e){return e.id!==t.payload}))});default:return e}},j=Object(u.c)(O,Object(u.a)(i.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(13),N=a(9),_=a(6),y=a(79),C=a.n(y),w=(a(138),C.a.initializeApp({apiKey:"AIzaSyCMg-3UMvbqc9R8ejjfpp7YmQAu5N-buVs",authDomain:"prostorecatalog.firebaseapp.com",databaseURL:"https://prostorecatalog.firebaseio.com",projectId:"prostorecatalog",storageBucket:"prostorecatalog.appspot.com",messagingSenderId:"622299039463"})),P=Object(n.createContext)(),D=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(_.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)(!0),i=Object(_.a)(u,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){w.auth().onAuthStateChanged((function(e){l(e),m(!1)}))}),[]),s?r.a.createElement(r.a.Fragment,null,"Loading..."):r.a.createElement(P.Provider,{value:{currentUser:o}},t)},I=a(189),x=a(187),k=a(83),T=a(195),U=a(82),A=a.n(U),R=a(80),L=a.n(R),z=a(184),M=a(81),G=a.n(M);var F=function(e){var t=e.id,a=Object(l.b)(),c=Object(z.a)((function(e){return{button:{width:"105px",margin:e.spacing(-.5)}}}))(),o=function(){return r.a.createElement("div",{className:"btnEdit"},r.a.createElement(x.a,{variant:"contained",color:"primary",className:c.button,startIcon:r.a.createElement(L.a,null)},"Edit"))},u=function(){return r.a.createElement("div",{className:"btnDelete"},r.a.createElement(x.a,{variant:"contained",color:"secondary",className:c.button,startIcon:r.a.createElement(G.a,null)},"Delete"))},i=Object(n.useState)(null),s=Object(_.a)(i,2),m=s[0],p=s[1],d=Boolean(m),f=function(){p(null)};return r.a.createElement("div",null,r.a.createElement(I.a,{onClick:function(e){p(e.currentTarget)}},r.a.createElement(A.a,null)),r.a.createElement(k.a,{id:"long-menu",anchorEl:m,keepMounted:!0,open:d,onClose:f},r.a.createElement(S.b,{to:"/edit-products/".concat(t)},r.a.createElement(T.a,{onClick:f}," ",r.a.createElement(o,null)," ")),r.a.createElement(T.a,{onClick:function(){p(null),a(function(e){return function(t){b.deleteProduct(e).then((function(){t({type:"GET_PRODUCTS_FAIL",payload:e})})).catch((function(e){console.log("error"),t({type:"GET_PRODUCTS_FAIL",payload:e})}))}}(t))}}," ",r.a.createElement(u,null)," ")))},V=a(190),$=a(191),H=a(192),W=a(193),B=a(49),Y=(a(142),a(48)),Z=a.n(Y),Q=function(e){var t=e.price,a=e.sale,n=e.date,c=new Date,o="price",l="End of discount ",u="\u20b4",i="";return a&&n>c?(l+=Z()(n).from(c),i=(t/100*(100-a)).toFixed(0),o+="Sale"):(i="",u="",l=""),r.a.createElement("div",{className:"priceSaleDate"},r.a.createElement("span",{className:o},t," ","\u20b4"),r.a.createElement("span",null,"    "),r.a.createElement("span",{className:"price"},i," ",u),r.a.createElement("br",null),r.a.createElement("span",null,l))},J=(a(144),Object(z.a)((function(){return{root:{maxWidth:4e3,minWidth:200,minHeight:200,maxHeight:381,margin:20},media:{minWidth:200,minHeight:200,maxWidth:4e3,maxHeight:4e3}}}))),q=function(){var e=Object(l.b)(),t=J();Object(n.useEffect)((function(){e(g())}),[e]);var a=Object(l.c)((function(e){return e.products}));return r.a.createElement("div",{className:"obertka"},a.map((function(e,a){return r.a.createElement("div",{key:e+a,className:"productList"},r.a.createElement(V.a,{className:t.root},r.a.createElement($.a,{action:r.a.createElement(I.a,{"aria-label":"settings"},r.a.createElement(F,{id:e.id})),title:e.title}),r.a.createElement(H.a,{className:t.media,image:e.photo}),r.a.createElement(W.a,null,r.a.createElement(B.a,{variant:"body2",color:"textSecondary",component:"p"},e.description),r.a.createElement(B.a,{variant:"body2",color:"primary",component:"p"},r.a.createElement(Q,{price:e.price,sale:e.sale,date:e.dateEndSale})))))})))},K=a(194),X=(a(145),function(){var e=Object(l.b)(),t=Object(N.g)(),a=Object(n.useRef)({title:"",photo:"",description:"",price:"",sale:"",dateEndSale:""}),c=Object(n.useState)(""),o=Object(_.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)(""),m=Object(_.a)(s,2),p=m[0],d=m[1],f=Object(n.useState)(""),E=Object(_.a)(f,2),h=E[0],g=E[1],v=Object(n.useState)(""),O=Object(_.a)(v,2),j=O[0],y=O[1],C=Object(n.useState)(""),w=Object(_.a)(C,2),P=w[0],D=w[1],I=Object(n.useState)(""),k=Object(_.a)(I,2),T=k[0],U=k[1],A=function(e,t){a.current[t]=e,G()},R=function(){return!/^[\D]{2,7}$/.test(a.current.title)},L=function(){return!/^[a-zA-z0-9\D]/.test(a.current.photo)},z=function(){return!/^[\d.]{1,}$/.test(a.current.price)},M=function(){return!/^[\d]{2}$/.test(a.current.sale)},G=function(){var e=a.current,t=e.title,n=e.photo,r=e.description,c=e.price,o=e.sale;R()&&t.length>0?d("form__error"):d(""),L()&&n.length>0?g("form__error"):g(""),r.length>200?y("form__error"):y(""),z()&&c.length>0||c>99999999.99?D("form__error"):D(""),(M()||o<10||o>90)&&o.length>0?U("form__error"):U("")};return r.a.createElement("form",{className:"newProduct"},r.a.createElement("div",{className:"newText"},"Add configuration for your new product"),r.a.createElement("input",{className:"form__inputTitle ".concat(p),placeholder:"Mark (2-7 characters)",onInput:function(e){return A(e.target.value,"title")}}),r.a.createElement("input",{className:"form__inputPhoto ".concat(h),placeholder:"URL Photo",onInput:function(e){return A(e.target.value,"photo")}}),r.a.createElement("input",{className:"form__inputDescription ".concat(j),placeholder:"Model (max 200 characters)",onInput:function(e){return A(e.target.value,"description")}}),r.a.createElement("input",{className:"form__inputPrice ".concat(P),placeholder:"Price",onInput:function(e){return A(e.target.value,"price")}}),r.a.createElement("input",{className:"form__inputSale ".concat(T),placeholder:"Discount 10-90%",onInput:function(e){return A(e.target.value,"sale")}}),r.a.createElement(K.a,{id:"date",label:"Date (ending discount)",type:"date",className:"form__inputDate",value:u,onChange:function(e){i(e.target.value)},InputLabelProps:{shrink:!0}}),r.a.createElement("span",null,r.a.createElement(x.a,{className:"add-btn",variant:"contained",color:"primary",onClick:function(){var n=a.current,r=n.title,c=n.photo,o=n.description,l=n.price,i=n.sale;R()||L()||z()||M()||e(function(e,t,a,n,r,c,o){return function(l){b.postNewProduct(e,t,a,n,r,c).then((function(e){l({type:"ADD_PRODUCT_DATA_SUCCESS",payload:e.config.data}),o.push("/product-list")})).catch((function(e){l({type:"ADD_PRODUCT_DATA_FAIL",payload:e})}))}}(r,c,o,l,i,Date.parse(u),t))}},"Create"),r.a.createElement(S.b,{to:"/product-list"},r.a.createElement(x.a,{className:"add-btn",variant:"contained",color:"secondary"},"Cancel"))))}),ee=a(2),te=function(e){var t=e.component,a=Object(ee.a)(e,["component"]),c=Object(n.useContext)(P).currentUser;return r.a.createElement(N.b,Object.assign({},a,{render:function(e){return c?r.a.createElement(t,e):r.a.createElement(N.a,{to:"/sign-in"})}}))},ae=(a(146),a(147),function(){var e=Object(l.b)(),t=Object(N.g)(),a=Object(N.h)().id,c=Object(l.c)((function(e){return e.currentProduct}));Object(n.useEffect)((function(){e(function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_ONE_PRODUCT_REQUEST"}),t.prev=1,t.next=4,b.getOneProduct(e);case 4:n=t.sent,a({type:"GET_ONE_PRODUCT_SUCCESS",payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"GET_ONE_PRODUCT_FAIL",payload:t.t0,error:!0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(a))}),[e,a]);var o=Object(n.useState)(""),u=Object(_.a)(o,2),i=u[0],s=u[1],m=Object(n.useState)(""),p=Object(_.a)(m,2),E=p[0],h=p[1],v=Object(n.useState)(""),O=Object(_.a)(v,2),j=O[0],y=O[1],C=Object(n.useState)(""),w=Object(_.a)(C,2),P=w[0],D=w[1],I=Object(n.useState)(""),k=Object(_.a)(I,2),T=k[0],U=k[1],A=Object(n.useState)(""),R=Object(_.a)(A,2),L=R[0],z=R[1],M=Object(n.useState)(""),G=Object(_.a)(M,2),F=G[0],V=G[1],$=Object(n.useState)(""),H=Object(_.a)($,2),W=H[0],B=H[1],Y=Object(n.useState)(""),Q=Object(_.a)(Y,2),J=Q[0],q=Q[1],X=Object(n.useState)(""),ee=Object(_.a)(X,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),re=Object(_.a)(ne,2),ce=re[0],oe=re[1];Object(n.useEffect)((function(){s(c.title),h(c.photo),y(c.description),D(c.price),U(c.sale),z(c.dateEndSale)}),[c]);var le=function(e){return!/^[\D]{2,7}$/.test(e)},ue=function(e){return!/^[a-zA-z0-9\D]/.test(e)},ie=function(e){return!/^[\d.]{1,}$/.test(e)},se=function(e){return!/^[\d]{2}$/.test(e)},me=function(e){le(e)?V("form__error"):V("")},pe=function(e){ue(e)&&E.length>0?B("form__error"):B("")},de=function(){j.length>200?q("form__error"):q("")},fe=function(e){ie(e)&&P.length>0||P>99999999.99?ae("form__error"):ae("")},Ee=function(e){(se(e)||e<10||e>90)&&e.length>0?oe("form__error"):oe("")};return r.a.createElement("form",{className:"editProduct"},r.a.createElement("div",{className:"editText"},"Edit configuration for your product"),r.a.createElement("input",{className:"form__inputTitleEd ".concat(F),placeholder:"Mark (2-7 characters)",onChange:function(e){me(e.target.value),s(e.target.value)},value:i}),r.a.createElement("input",{className:"form__inputPhotoEd ".concat(W),placeholder:"URL Photo",onChange:function(e){h(e.target.value),pe()},value:E}),r.a.createElement("input",{className:"form__inputDescriptionEd ".concat(J),placeholder:"Model (max 200 characters)",onChange:function(e){y(e.target.value),de(e.target.value)},value:j}),r.a.createElement("input",{className:"form__inputPriceEd ".concat(te),placeholder:"Price",onChange:function(e){D(e.target.value),fe(e.target.value)},value:P}),r.a.createElement("input",{className:"form__inputSaleEd ".concat(ce),placeholder:"Sale %",onChange:function(e){U(e.target.value),Ee(e.target.value)},value:T}),r.a.createElement(K.a,{id:"date",label:"Date (ending discount)",type:"date",className:"form__inputDateEd",value:Z()(L).format("YYYY-MM-DD"),onChange:function(e){z(e.target.value)},InputLabelProps:{shrink:!0}}),r.a.createElement("span",null,r.a.createElement(x.a,{className:"add-btn",variant:"contained",color:"primary",onClick:function(){le(i)||ue(E)||ie(P)||de()||se(T)?console.log("smth wrong"):e(function(e,t,a,n,r,c,o,l){return function(u){b.editProduct(e,t,a,n,r,c,o).then((function(){u(g()),l.push("/product-list")})).catch((function(e){console.log("error"),u({type:"GET_PRODUCTS_FAIL",payload:e})}))}}(a,i,E,j,Number(P),Number(T),Date.parse(L),t))}}," Save changes"),r.a.createElement(S.b,{to:"/product-list"},r.a.createElement(x.a,{className:"add-btn",variant:"contained",color:"secondary"},"Cancel"))))}),ne=(a(148),Object(N.i)((function(e){var t=e.history,a=Object(n.useState)(!1),c=Object(_.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)(""),i=Object(_.a)(u,2),s=i[0],m=i[1],p=Object(n.useState)(""),E=Object(_.a)(p,2),b=E[0],h=E[1],g=Object(n.useState)(""),v=Object(_.a)(g,2),O=v[0],j=v[1],y=Object(n.useState)(""),C=Object(_.a)(y,2),D=C[0],I=C[1],x=Object(n.useCallback)(function(){var e=Object(f.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.auth().signInWithEmailAndPassword(s,b);case 3:t.push("/product-list"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),[t,s,b]);if(Object(n.useContext)(P).currentUser)return r.a.createElement(N.a,{to:"/product-list"});var k=function(){return!/^...+@..+\...+$/.test(s)},T=function(){return!/^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(b)};return r.a.createElement("div",{className:"form1"},r.a.createElement("form",{className:"signIn",onSubmit:x},r.a.createElement("div",{className:"ico"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"}))),r.a.createElement("label",null,"Sign in"),r.a.createElement("input",{type:"text",name:"email",className:"inputEmail ".concat(O),placeholder:"Email Address *",onChange:function(e){m(e.target.value),k()&&s.length>0?j("errorInput"):!k()&&s.length>0?j("correctInput"):j("")},defaultValue:s}),r.a.createElement("input",{type:"text",name:"pass",className:"inputPassword ".concat(D),placeholder:"Password *",onChange:function(e){h(e.target.value),T()&&b.length>0?I("errorInput"):!T()&&b.length>0?I("correctInput"):I("")},defaultValue:b}),r.a.createElement("label",{className:"container"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return l(!o)}}),"Remember me",r.a.createElement("span",{className:"checkmark"})),r.a.createElement("button",{className:"signInBtn",type:"submit",onClick:function(){k()||T()?console.log("\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"):(o&&(localStorage.setItem("email",s),localStorage.setItem("password",b)),console.log("all is goood"))}}," SIGN IN"),r.a.createElement("span",{className:"linkAnotherPage"},r.a.createElement(S.b,{className:"link1",to:"/sign-in"},"Forgot password?"),r.a.createElement(S.b,{className:"link2",to:"/sign-up"},"Don't have an account? Sign Up")),r.a.createElement("label",{className:"copyright"},"Copyright \xa9 Your Website 2020.")))}))),re=(a(149),Object(N.i)((function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(f.a)(d.a.mark((function e(a){var n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,c=n.password,e.prev=2,e.next=5,w.auth().createUserWithEmailAndPassword(r.value,c.value);case 5:t.push("/sign-in"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]),c=Object(n.useState)(!1),o=Object(_.a)(c,2),l=o[0],u=o[1],i=Object(n.useRef)({firstName:"",lastName:"",email:"",password:""}),s=Object(n.useState)(""),m=Object(_.a)(s,2),p=m[0],E=m[1],b=Object(n.useState)(""),h=Object(_.a)(b,2),g=h[0],v=h[1],O=Object(n.useState)(""),j=Object(_.a)(O,2),N=j[0],y=j[1],C=Object(n.useState)(""),P=Object(_.a)(C,2),D=P[0],I=P[1],x=function(){return!/[a-zA-Z0-9-_]{3,}/.test(i.current.firstName)},k=function(){return!/[a-zA-Z0-9-_]{3,}/.test(i.current.lastName)},T=function(){return!/^...+@..+\...+$/.test(i.current.email)},U=function(){return!/^[0-9a-zA-Z]{8,}$/.test(i.current.password)},A=function(e,t){i.current[t]=e,function(){var e=i.current,t=e.firstName,a=e.lastName,n=e.email,r=e.password;x()&&t.length>0?E("errorInput"):!x()&&t.length>0?E("correctInput"):E(""),k()&&a.length>0?v("errorInput"):!k()&&a.length>0?v("correctInput"):v(""),T()&&n.length>0?y("errorInput"):!T()&&n.length>0?y("correctInput"):y(""),U()&&r.length>0?I("errorInput"):!U()&&r.length>0?I("correctInput"):I("")}()};return r.a.createElement("div",{className:"form2"},r.a.createElement("form",{className:"signUp",onSubmit:a},r.a.createElement("div",{className:"ico"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"}))),r.a.createElement("label",null,"Sign up"),r.a.createElement("br",null),r.a.createElement("span",{className:"firstNamelastName"},r.a.createElement("input",{className:"inputFirstName ".concat(p),type:"text",name:"firstName",placeholder:"First Name *",onInput:function(e){return A(e.target.value,"firstName")}}),r.a.createElement("input",{className:"inputLastName ".concat(g),type:"text",name:"lastName",placeholder:"Last Name *",onInput:function(e){return A(e.target.value,"lastName")}})),r.a.createElement("br",null),r.a.createElement("input",{className:"inputEmail2 ".concat(N),type:"text",name:"email",placeholder:"Email Address *",onInput:function(e){return A(e.target.value,"email")}}),r.a.createElement("br",null),r.a.createElement("input",{className:"inputPassword2 ".concat(D),type:"text",name:"password",placeholder:"Password *",onInput:function(e){return A(e.target.value,"password")}}),r.a.createElement("label",{className:"container1"},r.a.createElement("input",{type:"checkbox",onChange:function(e){return u(!l)}}),"I want to receive inspiration, marketing ",r.a.createElement("br",null),"promotions and update via email.",r.a.createElement("span",{className:"checkmark1"})),r.a.createElement("button",{className:"signUpBtn",type:"submit",onClick:function(){x()||k()||T()||U()?console.log("\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"):console.log("all is goood")}},"SIGN UP"),r.a.createElement("div",{className:"linkAnotherPage2"},r.a.createElement(S.b,{to:"/sign-in"},"Already have an account? Sign in")),r.a.createElement("label",{className:"copyright"},"Copyright \xa9 Your Website 2020.")))}))),ce=[{path:"/edit-products/:id",component:r.a.createElement(ae,null)},{path:"/sign-in",component:r.a.createElement(ne,null),exact:!0},{path:"/sign-up",component:r.a.createElement(re,null),exact:!0}];var oe=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(D,null,r.a.createElement(S.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("ul",{className:"navigation"},r.a.createElement("li",null,r.a.createElement(S.b,{to:"/sign-in"},"Sign In")),r.a.createElement("li",null,r.a.createElement(S.b,{to:"/sign-up"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(S.b,{to:"/product-list"},"Product List")),r.a.createElement("li",null,r.a.createElement(S.b,{to:"/new-product"},"New Product")),r.a.createElement("li",null,r.a.createElement(S.b,{to:"/sign-in",onClick:function(){return w.auth().signOut()}},"Sign out")))),r.a.createElement(N.d,null,r.a.createElement(te,{exact:!0,path:"/product-list",component:q}),r.a.createElement(te,{exact:!0,path:"/new-product",component:X}),ce.map((function(e){return r.a.createElement(N.b,{exact:e.exact,key:e.toString(),path:e.path},e.component)})))))))};a(150);o.a.render(r.a.createElement(l.a,{store:j},r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(151)}},[[94,1,2]]]);
//# sourceMappingURL=main.0842fe98.chunk.js.map