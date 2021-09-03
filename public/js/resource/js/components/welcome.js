"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resource/js/components/welcome"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "add-developer",
  data: function data() {
    return {
      developer: {
        First_Name: "",
        Last_Name: "",
        Email: "",
        Address: "",
        Phone: "",
        Avatar: ""
      },
      errors: []
    };
  },
  methods: {
    create: function create() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var IsValidate, filter;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.errors = [];
                IsValidate = true;

                if (_this.developer.First_Name == '') {
                  _this.errors.push("First Name required.");

                  IsValidate = false;
                }

                if (_this.developer.Last_Name == '') {
                  _this.errors.push("Last Name required.");

                  IsValidate = false;
                }

                if (_this.developer.Email == '') {
                  _this.errors.push("Email required.");

                  IsValidate = false;
                } else {
                  filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

                  if (!filter.test(_this.developer.Email)) {
                    _this.errors.push("Invalid Email.");

                    IsValidate = false;
                  }
                }

                if (_this.developer.Address == '') {
                  _this.errors.push("Address required.");

                  IsValidate = false;
                }

                if (_this.developer.Phone == '') {
                  _this.errors.push("Phone required.");

                  IsValidate = false;
                } else {
                  filter = /^(\+\d{1,3}[- ]?)?\d{10}$/;

                  if (!filter.test(_this.developer.Phone)) {
                    _this.errors.push("Invalid Phone.");

                    IsValidate = false;
                  }
                }

                if (_this.developer.Avatar == '') {
                  _this.errors.push("Avatar required.");

                  IsValidate = false;
                }

                if (IsValidate) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", IsValidate);

              case 10:
                _context.next = 12;
                return _this.axios.post('/api/Developers', _this.developer).then(function (response) {
                  _this.$router.push('/List');
                })["catch"](function (error) {
                  console.log(error);
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    uploadImage: function uploadImage() {
      var _this2 = this;

      var file = document.querySelector('input[type=file]').files[0];
      var reader = new FileReader();

      reader.onload = function (e) {
        console.log(e.target.result);
        _this2.developer.Avatar = e.target.result;
      };

      reader.onerror = function (error) {
        alert(error);
      };

      reader.readAsDataURL(file);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Create.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Create.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_67c71db2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=67c71db2& */ "./resources/js/components/Create.vue?vue&type=template&id=67c71db2&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Create_vue_vue_type_template_id_67c71db2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_67c71db2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Create.vue?vue&type=template&id=67c71db2&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Create.vue?vue&type=template&id=67c71db2& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_67c71db2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_67c71db2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_67c71db2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=67c71db2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Create.vue?vue&type=template&id=67c71db2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Create.vue?vue&type=template&id=67c71db2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Create.vue?vue&type=template&id=67c71db2& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.create.apply(null, arguments)
                }
              }
            },
            [
              _c("div", { staticClass: "row justify-content-center" }, [
                _vm.errors.length
                  ? _c("div", { staticClass: "row col-12" }, [
                      _c("b", [
                        _vm._v("Please correct the following error(s):")
                      ]),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "list-inline" },
                        _vm._l(_vm.errors, function(error) {
                          return _c(
                            "li",
                            {
                              staticClass: "list-inline-item",
                              staticStyle: {
                                color: "red",
                                "margin-left": "10px"
                              }
                            },
                            [_vm._v("•  " + _vm._s(error) + " ")]
                          )
                        }),
                        0
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", [
                  _c("div", { staticClass: "row col justify-content-center" }, [
                    _c("img", {
                      staticClass: "rounded-circle",
                      attrs: {
                        src: _vm.developer.Avatar,
                        alt: "Avatar",
                        width: "100",
                        height: "100"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex justify-content-center" }, [
                    _c(
                      "div",
                      {
                        staticClass: "btn btn-mdb-color btn-rounded float-left"
                      },
                      [
                        _c("span", [_vm._v("Add photo")]),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            type: "file",
                            name: "photo",
                            accept: "image/*"
                          },
                          on: { change: _vm.uploadImage }
                        })
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6 mb-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("First Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.developer.First_Name,
                          expression: "developer.First_Name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.developer.First_Name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.developer,
                            "First_Name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 mb-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Last Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.developer.Last_Name,
                          expression: "developer.Last_Name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.developer.Last_Name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.developer,
                            "Last_Name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6 mb-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Email")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.developer.Email,
                          expression: "developer.Email"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "Email" },
                      domProps: { value: _vm.developer.Email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.developer, "Email", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 mb-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Address")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.developer.Address,
                          expression: "developer.Address"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.developer.Address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.developer,
                            "Address",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6 mb-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Phone")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.developer.Phone,
                          expression: "developer.Phone"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number" },
                      domProps: { value: _vm.developer.Phone },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.developer, "Phone", $event.target.value)
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(1)
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Add Developer")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [_vm._v("Save")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);