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
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base/base.component */ "./src/app/base/base.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _choreographers_choreographers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./choreographers/choreographers.component */ "./src/app/choreographers/choreographers.component.ts");
/* harmony import */ var _dancers_dancers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dancers/dancers.component */ "./src/app/dancers/dancers.component.ts");
/* harmony import */ var _summer_programs_summer_programs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./summer-programs/summer-programs.component */ "./src/app/summer-programs/summer-programs.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        children: [
            {
                path: 'feelTheFeet',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            }
        ]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: '',
        component: _base_base_component__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
    },
    {
        path: 'choreographers',
        component: _choreographers_choreographers_component__WEBPACK_IMPORTED_MODULE_8__["ChoreographersComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'dancers',
        component: _dancers_dancers_component__WEBPACK_IMPORTED_MODULE_9__["DancersComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'summerPrograms',
        component: _summer_programs_summer_programs_component__WEBPACK_IMPORTED_MODULE_10__["SummerProgramsComponent"]
    },
    {
        path: 'contactUs',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__["ContactUsComponent"]
    },
    {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"]
    }
    // {
    //   path : 'details/:id',
    //   component : DetailsComponent
    // }
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

module.exports = ".main-container {\r\n    min-height: 80vh;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"container\" *ngIf = \"currentUrl != '/' ; else landingWebsite\" >\n  <div class=\"main-container\">\n    <app-header></app-header>\n  \n  <div id=\"content\">\n      <div class=\"sidebar\">\n          <app-sidebar></app-sidebar>\n      </div>\n    <router-outlet></router-outlet>\n    \n    \n  </div>\n\n  <app-pre-footer></app-pre-footer>\n</div>\n  <app-footer></app-footer>\n</div>\n\n<ng-template #landingWebsite>\n    <app-base></app-base>\n</ng-template>\n<!-- <app-home></app-home>\n<app-sidebar></app-sidebar> -->\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(router, fireauth, data, auth) {
        var _this = this;
        this.router = router;
        this.fireauth = fireauth;
        this.data = data;
        this.auth = auth;
        router.events.subscribe(function (_) { return _this.currentUrl = _.url; });
        //let status: boolean = this.auth.getLoggedInStatus();console.log(status);
        // if(status == false) {
        //   this.router.navigate(['/login']);
        // }
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fireauth.auth.onAuthStateChanged(function (user) {
            if (user) {
                var route_url = _this.data.getUrl();
                //   this.router.navigateByUrl(route_url);
                console.log(route_url);
                _this.auth.setLoggedInStatus(true);
                _this.router.navigate([route_url]);
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./base/base.component */ "./src/app/base/base.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _pre_footer_pre_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pre-footer/pre-footer.component */ "./src/app/pre-footer/pre-footer.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _choreographers_choreographers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./choreographers/choreographers.component */ "./src/app/choreographers/choreographers.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _dancers_dancers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dancers/dancers.component */ "./src/app/dancers/dancers.component.ts");
/* harmony import */ var _summer_programs_summer_programs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./summer-programs/summer-programs.component */ "./src/app/summer-programs/summer-programs.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _shadow_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shadow.directive */ "./src/app/shadow.directive.ts");
/* harmony import */ var _fancy_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./fancy.directive */ "./src/app/fancy.directive.ts");
/* harmony import */ var _dancer_detail_dancer_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dancer-detail/dancer-detail.component */ "./src/app/dancer-detail/dancer-detail.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _base_base_component__WEBPACK_IMPORTED_MODULE_15__["BaseComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _pre_footer_pre_footer_component__WEBPACK_IMPORTED_MODULE_17__["PreFooterComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _choreographers_choreographers_component__WEBPACK_IMPORTED_MODULE_19__["ChoreographersComponent"],
                _dancers_dancers_component__WEBPACK_IMPORTED_MODULE_21__["DancersComponent"],
                _summer_programs_summer_programs_component__WEBPACK_IMPORTED_MODULE_22__["SummerProgramsComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_23__["ContactUsComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_24__["LogoutComponent"],
                _shadow_directive__WEBPACK_IMPORTED_MODULE_25__["ShadowDirective"],
                _fancy_directive__WEBPACK_IMPORTED_MODULE_26__["FancyDirective"],
                _dancer_detail_dancer_detail_component__WEBPACK_IMPORTED_MODULE_27__["DancerDetailComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_28__["DetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuardService.prototype.checkLogin = function (url) {
        if (this.authService.getLoggedInStatus()) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(firauth, db) {
        this.firauth = firauth;
        this.db = db;
        this.loggedInStatus = false;
        this.redirectUrl = '/choreographers';
    }
    AuthService.prototype.validateLoginUser = function (userCredential) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firauth.auth.signInWithEmailAndPassword(userCredential.email, userCredential.password)
                .then(function (result) {
                _this.setLoggedInStatus(true);
                resolve("You are registered login !");
            })
                .catch(function (err) {
                reject(err.message);
            });
        });
        // message : String;
        // function subscriber (observer) {
        //   //const handler = (e) => observer.next(e.keyCode);
        //   if(userCredential.email == localStorage.getItem('email') && userCredential.password == localStorage.getItem('password')) {
        //     this.message = 'You are successfully logIn';
        //     observer.next(this.message);
        //   }
        //   else {
        //     this.message = 'Invalid credentials !';
        //     observer.error(this.message);
        //   }
        // }
        // let LoginObservable= new Observable(subscriber);
        //  return LoginObservable;
    };
    // logout() {
    //   this.firauth.auth.signOut();
    //   var user = this.firauth.a;
    // }
    AuthService.prototype.getLoggedInStatus = function () {
        return this.loggedInStatus;
    };
    AuthService.prototype.setLoggedInStatus = function (isLoggedIn) {
        this.loggedInStatus = isLoggedIn;
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.firauth.auth.currentUser;
    };
    AuthService.prototype.logout = function () {
        this.setLoggedInStatus(false);
        return this.firauth.auth.signOut();
    };
    AuthService.prototype.googleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firauth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider)
                .then(function (data) {
                _this.setLoggedInStatus(true);
                resolve(data);
            })
                .catch(function (err) {
                reject(err.message);
            });
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/base/base.component.css":
/*!*****************************************!*\
  !*** ./src/app/base/base.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".base_image {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    \r\n}\r\n.base_image img {    width: 100vw;\r\n    height: 100vh;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;}\r\n.quote {\r\n    position: absolute;\r\n    top: 48%;\r\n    left: 75%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    color: black;\r\n    text-transform: uppercase;\r\n}\r\n.main_link {\r\n    position: absolute;\r\n    top: 21vw;\r\n    left: 44%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n    font-size: 27px;\r\n    background: blueviolet;\r\n    font-weight: bold; \r\n    padding: 8px 30px 12px;\r\n    border-radius: 5px;\r\n}\r\n.main_link:hover {background: red;transition: all 0.3s ease-in-out 0s;}\r\n.main_link a {\r\n    text-decoration: none;\r\n    color:#fff;\r\n}"

/***/ }),

/***/ "./src/app/base/base.component.html":
/*!******************************************!*\
  !*** ./src/app/base/base.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"base_image\">\n    <img src=\"assets/images/base.jpg\" alt=\"Dance\" class=\"base_dance_image\">\n    <div class=\"quote\">\n      \"Dance, when you're broken open.\n      Dance if you've torn the badage off.\n      Dance in the middle of the fighting.\n      Dance in your blood.Dance when \n      you're perfectly free.\"\n    </div>\n    <div class=\"main_link\">\n      <a routerLink=\"home\">\n        Free Ur Feet\n      </a>\n    </div>\n</div>\n\n<!-- unable to use \nCan't bind to 'ng-src' since it isn't a known property of 'img'. -->"

/***/ }),

