(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["extra"],{"1c61":function(e,t,a){"use strict";var l=a("538d"),r=a.n(l);r.a},"2ee3":function(e,t,a){var l,r;(function(o,n){if(null===o)throw new Error("Google-maps package can be used only in browser");l=n,r="function"===typeof l?l.call(t,a,t,e):l,void 0===r||(e.exports=r)})("undefined"!==typeof window?window:null,(function(){"use strict";var e="3.31",t=null,a=null,l=!1,r=[],o=[],n=null,s={URL:"https://maps.googleapis.com/maps/api/js",KEY:null,LIBRARIES:[],CLIENT:null,CHANNEL:null,LANGUAGE:null,REGION:null};s.VERSION=e,s.WINDOW_CALLBACK_NAME="__google_maps_api_provider_initializator__",s._googleMockApiObject={},s.load=function(e){null===a?!0===l?e&&r.push(e):(l=!0,window[s.WINDOW_CALLBACK_NAME]=function(){i(e)},s.createLoader()):e&&e(a)},s.createLoader=function(){t=document.createElement("script"),t.type="text/javascript",t.src=s.createUrl(),document.body.appendChild(t)},s.isLoaded=function(){return null!==a},s.createUrl=function(){var e=s.URL;return e+="?callback="+s.WINDOW_CALLBACK_NAME,s.KEY&&(e+="&key="+s.KEY),s.LIBRARIES.length>0&&(e+="&libraries="+s.LIBRARIES.join(",")),s.CLIENT&&(e+="&client="+s.CLIENT),s.CHANNEL&&(e+="&channel="+s.CHANNEL),s.LANGUAGE&&(e+="&language="+s.LANGUAGE),s.REGION&&(e+="&region="+s.REGION),s.VERSION&&(e+="&v="+s.VERSION),e},s.release=function(i){var p=function(){s.KEY=null,s.LIBRARIES=[],s.CLIENT=null,s.CHANNEL=null,s.LANGUAGE=null,s.REGION=null,s.VERSION=e,a=null,l=!1,r=[],o=[],"undefined"!==typeof window.google&&delete window.google,"undefined"!==typeof window[s.WINDOW_CALLBACK_NAME]&&delete window[s.WINDOW_CALLBACK_NAME],null!==n&&(s.createLoader=n,n=null),null!==t&&(t.parentElement.removeChild(t),t=null),i&&i()};l?s.load((function(){p()})):p()},s.onLoad=function(e){o.push(e)},s.makeMock=function(){n=s.createLoader,s.createLoader=function(){window.google=s._googleMockApiObject,window[s.WINDOW_CALLBACK_NAME]()}};var i=function(e){var t;for(l=!1,null===a&&(a=window.google),t=0;t<o.length;t++)o[t](a);for(e&&e(a),t=0;t<r.length;t++)r[t](a);r=[]};return s}))},3558:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var l="AIzaSyAamVCoyQ4AuvBpxVRMs9P-HFkfPVQj0Kw"},"381f":function(e,t,a){},"538d":function(e,t,a){},6268:function(e,t,a){"use strict";var l=a("381f"),r=a.n(l);r.a},"8fa0":function(e,t,a){"use strict";var l=a("ef9e"),r=a.n(l);r.a},bed6:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"full-screen-map",attrs:{id:"map"}})},r=[],o=a("2ee3"),n=a.n(o),s=a("3558");n.a.KEY=s["a"];var i={data:function(){return{nav:null}},methods:{initMap:function(){var e=new window.google.maps.LatLng(40.748817,-73.985428),t={zoom:13,center:e,scrollwheel:!1,styles:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]},a=new window.google.maps.Map(document.getElementById("map"),t),l=new window.google.maps.Marker({position:e,title:"Regular Map!"});l.setMap(a)}},mounted:function(){var e=this,t=document.getElementsByTagName("nav");t.length>0&&(this.nav=t[0]),this.nav.classList.add("fixed-top"),this.nav.classList.remove("navbar-transparent"),n.a.load((function(t){e.initMap(t)}))},beforeDestroy:function(){this.nav.classList.add("navbar-transparent"),this.nav.classList.remove("bg-white"),this.nav.classList.remove("fixed-top")}},p=i,c=(a("6268"),a("2877")),u=Object(c["a"])(p,l,r,!1,null,null,null);t["default"]=u.exports},cec2:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("card",{attrs:{type:"plain"}},[a("h4",{staticClass:"card-title text-left",attrs:{slot:"header"},slot:"header"},[e._v("Satellite Map")]),a("div",{staticClass:"map map-big",attrs:{id:"satelliteMap"}})])],1),a("div",{staticClass:"col-md-6"},[a("card",{attrs:{type:"plain"}},[a("h4",{staticClass:"card-title text-left",attrs:{slot:"header"},slot:"header"},[e._v("Regular Map")]),a("div",{staticClass:"map",attrs:{id:"regularMap"}})])],1),a("div",{staticClass:"col-md-6"},[a("card",{attrs:{type:"plain"}},[a("h4",{staticClass:"card-title text-left",attrs:{slot:"header"},slot:"header"},[e._v("\n          Custom Skin & Settings Map\n        ")]),a("div",{staticClass:"map",attrs:{id:"customSkinMap"}})])],1)])])},r=[],o=a("2af9"),n=a("3558"),s=a("2ee3"),i=a.n(s);i.a.KEY=n["a"];var p={components:{Card:o["h"]},methods:{initSattelliteMap:function(){var e=new window.google.maps.LatLng(40.748817,-73.985428),t={zoom:3,scrollwheel:!1,center:e,mapTypeId:window.google.maps.MapTypeId.SATELLITE},a=new window.google.maps.Map(document.getElementById("satelliteMap"),t),l=new window.google.maps.Marker({position:e,title:"Satellite Map!"});l.setMap(a)},initRegularMap:function(){var e=new window.google.maps.LatLng(40.748817,-73.985428),t={zoom:8,center:e,scrollwheel:!1},a=new window.google.maps.Map(document.getElementById("regularMap"),t),l=new window.google.maps.Marker({position:e,title:"Regular Map!"});l.setMap(a)},initCustomSkinMap:function(e){var t=new e.maps.LatLng(40.748817,-73.985428),a={zoom:13,center:t,scrollwheel:!1,disableDefaultUI:!0,zoomControl:!0,styles:[{featureType:"water",stylers:[{saturation:43},{lightness:-11},{hue:"#0088ff"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:"#ff0000"},{saturation:-100},{lightness:99}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#808080"},{lightness:54}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ece2d9"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#ccdca1"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#767676"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#b8cb93"}]},{featureType:"poi.park",stylers:[{visibility:"on"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"on"}]},{featureType:"poi.medical",stylers:[{visibility:"on"}]},{featureType:"poi.business",stylers:[{visibility:"simplified"}]}]},l=new e.maps.Map(document.getElementById("customSkinMap"),a),r=new e.maps.Marker({position:t,title:"Custom Skin & Settings Map!"});r.setMap(l)}},mounted:function(){var e=this;i.a.load((function(t){e.initSattelliteMap(t),e.initRegularMap(t),e.initCustomSkinMap(t)}))}},c=p,u=(a("8fa0"),a("2877")),y=Object(u["a"])(c,l,r,!1,null,null,null);t["default"]=y.exports},def1:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"col-md-12"},[a("h4",{staticClass:"text-center",attrs:{slot:"header"},slot:"header"},[e._v("\n      World Map "),a("br"),e._m(0)]),a("card",{attrs:{type:"plain"}},[a("async-world-map",{staticClass:"map map-big",attrs:{data:e.mapData}})],1)],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("small",[e._v("\n        Looks great on any resolution. Made by our friends from\n        "),a("a",{attrs:{target:"_blank",rel:"noopener",href:"http://datamaps.github.io"}},[e._v("Data Maps")]),e._v(".\n      ")])}],o=a("ef9f"),n=a("2af9"),s={components:{AsyncWorldMap:o["default"],Card:n["h"]},data:function(){return{mapData:{AU:760,BR:550,CA:120,DE:1300,FR:540,GB:690,GE:200,IN:200,RO:600,RU:300,US:2920}}}},i=s,p=(a("1c61"),a("2877")),c=Object(p["a"])(i,l,r,!1,null,null,null);t["default"]=c.exports},ef9e:function(e,t,a){}}]);
//# sourceMappingURL=extra.40ee78e5.js.map