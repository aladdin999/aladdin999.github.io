(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Upgrade"],{5056:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAr0lEQVQ4T+XU0Q2CMBDG8f/JDi6hO4jGGdhRN/AFYQcZwxH0rCSSVkoLlAcT+9rk1+vd1woLL1nY409ALdnJgfrdvuQra80JZSs5m2Twg/GkMBU2SaAPmw0OYbPAEOaAeiWXPVUo6DHMBau2qY2ZVuFDx2AuWJqxrzj70LFYr4cmoD10CuYdSocKt/bqJrR2zmKfifelWJUyBQvGRi+syXjIkXusKns/+S1/H/b74At6MVYVmeOyWQAAAABJRU5ErkJggg=="},"6b1b":function(t,e,a){},"7a35":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"card-box"},[n("div",{staticClass:"card-title"},[n("span",{staticClass:"gradient-title"},[t._v(t._s(t.$t("upgrade.t")))])]),n("div",{staticClass:"card-content"},[t._l(7,(function(e){return[n("input",{key:"r"+e,attrs:{type:"radio",id:"lv"+e,name:"level"},domProps:{checked:e==t.toLevel},on:{click:function(a){return t.changeLevel(e)}}}),n("label",{key:"l"+e,attrs:{for:"lv"+e}},[n("span",[t._v("LV."+t._s(e))]),n("img",{attrs:{src:a("5056"),alt:""}})])]})),Number(t.allow)?n("div",{staticClass:"up-btn theme-btn",on:{click:t.upgradeLevel}},[n("span",[t._v(t._s(t.$t("upgrade.t")))])]):n("div",{staticClass:"up-btn theme-btn",on:{click:t.approve}},[n("span",[t._v(t._s(t.$t("upgrade.approve"))+"ALD")])])],2)]),n("div",{staticClass:"tip-box"},[n("div",{staticClass:"tip-title"},[t._v(t._s(t.$t("upgrade.tt"))+":")]),n("div",{staticClass:"tip"},[n("span",{staticClass:"label"},[t._v("Lv."+t._s(t.toLevel))]),n("span",{staticClass:"content"},[t._v(" "+t._s(t.$t("upgrade.tip"))+" "),n("span",[t._v(t._s(t.needAmount))]),t._v(" ALD ")])])])])},s=[],i=a("1da1"),r=(a("96cf"),a("d3b7"),a("25f0"),a("a9e3"),a("b680"),a("2708")),o=a("c9a8"),l=a("c030"),c=a("9d56"),d=a("ab45"),u={mixins:[r["a"]],data:function(){return{showStatusTip:!1,userLevel:"0",toLevel:"",needAmount:"0.0000",aldToken:null,allow:0,btnStatus:0}},created:function(){this.address&&this.initData()},methods:{initData:function(){this.aldToken=new l["ethers"].Contract(o["Ald"],d,this.$provider).connect(this.$store.state.signer),this.getUserLevel(),this.getAllow()},getUserLevel:function(){var t=this;this.$ald.userLevel(this.address).then((function(e){t.userLevel=e.toString(),t.toLevel=e.toString()}))},getAllow:function(){var t=this;this.aldToken.allowance(this.address,o["aldAddr"]).then((function(e){t.allow=e.toString()}))},approve:function(){var t=this;this.aldToken.approve(o["aldAddr"],c["b"]).then((function(){t.getAllow()}))},changeLevel:function(t){Number(t)<=Number(this.userLevel)?this.toLevel=this.userLevel:(this.toLevel=t,this.getUpgradeLevelAmount(t))},upgradeLevel:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.aldToken.balanceOf(t.address);case 2:if(a=e.sent,!(Number(a.toString()/Math.pow(10,18))<t.needAmount)){e.next=6;break}return t.$toast("余额不足"),e.abrupt("return");case 6:t.$ald.upgradeLevel(t.toLevel,{from:t.address}).then((function(){}));case 7:case"end":return e.stop()}}),e)})))()},getUpgradeLevelAmount:function(t){var e=this;this.$ald.getLevelAmount(t,this.address).then((function(t){e.needAmount=Number(t.toString()/Math.pow(10,18)).toFixed(4)}))}},watch:{address:function(t){t&&this.initData()}}},v=u,p=(a("b282"),a("2877")),h=Object(p["a"])(v,n,s,!1,null,"bdac9c4a",null);e["default"]=h.exports},b282:function(t,e,a){"use strict";a("6b1b")}}]);
//# sourceMappingURL=Upgrade.550510bb.js.map