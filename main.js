(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _my_accessible_pipes_my_accessible_pipes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-accessible-pipes/my-accessible-pipes.component */ "./src/app/my-accessible-pipes/my-accessible-pipes.component.ts");
/* harmony import */ var _my_accessible_directives_my_accessible_directives_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-accessible-directives/my-accessible-directives.component */ "./src/app/my-accessible-directives/my-accessible-directives.component.ts");
/* harmony import */ var _my_observables_my_observables_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-observables/my-observables.component */ "./src/app/my-observables/my-observables.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        children: [
            {
                path: 'home',
                component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
            }
        ]
    },
    {
        path: 'posts',
        component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"]
    },
    {
        path: 'details/:id',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"]
    },
    {
        path: 'myAccessiblePipes',
        component: _my_accessible_pipes_my_accessible_pipes_component__WEBPACK_IMPORTED_MODULE_6__["MyAccessiblePipesComponent"]
    },
    {
        path: 'myAccessibleDirectives',
        component: _my_accessible_directives_my_accessible_directives_component__WEBPACK_IMPORTED_MODULE_7__["MyAccessibleDirectivesComponent"]
    },
    {
        path: 'myObservables',
        component: _my_observables_my_observables_component__WEBPACK_IMPORTED_MODULE_8__["MyObservablesComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".angular_features {\r\n    color: #663399;\r\n    font-size: 19px;\r\n}\r\n/* .heading {\r\n    color : #0000ff;\r\n}\r\n.supergirl_image {\r\n    width : 36px;\r\n} */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div id=\"container\">\r\n  <app-left-sidebar></app-left-sidebar>\r\n\r\n  <div style=\"text-align:center\">\r\n    <div id=\"header\">\r\n      <app-header></app-header>\r\n    </div>\r\n    \r\n    <div id=\"content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    \r\n    <div id=\"footer\">\r\n      <app-footer></app-footer>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./left-sidebar/left-sidebar.component */ "./src/app/left-sidebar/left-sidebar.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _my_accessible_pipes_my_accessible_pipes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./my-accessible-pipes/my-accessible-pipes.component */ "./src/app/my-accessible-pipes/my-accessible-pipes.component.ts");
/* harmony import */ var _demo1_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./demo1.pipe */ "./src/app/demo1.pipe.ts");
/* harmony import */ var _exponential_strength_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./exponential-strength.pipe */ "./src/app/exponential-strength.pipe.ts");
/* harmony import */ var _my_accessible_directives_my_accessible_directives_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./my-accessible-directives/my-accessible-directives.component */ "./src/app/my-accessible-directives/my-accessible-directives.component.ts");
/* harmony import */ var _shadow_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shadow.directive */ "./src/app/shadow.directive.ts");
/* harmony import */ var _fancy_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fancy.directive */ "./src/app/fancy.directive.ts");
/* harmony import */ var _my_observables_my_observables_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./my-observables/my-observables.component */ "./src/app/my-observables/my-observables.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["LeftSidebarComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_10__["PostsComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_11__["DetailsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _my_accessible_pipes_my_accessible_pipes_component__WEBPACK_IMPORTED_MODULE_14__["MyAccessiblePipesComponent"],
                _demo1_pipe__WEBPACK_IMPORTED_MODULE_15__["Demo1Pipe"],
                _exponential_strength_pipe__WEBPACK_IMPORTED_MODULE_16__["ExponentialStrengthPipe"],
                _my_accessible_directives_my_accessible_directives_component__WEBPACK_IMPORTED_MODULE_17__["MyAccessibleDirectivesComponent"],
                _shadow_directive__WEBPACK_IMPORTED_MODULE_18__["ShadowDirective"],
                _fancy_directive__WEBPACK_IMPORTED_MODULE_19__["FancyDirective"],
                _my_observables_my_observables_component__WEBPACK_IMPORTED_MODULE_20__["MyObservablesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    // getSimpleArray() {
    //   return  ['apple', 'mango', 'pineapple', 'banana'];
    // }
    DataService.prototype.getUsers = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    };
    DataService.prototype.getUser = function (userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
    };
    DataService.prototype.getPosts = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/demo1.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/demo1.pipe.ts ***!
  \*******************************/
/*! exports provided: Demo1Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo1Pipe", function() { return Demo1Pipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Demo1Pipe = /** @class */ (function () {
    function Demo1Pipe() {
    }
    Demo1Pipe.prototype.transform = function (value) {
        return Math.floor(value); //A numeric value representing the largest integer that is less than or equal to val.
    };
    Demo1Pipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'demo1'
        })
    ], Demo1Pipe);
    return Demo1Pipe;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 [ngStyle]=\"{color:user.name === 'Leanne Graham' ? 'purple':'black'}\" > {{user.name}} </h1>\n\n<ul>\n  <li><strong>Username:</strong> {{ user.username }}</li>\n  <li><strong>Email:</strong> {{ user.email }}</li>\n  <li><strong>Phone:</strong> {{ user.phone }}</li>\n</ul>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, data) {
        var _this = this;
        this.route = route;
        this.data = data;
        this.route.params.subscribe(function (params) { return _this.user = params.id; });
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUser(this.user).subscribe(function (data) { return _this.user = data; });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/exponential-strength.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/exponential-strength.pipe.ts ***!
  \**********************************************/
