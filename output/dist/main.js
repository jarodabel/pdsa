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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crisis-list/crisis-list.component */ "./src/app/crisis-list/crisis-list.component.ts");
/* harmony import */ var _heroes_list_heroes_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heroes-list/heroes-list.component */ "./src/app/heroes-list/heroes-list.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _plan_plan_document_plan_document_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plan/plan-document/plan-document.component */ "./src/app/plan/plan-document/plan-document.component.ts");









var routes = [
    {
        path: 'crisis-center',
        component: _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_3__["CrisisListComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'heroes',
        component: _heroes_list_heroes_list_component__WEBPACK_IMPORTED_MODULE_4__["HeroesListComponent"],
        data: { title: 'Heroes List' },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
    },
    {
        path: 'plan/:id',
        component: _plan_plan_document_plan_document_component__WEBPACK_IMPORTED_MODULE_8__["PlanDocumentComponent"],
    },
    { path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Qwalatee</span>\n    <span class='app-toolbar-spacing'></span>\n    <mat-icon [matMenuTriggerFor]=\"menu\">settings</mat-icon>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item *ngIf=\"(isAdmin)\">\n        <mat-icon>supervisor_account</mat-icon>\n        <span>Admin</span>\n      </button>\n      <button mat-menu-item>\n        <span class=\"toolbar-login\" (click)=\"login()\" *ngIf=\"!authState else logoutBtn\">\n          <mat-icon>input</mat-icon>\n          Login\n        </span>\n        <ng-template #logoutBtn>\n          <mat-icon>logout</mat-icon>\n          <span (click)=\"logout()\">Logout</span>\n        </ng-template>\n      </button>\n    </mat-menu>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-toolbar-spacing {\n  flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXJvZGFiZWwvUHJvamVjdHMvcGRzYS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtdG9vbGJhci1zcGFjaW5nIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AppComponent = /** @class */ (function () {
    function AppComponent(db, router, afAuth) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.afAuth = afAuth;
        this.authState = null;
        this.user = null;
        this.isAdmin = false;
        this.usersLocation = function (a) {
            return {
                type: AppComponent_1.USERS_LOCATION
            };
        };
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
            if (auth) {
                _this.getUserData();
            }
            else {
                _this.user = null;
                _this.isAdmin = false;
            }
        });
    }
    AppComponent_1 = AppComponent;
    AppComponent.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider());
    };
    AppComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['/dashboard']);
    };
    AppComponent.prototype.getUserData = function () {
        var _this = this;
        this.user = this.db
            .collection('users', function (ref) {
            return ref.where('username', '==', _this.authState.email);
        })
            .valueChanges()
            .subscribe(function (a) {
            _this.isAdmin = a[0] ? a[0]['admin'] : false;
        });
    };
    var AppComponent_1;
    AppComponent.USERS_LOCATION = 'USERS_LOCATION';
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["dispatch"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "usersLocation", void 0);
    AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-redux/router */ "./node_modules/@angular-redux/router/lib/es5/src/index.js");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crisis-list/crisis-list.component */ "./src/app/crisis-list/crisis-list.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _heroes_list_heroes_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./heroes-list/heroes-list.component */ "./src/app/heroes-list/heroes-list.component.ts");
