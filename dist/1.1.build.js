webpackJsonp([1],{8:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"rotate",data:function(){return{msg:"rotate",labels:[]}},created:function(){console.log("rotate create")},route:{data:function(t){var e=this;console.log("rotate data"),this.$http.get("../mock/item.json").then(function(t){e.labels=t.data.splice(0,2)}),t.next()}}}},15:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,".rotate{height:500px;padding-top:50px;position:relative;box-sizing:border-box}.rotate a{color:#fff;padding:5px;border:1px solid #fff;perspective:210;-webkit-perspective:210;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotateY(20deg) rotateX(10deg) rotate(30deg);transform:rotateY(20deg) rotateX(10deg) rotate(30deg);position:absolute}.rotate a:last-child{left:100px;top:100px}",""])},21:function(t,e){t.exports='<div class=rotate> <a href="" v-for="label in labels"> {{label.word}} </a> </div>'},27:function(t,e,o){var r,a;o(35),r=o(8),a=o(21),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},35:function(t,e,o){var r=o(15);"string"==typeof r&&(r=[[t.id,r,""]]);o(2)(r,{});r.locals&&(t.exports=r.locals)}});
//# sourceMappingURL=1.1.build.js.map