/***/ "./src/app/base/base.component.ts":
/*!****************************************!*\
  !*** ./src/app/base/base.component.ts ***!
  \****************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
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

var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
    }
    BaseComponent.prototype.ngOnInit = function () {
    };
    BaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-base',
            template: __webpack_require__(/*! ./base.component.html */ "./src/app/base/base.component.html"),
            styles: [__webpack_require__(/*! ./base.component.css */ "./src/app/base/base.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/choreographers/choreographers.component.css":
/*!*************************************************************!*\
  !*** ./src/app/choreographers/choreographers.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .user_content {\r\n    text-align: center;\r\n    padding: 150px 50px;\r\n    background-repeat: no-repeat;\r\n     background-position: 50%;\r\n       background-size: cover;  \r\n}\r\n.user_content ul {\r\n    list-style-type: none;\r\n    margin:0;padding:0px;\r\n}\r\n\r\n.user_content ul li {\r\n    background: pink;\r\n    border-radius: 8px;\r\n    padding: 20px;\r\n    margin-bottom: 8px;\r\n}\r\n.user_content ul li a {\r\n    font-size: 1.5em;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    color:#00A8FF;\r\n}\r\n.user_content ul li ul {\r\n    margin-top: 20px;\r\n}\r\n.user_content ul li ul li {\r\n    padding:0;\r\n}\r\n.user_content ul li ul li a {\r\n    font-size: 1em;\r\n    font-weight: 300;\r\n} */\r\n.user_content ul li {\r\n    background: pink;\r\n}\r\n.user_content h1 {\r\n    color: purple;\r\n}\r\n.user_content {\r\n    padding-left: 129px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/choreographers/choreographers.component.html":
/*!**************************************************************!*\
  !*** ./src/app/choreographers/choreographers.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user_content\" [ngStyle]=\"{'background-image': 'url(\\'assets/images/choreographers.jpg\\')'}\">\n  <h1>List of available ChoreoGraphers</h1>\n    <ul [@listStagger] = \"users$\">\n            <li *ngFor=\"let user of users$\">\n              <a routerLink='/details/{{user.choreographerId}}'>{{user.name | uppercase}}</a>\n          \n              <ul>\n                <li>DanceStyle: {{user.dancestyle}}</li>\n                <li>\n                  Availability Day:<a href=\"{{user.choreographerId}}\">{{user.available}}</a>\n                </li>\n                <li>Age: {{user.age}}</li>\n              </ul>\n            </li>\n          </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/choreographers/choreographers.component.ts":
/*!************************************************************!*\
  !*** ./src/app/choreographers/choreographers.component.ts ***!
  \************************************************************/
/*! exports provided: ChoreographersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoreographersComponent", function() { return ChoreographersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _negotiate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../negotiate.service */ "./src/app/negotiate.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChoreographersComponent = /** @class */ (function () {
    function ChoreographersComponent(data, router, negotiate, auth) {
        var _this = this;
        this.data = data;
        this.router = router;
        this.negotiate = negotiate;
        this.auth = auth;
        this._router = router;
        this._router.events.subscribe(function (route) {
            _this.currentUrl = _this._router.url;
            _this.data.storeUrl(_this.currentUrl);
        });
        this.choreographer = 'choreographer';
        this.data.getDancers(this.choreographer).subscribe(function (data) {
            _this.users$ = data;
            console.log(data);
        });
        setTimeout((function () {
            this.loggout();
            console.log(this.currentUrl);
        }).bind(this), 43200000);
    }
    ChoreographersComponent.prototype.ngOnInit = function () {
        // this.choreographer = 'choreographer';
        // this.data.getDancers(this.choreographer).subscribe(
        //   data => {
        //     this.users$ = data; 
        //     console.log(data);
        //   }
        // );
        // this.data.getUsers().subscribe(
        //   // data => this.users$ = data
        //   data => {
        //     this.users$ = data;
        //     console.log(data);
        //   }
        // );
        var demo = "Its an 'Inter Component Communication' variable";
        this.negotiate.createEvent('data added : ' + demo);
    };
    ChoreographersComponent.prototype.loggout = function () {
        this.auth.logout();
        this.router.navigate(['/login']);
    };
    ChoreographersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choreographers',
            template: __webpack_require__(/*! ./choreographers.component.html */ "./src/app/choreographers/choreographers.component.html"),
            styles: [__webpack_require__(/*! ./choreographers.component.css */ "./src/app/choreographers/choreographers.component.css")],
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
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _negotiate_service__WEBPACK_IMPORTED_MODULE_4__["NegotiateService"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ChoreographersComponent);
    return ChoreographersComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact_container {\r\n    padding: 11%;\r\n   padding-left: 30%;\r\n   padding-right: 30%;\r\n   background-repeat: no-repeat;\r\n   background-position: 50%;\r\n   /* width: 100px;\r\n      height: 100px; */\r\n      background-size: cover; \r\n  }\r\n  .contact_header {\r\n    padding-bottom: 28px;\r\n    background-color: orange;\r\n    padding-left: 16px;\r\n  }\r\n  .submt {\r\n    margin-top: 20px;\r\n  }"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact_container\">\n    <ngb-alert type=\"success\" [dismissible]=\"submitted\" *ngIf=\"submitted\" (close)=\"submitted=false\">\n        <strong> {{response}}</strong>\n      </ngb-alert>\n      <ngb-alert type=\"danger\" [dismissible]=\"error\" *ngIf=\"error\" (close)=\"error=false\">\n          <strong> {{response}}</strong>\n        </ngb-alert>\n  <h1  appShadow class=\"contact_header\">Send Us a Message ({{currency | currency: 'INR' : 'code'}})</h1>\n  <h5 [appShadow]= \"'green'\" [appShadowX]=\"'12px'\" [appShadowY]=\"'6px'\" [appShadowBlur]=\"'30px'\" appFancy>\n    For general inquiries, please call 212-405-9000 or use the Contact form below.\n  </h5><br>\n<form #contactForm = \"ngForm\" (ngSubmit)=\"processForm()\">\n  \n  <!-- name -->\n  <div class=\"form-group field\">\n    <input type=\"text\" name=\"name\" class=\"form-control input\" placeholder=\"Your Name\" [(ngModel)]=\"name\" >\n  </div>\n\n  <!-- email -->\n  <div class=\"form-group field\">\n    <input type=\"email\" name=\"email\" class=\"form-control input\" placeholder=\"Your Email\" [(ngModel)]=\"email\" >\n  </div>\n\n  <!-- message -->\n  <div class=\"form-group field\">\n    <textarea class=\"form-control textarea\" name=\"message\" placeholder=\"What's on your mind?\" [(ngModel)]=\"message\" ></textarea>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-success button is-danger is-large submt\" [disabled]=\"!contactForm.form.valid\">Submit</button>\n\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
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


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(data) {
        this.data = data;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.currency = 200;
        this.submitted = false;
        this.error = false;
    };
    ContactUsComponent.prototype.processForm = function () {
        var _this = this;
        //const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`; 
        // if(this.name == " " || this.email == " " || this.message ==" ") {
        //   this.error = true;
        //   this.response = "Please fill all the fields";
        // }
        // else {
        this.data.contactUs(this.name, this.email, this.message).then(function (resp) {
            _this.response = resp;
            _this.submitted = true;
        })
            .catch(function (err) {
            _this.response = err;
            _this.error = true;
        });
        // }
        // this.data.RegisterUser(this.userDetails).then(abc=>{
        //   //  console.log(abc);
        //    // this.message = abc;
        //    this.router.navigate(['login']);
        //     //this.submitted = true;
        //  });
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/dancer-detail/dancer-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dancer-detail/dancer-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dancer-detail/dancer-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/dancer-detail/dancer-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dancer-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/dancer-detail/dancer-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dancer-detail/dancer-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: DancerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DancerDetailComponent", function() { return DancerDetailComponent; });
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

var DancerDetailComponent = /** @class */ (function () {
    function DancerDetailComponent() {
    }
    DancerDetailComponent.prototype.ngOnInit = function () {
    };
    DancerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dancer-detail',
            template: __webpack_require__(/*! ./dancer-detail.component.html */ "./src/app/dancer-detail/dancer-detail.component.html"),
            styles: [__webpack_require__(/*! ./dancer-detail.component.css */ "./src/app/dancer-detail/dancer-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DancerDetailComponent);
    return DancerDetailComponent;
}());



/***/ }),

/***/ "./src/app/dancers/dancers.component.css":
/*!***********************************************!*\
  !*** ./src/app/dancers/dancers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user_content ul li {\r\n    background: navajowhite;\r\n}\r\n.user_content h1 {\r\n    color: green;\r\n}\r\n.user_content {\r\n    padding-left: 129px;\r\n}"

/***/ }),

/***/ "./src/app/dancers/dancers.component.html":
/*!************************************************!*\
  !*** ./src/app/dancers/dancers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user_content\" [ngStyle]=\"{'background-image': 'url(\\'assets/images/choreographers.jpg\\')'}\">\n  <h1>List of available Dancers</h1>\n    <ul [@listStagger] = \"dancers\">\n            <li *ngFor=\"let dancer of dancers\">\n              <a routerLink='/details/{{dancer.choreographerId}}'>{{dancer.name | uppercase}}</a>\n          \n              <ul>\n                <li>DanceStyle : {{dancer.dancestyle}}</li>\n                <li>\n                    CourseType : {{dancer.coursetype}}\n                </li>\n                <li> Age: {{dancer.age}}</li>\n              </ul>\n            </li>\n          </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/dancers/dancers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dancers/dancers.component.ts ***!
  \**********************************************/
/*! exports provided: DancersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DancersComponent", function() { return DancersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DancersComponent = /** @class */ (function () {
    function DancersComponent(db, data, router, auth) {
        var _this = this;
        this.db = db;
        this.data = data;
        this.router = router;
        this.auth = auth;
        router.events.subscribe(function (route) {
            _this.currentUrl = router.url;
            _this.data.storeUrl(_this.currentUrl);
        });
        this.dancers_list();
        setTimeout((function () {
            this.loggout();
            console.log(this.currentUrl);
        }).bind(this), 43200000);
    }
    DancersComponent.prototype.ngOnInit = function () {
        // this.dancer = 'dancer';
        // this.data.getDancers(this.dancer).subscribe(
        //   data => {
        //     this.dancers = data; 
        //   }
        // );
        // this.dancers = this.db.collection('DancerDetail').valueChanges();
    };
    DancersComponent.prototype.dancers_list = function () {
        var _this = this;
        this.dancer = 'dancer';
        this.data.getDancers(this.dancer).subscribe(function (data) {
            _this.dancers = data;
        });
    };
    DancersComponent.prototype.loggout = function () {
        this.auth.logout();
        this.router.navigate(['/login']);
    };
    DancersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dancers',
            template: __webpack_require__(/*! ./dancers.component.html */ "./src/app/dancers/dancers.component.html"),
            styles: [__webpack_require__(/*! ./dancers.component.css */ "./src/app/dancers/dancers.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('listStagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })), {
                            optional: true //At the end, we define an optional :leave animation.
                        })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], DancersComponent);
    return DancersComponent;
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
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function DataService(firauth, db, http) {
        this.firauth = firauth;
        this.db = db;
        this.http = http;
        // localStorage.setItem('email','chetnashahi@gmail.com');
        // localStorage.setItem('password','Admin1234');
    }
    DataService.prototype.ngOnInit = function () {
    };
    // RegisterUser(userDetail) {
    //   this.firedata = this.firauth.auth.createUserWithEmailAndPassword(userDetail.email, userDetail.password);
    //   console.log(this.firedata);
    //   function subscriber (observer) {
    //     // localStorage.setItem('id',userDetail.id);
    //     // localStorage.setItem('name',userDetail.name);
    //     // localStorage.setItem('email',userDetail.email);
    //     // localStorage.setItem('password',userDetail.password);
    //     // localStorage.setItem('dob',userDetail.dob);
    //     // localStorage.setItem('age',userDetail.age);
    //     // localStorage.setItem('danceStyle',userDetail.danceStyle);
    //     // localStorage.setItem('coursetype',userDetail.coursetype);
    //     // observer.next('You are successfully registered');
    //     // this.firedata = this.firauth.auth.createUserWithEmailAndPassword(userDetail.email, userDetail.password);
    //     //console.log(this.firedata);
    //   }
    //   let registerObservable = new Observable(subscriber);
    //   return registerObservable;
    // }
    DataService.prototype.RegisterUser = function (userDetail) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firauth.auth.createUserWithEmailAndPassword(userDetail.email, userDetail.password)
                .then(function (result) {
                // resolve(result);
                var userId = result.user.uid;
                var itemRef = _this.db.collection('DancerDetail');
                var detail = { 'name': userDetail.name, 'dob': userDetail.dob, 'age': userDetail.age, 'dancestyle': userDetail.danceStyle, 'coursetype': userDetail.coursetype, role: userDetail.role, available: userDetail.available, choreographerId: userId };
                itemRef.add(detail)
                    .then(function (result) {
                    resolve("You are registered successfully !");
                })
                    .catch(function (err) {
                    reject(err);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.getUsers = function () {
        // return this.http.get('https://reqres.in/api/users');
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    };
    DataService.prototype.getDancer = function (userId) {
        return this.db.collection("DancerDetail", function (ref) { return ref.where('id', '==', userId); }).valueChanges();
    };
    DataService.prototype.getDancers = function (role) {
        // return new Promise((resolve,reject)=> {
        // return this.db.collection('DancerDetail').valueChanges();
        return this.db.collection("DancerDetail", function (ref) { return ref.where('role', '==', role); }).valueChanges();
        // let query = dancersRef.where("role", "==", role);
        //   .then(result=>{
        //     resolve(result);
        //   })
        //   .catch(error=>{
        //     reject(error);
        //   })
        // })
    };
    DataService.prototype.contactUs = function (name, email, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var itemRef = _this.db.collection('ContactUs');
            var detail = { 'name': name, 'email': email, 'message': message };
            itemRef.add(detail)
                .then(function (result) {
                resolve("Thankyou for your response! We have received your message ! will get back to you soon.");
            })
                .catch(function (err) {
                reject(err.message);
            });
        });
    };
    DataService.prototype.storeUrl = function (route_url) {
        localStorage.setItem('route', route_url);
    };
    DataService.prototype.getUrl = function () {
        var route_url = localStorage.getItem('route');
        return route_url;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DataService);
    return DataService;
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

module.exports = "<h1 > {{user.email | async}} </h1>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
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
        this.data.getDancer(this.user).subscribe(function (data) { return _this.user = data; });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], DetailsComponent);
    return DetailsComponent;
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
        elem.nativeElement.style.color = '#ff000f';
    }
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

module.exports = "#footer {\r\n    letter-spacing: .5px;\r\n    line-height: 1.6em;\r\n    background-color: #201a16;\r\n}\r\n.footer-inner {\r\n    max-width: 1020px;\r\n    width: auto;\r\n    margin: auto;\r\n    padding-left: 22px;\r\n    padding-top: 64px;\r\n    padding-bottom: 64px;\r\n}\r\n.foot-content {\r\n    display: inline-block;\r\n    padding-left: 114px;\r\n    vertical-align: top;\r\n}\r\n.foot-content a {\r\n    text-decoration: none;\r\n    color: #fff;\r\n    font-size:  19px; \r\n    word-wrap: break-word;\r\n    cursor: pointer;\r\n    \r\n}\r\n.negotiate {\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  footer works!\n</p> -->\n\n<footer id=\"footer\" role=\"contentinfo\">\n    <div class=\"footer-inner\">\n    \n      <div class=\"foot-layout\"  id=\"footerBlocks\">\n                  <div class=\"foot-content\">\n                    <p>\n                      <!-- <a href=\"/mini-ballet\">\n                        AGES 1 TO 4\n                      </a>\n                      <br>\n                      <a href=\"/ages-7up\">\n                        AGES 5 &amp; UP\n                      </a><br>\n                      <a href=\"/intensive-programs\">\n                        Intensive Programs\n                      </a><br> -->\n                      <a routerLink=\"home\" title=\"home\">Home</a><br>\n                      <a routerLink=\"register\" title=\"Registration\">Registration\n                      </a><br>\n                     \n                    </p>\n                  </div>\n              \n                  <div class=\"foot-content\">\n                    <p>\n                      <a routerLink=\"dancers\" title=\"List of Dancers\">Dancers\n                      </a><br>\n                      <a routerLink=\"choreographers\" title=\"List of Choreographers\">Choreographers\n                      </a><br>\n                      <!-- <a target=\"_blank\" href=\"/s/newsletter_dec_2016.pdf\">Newsletter\n                      </a><br>\n                      <a target=\"_blank\" href=\"/s/Master-Schedule-2018-2019-revised-May-8.pdf\">MASTER SCHEDULE\n                      </a><br>\n                      <a href=\"/calendar\">School Calendar\n                      </a> -->\n                    </p>\n                  </div>\n                \n              \n                  <div class=\"foot-content\">\n                    <p>\n                      <a routerLink=\"/summerPrograms\" title=\"Summer Programs\">Summer Programs\n                      </a><br>\n                      <a routerLink=\"/contactUs\" title=\"Contact Us\">Contact\n                      </a>\n                    </p>\n                  </div>\n                \n      </div>\n\n    </div>\n    <p class=\"negotiate\">{{negtiate_variable}}</p>\n  </footer>\n"

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
/* harmony import */ var _negotiate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../negotiate.service */ "./src/app/negotiate.service.ts");
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
    function FooterComponent(negotiate) {
        this.negotiate = negotiate;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.negotiate.eventSink().subscribe(function (events) {
            console.log(events);
            _this.negtiate_variable = events;
        });
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_negotiate_service__WEBPACK_IMPORTED_MODULE_1__["NegotiateService"]])
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