/* harmony import */ var _store_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/module */ "./src/app/store/module.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notify.service */ "./src/app/notify.service.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _plan_plan_tile_plan_tile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./plan/plan-tile/plan-tile.component */ "./src/app/plan/plan-tile/plan-tile.component.ts");
/* harmony import */ var _plan_plan_document_plan_document_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./plan/plan-document/plan-document.component */ "./src/app/plan/plan-document/plan-document.component.ts");
/* harmony import */ var _plan_plan_overview_plan_overview_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./plan/plan-overview/plan-overview.component */ "./src/app/plan/plan-overview/plan-overview.component.ts");
/* harmony import */ var _plan_plan_aim_plan_aim_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./plan/plan-aim/plan-aim.component */ "./src/app/plan/plan-aim/plan-aim.component.ts");






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_10__["CrisisListComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                _heroes_list_heroes_list_component__WEBPACK_IMPORTED_MODULE_12__["HeroesListComponent"],
                _counter_counter_component__WEBPACK_IMPORTED_MODULE_14__["CounterComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__["AdminComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"],
                _plan_plan_tile_plan_tile_component__WEBPACK_IMPORTED_MODULE_26__["PlanTileComponent"],
                _plan_plan_document_plan_document_component__WEBPACK_IMPORTED_MODULE_27__["PlanDocumentComponent"],
                _plan_plan_overview_plan_overview_component__WEBPACK_IMPORTED_MODULE_28__["PlanOverviewComponent"],
                _plan_plan_aim_plan_aim_component__WEBPACK_IMPORTED_MODULE_29__["PlanAimComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__["AngularFireStorageModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgReduxModule"],
                _angular_redux_router__WEBPACK_IMPORTED_MODULE_4__["NgReduxRouterModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _store_module__WEBPACK_IMPORTED_MODULE_13__["StoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"], _auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _notify_service__WEBPACK_IMPORTED_MODULE_22__["NotifyService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducer.ts":
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/*! exports provided: locationReducer, appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationReducer", function() { return locationReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");


var locationReducer = function (state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].USERS_LOCATION:
            return 6;
    }
    return state;
};
var appReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { location: locationReducer(state.location, action) }));
};


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notify.service */ "./src/app/notify.service.ts");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, notify) {
        this.auth = auth;
        this.router = router;
        this.notify = notify;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return !!user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                console.log('access denied');
                _this.notify.update('You must be logged in!', 'error');
                _this.router.navigate(['/dashboard']);
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"]])
    ], AuthGuard);
    return AuthGuard;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notify.service */ "./src/app/notify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router, notify) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.notify = notify;
        this.user = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (user) {
            if (user) {
                console.log(user);
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
            }
        })
        // tap(user => localStorage.setItem('user', JSON.stringify(user))),
        // startWith(JSON.parse(localStorage.getItem('user')))
        );
    }
    ////// OAuth Methods /////
    AuthService.prototype.googleLogin = function () {
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.githubLogin = function () {
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GithubAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.facebookLogin = function () {
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.twitterLogin = function () {
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].TwitterAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth
            .signInWithPopup(provider)
            .then(function (credential) {
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(credential.user);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    //// Anonymous Auth ////
    AuthService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth
            .signInAnonymously()
            .then(function (credential) {
            _this.notify.update('Welcome to Firestarter!!!', 'success');
            return _this.updateUserData(credential.user); // if using firestore
        })
            .catch(function (error) {
            _this.handleError(error);
        });
    };
    //// Email/Password Auth ////
    AuthService.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (credential) {
            _this.notify.update('Welcome new user!', 'success');
            return _this.updateUserData(credential.user); // if using firestore
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(function (credential) {
            _this.notify.update('Welcome back!', 'success');
            return _this.updateUserData(credential.user);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Sends email allowing user to reset password
    AuthService.prototype.resetPassword = function (email) {
        var _this = this;
        var fbAuth = Object(firebase__WEBPACK_IMPORTED_MODULE_3__["auth"])();
        return fbAuth
            .sendPasswordResetEmail(email)
            .then(function () { return _this.notify.update('Password update email sent', 'info'); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    // If error, console log and notify user
    AuthService.prototype.handleError = function (error) {
        console.error(error);
        this.notify.update(error.message, 'error');
    };
    // Sets user data to firestore after succesful login
    AuthService.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email || null,
            displayName: user.displayName || 'nameless user',
            photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
        };
        return userRef.set(data);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/counter/counter.component.html":
/*!************************************************!*\
  !*** ./src/app/counter/counter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  counter works! {{count | async}} <button (click)=\"increment.emit()\">increment</button>\n</p>\n"

/***/ }),

/***/ "./src/app/counter/counter.component.scss":
/*!************************************************!*\
  !*** ./src/app/counter/counter.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.increment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CounterComponent.prototype, "count", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CounterComponent.prototype, "increment", void 0);
    CounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counter',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/counter/counter.component.html"),
            styles: [__webpack_require__(/*! ./counter.component.scss */ "./src/app/counter/counter.component.scss")]
        })
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/crisis-list/crisis-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/crisis-list/crisis-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  crisis-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/crisis-list/crisis-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/crisis-list/crisis-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyaXNpcy1saXN0L2NyaXNpcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/crisis-list/crisis-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/crisis-list/crisis-list.component.ts ***!
  \******************************************************/
/*! exports provided: CrisisListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisListComponent", function() { return CrisisListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CrisisListComponent = /** @class */ (function () {
    function CrisisListComponent() {
    }
    CrisisListComponent.prototype.ngOnInit = function () {
    };
    CrisisListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crisis-list',
            template: __webpack_require__(/*! ./crisis-list.component.html */ "./src/app/crisis-list/crisis-list.component.html"),
            styles: [__webpack_require__(/*! ./crisis-list.component.scss */ "./src/app/crisis-list/crisis-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CrisisListComponent);
    return CrisisListComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div *ngIf=\"afAuth.user | async as user; else showLogin\">\n    <h1>Hello {{ user.displayName }}!</h1>\n  </div>\n  <ng-template #showLogin>\n    <p>Please login.</p>\n    <button mat-button (click)=\"login()\">Login with Google</button>\n  </ng-template>\n</mat-card>\n<mat-grid-list cols=\"2\" rowHeight=\"2:1\" *ngIf=\"afAuth.user | async\" >\n  <mat-grid-tile *ngFor=\"let plan of plans\">\n    <app-plan-tile [plan]=plan></app-plan-tile>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.authState = null;
        this.plans = [];
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
            if (auth) {
                _this.getPlans();
            }
            else {
                _this.plans = [];
            }
        });
    }
    DashboardComponent.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider());
    };
    DashboardComponent.prototype.makeDataWithId = function (a) {
        return { data: a.payload.doc.data(), id: a.payload.doc.id };
    };
    DashboardComponent.prototype.getPlans = function () {
        var _this = this;
        this.db
            .collection('plans', function (ref) {
            return ref.where('users', 'array-contains', _this.authState.email);
        })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (a) { return a.map(function (a) { return _this.makeDataWithId(a); }); }))
            .subscribe(function (a) {
            console.log(a);
            _this.plans = a;
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/heroes-list/heroes-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/heroes-list/heroes-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  heroes-list works! {{numTickets$|async}}\n</p>\n<app-counter (increment)=plusOne() [count]=\"numTickets$\"></app-counter>"

/***/ }),

/***/ "./src/app/heroes-list/heroes-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/heroes-list/heroes-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcm9lcy1saXN0L2hlcm9lcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/heroes-list/heroes-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/heroes-list/heroes-list.component.ts ***!
  \******************************************************/
/*! exports provided: HeroesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesListComponent", function() { return HeroesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var HeroesListComponent = /** @class */ (function () {
    function HeroesListComponent() {
        this.getBasePath = function () { return null; };
        this.plusOne = function () { return ({ type: HeroesListComponent_1.ADD_TICKET }); };
    }
    HeroesListComponent_1 = HeroesListComponent;
    var HeroesListComponent_1;
    HeroesListComponent.ADD_TICKET = 'ADD_TICKET';
    HeroesListComponent.REMOVE_TICKET = 'REMOVE_TICKET';
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(['count', 'tickets']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], HeroesListComponent.prototype, "numTickets$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeroesListComponent.prototype, "plusOne", void 0);
    HeroesListComponent = HeroesListComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroes-list',
            template: __webpack_require__(/*! ./heroes-list.component.html */ "./src/app/heroes-list/heroes-list.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./heroes-list.component.scss */ "./src/app/heroes-list/heroes-list.component.scss")]
        })
    ], HeroesListComponent);
    return HeroesListComponent;
}());



