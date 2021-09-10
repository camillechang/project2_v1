(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a(19),n=a.n(s),r=a(4),i=(a(28),a(6)),o=a.n(i),l=(a(48),a(1)),j=function(e){var t=Object(c.useState)("Canberra"),a=Object(r.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)([]),j=Object(r.a)(i,2),d=j[0],h=j[1];return Object(c.useEffect)((function(){!function(){e.cityName&&n(e.cityName);var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(s,"&appid=").concat("0cf172e803d3e760c17228daccbd18a6","&units=").concat("metric");o.a.get(t).then((function(e){var t=e.data;console.log(t);var a={temperature:t.main.temp,weather:t.weather[0].main,humidity:t.main.humidity,speed:t.wind.speed};h(a)}))}()}),[e]),Object(l.jsxs)("div",{className:"current_weather--main",children:[Object(l.jsx)("h3",{className:"current_weather--city",children:s}),Object(l.jsxs)("div",{className:"current_weather--body",children:[Object(l.jsxs)("div",{className:"current_weather--temp",children:[Object(l.jsxs)("h2",{className:"current_weather--h2",children:[d.temperature,"\xb0"]}),Object(l.jsx)("div",{className:"current_weather--description",children:d.weather})]}),Object(l.jsxs)("div",{className:"current_weather--hw",children:[Object(l.jsxs)("div",{className:"current_weather--humidity",children:[Object(l.jsx)("h4",{children:"HUMIDITY"}),Object(l.jsxs)("span",{children:[d.humidity,"%"]})]}),Object(l.jsxs)("div",{className:"current_weather--wind",children:[Object(l.jsx)("h4",{children:"WIND"}),Object(l.jsxs)("span",{children:[d.speed,"K/M"]})]})]})]})]})};a(50);var d=function(e){var t=e.split(" "),a=new Date(t[0]);console.log("getDay() : "+a.getDay());var c=["SUN","MON","TUE","WED","THU","FRI","SAT"][a.getDay()];return console.log("dayName() : "+c),c},h=function(e){var t=parseFloat(e).toFixed(1);return console.log("temp : "+t),t},m=a(5),u=function(e){var t=Object(c.useState)("Canberra"),a=Object(r.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)([]),j=Object(r.a)(i,2),u=j[0],b=j[1];Object(c.useEffect)((function(){!function(){e.cityName&&n(e.cityName);var t="https://api.openweathermap.org/data/2.5/forecast?q=".concat(s,"&appid=").concat("0cf172e803d3e760c17228daccbd18a6","&units=").concat("metric");console.log("getDataviaAxios--url----:",t),o.a.get(t).then((function(e){var t=e.data;console.log("data:",t);var a=function(e){var t=[];return console.log("getWeatherData------:",e),e.forEach((function(e){var a=e.dt_txt;if(a.includes("00:00:00")){console.log("dt_txt:",a);var c=e.weather[0].main;console.log(c);var s=e.main.temp;console.log(s);var n={date:d(a),weather:c,temperature:h(s)};t.push(n)}})),console.log("getWeatherData--items----:",t),t}(t.list);b(a)}))}(),console.log("sortedItems:",u)}),[e]);var O=function(e){var t=e.toLowerCase();return t.includes("rain")?Object(l.jsx)(m.c,{className:"dayweather-icons"}):t.includes("sun")?Object(l.jsx)(m.b,{className:"dayweather-icons "}):t.includes("cloud")?Object(l.jsx)(m.a,{className:"dayweather-icons "}):Object(l.jsx)(m.d,{className:"dayweather-icons "})};return Object(l.jsx)("div",{className:"daily_weather--main",children:u.map((function(e,t){return Object(l.jsxs)("div",{className:"daily_weather--item",children:[Object(l.jsx)("h3",{children:e.date}),O(e.weather),Object(l.jsxs)("h4",{children:[e.temperature,"\xb0 "]})]},t)}))})},b=a(20),O=a(21),x=a(23),p=a(22),f=a(8),v=a(7),N=(a(51),function(e){Object(x.a)(a,e);var t=Object(p.a)(a);function a(e){var c;return Object(b.a)(this,a),c=t.call(this,e),console.log("TwitterFeed cityname:",e.cityName),c}return Object(O.a)(a,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"twitter_feed--main",children:[Object(l.jsxs)("div",{className:"twitter_feed--header",children:[Object(l.jsx)(f.b,{className:"twitter_feed--logo"}),Object(l.jsx)("h3",{children:"Twitter Feed "}),Object(l.jsxs)("span",{className:"twitter_feed--city",children:[" #",this.props.cityName]})]}),Object(l.jsxs)("div",{className:"twitter_feed--news",children:[Object(l.jsxs)("div",{className:"twitter_feed--item",children:[Object(l.jsx)(f.a,{className:"grey-circle"}),Object(l.jsx)("p",{children:"Don't forget your sunscreen tomorrow! "})]}),Object(l.jsxs)("div",{className:"twitter_feed--item",children:[Object(l.jsx)(f.a,{className:"grey-circle"}),Object(l.jsxs)("p",{children:["Amazing weather in ",this.props.cityName,"!"]})]})]}),Object(l.jsxs)("div",{className:"next-div",children:[Object(l.jsx)("h4",{className:"next-text",children:"NEXT"}),Object(l.jsx)(v.a,{className:"next-arrow"})]})]})}}]),a}(c.Component)),w=function(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),s=a[0],n=a[1];return Object(l.jsxs)("form",{className:"search_form",onSubmit:function(t){console.log("handleSubmit for city name"),t.preventDefault(),console.log(s),e.onSaveTitleData({cityName:s})},action:"#",children:[Object(l.jsx)(v.b,{className:"search_form--icon"}),Object(l.jsx)("input",{type:"text",value:s,onChange:function(e){n(e.target.value)},placeholder:"Search by city name"}),Object(l.jsx)("button",{type:"submit",children:"Search"})]})},y=function(e){var t=Object(c.useState)("Canberra"),a=Object(r.a)(t,2),s=a[0],n=a[1];return Object(l.jsxs)("div",{className:"weather-main",children:[Object(l.jsx)(w,{onSaveTitleData:function(e){console.log("App--get data from input:-----",e),n(e.cityName)}}),Object(l.jsxs)("section",{className:"container",children:[Object(l.jsx)(j,{cityName:s}),Object(l.jsxs)("div",{className:"botom-part",children:[Object(l.jsx)(N,{cityName:s}),Object(l.jsx)(u,{cityName:s})]})]})]})};n.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e5f87ad5.chunk.js.map