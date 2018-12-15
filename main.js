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



var routes = [];
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

module.exports = "<div class=\"section header\">\n  <div class=\"section-inner\">\n    <div class=\"logo\">Kim Turley</div>\n    <h1>Digital Strategist, Creative Thinker &amp; Technologist</h1>\n    <p>Delivering cutting-edge digital experiences in partnership with top brands since 2006.</p>\n  </div>\n</div>\n<div class=\"section services\">\n  <div class=\"section-inner\">\n    <h3 class=\"underline\">Services</h3>\n    <div class=\"service\">\n      <img src=\"../assets/lightbulb.svg\" alt=\"Lightbulb\" />\n      <p>Uncovering unmet market needs and inventing products &amp; services with impact.</p>\n    </div>\n    <div class=\"service\">\n      <img src=\"../assets/route.svg\" alt=\"Route\" />\n      <p>Transforming teams &amp; processes to cope with our ever-changing world.</p>\n    </div>\n    <div class=\"service\">\n      <img src=\"../assets/products.svg\" alt=\"products\" />\n      <p>Designing and building secure, scalable digital products &amp; services quickly.</p>\n    </div>\n  </div>\n</div>\n<div class=\"section projects\">\n  <div class=\"section-inner\">\n    <h3 class=\"underline\">Projects</h3>\n  </div>\n  <drag-scroll class=\"carousel\">\n    <a href=\"#\"><img src=\"https://ngx-drag-scroll.fanjin.io/assets/img/luke.png\" /></a>\n    <a href=\"#\"><img src=\"https://ngx-drag-scroll.fanjin.io/assets/img/chubaka.png\" /></a>\n    <a href=\"#\"><img src=\"https://ngx-drag-scroll.fanjin.io/assets/img/boba.png\" /></a>\n    <a href=\"#\"><img src=\"https://ngx-drag-scroll.fanjin.io/assets/img/c3po.png\" /></a>\n    <a href=\"#\"><img src=\"https://ngx-drag-scroll.fanjin.io/assets/img/leia.png\" /></a>\n    <a href=\"#\"><img src=\"https://ngx-drag-scroll.fanjin.io/assets/img/obi.png\" /></a>\n    <a href=\"#\"><img src=\"https://ngx-drag-scroll.fanjin.io/assets/img/r2d2.png\" /></a>\n    <a href=\"#\"><img src=\"https://ngx-drag-scroll.fanjin.io/assets/img/storm.png\" /></a>\n    <a href=\"#\"><img src=\"https://ngx-drag-scroll.fanjin.io/assets/img/varder.png\" /></a>\n    <a href=\"#\"><img src=\"https://ngx-drag-scroll.fanjin.io/assets/img/yoda.png\" /></a>\n    <a href=\"#\"><img src=\"https://ngx-drag-scroll.fanjin.io/assets/img/yolo.png\" /></a>\n  </drag-scroll>\n</div>\n<div class=\"section thoughts\">\n  <div class=\"section-inner\">\n    <h3 class=\"underline\">Thoughts</h3>\n  </div>\n  <drag-scroll class=\"carousel\">\n    <a href=\"https://www.americanexpress.com/en-us/business/trends-and-insights/articles/the-new-digital-narrative-why-content-matters-more-in-the-age-of-technology/\" class=\"post\" target=\"_blank\">Why Content Matters More in the Age of Technology</a>\n    <a href=\"https://medium.com/beyond/7-beach-books-for-business-leaders-beyonds-summer-reading-list-1b7648d4c7dd\" class=\"post\" target=\"_blank\">7 beach books for business leaders</a>\n    <a href=\"https://medium.com/beyond/setting-up-technology-innovation-teams-for-success-204a7107a9c6\" class=\"post\" target=\"_blank\">Setting up technology innovation teams for success</a>\n    <a href=\"https://medium.com/beyond/8-tech-trends-were-predicting-for-2018-790b4f3faa7\" class=\"post\" target=\"_blank\">8 tech trends we’re predicting for 2018</a>\n    <a href=\"https://medium.com/beyond/6-ways-to-stay-on-top-of-emerging-technology-trends-ca6a7b27bc20\" class=\"post\" target=\"_blank\">6 ways to stay on top of emerging technology trends</a>\n  </drag-scroll>\n</div>\n<div class=\"section partners\">\n  <div class=\"section-inner\">\n    <h3 class=\"underline\">Partners</h3>\n  </div>\n  <drag-scroll class=\"carousel\">\n    <img src=\"../assets/logos/virgin.svg\" alt=\"Virgin\" />\n    <img src=\"../assets/logos/google.svg\" alt=\"Google\" />\n    <img src=\"../assets/logos/apple.svg\" alt=\"Apple\" />\n  </drag-scroll>\n</div>\n<div class=\"section footer\">\n  <div class=\"section-inner\">\n    <p>Get in touch <br/><a href=\"mailto:hello@kimturley.co.uk\">hello@kimturley.co.uk</a></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: #4e6374;\n  background: linear-gradient(135deg, #4e6374 0%, #463b5c 100%);\n  color: #ffffff;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$blue-bayoux', endColorstr='$mulled-wine', GradientType=1); }\n  .header .logo {\n    background-color: #d4bb98;\n    display: inline-block;\n    font-size: 14px;\n    font-weight: 700;\n    margin: 0 0 1.5em 0;\n    padding: .2rem .4rem;\n    text-transform: uppercase; }\n  .services .service {\n  align-items: center;\n  border-bottom: 0.15rem solid #d4bb98;\n  display: flex;\n  padding-top: .8rem; }\n  .services .service img {\n    align-self: flex-start;\n    margin: 0 1.5rem .5rem 0; }\n  .services .service p {\n    margin: 0 0 .5rem 0; }\n  .services .service:last-child {\n    border-bottom: none; }\n  .projects {\n  background-color: #333333; }\n  .projects h3 {\n    color: #ffffff; }\n  .projects img {\n    height: 15rem;\n    margin-right: 1rem;\n    transition: -webkit-transform .1s ease-out;\n    transition: transform .1s ease-out;\n    transition: transform .1s ease-out, -webkit-transform .1s ease-out; }\n  .projects img:hover {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1); }\n  .thoughts {\n  background-color: #efefef; }\n  .thoughts .post {\n    background-color: #ffffff;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);\n    color: #333333;\n    display: inline-block;\n    line-height: 1.5em;\n    margin: 0 1rem 1rem 0;\n    max-width: 15rem;\n    padding: 1rem;\n    text-decoration: none;\n    transition: -webkit-transform .1s ease-out;\n    transition: transform .1s ease-out;\n    transition: transform .1s ease-out, -webkit-transform .1s ease-out;\n    vertical-align: top;\n    white-space: normal; }\n  .thoughts .post:hover {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1); }\n  .partners {\n  background-color: #333333; }\n  .partners h3 {\n    color: #ffffff; }\n  .partners img {\n    margin-right: 3rem;\n    height: 4rem;\n    max-width: 6rem; }\n  .footer {\n  background-color: #414e58;\n  color: #ffffff; }\n  .footer a {\n    color: #ffffff;\n    font-size: 20px;\n    text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raW0vU2l0ZXMva210dXJsZXkuZ2l0aHViLmlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2tpbS9TaXRlcy9rbXR1cmxleS5naXRodWIuaW8vc3JjL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JDRm1CO0VES25CLDhEQUFzRTtFQUN0RSxlQ0FhO0VEQ2IsNkhBQTRILEVBVzdIO0VBakJEO0lBU0ksMEJDTmE7SURPYixzQkFBcUI7SUFDckIsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsb0JBQW1CO0lBQ25CLHFCQUFvQjtJQUNwQiwwQkFBeUIsRUFDMUI7RUFHSDtFQUdJLG9CQUFtQjtFQUNuQixxQ0NwQmE7RURxQmIsY0FBYTtFQUNiLG1CQUFrQixFQVluQjtFQWxCSDtJQVNNLHVCQUFzQjtJQUN0Qix5QkFBd0IsRUFDekI7RUFYTDtJQWFNLG9CQUFtQixFQUNwQjtFQWRMO0lBZ0JNLG9CQUFtQixFQUNwQjtFQUlMO0VBQ0UsMEJDeENrQixFRHNEbkI7RUFmRDtJQUlJLGVDdkNXLEVEd0NaO0VBTEg7SUFRSSxjQUFhO0lBQ2IsbUJBQWtCO0lBQ2xCLDJDQUFrQztJQUFsQyxtQ0FBa0M7SUFBbEMsbUVBQWtDLEVBSW5DO0VBZEg7TUFZTSw4QkFBcUI7Y0FBckIsc0JBQXFCLEVBQ3RCO0VBSUw7RUFDRSwwQkMxRGUsRUQ2RWhCO0VBcEJEO0lBR0ksMEJDdkRXO0lEd0RYLDZDQUEyQztJQUMzQyxlQzdEZ0I7SUQ4RGhCLHNCQUFxQjtJQUNyQixtQkFBa0I7SUFDbEIsc0JBQXFCO0lBQ3JCLGlCQUFnQjtJQUNoQixjQUFhO0lBQ2Isc0JBQXFCO0lBQ3JCLDJDQUFrQztJQUFsQyxtQ0FBa0M7SUFBbEMsbUVBQWtDO0lBQ2xDLG9CQUFtQjtJQUNuQixvQkFBbUIsRUFLcEI7RUFuQkg7TUFpQk0sOEJBQXFCO2NBQXJCLHNCQUFxQixFQUN0QjtFQUlMO0VBQ0UsMEJDL0VrQixFRDBGbkI7RUFaRDtJQUlJLGVDOUVXLEVEK0VaO0VBTEg7SUFRSSxtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLGdCQUFlLEVBQ2hCO0VBR0g7RUFDRSwwQkMxRmlCO0VEMkZqQixlQzFGYSxFRGdHZDtFQVJEO0lBSUksZUM1Rlc7SUQ2RlgsZ0JBQWU7SUFDZixzQkFBcUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9jb2xvcnMnO1xuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogJGJsdWUtYmF5b3V4O1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICRibHVlLWJheW91eCAwJSwgJG11bGxlZC13aW5lIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICRibHVlLWJheW91eCAwJSwkbXVsbGVkLXdpbmUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRibHVlLWJheW91eCAwJSwkbXVsbGVkLXdpbmUgMTAwJSk7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyRibHVlLWJheW91eCcsIGVuZENvbG9yc3RyPSckbXVsbGVkLXdpbmUnLCBHcmFkaWVudFR5cGU9MSk7XG5cbiAgLmxvZ28ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwYXZsb3ZhO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDAgMCAxLjVlbSAwO1xuICAgIHBhZGRpbmc6IC4ycmVtIC40cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cblxuLnNlcnZpY2VzIHtcblxuICAuc2VydmljZSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAuMTVyZW0gc29saWQgJHBhdmxvdmE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLXRvcDogLjhyZW07XG5cbiAgICBpbWcge1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIG1hcmdpbjogMCAxLjVyZW0gLjVyZW0gMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDAgMCAuNXJlbSAwO1xuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLnByb2plY3RzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1pbmUtc2hhZnQ7XG5cbiAgaDMge1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gIH1cblxuICBpbWcge1xuICAgIGhlaWdodDogMTVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZS1vdXQ7XG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuICB9XG59XG5cbi50aG91Z2h0cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRnYWxsZXJ5O1xuICAucG9zdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gICAgY29sb3I6ICRtaW5lLXNoYWZ0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgbWFyZ2luOiAwIDFyZW0gMXJlbSAwO1xuICAgIG1heC13aWR0aDogMTVyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBlYXNlLW91dDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuICB9XG59XG5cbi5wYXJ0bmVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtaW5lLXNoYWZ0O1xuXG4gIGgzIHtcbiAgICBjb2xvcjogJHdoaXRlO1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIG1heC13aWR0aDogNnJlbTtcbiAgfVxufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHJpdmVyLWJlZDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYSB7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG4iLCIkYmxhY2s6ICMwMDAwMDA7XG4kYmx1ZS1iYXlvdXg6ICM0ZTYzNzQ7XG4kZ2FsbGVyeTogI2VmZWZlZjtcbiRtaW5lLXNoYWZ0OiAjMzMzMzMzO1xuJG11bGxlZC13aW5lOiAjNDYzYjVjO1xuJHBhdmxvdmE6ICNkNGJiOTg7XG4kcml2ZXItYmVkOiAjNDE0ZTU4O1xuJHdoaXRlOiAjZmZmZmZmO1xuIl19 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/lib/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_3__["DragScrollModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kim/Sites/kmturley.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map