module.exports = "/* body, html {\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.header {\r\n    background-image: url('/assets/images/banner.jpg');\r\n    height: 100%; \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n} */\r\nnav {\r\n    /* //background: #2D2E2E; */\r\n    height: 100%;\r\n    text-align: right;\r\n   \r\n}\r\nnav ul {\r\n        list-style-type: none;\r\n        padding: 0;\r\n        margin: 0;\r\n        display: block;\r\n    }\r\nnav ul li a {\r\n    /* color: #fff; */\r\n    color: black;\r\n    padding: 20px;\r\n    display: block;\r\n    /* border: 2px solid #fff; */\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    font-size: 17px;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    line-height: 1em;\r\n    padding: .75em 1em;\r\n    cursor: pointer;\r\n}\r\nnav ul li{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n}\r\n#header {\r\n    \r\n    /* display: table-cell;\r\n    vertical-align: middle; */\r\n    /* background : #DCDCDC; */\r\n    background-color: transparent;\r\n    position: absolute;\r\n    padding: 0 20px;\r\n    z-index: 1000;\r\n    display: block;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n }\r\n.headerNav {\r\n    text-align: right;\r\n    padding-right: 105px;\r\n    padding-top: 20px;\r\n }\r\n.header-inner {\r\n    padding: 20px 0;\r\n    display: table;\r\n    width: 100%;\r\n }\r\n#logoWrapper {\r\n    width: 280px;\r\n    display: table-cell;\r\n    vertical-align: middle; \r\n }\r\n#logoImage {\r\n    /* width: 347px; */\r\n    width: 280px;\r\n    margin: 0;\r\n    font-size: 0;\r\n    max-width: 100%;\r\n    width: 75px;\r\n}\r\n#logoImage a {\r\n    display: block;\r\n    text-decoration: none;\r\n    background: transparent;\r\n    cursor: pointer;\r\n    font-size: 0;\r\n}\r\n#logoImage img {\r\n    height: auto;\r\n    max-height: 100px;\r\n    width: auto;\r\n    max-width: 100%;\r\n    cursor: pointer;\r\n}\r\n.logo_text {\r\n    position: absolute;\r\n    top: 43px;\r\n    left: 116px;\r\n    font-size:30px;\r\n    /* font-family: \"Times New Roman\", Times, serif; */\r\n    color:black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<body style=\"background-image:url(assets/images/banner.jpg)\"></body> -->\n<!-- <div class=\"header\"></div> -->\n<!-- <img src=\"assets/images/banner.jpg\" alt=\"Supergirl Image\" class=\"supergirl_image\"> -->\n<div id=\"header\">\n  <div class=\"header-inner\">\n\n<div id=\"logoWrapper\" class=\"wrapper\" data-content-field=\"site-title\">        \n    <h1 id=\"logoImage\" title=\"Free Ur Feet\"><a href=\"/\"><img src=\"assets/images/logo.jpg\" alt=\"Free The Feet\"></a></h1>\n    <h3 class=\"logo_text\">Free Ur Feet</h3>\n</div>\n\n<div class=\"headerNav\">\n  <!-- <div id=\"mainNavWrapper\" class=\"nav-wrapper\"> -->\n<nav>\n  <ul>\n    <li>\n      <a routerLink =\"home\" title=\"home\">\n        HOME\n      </a>\n    </li>\n\n    <li *ngIf=\"getLoggedInStatussFromservice() == false\">\n      <a routerLink=\"login\" title=\"login\">\n        LOG IN/Sign up\n      </a>\n    </li>\n\n    <li *ngIf=\"getLoggedInStatussFromservice()\">\n      <a (click)=\"logout()\" title=\"logout\">\n        LOG Out\n      </a>\n    </li>\n  </ul>\n</nav>\n  <!-- </div> -->\n</div>\n\n </div>\n</div>"

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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
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



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        var status = this.auth.getLoggedInStatus();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.getLoggedInStatussFromservice = function () {
        return this.auth.getLoggedInStatus();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner_image img {\r\n    width:100%;\r\n}\r\n.image_gallery img {\r\n    max-width: 100%;\r\n    width:173px;\r\n}\r\n.image_gallery {\r\n    width: 1400px;\r\n    padding-top: 61px;\r\n    padding-left: 0;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n.image_gallery div {\r\n    display: inline-block;\r\n    width: 10.6667%;\r\n}\r\n#logoWrapperhome {\r\n    float: left;\r\n    margin: 50px 0;\r\n    width: 100%;\r\n    text-align: center;\r\n\r\n }\r\n.logoImage { display: inline-block;\r\n    vertical-align: top;\r\n}\r\n.logoImage img {\r\n    height: auto;\r\n    max-height: 80px;\r\n    width: 91px;\r\n    max-width: 100%;\r\n}\r\n.logo_text {\r\n    display: inline-block;\r\n    margin-left: 20px;\r\n    font-size: 63px;\r\n}\r\n.introduction {\r\n    word-wrap: break-word;\r\n    font-family: europa;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-size: 21px;\r\n    letter-spacing: .5px;\r\n    line-height: 1.6em;\r\n    color: #1f1f1f;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    width: 770px;\r\n    padding-top: 55px;\r\n    margin: auto;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  home works!\n</p> -->\n<div class=\"home\">\n  <div class=\"banner_image\">\n    <img src=\"assets/images/banner.jpg\" alt=\"Dance\" class=\"base_dance_image\">\n  </div>\n\n  <div class=\"image_gallery\">\n    <div>\n        <img src=\"assets/images/image_gallery/img_gal_1.png\" alt=\"top_100\">\n    </div>\n\n    <div>\n      <img src=\"assets/images/image_gallery/img_gal_2.png\" alt=\"dance_challenge\">\n    </div>\n\n    <div>\n      <img src=\"assets/images/image_gallery/img_gal_3.png\" alt=\"winner_scholarshp\">\n    </div>\n\n    <div>\n      <img src=\"assets/images/image_gallery/img_gal_4.png\" alt=\"bese_rated\">\n    </div>\n\n    <div>\n      <img src=\"assets/images/image_gallery/img_gal_5.png\" alt=\"canadian_nat_dance\">\n    </div>\n  </div>\n\n  <!-- <div>\n    <img src=\"\">\n  </div> -->\n  <div id=\"logoWrapperhome\" class=\"wrapper\" data-content-field=\"site-title\">        \n    <h1 class=\"logoImage\"><img src=\"assets/images/logo.jpg\" alt=\"Free The Feet\"></h1>\n    <h3 class=\"logo_text\">FREE Ur FEET</h3>\n </div>\n  \n <div class=\"introduction\">\n   <p>\n  \"FREE Ur FEET offers quality dance instruction done with care.&nbsp;&nbsp;We provide a variety of classes taught by a qualified and experienced teaching faculty.\" <br>&nbsp;\n</p>\n </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .login_container {\r\n    padding: 11%;\r\n   padding-left: 30%;\r\n   padding-right: 30%;\r\n   background-repeat: no-repeat;\r\n   background-position: 50%;\r\n   /* width: 100px;\r\n      height: 100px; */\r\n      background-size: cover; \r\n  }\r\n  \r\n  .login_header {\r\n    padding-bottom: 28px;\r\n  }\r\n  \r\n  .submt {\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .login_container label {\r\n    font-weight: bold;\r\n    font-size:18px;\r\n  }\r\n  \r\n  .register_block {\r\n    padding-top: 19px;\r\n  }\r\n  \r\n  .forgt_pwd {\r\n    cursor: pointer;\r\n    color: #007bff;\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"login_container\"  [ngStyle]=\"{'background-image': 'url(\\'assets/images/login.jpg\\')'}\">\n    <ngb-alert type=\"danger\" [dismissible]=\"submitted\" *ngIf=\"submitted\" (close)=\"submitted=false\">\n        <strong> {{message}}</strong>\n      </ngb-alert>\n      <ngb-alert type=\"success\" [dismissible]=\"submitted_success\" *ngIf=\"submitted_success\" (close)=\"submitted_success=false\">\n        <strong> {{message}}</strong>\n      </ngb-alert>\n    <h1 class=\"login_header\">Login Form</h1>\n    <form #loginForm = \"ngForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"emil\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"emil\" [(ngModel)]=\"model.email\" name=\"emil\" required #email=\"ngModel\">\n        <div [hidden]=\"email.valid || email.pristine\"  class=\"alert alert-danger\">\n            Email is required\n        </div>\n\n      </div>\n \n      <div class=\"form-group\">\n        <label for=\"pwd\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"pwd\" [(ngModel)]=\"model.password\" name=\"passwd\" required #pwdtemplateReferencevariable=\"ngModel\">\n        <div [hidden]=\"pwdtemplateReferencevariable.valid || pwdtemplateReferencevariable.pristine\"  class=\"alert alert-danger\">\n          Password is required\n      </div>\n      </div>\n \n      <button type=\"submit\" class=\"btn btn-success submt\" [disabled]=\"!loginForm.form.valid\" sclass=\"waves-light\" mdbWavesEffect>Submit</button>\n  \n \n    </form>\n    <br>\n    <button type=\"button\" (click)=\"googleLogin()\" mdbBtn class=\"btn btn-danger btn-gplus waves-light\" mdbWavesEffect><i class=\"fa fa-google-plus left\"></i>Login with Google</button>\n\n    <div class=\"register_block\">\n      <p>\n        Don't have Account ? <a routerLink=\"/register\">Register here</a>\n      </p>\n    </div>\n    <div class=\"forgot_block\">\n      <p class=\"forgt_pwd\" (click)=\"forgotPasswrd();\">\n       Forgot password ?\n      </p>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Observable } from 'rxjs';

var LoginComponent = /** @class */ (function () {
    function LoginComponent(data, auth, router) {
        this.data = data;
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.model = new _user__WEBPACK_IMPORTED_MODULE_1__["User"](1, 'a ', 'b ');
        this.submitted = false;
        this.submitted_success = false;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.validateLoginUser(this.model).then(function (result) {
            _this.router.navigate(['choreographers']);
        })
            .catch(function (err) {
            _this.submitted = true;
            _this.message = err;
        });
        // this.submitted = true; 
        // let observer = {
        //   next : (result) => { 
        //       this.submitted = true; 
        //   this.message = result;
        //   },
        //   error: (error) => { alert(error),
        //     console.log("adadsf"),
        //     this.message = error;
        //    }
        // }
        // this.data.validateLoginUser(this.model).subscribe(
        // observer
        // );
    };
    LoginComponent.prototype.googleLogin = function () {
        var _this = this;
        this.auth.googleLogin().then(function (resu) {
            console.log("done");
            _this.router.navigate(['dancers']);
        })
            .catch(function (err) {
            _this.submitted = true;
            _this.message = err;
        });
    };
    LoginComponent.prototype.forgotPasswrd = function () {
        this.submitted_success = true;
        this.message = "Data saved !";
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(auth, data) {
        this.auth = auth;
        this.data = data;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        //   console.log(this);
        //  this.auth.logout();
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/negotiate.service.ts":
/*!**************************************!*\
  !*** ./src/app/negotiate.service.ts ***!
  \**************************************/
/*! exports provided: NegotiateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiateService", function() { return NegotiateService; });
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


var NegotiateService = /** @class */ (function () {
    function NegotiateService() {
        this.eventSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.eventSink$ = this.eventSource.asObservable();
    }
    NegotiateService.prototype.createEvent = function (event) {
        this.eventSource.next(event);
    };
    NegotiateService.prototype.eventSink = function () {
        return this.eventSink$;
    };
    NegotiateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NegotiateService);
    return NegotiateService;
}());



/***/ }),

/***/ "./src/app/pre-footer/pre-footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pre-footer/pre-footer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pre-footer/pre-footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/pre-footer/pre-footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <a type=\"button\" class=\"btn-floating btn-large btn-fb waves-light\" mdbWavesEffect><i class=\"fa fa-facebook\"></i></a> -->\n<!-- <a class=\"btn btn-block btn-social btn-twitter\">\n    <span class=\"fa fa-twitter\"></span>\n    Sign in with Twitter\n  </a> -->\n\n <!-- <div id=\"preFooter\" class=\"\">\n    <div class=\"pre-footer-inner\">\n      <div class=\"sqs-layout sqs-grid-12 columns-12\" data-layout-label=\"Pre-Footer Content\" data-type=\"block-field\" data-updated-on=\"1410292214726\" id=\"preFooterBlocks\"><div class=\"row sqs-row\"><div class=\"col sqs-col-12 span-12\"><div class=\"sqs-block socialaccountlinks-v2-block sqs-block-socialaccountlinks-v2\" data-block-type=\"54\" id=\"block-yui_3_17_2_1_1410291973006_4664\"><div class=\"sqs-block-content\">\n\n<div class=\"sqs-svg-icon--outer social-icon-alignment-center social-icons-color-black social-icons-size-small social-icons-style-regular \">\n<nav class=\"sqs-svg-icon--list\">\n<a href=\"https://www.facebook.com/pages/Marquis-Dance-Academy/109614045781029\" target=\"_blank\" class=\"sqs-svg-icon--wrapper facebook\">\n  <div>\n    <svg class=\"sqs-svg-icon--social\" viewBox=\"0 0 64 64\">\n      <use class=\"sqs-use--icon\" xlink:href=\"#facebook-icon\"></use>\n      <use class=\"sqs-use--mask\" xlink:href=\"#facebook-mask\"></use>\n    </svg>\n  </div>\n</a><a href=\"https://twitter.com/marquis_dance\" target=\"_blank\" class=\"sqs-svg-icon--wrapper twitter\">\n  <div>\n    <svg class=\"sqs-svg-icon--social\" viewBox=\"0 0 64 64\">\n      <use class=\"sqs-use--icon\" xlink:href=\"#twitter-icon\"></use>\n      <use class=\"sqs-use--mask\" xlink:href=\"#twitter-mask\"></use>\n    </svg>\n  </div>\n</a><a href=\"http://instagram.com/marquis_dance\" target=\"_blank\" class=\"sqs-svg-icon--wrapper instagram\">\n  <div>\n    <svg class=\"sqs-svg-icon--social\" viewBox=\"0 0 64 64\">\n      <use class=\"sqs-use--icon\" xlink:href=\"#instagram-icon\"></use>\n      <use class=\"sqs-use--mask\" xlink:href=\"#instagram-mask\"></use>\n    </svg>\n  </div>\n</a>\n</nav>\n</div></div></div></div></div></div>\n    </div>\n  </div> -->\n"

/***/ }),

/***/ "./src/app/pre-footer/pre-footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pre-footer/pre-footer.component.ts ***!
  \****************************************************/
/*! exports provided: PreFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreFooterComponent", function() { return PreFooterComponent; });
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

var PreFooterComponent = /** @class */ (function () {
    function PreFooterComponent() {
    }
    PreFooterComponent.prototype.ngOnInit = function () {
    };
    PreFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pre-footer',
            template: __webpack_require__(/*! ./pre-footer.component.html */ "./src/app/pre-footer/pre-footer.component.html"),
            styles: [__webpack_require__(/*! ./pre-footer.component.css */ "./src/app/pre-footer/pre-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreFooterComponent);
    return PreFooterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n  \r\n  .register_container {\r\n    padding: 11%;\r\n   padding-left: 30%;\r\n   padding-right: 30%;\r\n   background-repeat: no-repeat;\r\n   background-position: 50%;\r\n   padding-top: 159px;\r\n    background-size: cover; \r\n  }"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"register_container\"  [ngStyle]=\"{'background-image': 'url(\\'assets/images/register.jpg\\')'}\">\n    <ngb-alert type=\"success\" [dismissible]=\"submitted\" *ngIf=\"submitted\" (close)=\"submitted=false\">\n      <strong> {{message}}</strong>\n    </ngb-alert>\n    <ngb-alert type=\"danger\" [dismissible]=\"err_submitted\" *ngIf=\"err_submitted\" (close)=\"err_submitted=false\">\n      <strong> {{message}}</strong>\n    </ngb-alert>\n    <h1 class=\"login_header\">Registration Form</h1>\n    <form #loginForm = \"ngForm\" (ngSubmit)=\"mySubmit()\">\n\n        <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"userDetails.name\" name=\"name\" required #nametemplateReferencevariable=\"ngModel\">\n            <div [hidden]=\"nametemplateReferencevariable.valid || nametemplateReferencevariable.pristine\"  class=\"alert alert-danger\">\n              Name is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"dob\">DOB</label>\n            <!-- <ngb-datepicker #d></ngb-datepicker> -->\n            <input type=\"text\" class=\"form-control\" ngbDatepicker #d=\"ngbDatepicker\"  (click)=\"d.toggle()\" #dobtemplateReferencevariable\n                />\n                <!-- <i class=\"material-icons\" title=\"Contact us\" (click)=\"d.toggle()\">calendar today</i> -->\n            <!-- <input type=\"text\" ngbDatepicker [(ngModel)]=\"userDetails.dob\" name=\"dob\"/> -->\n<!-- <button (click)=\"d.toggle()\">Toggle</button> -->\n            <!-- <input type=\"text\" ngbDatepicker #d=\"ngbDatepicker\"/> -->\n            <!-- <input type=\"text\" class=\"form-control\" id=\"dob\" [(ngModel)]=\"userDetails.dob\" name=\"dob\" required #dobtemplateReferencevariable=\"ngModel\"> -->\n            <!-- <div [hidden]=\"dobtemplateReferencevariable || dobtemplateReferencevariable.pristine\"  class=\"alert alert-danger\">\n              DOB is required\n          </div> -->\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"age\">Age</label>\n            <input type=\"number\" class=\"form-control\" id=\"age\" [(ngModel)]=\"userDetails.age\" name=\"age\" required #agetemplateReferencevariable=\"ngModel\">\n            <div [hidden]=\"agetemplateReferencevariable.valid || agetemplateReferencevariable.pristine\"  class=\"alert alert-danger\">\n              Age is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"role\">Role</label>\n          <input type=\"text\" class=\"form-control\" id=\"role\" [(ngModel)]=\"userDetails.role\" name=\"role\" required #rolesetemplateReferencevariable=\"ngModel\">\n          <div [hidden]=\"rolesetemplateReferencevariable.valid || rolesetemplateReferencevariable.pristine\"  class=\"alert alert-danger\">\n              Role is required\n        </div>\n        <span [ngStyle]=\"{'color': 'red'}\">Allowed Roles are: dancer or choreographer.</span>\n      </div>\n   \n      <!-- <div class=\"col\">\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Role</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n              <button value=\"choreographer\" class=\"dropdown-item\" (click)=\"updateRole(choreographer)\">Choreographer</button>\n              <button value=\"dancer\" class=\"dropdown-item\" ng-click=\"userDetails.role = dancer\">Dancer</button>\n              <! - - <button class=\"dropdown-item\">Something else is here</button> -->\n             <!-- </div>\n          </div>\n        </div> - -->\n\n        <div class=\"form-group\">\n            <label for=\"course\">Course Type</label>\n            <input type=\"text\" class=\"form-control\" id=\"course\" [(ngModel)]=\"userDetails.coursetype\" name=\"course\" required #crsetemplateReferencevariable=\"ngModel\">\n            <div [hidden]=\"crsetemplateReferencevariable.valid || crsetemplateReferencevariable.pristine\"  class=\"alert alert-danger\">\n                Course Type is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"course\">Dance Style</label>\n            <input type=\"text\" class=\"form-control\" id=\"style\" [(ngModel)]=\"userDetails.danceStyle\" name=\"style\" required >\n        </div>\n\n      <div class=\"form-group\">\n        <label for=\"emil\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"emil\" [(ngModel)]=\"userDetails.email\" name=\"emil\" required #email=\"ngModel\">\n        <div [hidden]=\"email.valid || email.pristine\"  class=\"alert alert-danger\">\n            Email is required\n        </div>\n\n      </div>\n \n      <div class=\"form-group\">\n        <label for=\"pwd\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"pwd\" [(ngModel)]=\"userDetails.password\" name=\"passwd\" required #pwdtemplateReferencevariable=\"ngModel\">\n        <div [hidden]=\"pwdtemplateReferencevariable.valid || pwdtemplateReferencevariable.pristine\"  class=\"alert alert-danger\">\n          Password is required\n      </div>\n      </div>\n \n      <button type=\"submit\" class=\"btn btn-success submt\" [disabled]=\"!loginForm.form.valid\">Submit</button>\n      \n    </form>\n    </div>\n\n    <!-- <div class=\"row\">\n        <div class=\"col\">\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Role</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n              <button value=\"choreographer\" class=\"dropdown-item\" ng-click=\"userDetails.role = choreographer\">Choreographer</button>\n              <button value=\"dancer\" class=\"dropdown-item\" ng-click=\"userDetails.role = dancer\">Dancer</button>\n              <!-- <button class=\"dropdown-item\">Something else is here</button> -->\n            <!-- </div>\n          </div>\n        </div>\n      <div class=\"col text-right\">\n          <div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">\n            <button class=\"btn btn-outline-primary\" id=\"dropdownBasic2\" ngbDropdownToggle>Toggle dropup</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n              <button class=\"dropdown-item\">Action - 1</button>\n              <button class=\"dropdown-item\">Another Action</button>\n              <button class=\"dropdown-item\">Something else is here</button>\n            </div>\n          </div>\n        </div>\n      </div> --> -->"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-detail */ "./src/app/user-detail.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(data, db, router) {
        this.data = data;
        this.db = db;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.userDetails = new _user_detail__WEBPACK_IMPORTED_MODULE_1__["UserDetail"](1, 'name', 'email', '', new Date(1234 - 11 - 1), 1, 'salsa', 'regular', 'role', 'available Day');
        this.submitted = false;
        this.err_submitted = false;
    };
    RegisterComponent.prototype.mySubmit = function () {
        var _this = this;
        // dancers : Observable;
        // console.log("done");
        //  let observer = {
        //     next : (next) => {console.log(next);this.submitted = true;this.message = next; }
        //  }
        // this.data.RegisterUser(this.userDetails).subscribe (observer);
        if (this.userDetails['role'] != 'dancer' && this.userDetails['role'] != 'choreographer') {
            this.err_submitted = true;
            this.message = "Please choose role as mentioned.plz check with the spelling also if needed !";
        }
        else {
            this.data.RegisterUser(this.userDetails).then(function (abc) {
                //  console.log(abc);
                // this.message = abc;
                _this.router.navigate(['login']);
                //this.submitted = true;
            });
        }
        //  db.collection('dancers').valueChanges();
    };
    RegisterComponent.prototype.updateRole = function (role) {
        this.userDetails['role'] = role;
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
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

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background: black;\r\n    margin-right: 94%;\r\n    width: 72px;\r\n    position: absolute;\r\n    top: 210px;\r\n    left: 0px;\r\n    height: auto;\r\n}\r\nnav ul {\r\n        list-style-type: none;\r\n        padding: 0;\r\n        margin: 0;\r\n    }\r\nnav ul li    {    border-top: 1px solid #af9d9d;}\r\nnav ul li:hover {background: red;transition: all 0.3s ease-in-out 0s;}\r\nnav ul li a {\r\n    color: #fff;\r\n    padding: 20px;\r\n    display: block;\r\n    text-align: center;\r\n}\r\nnav ul li .activated {\r\n    /* background-color: #00a8ff; */\r\n    background-color: yellowgreen;\r\n}"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <ul>\n      <li>\n        <a routerLink=\"choreographers\" [class.activated]=\"currentUrl == '/choreographers' \">\n          <i class=\"material-icons\" title=\"List of choreographers\">accessibility new</i>\n          <!-- <i class=\"material-icons\">supervised_user_circle</i> -->\n        </a>\n      </li>\n      <li>\n        <a routerLink=\"dancers\" [class.activated]=\"currentUrl == '/dancers'\">\n          <i class=\"material-icons\" title=\"List of Dancers\">accessibility</i>\n        </a>\n      </li>\n      <li>\n        <a routerLink=\"summerPrograms\" [class.activated]=\"currentUrl == '/summerPrograms'\">\n          <i class=\"material-icons\" title=\"Summer Programs\">supervised_user_circle</i>\n        </a>\n      </li>\n      <li>\n        <a routerLink=\"register\" [class.activated]=\"currentUrl == '/register'\">\n          <i class=\"material-icons\" title=\"Registration\">add</i>\n        </a>\n      </li>\n      <li>\n          <a routerLink=\"contactUs\" [class.activated]=\"currentUrl == '/contactUs'\">\n            <i class=\"material-icons\" title=\"Contact us\">message</i>\n          </a>\n        </li>\n    </ul>\n  </nav>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (_) { return _this.currentUrl = _.url; });
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/summer-programs/summer-programs.component.css":
/*!***************************************************************!*\
  !*** ./src/app/summer-programs/summer-programs.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".summer {\r\n    /* background-repeat: no-repeat; */\r\nbackground-position: 50% 0px;;\r\n/* width: 100px;\r\n   height: 100px; */\r\n   /* background-size: cover;  */\r\n}\r\n.balle_img {\r\n    max-width: 100%;\r\n    height: auto;\r\n}"

/***/ }),

/***/ "./src/app/summer-programs/summer-programs.component.html":
/*!****************************************************************!*\
  !*** ./src/app/summer-programs/summer-programs.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"no-mobile\">\n\n    \n        \n    <!-- Google Tag Manager (noscript) -->\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-WCN7GRP\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n<!-- End Google Tag Manager (noscript) -->\n    \n    <!-- HEADER -->\n    <div class=\"preloader\" style=\"display: none;\">&nbsp;</div>\n\n    <!-- WRAPPER -->\n    <div class=\"wrapper no-margin\" style=\"min-height: 211px;\">      \n  \n    \n\n\n\n\n    <!-- Image Header --><div class=\"dark \">\n<div class=\"jumbotron no-height overlay bg-sl-section-parallax inner-heros summer\" data-stellar-background-ratio=\".5\" [ngStyle]=\"{'background-image': 'url(\\'assets/images/summer_camp.jpg\\')'}\">\n<div class=\"container middle text-center\" style=\"margin-top: 131.5px;\">\n    <div class=\"col-sm-8 col-sm-offset-2\">\n        <h1>Summer Camps</h1>\n    </div>\n    <div class=\"col-xs-12 text-left\"><div class=\"credit\">Summer Camp students</div></div>\n</div>\n</div>\n</div>\n\n    <!-- CONTAINER -->\n    <div class=\"container md-padding sm-padding-bottom\">\n        <div class=\"row\">\n            <h1><strong>2018 SUMMER CAMPS</strong></h1>\n            <br>\n            <p>During the summer of 2018, Colorado Ballet Academy will offer Summer Dance Camps for Ages 3-4, 5-6, 7-9. All classes will take place at\n                the Colorado Ballet Studios at the Armstrong Center for Dance, 1075 Santa Fe Drive, Denver, CO.&nbsp; Please view the 2018 Summer Camp\n                schedule below and click register to sign up for a specific camp.</p>\n\n            <hr>\n            \n\n\n            <h2><strong>Boys and Girls ages 3-4 &amp; 5-6</strong></h2>\n        </div>\n\n\n        <!-- <table>\n            <tbody>\n                <tr valign=\"top\">\n                    <td style=\"width:30%\"><img src=\"/academy/summer_camps_2018/2018-MMC-Contemporary-3_6-400x400.jpg\"> </td>\n                    <td style=\"width:70%\">\n                        <h3><strong>Move, Make &amp; Create – Contemporary | June 11-15</strong></h3>\n                        <h6><strong>Time: 9:30a.m.-12:00p.m.<br />                                 Price: $175</strong></h6>\n                        <p>Balanchine, Stravinsky, Philip Glass, Picasso, Miro and more! The tradition of ballet matures into an age of expression, athleticism,\n                            refinement, and intriguing geometric shapes &amp; formations. Students will have fun exploring the range of balletic movement,\n                            choreography, modern art, expressive crafts, and contemporary music. The week will culminate in a short, informal presentation\n                            of all that they learned and created.</p>\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td><a class=\"btn btn-default btn-sm\" href=\"https://tickets.coloradoballet.org/auxiliary/Reserve.aspx?p=4373\" target=\"_blank\">REGISTER 3-4 Year Olds</a>                                            </td>\n                                    <td><a class=\"btn btn-default btn-sm\" href=\"https://tickets.coloradoballet.org/auxiliary/Reserve.aspx?p=4375\" target=\"_blank\">REGISTER 5-6 Year Olds</a>                                            </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <br />\n                        <br /> </td>\n                </tr>\n            </tbody>\n        </table>-->\n        <table>\n            <tbody>\n                <tr valign=\"top\" class=\"oddrow\">\n                    <td style=\"width:30%\"><img class=\"balle_img\" src=\"assets/images/ballet.jpg\"> </td>\n                    <td style=\"width:70%\">\n                        <h3><strong>Ballet Prince &amp; Princess Camp | July 30-August 3</strong></h3>\n                        <h6><strong>Time: 9:30a.m.-12:00p.m.<br>                                 Price: $175</strong></h6>\n                        <p>The classic prince and princesses featured prominently in the world of ballet come to life in this camp. <em>The Sleeping Beauty</em>,\n                            <em>Swan Lake</em>, <em>Cinderella</em>, and <em>The Nutcracker</em> are some of the ballets explored.\n                            </p><table>\n                            <tbody>\n                                <tr>\n                                    <td><a class=\"btn btn-default btn-sm\" href=\"\" target=\"_blank\" style=\"pointer-events: none; color:#000000\">REGISTER 3-4 Year Olds - SOLD OUT</a>                                            </td>\n                                    <td><a class=\"btn btn-default btn-sm\" href=\"\" target=\"_blank\" style=\"pointer-events: none; color:#000000\">REGISTER 5-6 Year Olds - SOLD OUT</a>                                            </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <br>\n                        <br> \n                        </td>\n                </tr>\n            </tbody>\n        </table>\n        <table style=\"background-color: #83f0ff; padding: 10px;\">\n            <tbody>\n                <tr valign=\"top\" class=\"oddrow\">\n                    <td style=\"width:30%\"><img class=\"balle_img\" src=\"assets/images/move.jpg\"> </td>\n                    <td style=\"width:70%\">\n                        <h3><strong>Ballet Elf &amp; Fairy Camp | August 6-10</strong></h3>\n                        <h6><strong>Time: 9:30a.m.-12:00p.m.<br>                                 \n                            Price: $175</strong></h6>\n                        <p>Elves, fairies, imps and pixies inhabit many classical ballets from <em>Sleeping Beauty</em> to <em>Midsummer Night’s Dream</em>.\n                            <br>\n                            <br>\n                            In both ballet camps the dancers will practice age and skill appropriate ballet movements and skills, learn about the music, \n                            have story time, and make art and crafts inspired by these mischievous characters.</p>\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td><a class=\"btn btn-default btn-sm\" href=\"\" target=\"_blank\" style=\"pointer-events: none; color:#000000\">REGISTER 3-4 Year Olds - SOLD OUT</a>                                            </td>\n                                    <td><a class=\"btn btn-default btn-sm\" href=\"\" target=\"_blank\" style=\"pointer-events: none; color:#000000\">REGISTER 5-6 Year Olds - SOLD OUT</a>                                            </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <br>\n                        <br> </td>\n                </tr>\n            </tbody>\n        </table>\n\n        <br>\n        <br>\n        <h2><strong>Boys and Girls Ages 7-9</strong></h2>\n\n        <!--<table>\n            <tbody>\n                <tr valign=\"top\">\n                    <td style=\"width:30%\"><img src=\"/academy/summer_camps_2018/2018-MMC-Contemporary-7_9-400x400.jpg\"> </td>\n                    <td style=\"width:70%\">\n                        <h3><strong>Move, Make &amp; Create – Contemporary | June 11-15</strong></h3>\n                        <h6><strong>Time: 9:00a.m.-1:30p.m.<br />                                 Price: $275</strong></h6>\n                        <p>Balanchine, Stravinsky, Philip Glass, Picasso, Miro and more! The tradition of ballet matures into an age of expression, athleticism,\n                            refinement, and intriguing geometric shapes &amp; formations. Students will have fun exploring the range of balletic movement,\n                            choreography, modern art, expressive crafts, and contemporary music. The week will culminate in a short, informal presentation\n                            of all that they learned and created.</p> <a class=\"btn btn-default btn-sm\" href=\"https://tickets.coloradoballet.org/auxiliary/Reserve.aspx?p=4377\" target=\"_blank\">REGISTER</a>\n                        <br />\n                        <br /> </td>\n                </tr>\n            </tbody>\n        </table>-->\n        <table style=\"padding: 10px;\">\n            <tbody>\n                <tr valign=\"top\" class=\"oddrow\">\n                    <td style=\"width:30%\"><img class=\"balle_img\" src=\"assets/images/boygirl.jpg\"> </td>\n                    <td style=\"width:70%\">\n                        <h3><strong>Dance Around the World — East | July 30-August 3<br>                                 Dance Around the World — West | August 6-August 10</strong></h3>\n                        <h6><strong>Time: 9:00a.m.-1:30p.m.<br>                                 Price: $275</strong></h6>\n                        <p>North, South, East &amp; West! Every country has traditional and classical dance forms. In addition to daily ballet classes,\n                            students will learn and practice other popular dance forms from around the world. Eastern dances may include Chinese, Flamenco,\n                            and African. Western dances may include Break Dancing, Hip-Hop, Square Dance, and Salsa. Each week will conclude with a\n                            demonstration of what the students learned. A trip around the world through dance!</p>\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td><a class=\"btn btn-default btn-sm\" href=\"\" target=\"_blank\" style=\"pointer-events: none; color:#000000\">REGISTER EAST - SOLD OUT</a>                                            </td>\n                                    <td><a class=\"btn btn-default btn-sm\" href=\"https://tickets.coloradoballet.org/auxiliary/Reserve.aspx?p=4383\" target=\"_blank\">REGISTER WEST</a>                                            </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <br>\n        <br>\n        <hr>\n\n        <h2>Past Classes</h2>\n  <table style=\"background-color: #83f0ff; padding: 10px;\">\n            <tbody>\n                <tr valign=\"top\" class=\"oddrow\">\n                    <td style=\"width:30%\"><img class=\"balle_img\"src=\"assets/images/move-create.jpg\"> </td>\n                    <td style=\"width:70%\">\n                        <h3><strong>Move, Make &amp; Create – Classical | June 4-8</strong></h3>\n                        <h6><strong>Time: 9:30a.m.-12:00p.m.<br>                                 \n                            Price: $175</strong></h6>\n                        <p>Tchaikovsky, Monet and Marius Petipa! The dancers will be introduced and immersed in all that is classical in the worlds of\n                            ballet, music and art! A week of ballet to the classics –<em> The Sleeping Beauty</em>, <em>The Nutcracker</em> and <em>Swan Lake</em>.\n                            Classical costumes, classical art, stage design and crafts, all combined to expand creativity and imagination. The week\n                            will culminate in a short, informal presentation of all that they learned and created.</p>\n\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n\n        <table style=\"padding: 10px;\">\n            <tbody>\n                <tr valign=\"top\">\n                    <td style=\"width:30%\"><img class=\"balle_img\" src=\"assets/images/move2.jpg\"> </td>\n                    <td style=\"width:70%\">\n                        <h3><strong>Move, Make &amp; Create – Classical | June 4-8</strong></h3>\n                        <h6><strong>Time: 9:00a.m.-1:30p.m.<br>                                 Price: $275</strong></h6>\n                        <p>Tchaikovsky, Monet and Marius Petipa! The dancers will be introduced to and immersed in all that is classical in the worlds\n                            of ballet, music and art! A week of ballet to the classics – <em>The Sleeping Beauty</em>, <em>The Nutcracker</em> and\n                            <em>Swan Lake</em>. Classical costumes, classical art, stage design and crafts, all combined to expand creativity and imagination.\n                            The week will culminate in a short, informal presentation of all that they learned and created.</p>\n                        <br>\n                        <br> </td>\n                </tr>\n            </tbody>\n        </table>\n\n        <div class=\"row\">&nbsp;</div>\n        <div class=\"row\">\n            <div>\n                <p><span style=\"font-size: 8pt; font-family: arial, sans-serif; color: #666666;\"></span> </p>\n                <div>\n                    <div>\n                        <div>&nbsp;</div>\n                    </div>\n                </div>\n            </div>\n    </div>\n    </div>\n\n\n\n\n  \n\n\n\n\n\n\n\n\n\n</div>\n    <!-- <a routerLink =\"summerPrograms\" class=\"scrolltop\"><em><span class=\"hide\">Return to Top of Page</span></em></a>\n   -->\n\n\n\n</body>\n"

/***/ }),

