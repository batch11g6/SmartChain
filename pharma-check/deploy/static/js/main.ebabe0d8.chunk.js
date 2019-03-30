(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),s=(a(57),a(3)),i=a(4),o=a(7),d=a(5),u=a(6),m=a(18),h=a(46),E=a.n(h),p=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar is-transparent"},l.a.createElement("div",{class:"navbar-brand"},l.a.createElement("a",{class:"navbar-item",href:"https://github.com/batch11g6/SmartChain"},l.a.createElement("img",{src:E.a,alt:"Smart Chain",width:"52",height:"58"})),l.a.createElement("h6",{class:"navbar-item"},"Smart Chain"),l.a.createElement("div",{class:"navbar-burger burger","data-target":"navbarExampleTransparentExample"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("div",{class:"navbar-end"},l.a.createElement("div",{class:"navbar-item"},l.a.createElement("div",{class:"field is-grouped"},l.a.createElement("p",{class:"control"},l.a.createElement("a",{class:""},l.a.createElement("span",{class:"icon"}),l.a.createElement("span",null,l.a.createElement("a",{href:"%PUBLIC_URL%/"},l.a.createElement(m.b,{to:"/"},"Home"))))),l.a.createElement("p",{class:"control"},l.a.createElement("a",{class:" "},l.a.createElement("span",{class:"icon"}),l.a.createElement("span",null,l.a.createElement("a",{href:"%PUBLIC_URL%/report"},l.a.createElement(m.b,{to:"/report"},"Reports"))))),l.a.createElement("p",{class:"control"},l.a.createElement("a",{class:" "},l.a.createElement("span",{class:"icon"}),l.a.createElement("span",null,l.a.createElement("a",{href:"%PUBLIC_URL%/about"},l.a.createElement(m.b,{to:"/about"},"About"))))),"\xa0\xa0\xa0\xa0\xa0")))))}}]),t}(n.Component),b=a(15),g=a(49),f=a.n(g),v=a(27),j=a(50),y=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),O=a(51),C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(d.a)(t).call(this))).state={long:"",lat:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.isGeolocationAvailable?this.props.isGeolocationEnabled?this.props.coords?l.a.createElement("div",null,sessionStorage.setItem("long",this.props.coords.longitude),sessionStorage.setItem("lat",this.props.coords.latitude)):l.a.createElement("div",null,"Getting the location data\u2026 "):l.a.createElement("div",null,"Geolocation is not enabled"):l.a.createElement("div",null,"Your browser does not support Geolocation")}}]),t}(l.a.Component),k=Object(O.geolocated)({positionOptions:{enableHighAccuracy:!0},userDecisionTimeout:5e3})(C),S=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement(j.Card,{shadow:0,style:{width:"100%",height:"400px"}},l.a.createElement(v.Map,{google:this.props.google,style:{width:"100%",height:"800px"},initialCenter:{lat:sessionStorage.getItem("lat"),lng:sessionStorage.getItem("long")},zoom:15,onClick:this.onMapClicked},l.a.createElement(v.Marker,{onClick:this.onMarkerClick,name:"location"}))),l.a.createElement(y,null))}}]),t}(n.Component),w=(Object(v.GoogleApiWrapper)({apiKey:""})(S),a(33),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.dialogColor;return l.a.createElement("div",null,l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"columns"},l.a.createElement("div",{class:"column"},l.a.createElement("header",{class:"card-header"},l.a.createElement("p",{class:"card-header-title"},"Smart Chain"),l.a.createElement("a",{href:"#",class:"card-header-icon","aria-label":"more options"},l.a.createElement("span",{class:"icon"},l.a.createElement("i",{class:"fas fa-angle-down","aria-hidden":"true"})))),l.a.createElement("div",{class:"card-content"},l.a.createElement("div",{class:"content color_gray"},l.a.createElement("div",null,l.a.createElement("img",{width:"40%",src:this.props.statusUrlImage}),l.a.createElement("p",{style:{color:e}},this.props.displayMessage)),l.a.createElement("br",null),l.a.createElement("strong",null,"Product Name: ")," ",this.props.productDetails.productname,l.a.createElement("br",null),l.a.createElement("strong",null,"Ingredients: "),this.props.productDetails.ingredients,l.a.createElement("br",null),l.a.createElement("strong",null,"Manufactured date: "),this.props.productDetails.manufactureddate,l.a.createElement("br",null),l.a.createElement("strong",null,"Expiry date: "),this.props.productDetails.expirydate,l.a.createElement("br",null),l.a.createElement("strong",null,"Price (\u20b9): "),this.props.productDetails.price,l.a.createElement("br",null),l.a.createElement("strong",null,"batch number: "),this.props.productDetails.batchnumber,l.a.createElement("br",null)))))))}}]),t}(n.Component)),P="https://smartchainrestapi.herokuapp.com/",M="api/validityproduct/pharmavalidity/",I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={delay:2e3,result:" ",statusUrl:"https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif",isPresent:!1,details:"",displayMessage:"Scan the QR code by placing the product QR code in front of the camera",dialogColor:"gray",productDetails:{}},a.handleScan=a.handleScan.bind(Object(b.a)(a)),a.okClickHandler=a.okClickHandler.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleScan",value:function(e){var t=this;this.setState({result:e});var a={data:this.state.result,lat:sessionStorage.getItem("lat"),long:sessionStorage.getItem("long")},n=P,l=M;null!==this.state.result&&64===this.state.result.length?fetch(n+l,{method:"POST",body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){console.log("json.isPresent",e.isPresent),console.log("json.data",e.data.data.productname),t.setState({isPresent:e.isPresent,details:e.details,productDetails:e.data.data}),!0===e.isPresent?t.setState({statusUrl:"https://cdn.dribbble.com/users/900431/screenshots/2346622/green-check.gif",displayMessage:"The product is authenticated. It is a valid product and safe to use",isPresent:e.isPresent,dialogColor:"green"}):!1===e.isPresent?t.setState({statusUrl:"https://cdn.dribbble.com/users/179979/screenshots/1747462/warning_skull.gif",displayMessage:"The product seems to be counterfeit it is adviced not to use this product",isPresent:e.isPresent,dialogColor:"orange"}):t.setState({statusUrl:"https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif",dialogColor:"black",displayMessage:"Scan the QR code by placing the product QR code in front of the camera"})}).catch(function(e){return console.log(e)}):console.log("waiting")}},{key:"handleError",value:function(e){console.error(e)}},{key:"okClickHandler",value:function(e){this.setState({statusUrl:"https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif",dialogColor:"black",displayMessage:"Scan the QR code by placing the product QR code in front of the camera",productDetails:{}})}},{key:"render",value:function(){return l.a.createElement("div",{class:"columns"},l.a.createElement("div",{class:"column"},l.a.createElement("div",{class:"card"},l.a.createElement("header",{class:"card-header"},l.a.createElement("p",{class:"card-header-title "},"Scan the QR Code"),l.a.createElement("a",{href:"#",class:"card-header-icon","aria-label":"more options"},l.a.createElement("span",{class:"icon"},l.a.createElement("i",{class:"fas fa-angle-down","aria-hidden":"true"})))),l.a.createElement("div",{class:"card-content"},l.a.createElement("div",{class:"content"},l.a.createElement(f.a,{delay:this.state.delay,style:{height:400,width:420},onError:this.handleError,onScan:this.handleScan,facingMode:"rear"}),l.a.createElement("table",{class:"table is-striped is-bordered"},l.a.createElement("thead",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Valid"),l.a.createElement("th",null,"Details")),l.a.createElement("tr",null,l.a.createElement("td",null,this.state.result),l.a.createElement("td",null,this.state.isPresent),l.a.createElement("td",null,this.state.details))))))),l.a.createElement("div",{class:"column"},l.a.createElement(w,{statusUrlImage:this.state.statusUrl,displayMessage:this.state.displayMessage,dialogColor:this.state.dialogColor,isPresent:this.state.isPresent,resultCode:this.state.result,productDetails:this.state.productDetails}),l.a.createElement("br",null),l.a.createElement("a",{class:"button is-link is-rounded",onClick:this.okClickHandler},"OK")))}}]),t}(n.Component),D=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(k,null),l.a.createElement("div",{class:"card"},l.a.createElement("header",{class:"card-header"},l.a.createElement("p",{class:"card-header-title"},"Smart Chain"),l.a.createElement("a",{href:"#",class:"card-header-icon","aria-label":"more options"},l.a.createElement("span",{class:"icon"},l.a.createElement("i",{class:"fas fa-angle-down","aria-hidden":"true"})))),l.a.createElement("div",{class:"card-content"},l.a.createElement("div",{class:"content"},l.a.createElement(I,null)))))}}]),t}(n.Component);n.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(141),a(142);var U=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(d.a)(t).call(this))).handleGithubClick=e.handleGithubClick.bind(Object(b.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleGithubClick",value:function(){window.location.assign("https://github.com/batch11g6/SmartChain")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(y,null),l.a.createElement("div",{class:"columns"},l.a.createElement("div",{class:"column"}),l.a.createElement("div",{class:"column"},l.a.createElement("div",{class:"card"},l.a.createElement("header",{class:"card-header"},l.a.createElement("h4",{class:"card-header-title color_gray"},"Smart Chain"),l.a.createElement("a",{href:"/about",class:"card-header-icon","aria-label":"more options"},l.a.createElement("span",{class:"icon"},l.a.createElement("i",{class:"fas fa-angle-down","aria-hidden":"true"})))),l.a.createElement("div",{class:"card-content"},l.a.createElement("div",{class:"content color_gray"},l.a.createElement("br",null),l.a.createElement("h1",{class:"color_gray"},"Project Mentor: Sangeetha V"),l.a.createElement("h1",{className:"color_gray"},"Tream Members"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"USN")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("a",{href:"https://github.com/dm212"},"Yashwanth D M")),l.a.createElement("td",null,"1KS15CS123")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("a",{href:"https://github.com/Phaneendra97"},"Phaneendra A R")),l.a.createElement("td",null,"1KS15CS002")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("a",{href:"https://github.com/Mayurakr"},"Mayura K R")),l.a.createElement("td",null,"1KS15CS056")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("a",{href:"https://github.com/NikilMunireddy"},"Nikil M")),l.a.createElement("td",null,"1KS15CS066")))),l.a.createElement("a",{class:"button is-link is-rounded",onClick:this.handleGithubClick},"GitHub")))),l.a.createElement("div",{class:"column"})))}}]),t}(n.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,null),sessionStorage.getItem("long"),l.a.createElement("br",null),sessionStorage.getItem("lat"))}}]),t}(n.Component),G=a(16);c.a.render(l.a.createElement(m.a,null,l.a.createElement(G.c,null,l.a.createElement(G.a,{exact:!0,path:"/",component:D}),l.a.createElement(G.a,{path:"/about",component:U}),l.a.createElement(G.a,{path:"/report",component:R}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,t,a){},46:function(e,t,a){e.exports=a.p+"static/media/smartchain.4d5d888c.jpg"},52:function(e,t,a){e.exports=a(143)},57:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.ebabe0d8.chunk.js.map