/*! exports provided: ExponentialStrengthPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExponentialStrengthPipe", function() { return ExponentialStrengthPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExponentialStrengthPipe = /** @class */ (function () {
    function ExponentialStrengthPipe() {
    }
    ExponentialStrengthPipe.prototype.transform = function (value, exponent) {
        var exp = parseFloat(exponent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    };
    ExponentialStrengthPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'exponentialStrength'
        })
    ], ExponentialStrengthPipe);
    return ExponentialStrengthPipe;
}());



/***/ }),

/***/ "./src/app/fancy.directive.ts":
/*!************************************!*\
  !*** ./src/app/fancy.directive.ts ***!
  \************************************/
/*! exports provided: FancyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FancyDirective", function() { return FancyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FancyDirective = /** @class */ (function () {
    function FancyDirective(elem) {
        this.elem = elem;
    }
    FancyDirective.prototype.ngOnInit = function () {
        this.elem.nativeElement.style.color = '#ff000f';
    };
    FancyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appFancy]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FancyDirective);
    return FancyDirective;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".powerd_footer {\r\n    padding: 30px;\r\n    text-align: right;\r\n}\r\n.supergirl_image {\r\n    width : 40px;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"powerd_footer\" [ngStyle]=\"{color: 'black', background: 'pink', 'font-weight': 'bold'}\">\n  Powered by {{powered$}}\n  <img src=\"assets/images/supergirl.png\" alt=\"Supergirl Image\" class=\"supergirl_image\">\n</h2>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.powered$ = 'SuperGirls !';
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_heading {\r\n    color : #0000ff;\r\n    font-weight: bold;\r\n}\r\n.supergirl_image {\r\n    width : 36px;\r\n}\r\n.main_heading .curr {\r\n    text-align: right;\r\n    font-weight: normal;\r\n    color: orange;\r\n    padding-left: 34px;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"main_heading\">\n    Welcome to {{ title }}!\n    <img src=\"assets/images/supergirl.png\" alt=\"Supergirl Image\" class=\"supergirl_image\">\n    <label class=\"curr\">{{currency | currency : 'EUR'}}</label>\n  </h1>\n\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.title = "Supergirl's App";
        this.currency = 9900;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/left-sidebar/left-sidebar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/left-sidebar/left-sidebar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background: #2D2E2E;\r\n    height: 100%;\r\n}\r\nnav ul {\r\n        list-style-type: none;\r\n        padding: 0;\r\n        margin: 0;\r\n    }\r\nnav ul li a {\r\n    color: #fff;\r\n    padding: 20px;\r\n    display: block;\r\n}\r\nnav ul li .activated {\r\n    background-color: #00a8ff;\r\n}"

/***/ }),

