(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CalcI"],{"3dc0":function(t,a,s){},8783:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"info-box"},[s("div",{staticClass:"head"},[s("span",{staticClass:"gradient-title"},[t._v(t._s(t.$t("calc.pp")))])]),s("div",{staticClass:"des"},[s("div",[s("span",{staticClass:"label"},[t._v(t._s(t.$t("calc.bp")))]),s("span",{staticClass:"value"},[t._v(t._s(t.userTotalPower-t.teamPower))])]),s("div",[s("span",{staticClass:"label"},[t._v(t._s(t.$t("calc.tp")))]),s("span",{staticClass:"value"},[t._v(t._s(t.teamPower))])])])])])},i=[],n=(s("b680"),s("a9e3"),s("d3b7"),s("25f0"),s("2708")),o={mixins:[n["a"]],data:function(){return{showStatusTip:!1,teamPower:"0.000",userTotalPower:"0.000"}},created:function(){this.address&&this.initData()},methods:{initData:function(){this.getUserTotalPower(),this.getTeamPower()},getUserTotalPower:function(){var t=this;this.$ald.balanceOf(this.address).then((function(a){t.userTotalPower=Number(a.toString()/Math.pow(10,18)).toFixed(4)}))},getTeamPower:function(){var t=this;this.$ald.teamPower(this.address).then((function(a){t.teamPower=Number(a.toString()/Math.pow(10,18)).toFixed(4)}))}},watch:{address:function(t){t&&this.initData()}}},r=o,c=(s("b67d"),s("2877")),l=Object(c["a"])(r,e,i,!1,null,"5628511d",null);a["default"]=l.exports},b67d:function(t,a,s){"use strict";s("3dc0")}}]);
//# sourceMappingURL=CalcI.f07a39f1.js.map