/***/ "./src/app/summer-programs/summer-programs.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/summer-programs/summer-programs.component.ts ***!
  \**************************************************************/
/*! exports provided: SummerProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummerProgramsComponent", function() { return SummerProgramsComponent; });
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

var SummerProgramsComponent = /** @class */ (function () {
    function SummerProgramsComponent() {
    }
    SummerProgramsComponent.prototype.ngOnInit = function () {
    };
    SummerProgramsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summer-programs',
            template: __webpack_require__(/*! ./summer-programs.component.html */ "./src/app/summer-programs/summer-programs.component.html"),
            styles: [__webpack_require__(/*! ./summer-programs.component.css */ "./src/app/summer-programs/summer-programs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SummerProgramsComponent);
    return SummerProgramsComponent;
}());



/***/ }),

/***/ "./src/app/user-detail.ts":
/*!********************************!*\
  !*** ./src/app/user-detail.ts ***!
  \********************************/
/*! exports provided: UserDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetail", function() { return UserDetail; });
var UserDetail = /** @class */ (function () {
    function UserDetail(id, name, email, password, dob, age, danceStyle, coursetype, role, available) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.dob = dob;
        this.age = age;
        this.danceStyle = danceStyle;
        this.coursetype = coursetype;
        this.role = role;
        this.available = available;
    }
    return UserDetail;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, email, password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
    return User;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyA845qNHJLsYXzjwK82Wcb0rbqN3it8La8",
        authDomain: "freeyourfeet-6d319.firebaseapp.com",
        databaseURL: "https://freeyourfeet-6d319.firebaseio.com",
        projectId: "freeyourfeet-6d319",
        storageBucket: "",
        messagingSenderId: "3077210651"
    }
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

module.exports = __webpack_require__(/*! D:\danceWibes\freeTheFoot\feelTheFoot\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map