/***/ "./src/app/left-sidebar/left-sidebar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/left-sidebar/left-sidebar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- routerlinkactive concepts need to know -->\n<nav>    \n  <ul>\n    <li>\n      <a routerLink = \"\" [class.activated]=\"currentUrl == '/' || currentUrl == '/home' \"  title=\"Home\">\n        <i class=\"material-icons\">supervised_user_circle</i>\n      </a>\n    </li>\n\n    <li>\n      <a routerLink = \"posts\" [class.activated]=\"currentUrl == '/posts' \" title=\"Posts\">\n        <i class=\"material-icons\">message</i>\n      </a>\n    </li>\n\n    <li>\n      <a routerLink = \"myAccessiblePipes\" [class.activated]=\"currentUrl == '/myAccessiblePipes'\" title=\"My Accessible Pipes\">\n        <i class=\"material-icons\">accessibility new</i>\n      </a>\n    </li>\n\n    <li>\n        <a routerLink = \"myAccessibleDirectives\" [class.activated]=\"currentUrl == '/myAccessibleDirectives'\" title=\"My Accessible Directive\">\n          <i class=\"material-icons\">announcement</i>\n        </a>\n   </li>\n\n   <li>\n    <a routerLink = \"myObservables\" [class.activated]=\"currentUrl == '/myObservables'\" title=\"My Observables\">\n      <i class=\"material-icons\">faces</i>\n    </a>\n   </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/left-sidebar/left-sidebar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/left-sidebar/left-sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: LeftSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSidebarComponent", function() { return LeftSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeftSidebarComponent = /** @class */ (function () {
    function LeftSidebarComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (_) { return _this.currentUrl = _.url; });
    }
    LeftSidebarComponent.prototype.ngOnInit = function () {
    };
    LeftSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-sidebar',
            template: __webpack_require__(/*! ./left-sidebar.component.html */ "./src/app/left-sidebar/left-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar.component.css */ "./src/app/left-sidebar/left-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LeftSidebarComponent);
    return LeftSidebarComponent;
}());



/***/ }),

/***/ "./src/app/my-accessible-directives/my-accessible-directives.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/my-accessible-directives/my-accessible-directives.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".directives {\r\n     padding: 20px;\r\n     background: #fff;\r\n     border-radius: 8px;\r\n     margin-bottom: 8px;\r\n }"

/***/ }),

/***/ "./src/app/my-accessible-directives/my-accessible-directives.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/my-accessible-directives/my-accessible-directives.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"directives\">\n    <h2 class=\"heading\">Dumb directive</h2>\n    <span appShadow>Alligator</span>\n</div>\n\n<div class=\"directives\">\n  <h2 class=\"heading\">Providing Box-shadow to the element</h2>\n  <p [appShadow]= \"'hotpink'\" [appShadowX]=\"'12px'\" [appShadowY]=\"'6px'\" [appShadowBlur]=\"'30px'\">hello! I am Demo</p>\n</div>\n\n<div class=\"directives\">\n    <h2 class=\"heading\">Providing Color of element</h2>\n    <p appFancy>Hello! I am color Demo</p>\n</div>\n"

/***/ }),

/***/ "./src/app/my-accessible-directives/my-accessible-directives.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/my-accessible-directives/my-accessible-directives.component.ts ***!
  \********************************************************************************/
/*! exports provided: MyAccessibleDirectivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccessibleDirectivesComponent", function() { return MyAccessibleDirectivesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyAccessibleDirectivesComponent = /** @class */ (function () {
    function MyAccessibleDirectivesComponent() {
    }
    MyAccessibleDirectivesComponent.prototype.ngOnInit = function () {
    };
    MyAccessibleDirectivesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-accessible-directives',
            template: __webpack_require__(/*! ./my-accessible-directives.component.html */ "./src/app/my-accessible-directives/my-accessible-directives.component.html"),
            styles: [__webpack_require__(/*! ./my-accessible-directives.component.css */ "./src/app/my-accessible-directives/my-accessible-directives.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyAccessibleDirectivesComponent);
    return MyAccessibleDirectivesComponent;
}());



/***/ }),

/***/ "./src/app/my-accessible-pipes/my-accessible-pipes.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/my-accessible-pipes/my-accessible-pipes.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pipes {\r\n   /* // border: 1px solid green; */\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 8px;\r\n    margin-bottom: 8px;\r\n}\r\n.highlight {\r\n    color: red;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/my-accessible-pipes/my-accessible-pipes.component.html":
/*!************************************************************************!*\
  !*** ./src/app/my-accessible-pipes/my-accessible-pipes.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pipes\">\n  <h2 class=\"heading\"> A Numeric value representing the largest integer that is less than or equal to given value. </h2>\n  <p>getting a 1st demo: <label class=\"highlight\">{{ 89 | demo1 }}</label> </p>\n</div>\n\n<div class=\"pipes\">\n  <h2 class=\"heading\">Power Booster ( static exponent of 2 by 10)</h2>\n  <p>Super power boost: <label class=\"highlight\">{{2 | exponentialStrength: 10}}</label> </p>\n</div>\n\n<div class=\"pipes\">\n  <h2 class=\"heading\">Power Booster ( Dynamic)</h2>\n  <div> Normal power of superHero: <input [(ngModel)]=\"power\"> </div>\n  <div>Boost factor of superhero : <input [(ngModel)] =\"factor\"></div><br>\n  <h3>Now, superHero power: <label class=\"highlight\">{{power | exponentialStrength: factor }}</label> </h3>\n</div>  "

/***/ }),

