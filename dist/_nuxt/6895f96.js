(window.webpackJsonp=window.webpackJsonp||[]).push([[33,10],{570:function(e,t,n){"use strict";n.r(t);var l=n(604),r=(n(39),{name:"BaseInput",props:{label:{type:String,default:""},type:{type:String,default:"text"},rules:{type:[String,Array],default:""},name:{type:String,default:""}}}),o=n(42),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("validation-provider",{attrs:{name:e.name,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[e.label?t("label",{attrs:{for:""}},[e._v(e._s(e.label))]):e._e(),e._v(" "),t(l.a,e._g(e._b({attrs:{solo:"",type:e.type,label:e.label,"error-messages":r}},"v-text-field",e.$attrs,!1),e.$listeners))]}}])})}),[],!1,null,null,null);t.default=component.exports},674:function(e,t,n){"use strict";n.r(t);var l=n(569),r=(n(39),n(101)),o=Object(r.b)({layout:"auth",setup:function(){var e=Object(r.i)();return{login:Object(r.e)({email:"",password:""}),passwordType:Object(r.f)(!1),submitLogin:function(){e.push("/auth/home")}}},computed:{width:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 320;case"sm":return 400;case"md":case"lg":return 600;case"xl":return 700}}}}),d=n(42),component=Object(d.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"login h-100 d-flex justify-center"},[t("div",{staticClass:"my-auto"},[t(l.a,{attrs:{fluid:""}},[t("BaseCard",{staticClass:"text-center mt-10 pa-15",attrs:{width:e.width}},[t("validation-observer",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(n){var l=n.invalid;return[t("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("div",{staticClass:"login-head"},[t("h1",{staticClass:"display-1 font-weight-bold"},[e._v("Selamat Datang")]),e._v(" "),t("p",{staticClass:"text-gray font-weight-light mt-2"},[e._v("\n                Masukkan email dan password anda untuk mengakses akun anda\n              ")])]),e._v(" "),t("div",{staticClass:"login-content mt-10 mb-5"},[t("div",{staticClass:"email"},[t("BaseInput",{ref:"email",attrs:{outlined:"",label:"Email",placeholder:"Masukkan email anda","prepend-inner-icon":"mdi-email",rules:"required|email"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitLogin.apply(null,arguments)}},model:{value:e.login.email,callback:function(t){e.$set(e.login,"email",t)},expression:"login.email"}})],1),e._v(" "),t("div",{staticClass:"password"},[t("BaseInput",{ref:"password",attrs:{outlined:"","prepend-inner-icon":"mdi-lock","append-icon":e.passwordType?"mdi-eye":"mdi-eye-off",type:e.passwordType?"text":"password",label:"Password",placeholder:"Masukkan password anda",rules:"required"},on:{"click:append":function(t){e.passwordType=!e.passwordType}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitLogin.apply(null,arguments)}},model:{value:e.login.password,callback:function(t){e.$set(e.login,"password",t)},expression:"login.password"}})],1)]),e._v(" "),t("div",{staticClass:"login-button"},[t("BaseButton",{attrs:{disabled:l,block:"","x-large":""},on:{click:e.submitLogin}},[e._v("Masuk")])],1),e._v(" "),t("div",{staticClass:"login-footer mt-5 mb-n5"},[t("p",[e._v("\n                Lupa password?\n                "),t("nuxt-link",{staticClass:"text-primary font-weight-bold",attrs:{to:"/forgot-password"}},[e._v("Klik di sini")])],1)])])]}}])})],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseInput:n(570).default,BaseButton:n(381).default,BaseCard:n(380).default})}}]);