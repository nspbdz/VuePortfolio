(window.webpackJsonp=window.webpackJsonp||[]).push([[32,14],{595:function(t,e,n){"use strict";n.r(e);var r=n(258),c=n(551),o=n(252),l=n(592),d=n(573),v=n(569),f=n(584),_=n(202),m=n(572),h=n(604),j=n(84),O=(n(12),n(60),{name:"BaseDialogsCart",inheritAttrs:!1,props:{data:{type:Object,required:!0}},data:function(){return{counter:1}}}),C=n(42),component=Object(C.a)(O,(function(){var t=this,e=t._self._c;return e(m.a,{attrs:{justify:"space-around"}},[e(d.a,{attrs:{cols:"auto"}},[e(f.a,t._g(t._b({attrs:{"max-width":"600",data:t.data,color:t.color},scopedSlots:t._u([{key:"default",fn:function(dialog){var n;return[e(c.a,[e(j.a,{staticClass:"mb-5",attrs:{color:"primary",dark:""}},[t._v("Order")]),t._v(" "),e(o.b,[e(v.a,[e(m.a,[e(d.a,{attrs:{cols:"12",sm:"6",md:"6"}},[e(h.a,{attrs:{label:"name*",required:""}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"6"}},[e(h.a,{attrs:{label:"Address",required:""}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(_.a,{staticClass:"image",attrs:{src:null===(n=t.data)||void 0===n?void 0:n.images[0],alt:"lorem","max-height":"150",width:"200"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"8",md:"8"}},[e("div",[e("h1",[t._v("\n                      "+t._s(t.data.title)+"\n                    ")]),t._v(" "),e("h4",[t._v("\n                      "+t._s(t.data.description)+"\n                    ")])]),t._v(" "),e(r.a,{staticClass:"btn btn--minus",on:{click:function(e){t.counter=t.counter-1}}},[t._v("\n                    -\n                  ")]),t._v(" "),e(l.a,[t._v("\n                    "+t._s(t.counter)+"\n                  ")]),t._v(" "),e(r.a,{staticClass:"btn btn--plus",on:{click:function(e){t.counter=t.counter+1}}},[t._v("\n                    +\n                  ")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",[t._v("\n                   $ "+t._s(t.data.price*t.counter)+".00\n                  ")])],1)],1)],1)],1),t._v(" "),e(o.a,{staticClass:"justify-center"},[e(r.a,{staticClass:"primary",attrs:{block:""},on:{click:function(t){dialog.value=!1}}},[t._v("Order")])],1)],1)]}}])},"v-dialog",t.$attrs,!1),t.$listeners))],1)],1)}),[],!1,null,null,null);e.default=component.exports},613:function(t,e,n){"use strict";n.r(e);var r=n(258),c=n(551),o=n(252),l=n(692),d=n(693),v=n(592),f=n(694),_=n(573),m=n(569),h=n(555),j=n(572),O=n(566),C=(n(12),n(60),n(39),n(101)),k={layout:"auth",props:{product:{required:!0,type:Object}},setup:function(t){var e=Object(C.i)();console.log(t);var n=Object(C.f)(""),dialog=Object(C.f)(null),r=Object(C.f)(["Places to Be","Places to See"]),c=Object(C.f)("Black"),o=Object(C.f)(["Red","Black","Blue"]);return console.log(n,"search"),{search:n,onShow:function(t){console.log(t),e.push("/product/"+t)},types:r,colors:o,selection:c,dialog:dialog,handleCart:function(){dialog.value=!0,console.log(dialog,"dialog")}}},computed:{width:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 320;case"sm":return 400;case"md":case"lg":return 600;case"xl":return 700}}}},x=n(42),component=Object(x.a)(k,(function(){var t=this,e=t._self._c;return e("div",[e(m.a,{attrs:{fluid:""}},[e(j.a,[e(_.a,{attrs:{cols:"12",md:"8"}},[e(c.a,[e(l.a,t._l(t.product.images,(function(t,i){return e(d.a,{key:i,attrs:{src:t,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)],1)],1),t._v(" "),e(_.a,{attrs:{cols:"12",md:"4"}},[e(c.a,{staticClass:"mx-auto",attrs:{"max-width":"400"}},[e(o.c,[e("h2",{staticClass:"text-h4"},[t._v("\n              "+t._s(t.product.title)+"\n            ")]),t._v(" "),e(O.a),t._v(" "),e("span",{staticClass:"text-h6"},[t._v("$"+t._s(t.product.price)+".00")])],1),t._v(" "),e(o.b,[t._v("\n            "+t._s(t.product.description)+"\n          ")]),t._v(" "),e(h.a,{staticClass:"mx-4"}),t._v(" "),e(o.b,[e("span",{staticClass:"subheading"},[t._v("Select Color")]),t._v(" "),e(f.a,{attrs:{"active-class":"deep-purple--text text--accent-4",mandatory:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},t._l(t.colors,(function(n){return e(v.a,{key:n,attrs:{value:n}},[t._v("\n                "+t._s(n)+"\n              ")])})),1)],1),t._v(" "),e(o.a,[e(r.a,{staticClass:"white--text",attrs:{block:"",color:"deep-purple accent-4"},on:{click:t.handleCart}},[t._v("\n              Add to Cart\n            ")])],1)],1)],1),t._v(" "),e("BaseDialogsCart",{attrs:{data:t.product},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseDialogsCart:n(595).default})},688:function(t,e,n){"use strict";n.r(e);n(39);var r=n(101),c={components:{Child:n(613).default},setup:function(){var t=Object(r.j)(),e=Object(r.i)(),n=Object(r.a)((function(){return e.currentRoute.params.id})),c=Object(r.f)([]),dialog=Object(r.f)(0);Object(r.d)((function(){c.value=e.currentRoute.params.id}));var o=Object(r.e)({name:"",phone:"",selectedRole:"",password:"",email:"",profile:"",referals:[]});Object(r.k)([c,o.profile],(function(e){console.log(e),t.dispatch("fetch/getProductById",c).then((function(t){}))}));var l=Object(r.a)((function(){return t.getters["fetch/id"]})),d=Object(r.f)("");return console.log(d,"search"),{idUrl:n,dataUser:o,handleModal:function(){dialog.value=!0,console.log(dialog)},dialog:dialog,search:d,productDetail:l}},computed:{width:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 320;case"sm":return 650;case"md":return 850;case"lg":case"xl":return 1200}}}},o=n(42),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return""!=t.dataUser?e("div",[e("Child",{attrs:{product:t.productDetail}})],1):e("div",[t._v("\n  data kosong\n")])}),[],!1,null,null,null);e.default=component.exports}}]);