/***/ "./src/app/my-accessible-pipes/my-accessible-pipes.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/my-accessible-pipes/my-accessible-pipes.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyAccessiblePipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccessiblePipesComponent", function() { return MyAccessiblePipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyAccessiblePipesComponent = /** @class */ (function () {
    function MyAccessiblePipesComponent() {
    }
    MyAccessiblePipesComponent.prototype.ngOnInit = function () {
        this.power = 3;
        this.factor = '2';
    };
    MyAccessiblePipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-accessible-pipes',
            template: __webpack_require__(/*! ./my-accessible-pipes.component.html */ "./src/app/my-accessible-pipes/my-accessible-pipes.component.html"),
            styles: [__webpack_require__(/*! ./my-accessible-pipes.component.css */ "./src/app/my-accessible-pipes/my-accessible-pipes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyAccessiblePipesComponent);
    return MyAccessiblePipesComponent;
}());



/***/ }),

/***/ "./src/app/my-observables/my-observables.component.css":
/*!*************************************************************!*\
  !*** ./src/app/my-observables/my-observables.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".observables {\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 8px;\r\n    margin-bottom: 8px;\r\n}"

/***/ }),

/***/ "./src/app/my-observables/my-observables.component.html":
/*!**************************************************************!*\
  !*** ./src/app/my-observables/my-observables.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"observables\">\n  <h1 class=\"heading\"> Please open Console to observe the keycode of ur entered key which will not work after 8 seconds</h1>\n</div>\n<!-- //observableDemo2()\n//{{nextdata}} -->\n<!-- <div *ngFor=\"let next of nxtdat\">\n    <p>observer got a next value:  {{next}} </p>\n\n</div> -->\n\n{{abc}}\n<!-- {{nextdata | async }} -->\n<!-- <div *ngFor=\"let next of nxtdat\">\n  <p>observer got a next value:  {{next}} </p>\n\n</div>  -->\n"

/***/ }),

/***/ "./src/app/my-observables/my-observables.component.ts":
/*!************************************************************!*\
  !*** ./src/app/my-observables/my-observables.component.ts ***!
  \************************************************************/
