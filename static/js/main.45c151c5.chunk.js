(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(24),r=a.n(n),i=a(12),o=(a(29),a(4)),l=a(5),d=a(6),h=a(8),j=a(7),m=a(10),u=a.n(m),b=a(1),p=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).getDataviaAxios=function(){var e="Canberra";c.props.cityName&&(e=c.props.cityName);var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("0cf172e803d3e760c17228daccbd18a6","&units=").concat("metric");u.a.get(t).then((function(e){var t=e.data;console.log(t);var a={temperature:t.main.temp,weather:t.weather[0].main,humidity:t.main.humidity,speed:t.wind.speed};c.setState({curentWeatherData:a})}))},c.getTemp=function(e){return parseFloat(e).toFixed(1)},c.state={curentWeatherData:[],cityName:e.cityName},c.getDataviaAxios=c.getDataviaAxios.bind(Object(d.a)(c)),c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getDataviaAxios()}},{key:"componentDidUpdate",value:function(e){this.props.cityName!==e.cityName&&this.getDataviaAxios()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"current_weather--main",children:[Object(b.jsx)("h3",{className:"current_weather--city",children:this.props.cityName}),Object(b.jsxs)("div",{className:"current_weather--body",children:[Object(b.jsxs)("div",{className:"current_weather--temp",children:[Object(b.jsxs)("h2",{className:"current_weather--h2",children:[this.state.curentWeatherData.temperature,"\xb0"]}),Object(b.jsx)("div",{className:"current_weather--description",children:this.state.curentWeatherData.weather})]}),Object(b.jsxs)("div",{className:"current_weather--hw",children:[Object(b.jsxs)("div",{className:"current_weather--humidity",children:[Object(b.jsx)("h4",{children:"HUMIDITY"}),Object(b.jsxs)("span",{children:[this.state.curentWeatherData.humidity,"%"]})]}),Object(b.jsx)("span",{className:"hw-seperated-line"}),Object(b.jsxs)("div",{className:"current_weather--wind",children:[Object(b.jsx)("h4",{children:"WIND"}),Object(b.jsxs)("span",{children:[this.state.curentWeatherData.speed,"K/M"]})]})]})]})]})}}]),a}(s.a.Component),x=(a(50),a(9)),v=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).getDataviaAxios=function(){var e="Canberra";c.props.cityName&&(e=c.props.cityName);var t="https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&appid=").concat("0cf172e803d3e760c17228daccbd18a6","&units=").concat("metric");console.log("getDataviaAxios--url----:",t),u.a.get(t).then((function(e){var t=e.data;console.log("data:",t);var a=c.getWeatherData(t.list);c.setState({dataItemList:a}),console.log("sortedItems:",a)}))},c.getWeatherData=function(e){var t=[];return console.log("getWeatherData------:",e),e.forEach((function(e){var a=e.dt_txt;if(a.includes("00:00:00")){console.log("dt_txt:",a);var s=e.weather[0].main;console.log(s);var n=e.main.temp;console.log(n);var r={date:c.getDayofWeek(a),weather:s,temperature:c.getTemp(n)};t.push(r)}})),console.log("getWeatherData--items----:",t),t},c.getDayofWeek=function(e){var t=e.split(" "),a=new Date(t[0]);console.log("getDay() : "+a.getDay());var c=["SUN","MON","TUE","WED","THU","FRI","SAT"][a.getDay()];return console.log("dayName() : "+c),c},c.getTemp=function(e){var t=parseFloat(e).toFixed(1);return console.log("temp : "+t),t},c.getIcon=function(e){var t=e.toLowerCase();return t.includes("rain")?Object(b.jsx)(x.c,{className:"dayweather-icons"}):t.includes("sun")?Object(b.jsx)(x.b,{className:"dayweather-icons "}):t.includes("cloud")?Object(b.jsx)(x.a,{className:"dayweather-icons "}):Object(b.jsx)(x.d,{className:"dayweather-icons "})},c.state={dataItemList:[]},c.getDataviaAxios=c.getDataviaAxios.bind(Object(d.a)(c)),c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getDataviaAxios()}},{key:"componentDidUpdate",value:function(e){this.props.cityName!==e.cityName&&this.getDataviaAxios()}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"daily_weather--main",children:this.state.dataItemList.map((function(t,a){return Object(b.jsxs)("div",{className:"daily_weather--item",children:[Object(b.jsx)("h3",{children:t.date}),e.getIcon(t.weather),Object(b.jsxs)("h4",{children:[t.temperature,"\xb0 "]})]},a)}))})}}]),a}(s.a.Component),O=a(13),y=a(11),N=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(o.a)(this,a),c=t.call(this,e),console.log("TwitterFeed cityname:",e.cityName),c}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"left-part",children:[Object(b.jsxs)("div",{className:"twitter-feed",children:[Object(b.jsx)(O.b,{className:"twitter-logo"}),Object(b.jsx)("h3",{children:"Twitter Feed "}),Object(b.jsx)("span",{className:"cityhashtag",children:this.props.cityName})]}),Object(b.jsxs)("div",{className:"twitter-news",children:[Object(b.jsxs)("div",{className:"twitter-feed-words",children:[Object(b.jsx)(O.a,{className:"grey-circle"}),Object(b.jsx)("p",{children:"Don't forget your sunscreen tomorrow! "})]}),Object(b.jsxs)("div",{className:"twitter-feed-words",children:[Object(b.jsx)(O.a,{className:"grey-circle"}),Object(b.jsxs)("p",{children:["Amazing weather in ",this.props.cityName,"!"]})]})]}),Object(b.jsxs)("div",{className:"next-div",children:[Object(b.jsx)("h4",{className:"next-text",children:"NEXT"}),Object(b.jsx)(y.a,{className:"next-arrow"})]})]})}}]),a}(c.Component),g=function(e){var t=Object(c.useState)(""),a=Object(i.a)(t,2),s=a[0],n=a[1];return Object(b.jsxs)("form",{className:"search-form",onSubmit:function(t){console.log("handleSubmit for city name"),t.preventDefault(),console.log(s),e.onSaveTitleData({cityName:s})},action:"#",children:[Object(b.jsx)(y.b,{}),Object(b.jsx)("input",{type:"text",value:s,onChange:function(e){n(e.target.value)},placeholder:"Search by city name"}),Object(b.jsx)("button",{type:"submit",children:"Search"})]})},f=function(e){var t=Object(c.useState)("Canberra"),a=Object(i.a)(t,2),s=a[0],n=a[1];return Object(b.jsxs)("div",{className:"weather-main",children:[Object(b.jsx)(g,{onSaveTitleData:function(e){console.log("App--get data from input:-----",e),n(e.cityName)}}),Object(b.jsxs)("section",{className:"container",children:[Object(b.jsx)(p,{cityName:s}),Object(b.jsxs)("div",{className:"botom-part",children:[Object(b.jsx)(N,{cityName:s}),Object(b.jsx)(v,{cityName:s})]})]})]})};r.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.45c151c5.chunk.js.map