/***/ }),

/***/ "./src/app/heroes-list/heroes-list.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/heroes-list/heroes-list.reducer.ts ***!
  \****************************************************/
/*! exports provided: ticketsReducer, heroListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ticketsReducer", function() { return ticketsReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heroListReducer", function() { return heroListReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _heroes_list_heroes_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../heroes-list/heroes-list.component */ "./src/app/heroes-list/heroes-list.component.ts");


var ticketsReducer = function (state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case _heroes_list_heroes_list_component__WEBPACK_IMPORTED_MODULE_1__["HeroesListComponent"].ADD_TICKET:
            return state + 1;
        case _heroes_list_heroes_list_component__WEBPACK_IMPORTED_MODULE_1__["HeroesListComponent"].REMOVE_TICKET:
            return Math.max(0, state - 1);
    }
    return state;
};
// Basic reducer logic.
var heroListReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { tickets: ticketsReducer(state.tickets, action) }));
};


/***/ }),

/***/ "./src/app/notify.service.ts":
/*!***********************************!*\
  !*** ./src/app/notify.service.ts ***!
  \***********************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var NotifyService = /** @class */ (function () {
    function NotifyService() {
        this._msgSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.msg = this._msgSource.asObservable();
    }
    NotifyService.prototype.update = function (content, style) {
        var msg = { content: content, style: style };
        this._msgSource.next(msg);
    };
    NotifyService.prototype.clear = function () {
        this._msgSource.next(null);
    };
    NotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works! <button (click)=\"dashboard()\">go to dashboard</button>\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router) {
        this.router = router;
    }
    PageNotFoundComponent.prototype.dashboard = function () {
        this.router.navigate(['/dashboard']);
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/plan/plan-aim/plan-aim.component.html":
/*!*******************************************************!*\
  !*** ./src/app/plan/plan-aim/plan-aim.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      Set Aim For The Task Force\n    </mat-panel-title>\n  </mat-expansion-panel-header>\n  <form [formGroup]=\"planForm\" (ngSubmit)=\"submitHandler()\" class=\"plan-aim-form-group\">\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput formControlName=\"planAimDescription\" placeholder=\"Should be set by the Quality Improvement Committee and SMART.\">\n    </textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput formControlName=\"planAimTypeWhy\" placeholder=\"Is it Quality Improvement or Quality Assurance? Why?\"></textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput formControlName=\"planAimWhichSystem\" placeholder=\" Which systems will be affected by the improvement efforts?\"></textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput formControlName=\"planAimBlockers\" placeholder=\"What can the Task Force do or not do without the QI Committee?\"></textarea>\n    </mat-form-field>\n    <button>Submit Form</button>\n  </form>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "./src/app/plan/plan-aim/plan-aim.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/plan/plan-aim/plan-aim.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plan-aim-form-group {\n  width: 100%; }\n  .plan-aim-form-group mat-form-field {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXJvZGFiZWwvUHJvamVjdHMvcGRzYS9zcmMvYXBwL3BsYW4vcGxhbi1haW0vcGxhbi1haW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXLEVBSWQ7RUFMRDtJQUdRLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3BsYW4vcGxhbi1haW0vcGxhbi1haW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxhbi1haW0tZm9ybS1ncm91cHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/plan/plan-aim/plan-aim.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/plan/plan-aim/plan-aim.component.ts ***!
  \*****************************************************/
/*! exports provided: PlanAimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanAimComponent", function() { return PlanAimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");




var PlanAimComponent = /** @class */ (function () {
    function PlanAimComponent(db, fb) {
        this.db = db;
        this.fb = fb;
    }
    PlanAimComponent.prototype.submitHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var formValue, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formValue = this.planForm.value;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.db
                                .collection('plans')
                                .doc(this.plan.id)
                                .update(formValue)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PlanAimComponent.prototype.ngOnInit = function () {
        this.planForm = this.fb.group({
            planAimDescription: [''],
            planAimTypeWhy: [''],
            planAimWhichSystem: [''],
            planAimBlockers: [''],
        });
    };
    PlanAimComponent.prototype.ngOnChanges = function (changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log(changes);
        this.plan = changes.plan.currentValue;
        if (this.plan) {
            this.planForm = this.fb.group({
                planAimDescription: [this.plan.planAimDescription],
                planAimTypeWhy: [this.plan.planAimTypeWhy],
                planAimWhichSystem: [this.plan.planAimWhichSystem],
                planAimBlockers: [this.plan.planAimBlockers],
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlanAimComponent.prototype, "plan", void 0);
    PlanAimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plan-aim',
            template: __webpack_require__(/*! ./plan-aim.component.html */ "./src/app/plan/plan-aim/plan-aim.component.html"),
            styles: [__webpack_require__(/*! ./plan-aim.component.scss */ "./src/app/plan/plan-aim/plan-aim.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PlanAimComponent);
    return PlanAimComponent;
}());



/***/ }),

/***/ "./src/app/plan/plan-document/plan-document.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/plan/plan-document/plan-document.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n  <app-plan-overview></app-plan-overview>\n  <app-plan-aim [plan]=plan></app-plan-aim>\n\n  <!-- <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Form The Team\n      </mat-panel-title>\n      <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>I'm visible because I am open</p>\n  </mat-expansion-panel> -->\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/plan/plan-document/plan-document.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/plan/plan-document/plan-document.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW4vcGxhbi1kb2N1bWVudC9wbGFuLWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/plan/plan-document/plan-document.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/plan/plan-document/plan-document.component.ts ***!
  \***************************************************************/
/*! exports provided: PlanDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanDocumentComponent", function() { return PlanDocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var PlanDocumentComponent = /** @class */ (function () {
    function PlanDocumentComponent(route, fb, db) {
        this.route = route;
        this.fb = fb;
        this.db = db;
    }
    PlanDocumentComponent.prototype.submitHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var formValue, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formValue = this.planForm.value;
                        console.log(formValue);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.db
                                .collection('plans')
                                .doc(this.plan.id)
                                .update(formValue)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PlanDocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.planForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            return _this.db
                .collection('plans')
                .doc(params['id'])
                .snapshotChanges();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (plan) {
            _this.plan = plan.payload.data();
            _this.fillForm();
        }))
            .subscribe();
    };
    PlanDocumentComponent.prototype.fillForm = function () {
        var updatePlanFormData = {
            name: [this.plan['name'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [this.plan['description'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        };
        this.planForm = this.fb.group(updatePlanFormData);
    };
    PlanDocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plan-document',
            template: __webpack_require__(/*! ./plan-document.component.html */ "./src/app/plan/plan-document/plan-document.component.html"),
            styles: [__webpack_require__(/*! ./plan-document.component.scss */ "./src/app/plan/plan-document/plan-document.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], PlanDocumentComponent);
    return PlanDocumentComponent;
}());



/***/ }),

/***/ "./src/app/plan/plan-overview/plan-overview.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/plan/plan-overview/plan-overview.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      Quality Overview\n    </mat-panel-title>\n  </mat-expansion-panel-header>\n  <strong>Set an aim for the Task Force</strong>\n  <p>Should be set by the Quality Improvement Committee and SMART. Is it Quality Improvement or Quality Assurance?\n    Consider: which systems will be affected by the improvement efforts?\n    What can the Task Force do or not do without the QI Committee?</p>\n  <mat-form-field>\n    <mat-select placeholder=\"Status\">\n      <mat-option value=\"notStarted\">Not Started</mat-option>\n      <mat-option value=\"inProgress\">In Progress</mat-option>\n      <mat-option value=\"complete\">Complete</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-divider></mat-divider>\n\n  <strong>Form the Team</strong>\n  <p>Include Clinical Leader, Technical Expert, a Day-to-Day Leader, a Project Leader, and additional members. Consider\n    Board Members and/or patients, if applicable. </p>\n  <mat-form-field>\n    <mat-select placeholder=\"Status\">\n      <mat-option value=\"notStarted\">Not Started</mat-option>\n      <mat-option value=\"inProgress\">In Progress</mat-option>\n      <mat-option value=\"complete\">Complete</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-divider></mat-divider>\n\n  <strong>Establish Measures</strong>\n  <p>What are we trying to accomplish? How will we know that a change is an improvement? What possible changes can we\n    make that will result in improvement? Use SMART measures when possible. </p>\n  <mat-form-field>\n    <mat-select placeholder=\"Status\">\n      <mat-option value=\"notStarted\">Not Started</mat-option>\n      <mat-option value=\"inProgress\">In Progress</mat-option>\n      <mat-option value=\"complete\">Complete</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-divider></mat-divider>\n\n  <strong>Selecting Changes</strong>\n  <p>What possible changes can we make to meet and exceed measures? Some possible categories of changes are: eliminate\n    waste, improve workflow, optimize inventory, change the work environment, patient experience, improve time\n    management, reduce variation, error proofing, or service improvement. Complete a SWOT Form.</p>\n  <mat-form-field>\n    <mat-select placeholder=\"Status\">\n      <mat-option value=\"notStarted\">Not Started</mat-option>\n      <mat-option value=\"inProgress\">In Progress</mat-option>\n      <mat-option value=\"complete\">Complete</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-divider></mat-divider>\n\n  <strong>Testing Changes (Pilot)</strong>\n  <p>Use PDSA Form. Repeat until a process or change is defined and shows improvement.</p>\n  <mat-form-field>\n    <mat-select placeholder=\"Status\">\n      <mat-option value=\"notStarted\">Not Started</mat-option>\n      <mat-option value=\"inProgress\">In Progress</mat-option>\n      <mat-option value=\"complete\">Complete</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-divider></mat-divider>\n\n  <strong>Implementing Changes</strong>\n  <p>Formalize the change. What needs to be updated before spreading to the entire organization? Examples: updated\n    workflows, policies, procedures, training guides, eClinicalworks, job descriptions, consent forms, etc.</p>\n  <mat-form-field>\n    <mat-select placeholder=\"Status\">\n      <mat-option value=\"notStarted\">Not Started</mat-option>\n      <mat-option value=\"inProgress\">In Progress</mat-option>\n      <mat-option value=\"complete\">Complete</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-divider></mat-divider>\n\n  <strong>Spreading the Change</strong>\n  <p>Expand the change to the entire organization. Does the project need to be moved to Quality Assurance to be\n    monitored? How often will the measures be revisited? How will we know when the process needs to be put back into\n    Quality Improvement? </p>\n  <mat-form-field>\n    <mat-select placeholder=\"Status\">\n      <mat-option value=\"notStarted\">Not Started</mat-option>\n      <mat-option value=\"inProgress\">In Progress</mat-option>\n      <mat-option value=\"complete\">Complete</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-divider></mat-divider>\n\n</mat-expansion-panel>\n"

/***/ }),

/***/ "./src/app/plan/plan-overview/plan-overview.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/plan/plan-overview/plan-overview.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW4vcGxhbi1vdmVydmlldy9wbGFuLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/plan/plan-overview/plan-overview.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/plan/plan-overview/plan-overview.component.ts ***!
  \***************************************************************/
/*! exports provided: PlanOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanOverviewComponent", function() { return PlanOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlanOverviewComponent = /** @class */ (function () {
    function PlanOverviewComponent() {
    }
    PlanOverviewComponent.prototype.ngOnInit = function () {
    };
    PlanOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plan-overview',
            template: __webpack_require__(/*! ./plan-overview.component.html */ "./src/app/plan/plan-overview/plan-overview.component.html"),
            styles: [__webpack_require__(/*! ./plan-overview.component.scss */ "./src/app/plan/plan-overview/plan-overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlanOverviewComponent);
    return PlanOverviewComponent;
}());



/***/ }),

/***/ "./src/app/plan/plan-tile/plan-tile.component.html":
/*!*********************************************************!*\
  !*** ./src/app/plan/plan-tile/plan-tile.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card (click)=\"openPlan()\">\n  <mat-card-title>{{plan.data.name}}</mat-card-title>\n  <mat-card-content>{{plan.data.description}}</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/plan/plan-tile/plan-tile.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/plan/plan-tile/plan-tile.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW4vcGxhbi10aWxlL3BsYW4tdGlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/plan/plan-tile/plan-tile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/plan/plan-tile/plan-tile.component.ts ***!
  \*******************************************************/
/*! exports provided: PlanTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanTileComponent", function() { return PlanTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PlanTileComponent = /** @class */ (function () {
    function PlanTileComponent(router) {
        this.router = router;
    }
    PlanTileComponent.prototype.openPlan = function () {
        this.router.navigate(['plan', this.plan.id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlanTileComponent.prototype, "plan", void 0);
    PlanTileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plan-tile',
            template: __webpack_require__(/*! ./plan-tile.component.html */ "./src/app/plan/plan-tile/plan-tile.component.html"),
            styles: [__webpack_require__(/*! ./plan-tile.component.scss */ "./src/app/plan/plan-tile/plan-tile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlanTileComponent);
    return PlanTileComponent;
}());



/***/ }),

/***/ "./src/app/store/epics.ts":
/*!********************************!*\
  !*** ./src/app/store/epics.ts ***!
  \********************************/
/*! exports provided: RootEpics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootEpics", function() { return RootEpics; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RootEpics = /** @class */ (function () {
    function RootEpics() {
    }
    RootEpics.prototype.createEpics = function () {
        return [];
    };
    RootEpics = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RootEpics);
    return RootEpics;
}());



/***/ }),

/***/ "./src/app/store/module.ts":
/*!*********************************!*\
  !*** ./src/app/store/module.ts ***!
  \*********************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/form */ "./node_modules/@angular-redux/form/dist/source/index.js");
/* harmony import */ var _angular_redux_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/router */ "./node_modules/@angular-redux/router/lib/es5/src/index.js");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _epics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./epics */ "./src/app/store/epics.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers.ts");


// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.



// Redux ecosystem stuff.

// The top-level reducers and epics that make up our app's logic.


var StoreModule = /** @class */ (function () {
    function StoreModule(store, devTools, ngReduxRouter, rootEpics) {
        this.store = store;
        // Tell Redux about our reducers and epics. If the Redux DevTools
        // chrome extension is available in the browser, tell Redux about
        // it too.
        store.configureStore(_reducers__WEBPACK_IMPORTED_MODULE_7__["rootReducer"], {}, [Object(redux_logger__WEBPACK_IMPORTED_MODULE_5__["createLogger"])()].concat(rootEpics.createEpics()), devTools.isEnabled() ? [devTools.enhancer()] : []);
        // Enable syncing of Angular router state with our Redux store.
        if (ngReduxRouter) {
            ngReduxRouter.initialize();
        }
        // Enable syncing of Angular form state with our Redux store.
        Object(_angular_redux_form__WEBPACK_IMPORTED_MODULE_2__["provideReduxForms"])(store);
    }
    StoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["NgReduxModule"], _angular_redux_router__WEBPACK_IMPORTED_MODULE_3__["NgReduxRouterModule"].forRoot()],
            providers: [_epics__WEBPACK_IMPORTED_MODULE_6__["RootEpics"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["NgRedux"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["DevToolsExtension"],
            _angular_redux_router__WEBPACK_IMPORTED_MODULE_3__["NgReduxRouter"],
            _epics__WEBPACK_IMPORTED_MODULE_6__["RootEpics"]])
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "./src/app/store/reducers.ts":
/*!***********************************!*\
  !*** ./src/app/store/reducers.ts ***!
  \***********************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var _angular_redux_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-redux/form */ "./node_modules/@angular-redux/form/dist/source/index.js");
/* harmony import */ var _angular_redux_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/router */ "./node_modules/@angular-redux/router/lib/es5/src/index.js");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _heroes_list_heroes_list_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../heroes-list/heroes-list.reducer */ "./src/app/heroes-list/heroes-list.reducer.ts");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.reducer */ "./src/app/app.reducer.ts");





// Define the global store shape by combining our application's
// reducers together into a given structure.
var rootReducer = Object(_angular_redux_form__WEBPACK_IMPORTED_MODULE_0__["composeReducers"])(Object(_angular_redux_form__WEBPACK_IMPORTED_MODULE_0__["defaultFormReducer"])(), Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
    count: _heroes_list_heroes_list_reducer__WEBPACK_IMPORTED_MODULE_3__["heroListReducer"],
    location: _app_reducer__WEBPACK_IMPORTED_MODULE_4__["appReducer"],
    router: _angular_redux_router__WEBPACK_IMPORTED_MODULE_1__["routerReducer"],
}));


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
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDC6aFk2lLF0L07Wd9RqG2PSvS_gTZt8VE',
        authDomain: 'pdsa-8fb38.firebaseapp.com',
        databaseURL: 'https://pdsa-8fb38.firebaseio.com',
        projectId: 'pdsa-8fb38',
        storageBucket: 'pdsa-8fb38.appspot.com',
        messagingSenderId: '1066646791283'
    }
};


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jarodabel/Projects/pdsa/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map