(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{110:function(e,t){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),l=n(17),u=n(22),i=n(24),s=n(61),d=n(29),m=n(28),p=n(25),g=n.n(p),E=n(35),f=[{id:"1",name:"Ford Mustang GT",image:"mustang.jpg",data:{engine:"4951 cm3",power:"418 KM (307 kW)",torque:"529 Nm",doors:2,seats:4},price:99e3,currency:"PLN",oldPrice:null,new:null,promotion:null},{id:"2",name:"Mercedes-Benz AMG C63",image:"cl63.jpg",data:{engine:"6208 cm3",power:"457 KM (336 kW)",torque:"600 Nm",doors:2,seats:4},price:228e3,currency:"PLN",oldPrice:null,new:null,promotion:null},{id:"3",name:"Ferrari 458 Speciale",image:"f458speciale.jpg",data:{engine:"4497 cm3",power:"570 KM (419 kW)",torque:"540 Nm",doors:2,seats:2},price:6e6,currency:"PLN",oldPrice:null,new:null,promotion:null},{id:"4",name:"Dodge Viper SRT GTS",image:"viper.jpg",data:{engine:"8382 cm3",power:"608 KM (447 kW)",torque:"760 Nm",doors:2,seats:2},price:7e5,currency:"PLN",oldPrice:null,new:null,promotion:!0},{id:"5",name:"McLaren MP4-12C",image:"mclaren12c.jpg",data:{engine:"3799 cm3",power:"600 KM (441 kW)",torque:"600 Nm",doors:2,seats:2},price:18e5,currency:"PLN",oldPrice:null,new:null,promotion:null},{id:"6",name:"Aston Martin V12 Zagato",image:"astonm.jpg",data:{engine:"5935 cm3",power:"517 KM (380 kW)",torque:"560 Nm",doors:2,seats:2},price:59e4,oldPrice:8e5,currency:"PLN",new:!0,promotion:!0},{id:"7",name:"BMW Z4",image:"bmwz4.jpg",data:{engine:"2979 cm3",power:"340 KM (250 kW)",torque:"500 Nm",doors:2,seats:2},price:85e3,currency:"PLN",oldPrice:null,new:!0,promotion:null},{id:"1",name:"Ford Mustang GT",image:"mustang.jpg",data:{engine:"4951 cm3",power:"418 KM (307 kW)",torque:"529 Nm",doors:2,seats:4},price:99e3,currency:"PLN",oldPrice:null,new:null,promotion:null},{id:"2",name:"Mercedes-Benz AMG C63",image:"cl63.jpg",data:{engine:"6208 cm3",power:"457 KM (336 kW)",torque:"600 Nm",doors:2,seats:4},price:228e3,currency:"PLN",oldPrice:null,new:null,promotion:null},{id:"3",name:"Ferrari 458 Speciale",image:"f458speciale.jpg",data:{engine:"4497 cm3",power:"570 KM (419 kW)",torque:"540 Nm",doors:2,seats:2},price:6e6,currency:"PLN",oldPrice:null,new:null,promotion:null},{id:"4",name:"Dodge Viper SRT GTS",image:"viper.jpg",data:{engine:"8382 cm3",power:"608 KM (447 kW)",torque:"760 Nm",doors:2,seats:2},price:7e5,currency:"PLN",oldPrice:null,new:null,promotion:!0},{id:"5",name:"McLaren MP4-12C",image:"mclaren12c.jpg",data:{engine:"3799 cm3",power:"600 KM (441 kW)",torque:"600 Nm",doors:2,seats:2},price:18e5,currency:"PLN",oldPrice:null,new:null,promotion:null},{id:"6",name:"Aston Martin V12 Zagato",image:"astonm.jpg",data:{engine:"5935 cm3",power:"517 KM (380 kW)",torque:"560 Nm",doors:2,seats:2},price:59e4,oldPrice:8e5,currency:"PLN",new:!0,promotion:!0},{id:"7",name:"BMW Z4",image:"bmwz4.jpg",data:{engine:"2979 cm3",power:"340 KM (250 kW)",torque:"500 Nm",doors:2,seats:2},price:85e3,currency:"PLN",oldPrice:null,new:!0,promotion:null}];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var P=function(e){return e.products.request},y=function(e){var t=e.products;return Math.ceil(t.amount/t.productsPerPage)},O=function(e){return"app/".concat("products","/").concat(e)},b=O("LOAD_PRODUCTS"),N=O("LOAD_PRODUCTS_PAGE"),C=O("LOAD_SINGLE_PRODUCT"),j=O("CHANGE_SORTING"),k=O("START_REQUEST"),w=O("END_REQUEST"),S=O("ERROR_REQUEST"),D=O("RESET_REQUEST"),T=function(e){return{payload:e,type:N}},q=function(){return{type:k}},M=function(){return{type:w}},R=function(e){return{error:e,type:S}},A=function(){return{type:D}},x=function(e,t){return function(){var n=Object(E.a)(g.a.mark(function n(a,r){var c,o,l,u;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a(q()),n.prev=1,c=(e-1)*t,o=t,l=r().products.sort,n.t0=l,n.next=0===n.t0?8:1===n.t0?10:2===n.t0?12:3===n.t0?14:16;break;case 8:return f.sort(function(e,t){return e.name.localeCompare(t.name)}),n.abrupt("break",16);case 10:return f.sort(function(e,t){return t.name.localeCompare(e.name)}),n.abrupt("break",16);case 12:return f.sort(function(e,t){return e.price-t.price}),n.abrupt("break",16);case 14:return f.sort(function(e,t){return t.price-e.price}),n.abrupt("break",16);case 16:u={data:f.slice(c,c+o),amount:f.length,productsPerPage:t,presentPage:e},setTimeout(function(){a(T(u)),a(M())},1e3),n.next=23;break;case 20:n.prev=20,n.t1=n.catch(1),a(R(n.t1.message));case 23:case"end":return n.stop()}},n,null,[[1,20]])}));return function(e,t){return n.apply(this,arguments)}}()},z={data:[],amount:0,productsPerPage:6,presentPage:1,sort:0,singleProduct:null,request:{pending:!1,error:null,success:null}};var _=[{code:"AAA",discount:15},{code:"BBB",discount:10},{code:"CCC",discount:5}];function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var W=function(e){return"app/".concat("cart","/").concat(e)},K=W("INSERT_PRODUCT"),U=function(e){return{payload:e,type:K}},B=W("REMOVE_PRODUCT"),I=W("DELETE_PRODUCT"),G=W("CLEAR_CART"),Z=W("ADD_DISCOUNT_CODE"),Q=W("START_REQUEST"),V=W("END_REQUEST"),X=W("ERROR_REQUEST"),H=W("RESET_REQUEST"),J={products:[],total:0,discount:0,discountAmount:0,discountCode:null,request:{pending:!1,error:null,success:null}};var Y=Object(i.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b:return v({},e,{data:t.payload});case N:return v({},e,{productsPerPage:t.payload.productsPerPage,presentPage:t.payload.presentPage,amount:t.payload.amount,data:Object(d.a)(t.payload.data)});case C:return v({},e,{singleProduct:t.payload});case j:return v({},e,{sort:t.payload});case k:return v({},e,{request:{pending:!0,error:null,success:null}});case w:return v({},e,{request:{pending:!1,error:null,success:!0}});case S:return v({},e,{request:{pending:!1,error:t.error,success:!1}});case D:return v({},e,{request:z.request});default:return e}},cart:function(){var e,t,n,a,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(c.type){case K:var o=f.find(function(e){return e.id===c.payload});if(e=r.products.find(function(e){return e.product.id===c.payload})){var l=e.quantity+1;return t=r.products.map(function(t){return t.product.id===e.product.id&&(t.quantity=l),t}),F({},r,{products:t,total:a=r.total+e.product.price,discountAmount:n=-r.discount/100*a})}var u={product:o,quantity:1};return a=r.total+u.product.price,n=-r.discount/100*a,F({},r,{products:[].concat(Object(d.a)(r.products),[u]),total:a,discountAmount:n});case B:var i=(e=r.products.find(function(e){return e.product.id===c.payload})).quantity-1;return t=i>0?r.products.map(function(t){return t.product.id===e.product.id&&(t.quantity=i),t}):r.products.filter(function(t){return t.product.id!==e.product.id}),F({},r,{products:t,total:a=r.total-e.product.price,discountAmount:n=-r.discount/100*a});case I:return e=r.products.find(function(e){return e.product.id===c.payload}),t=r.products.filter(function(t){return t.product.id!==e.product.id}),F({},r,{products:t,total:a=r.total-e.product.price*e.quantity,discountAmount:n=-r.discount/100*a});case G:return F({},r,{products:[],total:0,discountAmount:0,discount:0,discountCode:null});case Z:var s=""!==c.payload?c.payload:null,m=0,p=_.find(function(e){return e.code===s});return p&&(m=p.discount),n=-Math.round(m/100*r.total*100)/100,F({},r,{discountCode:s,discount:m,discountAmount:n});case Q:return F({},r,{request:{pending:!0,error:null,success:null}});case V:return F({},r,{request:{pending:!1,error:null,success:!0}});case X:return F({},r,{request:{pending:!1,error:c.error,success:!1}});case H:return F({},r,{request:J.request});default:return r}}}),$=Object(i.e)(Y,Object(i.d)(Object(i.a)(s.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),ee=n(18),te=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},t)},ne=n(8),ae=n(9),re=n(11),ce=n(10),oe=n(12),le=n(133),ue=n(134),ie=(n(78),function(e){var t=e.links,n=e.location;return r.a.createElement(le.a,{className:"main-menu ml-auto",navbar:!0},t.map(function(e,t){return r.a.createElement(ue.a,{key:t,className:e.path===n.pathname?"active":""},r.a.createElement(l.c,{exact:!0,to:e.path,className:"nav-link",activeClassName:"active"},e.title))}))}),se=Object(ee.f)(function(e){return r.a.createElement(ie,e)}),de=n(67),me=n(135),pe=n(136),ge=n(137),Ee=n(138),fe=function(e){function t(e){var n;return Object(ne.a)(this,t),(n=Object(re.a)(this,Object(ce.a)(t).call(this,e))).toggle=function(){n.setState({isOpen:!n.state.isOpen})},n.state={isOpen:!1,links:[{path:"/",title:"Home"},{path:"/rules",title:"Regulamin"},{path:"/contact",title:"Kontakt"},{path:"/cart",title:r.a.createElement(de.a,{size:24})}]},n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){var e=this.state.links;return r.a.createElement(me.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(pe.a,{href:"/"},r.a.createElement("img",{src:"/images/logo.png",alt:"Logo"})),r.a.createElement(ge.a,{onClick:this.toggle}),r.a.createElement(Ee.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(se,{links:e})))}}]),t}(r.a.Component),he=n(139),ve=n(140),Pe=(n(87),function(e){function t(e){var n;return Object(ne.a)(this,t),(n=Object(re.a)(this,Object(ce.a)(t).call(this,e))).state={links:[{path:"/",title:"Home"},{path:"/regulamin",title:"Regulamin"},{path:"/contact",title:"Kontakt"}]},n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){var e=this.state.links;return r.a.createElement("div",{className:"footer"},r.a.createElement(he.a,null,r.a.createElement(ve.a,null,r.a.createElement(l.b,{to:"/",className:"logo-link"},r.a.createElement("img",{src:"/images/logo.png",height:"50",className:"logo"}))),r.a.createElement(ve.a,{className:"align-self-center text-center"},r.a.createElement("div",{className:"d-none d-lg-block"},"Copyright by geestaq 2019")),r.a.createElement(ve.a,{className:"align-self-center"},r.a.createElement("div",{className:"footer-menu float-right"},r.a.createElement(se,{links:e})))))}}]),t}(r.a.Component)),ye=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(te,null,r.a.createElement(fe,null),t,r.a.createElement(Pe,null)))},Oe=n(141),be=(n(88),function(e){var t=e.products;return r.a.createElement("div",{className:"products-list"},r.a.createElement(he.a,null,t.map(function(e,t){return r.a.createElement(ve.a,{key:t,lg:"4",md:"6"},r.a.createElement(l.b,{to:"/product/".concat(e.id),className:"product-item"},r.a.createElement("div",{className:"product-image"},r.a.createElement("img",{src:"./images/products/".concat(e.id,"/").concat(e.image),className:"img-fluid"}),r.a.createElement("div",{className:"product-markers"},e.new?r.a.createElement("div",{className:"new"},"Nowo\u015b\u0107"):"",e.promotion?r.a.createElement("div",{className:"promotion"},"Promocja"):"")),r.a.createElement("div",{className:"product-title"},e.name),r.a.createElement("div",{className:"product-price"},r.a.createElement("span",{className:"text-muted font-weight-normal"},"Cena: "),e.price," ",e.currency,e.oldPrice?r.a.createElement("span",{className:"old-price"},e.oldPrice):""),r.a.createElement("div",{className:"product-data"},r.a.createElement(Oe.a,{dark:!0,size:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Silnik:"),r.a.createElement("td",null,e.data.engine)),r.a.createElement("tr",null,r.a.createElement("td",null,"Moc:"),r.a.createElement("td",null,e.data.power)),r.a.createElement("tr",null,r.a.createElement("td",null,"Moment obrotowy:"),r.a.createElement("td",null,e.data.torque)),r.a.createElement("tr",null,r.a.createElement("td",null,"Drzwi:"),r.a.createElement("td",null,e.data.doors)),r.a.createElement("tr",null,r.a.createElement("td",null,"Miejsca:"),r.a.createElement("td",null,e.data.seats)))))))})))}),Ne=n(146),Ce=(n(89),function(e){function t(e){var n;return Object(ne.a)(this,t),(n=Object(re.a)(this,Object(ce.a)(t).call(this,e))).changePage=function(e){var t=n.props,a=t.onPageChange,r=t.perPage;n.setState({presentPage:e}),a(e,r)},n.state={presentPage:e.initialPage},n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){var e=this,t=this.props.pages,n=this.state.presentPage,a=(this.changePage,"");n>1&&(a=r.a.createElement("li",{key:"0",onClick:function(){return e.changePage(n-1)},className:"pagination-list-item"},"<"));var c="";return n<t&&(c=r.a.createElement("li",{key:t,onClick:function(){return e.changePage(n+1)},className:"pagination-list-item"},">")),r.a.createElement("div",{className:"pagination"},r.a.createElement("ul",{className:"pagination-list ml-auto"},a,Object(d.a)(Array(t)).map(function(t,a){return r.a.createElement("li",{key:++a,onClick:function(){return e.changePage(a)},className:"pagination-list-item".concat(a===n?" pagination-list-item--active":"")},a)}),c))}}]),t}(r.a.Component)),je=n(142),ke=n(143),we=n(144),Se=n(145),De=(n(90),function(e){function t(){var e,n;Object(ne.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(re.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e){(0,n.props.onSortChange)(parseInt(e.target.value))},n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){var e=this,t=this.props.presentSorting;return r.a.createElement("div",{className:"sorting clearfix"},r.a.createElement("div",{className:"float-right"},r.a.createElement(je.a,{inline:!0},r.a.createElement(ke.a,null,r.a.createElement(we.a,{for:"sort"},"Sortuj:"),r.a.createElement(Se.a,{type:"select",name:"sort",id:"sort",bsSize:"sm",onChange:function(t){return e.onChange(t)},value:t},r.a.createElement("option",{value:"0"},"A-Z"),r.a.createElement("option",{value:"1"},"Z-A"),r.a.createElement("option",{value:"2"},"od najta\u0144szego"),r.a.createElement("option",{value:"3"},"od najdro\u017cszego"))))))}}]),t}(r.a.Component)),Te=n(64),qe=(n(91),function(){return r.a.createElement("div",{className:"spinner text-center"},r.a.createElement(Te.Grid,{fill:"#7f7f7f",fillOpacity:"1"}))}),Me=(n(92),function(e){function t(e){var n;return Object(ne.a)(this,t),(n=Object(re.a)(this,Object(ce.a)(t).call(this,e))).onLoadProductsByPage=function(e,t){(0,n.props.loadProductsByPage)(e,t)},n.state={presentPage:e.initialPage,perPage:e.productsPerPage||e.initialProductsPerPage},n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadProductsByPage,n=e.resetRequest,a=this.state,r=a.presentPage,c=a.perPage;n(),t(r,c)}},{key:"render",value:function(){var e=this.props,t=e.products,n=e.request,a=e.pages,c=e.initialPage,o=e.presentSorting,l=e.changeSorting,u=this.state.perPage,i=this.onLoadProductsByPage,s=this.props.pagination;"undefined"==typeof s&&(s=!0);var d="";return s&&(d=r.a.createElement(Ce,{pages:a,perPage:u,initialPage:c,onPageChange:i})),!n.pending&&n.success&&t.length>0?r.a.createElement("section",{className:"products"},r.a.createElement(De,{presentSorting:o,onSortChange:l}),r.a.createElement(be,{products:t}),d):n.pending||null===n.success?r.a.createElement("section",{className:"products"},r.a.createElement(qe,null)):n.pending||null===n.error?!n.pending&&n.success&&0===t.length?r.a.createElement("section",{className:"products"},r.a.createElement(Ne.a,{color:"info"},"Brak produkt\xf3w")):void 0:r.a.createElement("section",{className:"products"},r.a.createElement(Ne.a,{color:"danger"},n.error))}}]),t}(r.a.Component)),Re=Object(u.b)(function(e){return{products:(r=e,r.products.data),request:P(e),pages:y(e),initialProductsPerPage:(a=e,a.products.productsPerPage),initialPage:(n=e,n.products.presentPage),presentSorting:(t=e,t.products.sort)};var t,n,a,r},function(e){return{loadProductsByPage:function(t,n){return e(x(t,n))},resetRequest:function(){return e(A())},changeSorting:function(t){return e(function(e){return function(){var t=Object(E.a)(g.a.mark(function t(n,a){var r;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{r=a().products.productsPerPage,n({payload:e,type:j}),n(x(1,r))}catch(c){n(R(c.message))}case 1:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}(t))}}})(Me),Ae=function(){return r.a.createElement("div",{className:"clearfix"},r.a.createElement(Re,null))},xe=(n(65),n(66),n(147)),ze=n(151),_e=n(148),Le=n(149),Fe=n(150),We=(n(128),function(e){function t(e){var n;return Object(ne.a)(this,t),(n=Object(re.a)(this,Object(ce.a)(t).call(this,e))).onAddToCart=function(){var e=n.props;(0,e.addProductToCart)(e.match.params.id),n.toggleModal()},n.toggleModal=function(){n.setState(function(e){return{modal:!e.modal}})},n.state={modal:!1},n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadSingleProduct,n=e.resetRequest,a=e.match;n(),t(a.params.id)}},{key:"render",value:function(){var e=this,t=this.props,n=t.singleProduct,a=t.request,c=n,o="";return!a.pending&&a.success&&null!==c&&(o=r.a.createElement("div",{className:"single-product"},r.a.createElement("div",{className:"product-title"},r.a.createElement("h3",null,c.name)),r.a.createElement(he.a,null,r.a.createElement(ve.a,{lg:"6"},r.a.createElement("img",{src:"/images/products/".concat(c.id,"/").concat(c.image),className:"img-fluid"})),r.a.createElement(ve.a,{lg:"3"},r.a.createElement("div",{className:"product-markers"},n.new?r.a.createElement("div",{className:"new"},"Nowo\u015b\u0107"):"",n.promotion?r.a.createElement("div",{className:"promotion"},"Promocja"):""),r.a.createElement("div",{className:"product-data"},r.a.createElement(Oe.a,{dark:!0,size:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Silnik:"),r.a.createElement("td",null,n.data.engine)),r.a.createElement("tr",null,r.a.createElement("td",null,"Moc:"),r.a.createElement("td",null,n.data.power)),r.a.createElement("tr",null,r.a.createElement("td",null,"Moment obrotowy:"),r.a.createElement("td",null,n.data.torque)),r.a.createElement("tr",null,r.a.createElement("td",null,"Drzwi:"),r.a.createElement("td",null,n.data.doors)),r.a.createElement("tr",null,r.a.createElement("td",null,"Miejsca:"),r.a.createElement("td",null,n.data.seats)))))),r.a.createElement(ve.a,{lg:"3"},r.a.createElement("div",{className:"product-price"},r.a.createElement("span",{className:"text-muted font-weight-normal"},"Cena: "),n.price," ",n.currency),n.oldPrice?r.a.createElement("div",{className:"product-old-price"},n.oldPrice):"",r.a.createElement("div",{className:"buttons"},r.a.createElement(xe.a,{color:"success",size:"lg",block:!0,onClick:function(){return e.onAddToCart()}},"Dodaj do koszyka")))),r.a.createElement(ze.a,{isOpen:this.state.modal,toggle:this.toggleModal},r.a.createElement(_e.a,{toggle:this.toggleModal},"Informacja"),r.a.createElement(Le.a,null,"Produkt zosta\u0142 dodany do koszyka"),r.a.createElement(Fe.a,null,r.a.createElement(xe.a,{color:"secondary",onClick:this.toggleModal},"Zamknij"))))),(a.pending||null===a.success)&&(o=r.a.createElement(qe,null)),a.pending||null===a.error||(o=r.a.createElement(Ne.a,{color:"error"},a.error)),!a.pending&&a.success&&null===n&&(o=r.a.createElement(Ne.a,{color:"info"},"Produkt nie istnieje")),r.a.createElement("div",{className:"content"},o)}}]),t}(r.a.Component)),Ke=Object(ee.f)(Object(u.b)(function(e){return{singleProduct:(t=e,t.products.singleProduct),request:P(e)};var t},function(e){return{loadSingleProduct:function(t){return e(function(e){return function(){var t=Object(E.a)(g.a.mark(function t(n){var a;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n(q());try{"undefined"==typeof(a=f.find(function(t){return t.id===e}))&&(a=null),setTimeout(function(){n({payload:a,type:C}),n(M())},1e3)}catch(r){n(R(r.message))}case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(t))},resetRequest:function(){return e(A())},addProductToCart:function(t){return e(U(t))}}})(We)),Ue=function(){return r.a.createElement("div",null,r.a.createElement(Ke,null))},Be=function(e){function t(){var e,n;Object(ne.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(re.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).onItemAdd=function(e){(0,n.props.addProductToCart)(e)},n.onItemRemove=function(e){(0,n.props.removeProductFromCart)(e)},n.onItemDelete=function(e){(0,n.props.deleteProductFromCart)(e)},n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.products,a=t.edit;return console.log({edit:a}),r.a.createElement("tbody",null,n.map(function(t,n){return r.a.createElement("tr",{key:n},r.a.createElement("th",{scope:"row"},n+1),r.a.createElement("td",null,t.product.name),r.a.createElement("td",{className:"text-right"},t.product.price),r.a.createElement("td",null,a?r.a.createElement(xe.a,{onClick:function(){return e.onItemRemove(t.product.id)},size:"sm"},"-"):"",r.a.createElement("span",{className:"px-2"},t.quantity),a?r.a.createElement(xe.a,{onClick:function(){return e.onItemAdd(t.product.id)},size:"sm"},"+"):""),r.a.createElement("td",{className:"text-right"},Math.round(parseFloat(t.quantity)*parseFloat(t.product.price)*100)/100),r.a.createElement("td",{className:"text-right"},a?r.a.createElement(xe.a,{onClick:function(){return e.onItemDelete(t.product.id)},color:"danger",size:"sm",title:"Usu\u0144 z koszyka"},"\xd7"):""))}))}}]),t}(r.a.Component),Ie=(n(129),function(e){function t(e){var n;return Object(ne.a)(this,t),(n=Object(re.a)(this,Object(ce.a)(t).call(this,e))).handleChangeDiscountCode=function(e){n.setState({discountCode:e.target.value})},n.handleDiscountCodeForm=function(e){n.setState({showDiscountForm:!0})},n.handleAddDiscountCode=function(){var e=n.props.addDiscountCode,t=n.state.discountCode;n.setState({showDiscountForm:!1}),e(t)},n.handleRemoveDiscountCode=function(){var e=n.props.addDiscountCode;n.setState({discountCode:""}),e("")},n.handleOrderConfirmation=function(){n.setState({showOrderConfirmation:!0})},n.state={discountCode:e.cart.discountCode||"",showDiscountForm:!1,showOrderConfirmation:!1},n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"componentWillUnmount",value:function(){console.log({unmount:"",state:this.state});var e=this.state.showOrderConfirmation,t=this.props.clearCart;e&&(t(),this.setState({showOrderConfirmation:!1}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.products,a=t.cart,c=t.addProductToCart,o=t.removeProductFromCart,l=t.deleteProductFromCart,u=this.state,i=u.showDiscountForm,s=u.discountCode,d=u.showOrderConfirmation,m="";if(0===n.length)m=r.a.createElement(Ne.a,{color:"info"},"Koszyk jest pusty");else{var p="Brak",g=d?"":r.a.createElement(xe.a,{onClick:function(t){return e.handleDiscountCodeForm(t)},size:"sm"},"+"),E="";i?(p=r.a.createElement(Se.a,{type:"text",name:"discountCode",id:"discountCode",placeholder:"Wprowad\u017a kod",size:"sm",className:"ml-auto",onChange:function(t){return e.handleChangeDiscountCode(t)},value:s}),g=r.a.createElement(xe.a,{onClick:function(){return e.handleAddDiscountCode()},size:"sm"},"Zatwierd\u017a")):a.discountCode&&a.discount>0?(p=a.discountAmount,g=d?"":r.a.createElement(xe.a,{onClick:function(){return e.handleRemoveDiscountCode()},size:"sm",color:"danger",title:"Usu\u0144 kod rabatowy"},"\xd7"),E=" (".concat(a.discountCode," - ").concat(a.discount,"%)")):a.discountCode&&0===a.discount&&(p="Nieprawid\u0142owy kod"),m=r.a.createElement("div",{className:"cart"},r.a.createElement(he.a,null,r.a.createElement(ve.a,null,r.a.createElement(Oe.a,{dark:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Produkt"),r.a.createElement("th",{className:"text-right"},"Cena"),r.a.createElement("th",null,"Ilo\u015b\u0107"),r.a.createElement("th",{className:"text-right"},"Warto\u015b\u0107"),r.a.createElement("th",null))),r.a.createElement(Be,{products:n,addProductToCart:c,removeProductFromCart:o,deleteProductFromCart:l,edit:!d}),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"4",className:"text-right"},"RAZEM:"),r.a.createElement("td",{className:"text-right"},a.total),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"4",className:"text-right"},"KOD RABATOWY",E,":"),r.a.createElement("td",{className:"text-right"},p),r.a.createElement("td",{className:"text-right"},g)),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"4",className:"text-right"},"DO ZAP\u0141ATY:"),r.a.createElement("td",{className:"text-right"},a.total+a.discountAmount),r.a.createElement("td",null)))))),r.a.createElement(he.a,null,r.a.createElement(ve.a,null,d?r.a.createElement(Ne.a,{color:"success"},"Twoje zam\xf3wienie zosta\u0142o przekazane do realizacji"):r.a.createElement("div",{className:"text-right"},r.a.createElement(xe.a,{onClick:function(){return e.handleOrderConfirmation()},size:"lg",color:"primary"},"Zap\u0142a\u0107")))))}return r.a.createElement("div",null,m)}}]),t}(r.a.Component)),Ge=Object(u.b)(function(e){return{products:(n=e,n.cart.products),cart:(t=e,t.cart)};var t,n},function(e){return{addProductToCart:function(t){return e(U(t))},removeProductFromCart:function(t){return e({payload:t,type:B})},deleteProductFromCart:function(t){return e({payload:t,type:I})},addDiscountCode:function(t){return e({payload:t,type:Z})},clearCart:function(){return e({type:G})}}})(Ie),Ze=function(){return r.a.createElement("div",{className:"content clearfix"},r.a.createElement("h1",null,"Koszyk"),r.a.createElement(Ge,null))},Qe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found"))},Ve=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Regulamin"),r.a.createElement("p",null,"Dost\u0119pny wkr\xf3tce..."))},Xe=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Kontakt"),r.a.createElement("p",null,"W przygotowaniu..."))};var He=function(){return r.a.createElement(ye,null,r.a.createElement(ee.c,null,r.a.createElement(ee.a,{path:"/",exact:!0,component:Ae}),r.a.createElement(ee.a,{path:"/product/:id",component:Ue}),r.a.createElement(ee.a,{path:"/cart",exact:!0,component:Ze}),r.a.createElement(ee.a,{path:"/rules",exact:!0,component:Ve}),r.a.createElement(ee.a,{path:"/contact",exact:!0,component:Xe}),r.a.createElement(ee.a,{component:Qe})))};n(130),n(131);o.a.render(r.a.createElement(function(){return r.a.createElement(u.a,{store:$},r.a.createElement(l.a,null,r.a.createElement(He,null)))},null),document.getElementById("root"))},68:function(e,t,n){e.exports=n(132)},78:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.0b3813d1.chunk.js.map