/*! exports provided: MyObservablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyObservablesComponent", function() { return MyObservablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyObservablesComponent = /** @class */ (function () {
    function MyObservablesComponent() {
        this.nxtdat = [];
        // this.observableDemo();
    }
    MyObservablesComponent.prototype.ngOnInit = function () {
        this.observableDemo1();
        this.observableDemo2();
    };
    MyObservablesComponent.prototype.observableDemo1 = function () {
        var _this = this;
        function subscriber(observer) {
            var handler = function (e) { return observer.next(e.keyCode); };
            document.addEventListener('keyup', handler);
            return function () {
                document.removeEventListener('keyup', handler); //provides a unsubscribe method (along with observable when we will subscribe to it) in its return object  whom we can access if we want after subscription to observable.
            };
        }
        var observableName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](subscriber); //observable need a subscriber we have created above. we can also use this inline.
        var observer = {
            next: function (data) {
                console.log(data),
                    _this.abc = data;
            },
            err: function (error) { console.log(error); },
            complete: function () { console.log('completed'); } // optional. indicates interaction with observable completes.
        };
        var forUnsubscribeWork = observableName.subscribe(observer); // need to pass observer(we created above) while subscribing to observables. can be used inline also.
        //forUnsubscribeWork -> as unsubscribe method is returned along with observable
        setTimeout(function () {
            forUnsubscribeWork.unsubscribe();
        }, 8000); //unsubscribing after 8 seconds.
    };
    MyObservablesComponent.prototype.observableDemo2 = function () {
        var _this = this;
        var observableName = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(7, 1, 1, 9, 4, 2, 1, 0, 4);
        var observer = {
            next: function (nextdata) {
                console.log('observer got a next value:' + nextdata);
                _this.nxtdat = nextdata;
            },
            error: function (err) { return console.error('Observer got an error: ' + err); },
            complete: function () { return console.log('Observer got a complete notification'); },
        };
        //executing with observer object
        observableName.subscribe(observer);
    };
    MyObservablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-observables',
            template: __webpack_require__(/*! ./my-observables.component.html */ "./src/app/my-observables/my-observables.component.html"),
            styles: [__webpack_require__(/*! ./my-observables.component.css */ "./src/app/my-observables/my-observables.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyObservablesComponent);
    return MyObservablesComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Posts</h1>\n\n<ul>\n  <li *ngFor=\"let post of posts\">\n    <a routerLink=\"\">{{ post.title }}</a>\n\n    <p>{{ post.body }}</p>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = /** @class */ (function () {
    function PostsComponent(data) {
        this.data = data;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getPosts().subscribe(function (data) { return _this.posts = data; });
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/shadow.directive.ts":
/*!*************************************!*\
  !*** ./src/app/shadow.directive.ts ***!
  \*************************************/
/*! exports provided: ShadowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowDirective", function() { return ShadowDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShadowDirective = /** @class */ (function () {
    function ShadowDirective(elem, renderer) {
        this.elem = elem;
        this.renderer = renderer;
        renderer.setStyle(elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
    }
    ShadowDirective.prototype.ngOnInit = function () {
        var shadowStr = this.appShadowX + " " + this.appShadowY + " " + this.appShadowBlur + " " + this.appShadow;
        this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', shadowStr);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ShadowDirective.prototype, "appShadow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ShadowDirective.prototype, "appShadowX", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ShadowDirective.prototype, "appShadowY", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ShadowDirective.prototype, "appShadowBlur", void 0);
    ShadowDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appShadow]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ShadowDirective);
    return ShadowDirective;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .users_content {\r\n    text-align: left;\r\n} */\r\n.date {\r\n    text-align: right;\r\n    color: orange;\r\n}"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"users_content\">\n    <label class=\"date\">{{birthday | date : \"fullDate\" | lowercase }}</label><br>\n    <label class=\"date\">{{birthday | date : \"dd/MM/yy\" | uppercase }}</label>\n\n <!-- <div class=\"row\">\n      <div class=\"col\">\n        <div ngbDropdown class=\"d-inline-block\">\n          <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Listing By</button>\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" *ngFor = \"let dec of decide\">\n            <button class=\"dropdown-item\">{{dec}}</button>\n          </div>\n        </div>\n      </div>\n    </div> -->\n  \n\n    <input type=\"checkbox\" [(ngModel)]=\"flag\"> {{flag}}\n  <h1 *ngIf=\"flag==true; else fruits\">\n  Users\n </h1>\n <ng-template #fruits>\n   <h1>\n      Fruits\n   </h1>\n </ng-template>\n\n<div *ngIf=\"flag == true; then truthyTemplate else falsyTemplate\" ></div>\n\n<ng-template #truthyTemplate>\n<ul [@listStagger] = \"users$\">\n  <li *ngFor=\"let user of users$\">\n    <a routerLink='/details/{{user.id}}'>{{user.name | uppercase}}</a>\n\n    <ul>\n      <li>{{user.email}}</li>\n      <li>\n        <a href=\"http://{{user.website}}\">{{user.website}}</a>\n      </li>\n    </ul>\n  </li>\n</ul>\n</ng-template>\n\n<ng-template #falsyTemplate>\n  <ul [@listStagger] = \"simplearr\">\n     <li *ngFor=\"let arr of simplearr\">\n        <span> {{arr}} </span>\n     </li>\n  </ul>\n</ng-template>\n\n</div>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(data) {
        this.data = data;
        this.simplearr = [];
        this.decide = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers().subscribe(function (data) { return _this.users$ = data; }
        // ( data ) =>  {                               //can be understood easily
        //   console.log(data);
        //   this.users$ = data;
        // }
        );
        this.simplearr = ['apple', 'mango', 'pineapple', 'banana'];
        this.flag = true;
        this.birthday = new Date(1994, 10, 7); // Nov 7, 1994
        this.decide = ['users', 'fruits'];
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")],
            //for Animations (list of user's on the user's page to fade in when the component loads)
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listStagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })), {
                            optional: true //At the end, we define an optional :leave animation.
                        })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\nodeJs Clone\angular-supergirls\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map