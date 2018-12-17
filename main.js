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

module.exports = "<div class=\"section header\">\n  <div class=\"section-inner\">\n    <div class=\"logo\">Kim Turley</div>\n    <h1>Digital Strategist, Creative Thinker &amp; Technologist</h1>\n    <p>Delivering cutting-edge digital experiences in partnership with top brands since 2006.</p>\n  </div>\n</div>\n<div class=\"section services\">\n  <div class=\"section-inner\">\n    <h3 class=\"underline\">Services</h3>\n    <div class=\"service-list\">\n      <div class=\"service\">\n        <img src=\"../assets/lightbulb.svg\" alt=\"Lightbulb\" />\n        <p>Uncovering unmet market needs and inventing products &amp; services with impact.</p>\n      </div>\n      <div class=\"service\">\n        <img src=\"../assets/route.svg\" alt=\"Route\" />\n        <p>Transforming teams &amp; processes to cope with our ever-changing world.</p>\n      </div>\n      <div class=\"service\">\n        <img src=\"../assets/products.svg\" alt=\"products\" />\n        <p>Designing and building secure, scalable digital products &amp; services quickly.</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"section projects\">\n  <div class=\"section-inner\">\n    <h3 class=\"underline\">Projects</h3>\n  </div>\n  <drag-scroll class=\"carousel\">\n    <a href=\"#\" *ngFor=\"let project of projects\" class=\"project\">\n      <span><strong class=\"project-name\">{{ project.name }}</strong><br/>{{ project.client }}</span>\n      <img [src]=\"project.image\" alt=\"{{ project.name }}\" />\n    </a>\n  </drag-scroll>\n</div>\n<div class=\"section articles\">\n  <div class=\"section-inner\">\n    <h3 class=\"underline\">Articles</h3>\n  </div>\n  <drag-scroll class=\"carousel\">\n    <a *ngFor=\"let article of articles\" [href]=\"article.url\" class=\"article\" target=\"_blank\">\n      {{ article.name }}\n      <img src=\"../assets/link.svg\" alt=\"open\" class=\"link\" />\n    </a>\n  </drag-scroll>\n</div>\n<div class=\"section brands\">\n  <div class=\"section-inner\">\n    <h3 class=\"underline\">Brands</h3>\n  </div>\n  <drag-scroll class=\"carousel\">\n    <a href=\"#\" *ngFor=\"let brand of brands\">\n      <img class=\"brand\" [src]=\"brand.image\" alt=\"{{ brand.name }}\" />\n    </a>\n  </drag-scroll>\n</div>\n<div class=\"section footer\">\n  <div class=\"section-inner\">\n    <p>Get in touch <br/><a href=\"mailto:hello@kimturley.co.uk\">hello@kimturley.co.uk</a></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: #4e6374;\n  background: linear-gradient(135deg, #4e6374 0%, #463b5c 100%);\n  color: #ffffff;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$blue-bayoux', endColorstr='$mulled-wine', GradientType=1); }\n  .header .logo {\n    background-color: #d4bb98;\n    display: inline-block;\n    font-size: 14px;\n    font-weight: 700;\n    margin: 0 0 1.5em 0;\n    padding: .2rem .4rem;\n    text-transform: uppercase; }\n  .services .service-list {\n  margin-top: 2rem; }\n  .services .service {\n  align-items: center;\n  border-bottom: 0.15rem solid #d4bb98;\n  display: flex;\n  margin-top: .8rem; }\n  .services .service img {\n    align-self: flex-start;\n    margin: 0 1.5rem .5rem 0; }\n  .services .service p {\n    margin: 0 0 .5rem 0; }\n  .services .service:last-child {\n    border-bottom: none; }\n  @media (min-width: 64rem) {\n  .service-list {\n    align-items: flex-start;\n    display: flex; }\n    .service-list .service {\n      border-bottom: none;\n      border-right: 0.15rem solid #d4bb98;\n      padding-right: 1rem;\n      margin-right: 1.5rem; }\n      .service-list .service:last-child {\n        border: none;\n        margin-right: 0;\n        padding-right: 0; } }\n  .projects {\n  background-color: #333333; }\n  .projects h3 {\n    color: #ffffff; }\n  .projects .carousel {\n    height: 12.5rem; }\n  .projects .project {\n    position: relative; }\n  .projects .project span {\n      background-color: #ffffff;\n      bottom: 0;\n      color: #333333;\n      left: 0;\n      padding: .5rem .75rem;\n      position: absolute;\n      z-index: 1; }\n  .projects .project .project-name {\n      font-size: 1.1em;\n      line-height: 1.5em; }\n  .projects img {\n    display: block;\n    height: 10rem;\n    transition: -webkit-transform .1s ease-out;\n    transition: transform .1s ease-out;\n    transition: transform .1s ease-out, -webkit-transform .1s ease-out; }\n  .projects img:hover {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1); }\n  .articles {\n  background-color: #efefef; }\n  .articles .carousel {\n    height: 7.5rem; }\n  .articles .article {\n    background-color: #ffffff;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);\n    color: #333333;\n    line-height: 1.5em;\n    max-width: 15rem;\n    padding: 1rem;\n    position: relative;\n    text-decoration: none;\n    transition: -webkit-transform .1s ease-out;\n    transition: transform .1s ease-out;\n    transition: transform .1s ease-out, -webkit-transform .1s ease-out;\n    vertical-align: top;\n    white-space: normal; }\n  .articles .article:hover {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1); }\n  .articles .link {\n    bottom: .75rem;\n    position: absolute;\n    right: .75rem;\n    z-index: 1; }\n  .brands {\n  background-color: #333333; }\n  .brands h3 {\n    color: #ffffff; }\n  .brands .carousel {\n    height: 6.5rem; }\n  .brands .brand {\n    margin-right: 3rem;\n    height: 4rem;\n    max-width: 6rem; }\n  .footer {\n  background-color: #414e58;\n  color: #ffffff; }\n  .footer a {\n    color: #ffffff;\n    font-size: 20px;\n    text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raW0vU2l0ZXMva210dXJsZXkuZ2l0aHViLmlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2tpbS9TaXRlcy9rbXR1cmxleS5naXRodWIuaW8vc3JjL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JDRm1CO0VES25CLDhEQUFzRTtFQUN0RSxlQ0FhO0VEQ2IsNkhBQTRILEVBVzdIO0VBakJEO0lBU0ksMEJDTmE7SURPYixzQkFBcUI7SUFDckIsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsb0JBQW1CO0lBQ25CLHFCQUFvQjtJQUNwQiwwQkFBeUIsRUFDMUI7RUFHSDtFQUdJLGlCQUFnQixFQUNqQjtFQUpIO0VBT0ksb0JBQW1CO0VBQ25CLHFDQ3hCYTtFRHlCYixjQUFhO0VBQ2Isa0JBQWlCLEVBWWxCO0VBdEJIO0lBYU0sdUJBQXNCO0lBQ3RCLHlCQUF3QixFQUN6QjtFQWZMO0lBaUJNLG9CQUFtQixFQUNwQjtFQWxCTDtJQW9CTSxvQkFBbUIsRUFDcEI7RUFJTDtFQUNFO0lBQ0Usd0JBQXVCO0lBQ3ZCLGNBQWEsRUFZZDtJQWREO01BSUksb0JBQW1CO01BQ25CLG9DQy9DVztNRGdEWCxvQkFBbUI7TUFDbkIscUJBQW9CLEVBTXJCO01BYkg7UUFTTSxhQUFZO1FBQ1osZ0JBQWU7UUFDZixpQkFBZ0IsRUFDakIsRUFBQTtFQUtQO0VBQ0UsMEJDOURrQixFRGlHbkI7RUFwQ0Q7SUFJSSxlQzdEVyxFRDhEWjtFQUxIO0lBUUksZ0JBQWUsRUFDaEI7RUFUSDtJQVlJLG1CQUFrQixFQWNuQjtFQTFCSDtNQWNNLDBCQ3ZFUztNRHdFVCxVQUFTO01BQ1QsZUM3RWM7TUQ4RWQsUUFBTztNQUNQLHNCQUFxQjtNQUNyQixtQkFBa0I7TUFDbEIsV0FBVSxFQUNYO0VBckJMO01BdUJNLGlCQUFnQjtNQUNoQixtQkFBa0IsRUFDbkI7RUF6Qkw7SUE2QkksZUFBYztJQUNkLGNBQWE7SUFDYiwyQ0FBa0M7SUFBbEMsbUNBQWtDO0lBQWxDLG1FQUFrQyxFQUluQztFQW5DSDtNQWlDTSw4QkFBcUI7Y0FBckIsc0JBQXFCLEVBQ3RCO0VBSUw7RUFDRSwwQkNyR2UsRURtSWhCO0VBL0JEO0lBSUksZUFBYyxFQUNmO0VBTEg7SUFRSSwwQkN2R1c7SUR3R1gsNkNBQTJDO0lBQzNDLGVDN0dnQjtJRDhHaEIsbUJBQWtCO0lBQ2xCLGlCQUFnQjtJQUNoQixjQUFhO0lBQ2IsbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQiwyQ0FBa0M7SUFBbEMsbUNBQWtDO0lBQWxDLG1FQUFrQztJQUNsQyxvQkFBbUI7SUFDbkIsb0JBQW1CLEVBS3BCO0VBdkJIO01BcUJNLDhCQUFxQjtjQUFyQixzQkFBcUIsRUFDdEI7RUF0Qkw7SUEwQkksZUFBYztJQUNkLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2IsV0FBVSxFQUNYO0VBR0g7RUFDRSwwQkNySWtCLEVEb0puQjtFQWhCRDtJQUlJLGVDcElXLEVEcUlaO0VBTEg7SUFRSSxlQUFjLEVBQ2Y7RUFUSDtJQVlJLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osZ0JBQWUsRUFDaEI7RUFHSDtFQUNFLDBCQ3BKaUI7RURxSmpCLGVDcEphLEVEMEpkO0VBUkQ7SUFJSSxlQ3RKVztJRHVKWCxnQkFBZTtJQUNmLHNCQUFxQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2NvbG9ycyc7XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAkYmx1ZS1iYXlvdXg7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgJGJsdWUtYmF5b3V4IDAlLCAkbXVsbGVkLXdpbmUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgJGJsdWUtYmF5b3V4IDAlLCRtdWxsZWQtd2luZSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJGJsdWUtYmF5b3V4IDAlLCRtdWxsZWQtd2luZSAxMDAlKTtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nJGJsdWUtYmF5b3V4JywgZW5kQ29sb3JzdHI9JyRtdWxsZWQtd2luZScsIEdyYWRpZW50VHlwZT0xKTtcblxuICAubG9nbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHBhdmxvdmE7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMCAwIDEuNWVtIDA7XG4gICAgcGFkZGluZzogLjJyZW0gLjRyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuXG4uc2VydmljZXMge1xuXG4gIC5zZXJ2aWNlLWxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cblxuICAuc2VydmljZSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAuMTVyZW0gc29saWQgJHBhdmxvdmE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAuOHJlbTtcblxuICAgIGltZyB7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luOiAwIDEuNXJlbSAuNXJlbSAwO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMCAwIC41cmVtIDA7XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjRyZW0pIHtcbiAgLnNlcnZpY2UtbGlzdCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuc2VydmljZSB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAuMTVyZW0gc29saWQgJHBhdmxvdmE7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnByb2plY3RzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1pbmUtc2hhZnQ7XG5cbiAgaDMge1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gIH1cblxuICAuY2Fyb3VzZWwge1xuICAgIGhlaWdodDogMTIuNXJlbTtcbiAgfVxuXG4gIC5wcm9qZWN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBjb2xvcjogJG1pbmUtc2hhZnQ7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcGFkZGluZzogLjVyZW0gLjc1cmVtO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgLnByb2plY3QtbmFtZSB7XG4gICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMHJlbTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGVhc2Utb3V0O1xuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cbiAgfVxufVxuXG4uYXJ0aWNsZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ2FsbGVyeTtcblxuICAuY2Fyb3VzZWwge1xuICAgIGhlaWdodDogNy41cmVtO1xuICB9XG5cbiAgLmFydGljbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAuMTUpO1xuICAgIGNvbG9yOiAkbWluZS1zaGFmdDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBlYXNlLW91dDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuICB9XG5cbiAgLmxpbmsge1xuICAgIGJvdHRvbTogLjc1cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLjc1cmVtO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbn1cblxuLmJyYW5kcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtaW5lLXNoYWZ0O1xuXG4gIGgzIHtcbiAgICBjb2xvcjogJHdoaXRlO1xuICB9XG5cbiAgLmNhcm91c2VsIHtcbiAgICBoZWlnaHQ6IDYuNXJlbTtcbiAgfVxuXG4gIC5icmFuZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBtYXgtd2lkdGg6IDZyZW07XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRyaXZlci1iZWQ7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGEge1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuIiwiJGJsYWNrOiAjMDAwMDAwO1xuJGJsdWUtYmF5b3V4OiAjNGU2Mzc0O1xuJGdhbGxlcnk6ICNlZmVmZWY7XG4kbWluZS1zaGFmdDogIzMzMzMzMztcbiRtdWxsZWQtd2luZTogIzQ2M2I1YztcbiRwYXZsb3ZhOiAjZDRiYjk4O1xuJHJpdmVyLWJlZDogIzQxNGU1ODtcbiR3aGl0ZTogI2ZmZmZmZjtcbiJdfQ== */"

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
/* harmony import */ var _common_sheet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/sheet.service */ "./src/app/common/sheet.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(sheetService) {
        var _this = this;
        this.sheetService = sheetService;
        this.sheetService.getSheet('articles').subscribe(function (items) {
            _this.articles = items;
            console.log('articles', _this.articles);
        });
        this.sheetService.getSheet('brands').subscribe(function (items) {
            _this.brands = items;
            console.log('brands', _this.brands);
        });
        this.sheetService.getSheet('projects').subscribe(function (items) {
            _this.projects = items;
            console.log('projects', _this.projects);
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_sheet_service__WEBPACK_IMPORTED_MODULE_2__["SheetService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/lib/index.js");
/* harmony import */ var _common_sheet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/sheet.service */ "./src/app/common/sheet.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_4__["DragScrollModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [_common_sheet_service__WEBPACK_IMPORTED_MODULE_5__["SheetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/sheet.service.ts":
/*!*****************************************!*\
  !*** ./src/app/common/sheet.service.ts ***!
  \*****************************************/
/*! exports provided: SheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetService", function() { return SheetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var SheetService = /** @class */ (function () {
    function SheetService(http) {
        this.http = http;
        this.sheetUrl = "https://sheets.googleapis.com/v4/spreadsheets/" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].sheetId + "/values/";
    }
    SheetService.prototype.getSheet = function (sheetName) {
        return this.http.get("" + this.sheetUrl + sheetName + "?key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiKey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var rowLabels = data['values'][0];
            return data['values'].slice(1).map(function (itemValue) {
                var newItem = {};
                itemValue.forEach(function (fieldValue, fieldIndex) {
                    newItem[rowLabels[fieldIndex]] = fieldValue;
                });
                return newItem;
            });
        }));
    };
    SheetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SheetService);
    return SheetService;
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
    apiKey: 'AIzaSyC5j7eJYni3Vt3cWEEoBV51E6ifWCa55mQ',
    production: false,
    sheetId: '1KhjaYHc01RKvq5UrJlTdi9mz5O9IcTF5Uh-7bYdlsks'
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