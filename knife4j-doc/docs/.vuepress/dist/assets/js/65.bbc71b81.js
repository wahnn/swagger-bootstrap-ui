(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{345:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),n("p",[t._v("If you want to use the default language version of the non-current browser, you can switch in the settings function.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("Or use personalized quick settings, address bar quick settings access：")]),t._v(" "),t._m(6),t._v(" "),n("p",[t._v("lang values：中文(zh)、English(en)")]),t._v(" "),n("comment-comment")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"i18n"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i18n","aria-hidden":"true"}},[this._v("#")]),this._v(" i18n")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In version "),s("code",[this._v("1.9.3")]),this._v(", I18N internationalization support has been added. At present, it mainly implements Chinese and English versions. If new language support is required later, you can give me [issue] (https://github.com/xiaoymin/Swagger-Bootstrap-UI/issues/new) or modify the "),s("code",[this._v("i18n.js")]),this._v("file in the project and submit PR to me.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("swagger-bootstrap-ui")]),this._v(" Determine the default language version of the current browser by reading the "),s("code",[this._v("navigator")]),this._v(" object of the browser")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Current language")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lang "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("language "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" navigator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("browserLanguage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        lang"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("language"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/images/1-9-3/i18n-en.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("swagger-bootstrap-ui")]),this._v(" default zh")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("http://127.0.0.1:8888/doc.html?plus=1&cache=1&lang=en")])])}],!1,null,null,null);s.default=e.exports}}]);