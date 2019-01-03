(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section header\">\n  <div class=\"section-inner\">\n    <div class=\"logo\">Kim Turley</div>\n    <h1>Digital Strategist, Creative Thinker &amp; Technologist</h1>\n    <p>Delivering cutting-edge digital experiences in partnership with top brands since 2006.</p>\n  </div>\n</div>\n<div class=\"section services\">\n  <div class=\"section-inner\">\n    <h3 class=\"underline\">Services</h3>\n    <div class=\"service-list\">\n      <div class=\"service\">\n        <img src=\"../assets/lightbulb.svg\" alt=\"Lightbulb\" />\n        <p>Uncovering unmet market needs and inventing products &amp; services with impact.</p>\n      </div>\n      <div class=\"service\">\n        <img src=\"../assets/route.svg\" alt=\"Route\" />\n        <p>Transforming teams &amp; processes to cope with our ever-changing world.</p>\n      </div>\n      <div class=\"service\">\n        <img src=\"../assets/products.svg\" alt=\"products\" />\n        <p>Designing and building secure, scalable digital products &amp; services quickly.</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"section projects\">\n  <div class=\"section-inner\">\n    <h3 class=\"underline\">Projects</h3>\n  </div>\n  <drag-scroll class=\"carousel\" drag-scroll-y-disabled=\"true\" scrollbar-hidden=\"true\">\n    <a href=\"#\" drag-scroll-item *ngFor=\"let project of projects\" class=\"project\">\n      <span><strong class=\"project-name\">{{ project.name }}</strong><br/>{{ project.client }}</span>\n      <img [src]=\"project.image\" alt=\"{{ project.name }}\" />\n    </a>\n  </drag-scroll>\n</div>\n<div class=\"section articles\">\n  <div class=\"section-inner\">\n    <h3 class=\"underline\">Articles</h3>\n  </div>\n  <drag-scroll class=\"carousel\" drag-scroll-y-disabled=\"true\" scrollbar-hidden=\"true\">\n    <a *ngFor=\"let article of articles\" drag-scroll-item [href]=\"article.url\" class=\"article\" target=\"_blank\">\n      {{ article.name }}\n      <img src=\"../assets/link.svg\" alt=\"open\" class=\"link\" />\n    </a>\n  </drag-scroll>\n</div>\n<div class=\"section brands\">\n  <div class=\"section-inner\">\n    <h3 class=\"underline\">Brands</h3>\n  </div>\n  <drag-scroll class=\"carousel\" drag-scroll-y-disabled=\"true\" scrollbar-hidden=\"true\">\n    <a href=\"#\" drag-scroll-item *ngFor=\"let brand of brands\">\n      <img class=\"brand\" [src]=\"brand.image\" alt=\"{{ brand.name }}\" />\n    </a>\n  </drag-scroll>\n</div>\n<div class=\"section footer\">\n  <div class=\"section-inner\">\n    <p>Get in touch <br/><a href=\"mailto:hello@kimturley.co.uk\">hello@kimturley.co.uk</a></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: #4e6374;\n  background: linear-gradient(135deg, #4e6374 0%, #463b5c 100%);\n  color: #ffffff;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$blue-bayoux', endColorstr='$mulled-wine', GradientType=1); }\n  .header .logo {\n    background-color: #d4bb98;\n    display: inline-block;\n    font-size: 14px;\n    font-weight: 700;\n    margin: 0 0 1.5em 0;\n    padding: .2rem .4rem;\n    text-transform: uppercase; }\n  .services .service-list {\n  margin-top: 2rem; }\n  .services .service {\n  align-items: center;\n  border-bottom: 0.15rem solid #d4bb98;\n  display: flex;\n  margin-top: .8rem; }\n  .services .service img {\n    align-self: flex-start;\n    margin: 0 1.5rem .5rem 0; }\n  .services .service p {\n    margin: 0 0 .5rem 0; }\n  .services .service:last-child {\n    border-bottom: none; }\n  @media (min-width: 64rem) {\n  .service-list {\n    align-items: flex-start;\n    display: flex; }\n    .service-list .service {\n      border-bottom: none;\n      border-right: 0.15rem solid #d4bb98;\n      padding-right: 1rem;\n      margin-right: 1.5rem; }\n      .service-list .service:last-child {\n        border: none;\n        margin-right: 0;\n        padding-right: 0; } }\n  .projects {\n  background-color: #333333; }\n  .projects .section-inner {\n    padding-bottom: 0; }\n  .projects h3 {\n    color: #ffffff; }\n  .projects .carousel {\n    height: 14rem; }\n  .projects .project {\n    position: relative;\n    transition: -webkit-transform .1s ease-out;\n    transition: transform .1s ease-out;\n    transition: transform .1s ease-out, -webkit-transform .1s ease-out;\n    z-index: 1; }\n  .projects .project span {\n      background-color: #ffffff;\n      bottom: 0;\n      color: #333333;\n      left: 0;\n      padding: .5rem .75rem;\n      position: absolute;\n      z-index: 1; }\n  .projects .project .project-name {\n      font-size: 1.1em;\n      line-height: 1.5em; }\n  .projects .project:hover {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1);\n      z-index: 2; }\n  .projects img {\n    display: block;\n    height: 10rem; }\n  .articles {\n  background-color: #efefef; }\n  .articles .section-inner {\n    padding-bottom: 0; }\n  .articles .carousel {\n    height: 9rem; }\n  .articles .article {\n    background-color: #ffffff;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);\n    color: #333333;\n    line-height: 1.5em;\n    max-width: 15rem;\n    padding: 1rem;\n    position: relative;\n    text-decoration: none;\n    transition: -webkit-transform .1s ease-out;\n    transition: transform .1s ease-out;\n    transition: transform .1s ease-out, -webkit-transform .1s ease-out;\n    vertical-align: top;\n    white-space: normal;\n    z-index: 1; }\n  .articles .article:hover {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1);\n      z-index: 2; }\n  .articles .link {\n    bottom: .75rem;\n    position: absolute;\n    right: .75rem;\n    z-index: 1; }\n  .brands {\n  background-color: #333333; }\n  .brands .section-inner {\n    padding-bottom: 0; }\n  .brands h3 {\n    color: #ffffff; }\n  .brands .carousel {\n    height: 9rem; }\n  .brands .brand {\n    margin-right: 3rem;\n    height: 4rem;\n    max-width: 6rem; }\n  .footer {\n  background-color: #414e58;\n  color: #ffffff; }\n  .footer a {\n    color: #ffffff;\n    font-size: 20px;\n    text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raW0vU2l0ZXMva210dXJsZXkuZ2l0aHViLmlvL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2tpbS9TaXRlcy9rbXR1cmxleS5naXRodWIuaW8vc3JjL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JDRm1CO0VES25CLDhEQUFzRTtFQUN0RSxlQ0FhO0VEQ2IsNkhBQTRILEVBVzdIO0VBakJEO0lBU0ksMEJDTmE7SURPYixzQkFBcUI7SUFDckIsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsb0JBQW1CO0lBQ25CLHFCQUFvQjtJQUNwQiwwQkFBeUIsRUFDMUI7RUFHSDtFQUdJLGlCQUFnQixFQUNqQjtFQUpIO0VBT0ksb0JBQW1CO0VBQ25CLHFDQ3hCYTtFRHlCYixjQUFhO0VBQ2Isa0JBQWlCLEVBWWxCO0VBdEJIO0lBYU0sdUJBQXNCO0lBQ3RCLHlCQUF3QixFQUN6QjtFQWZMO0lBaUJNLG9CQUFtQixFQUNwQjtFQWxCTDtJQW9CTSxvQkFBbUIsRUFDcEI7RUFJTDtFQUNFO0lBQ0Usd0JBQXVCO0lBQ3ZCLGNBQWEsRUFZZDtJQWREO01BSUksb0JBQW1CO01BQ25CLG9DQy9DVztNRGdEWCxvQkFBbUI7TUFDbkIscUJBQW9CLEVBTXJCO01BYkg7UUFTTSxhQUFZO1FBQ1osZ0JBQWU7UUFDZixpQkFBZ0IsRUFDakIsRUFBQTtFQUtQO0VBQ0UsMEJDOURrQixFRHVHbkI7RUExQ0Q7SUFJSSxrQkFBaUIsRUFDbEI7RUFMSDtJQVFJLGVDakVXLEVEa0VaO0VBVEg7SUFZSSxjQUFhLEVBQ2Q7RUFiSDtJQWdCSSxtQkFBa0I7SUFDbEIsMkNBQWtDO0lBQWxDLG1DQUFrQztJQUFsQyxtRUFBa0M7SUFDbEMsV0FBVSxFQWtCWDtFQXBDSDtNQW9CTSwwQkM3RVM7TUQ4RVQsVUFBUztNQUNULGVDbkZjO01Eb0ZkLFFBQU87TUFDUCxzQkFBcUI7TUFDckIsbUJBQWtCO01BQ2xCLFdBQVUsRUFDWDtFQTNCTDtNQTZCTSxpQkFBZ0I7TUFDaEIsbUJBQWtCLEVBQ25CO0VBL0JMO01BaUNNLDhCQUFxQjtjQUFyQixzQkFBcUI7TUFDckIsV0FBVSxFQUNYO0VBbkNMO0lBdUNJLGVBQWM7SUFDZCxjQUFhLEVBQ2Q7RUFHSDtFQUNFLDBCQzNHZSxFRCtJaEI7RUFyQ0Q7SUFJSSxrQkFBaUIsRUFDbEI7RUFMSDtJQVFJLGFBQVksRUFDYjtFQVRIO0lBWUksMEJDakhXO0lEa0hYLDZDQUEyQztJQUMzQyxlQ3ZIZ0I7SUR3SGhCLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsY0FBYTtJQUNiLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsMkNBQWtDO0lBQWxDLG1DQUFrQztJQUFsQyxtRUFBa0M7SUFDbEMsb0JBQW1CO0lBQ25CLG9CQUFtQjtJQUNuQixXQUFVLEVBTVg7RUE3Qkg7TUEwQk0sOEJBQXFCO2NBQXJCLHNCQUFxQjtNQUNyQixXQUFVLEVBQ1g7RUE1Qkw7SUFnQ0ksZUFBYztJQUNkLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2IsV0FBVSxFQUNYO0VBR0g7RUFDRSwwQkNqSmtCLEVEb0tuQjtFQXBCRDtJQUlJLGtCQUFpQixFQUNsQjtFQUxIO0lBUUksZUNwSlcsRURxSlo7RUFUSDtJQVlJLGFBQVksRUFDYjtFQWJIO0lBZ0JJLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osZ0JBQWUsRUFDaEI7RUFHSDtFQUNFLDBCQ3BLaUI7RURxS2pCLGVDcEthLEVEMEtkO0VBUkQ7SUFJSSxlQ3RLVztJRHVLWCxnQkFBZTtJQUNmLHNCQUFxQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2NvbG9ycyc7XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAkYmx1ZS1iYXlvdXg7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgJGJsdWUtYmF5b3V4IDAlLCAkbXVsbGVkLXdpbmUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgJGJsdWUtYmF5b3V4IDAlLCRtdWxsZWQtd2luZSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJGJsdWUtYmF5b3V4IDAlLCRtdWxsZWQtd2luZSAxMDAlKTtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nJGJsdWUtYmF5b3V4JywgZW5kQ29sb3JzdHI9JyRtdWxsZWQtd2luZScsIEdyYWRpZW50VHlwZT0xKTtcblxuICAubG9nbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHBhdmxvdmE7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMCAwIDEuNWVtIDA7XG4gICAgcGFkZGluZzogLjJyZW0gLjRyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuXG4uc2VydmljZXMge1xuXG4gIC5zZXJ2aWNlLWxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cblxuICAuc2VydmljZSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAuMTVyZW0gc29saWQgJHBhdmxvdmE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAuOHJlbTtcblxuICAgIGltZyB7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luOiAwIDEuNXJlbSAuNXJlbSAwO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMCAwIC41cmVtIDA7XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjRyZW0pIHtcbiAgLnNlcnZpY2UtbGlzdCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuc2VydmljZSB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAuMTVyZW0gc29saWQgJHBhdmxvdmE7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnByb2plY3RzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1pbmUtc2hhZnQ7XG5cbiAgLnNlY3Rpb24taW5uZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG5cbiAgaDMge1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gIH1cblxuICAuY2Fyb3VzZWwge1xuICAgIGhlaWdodDogMTRyZW07XG4gIH1cblxuICAucHJvamVjdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZS1vdXQ7XG4gICAgei1pbmRleDogMTtcbiAgICBzcGFuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGNvbG9yOiAkbWluZS1zaGFmdDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwYWRkaW5nOiAuNXJlbSAuNzVyZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICAucHJvamVjdC1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gIH1cblxuICBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTByZW07XG4gIH1cbn1cblxuLmFydGljbGVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdhbGxlcnk7XG5cbiAgLnNlY3Rpb24taW5uZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG5cbiAgLmNhcm91c2VsIHtcbiAgICBoZWlnaHQ6IDlyZW07XG4gIH1cblxuICAuYXJ0aWNsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gICAgY29sb3I6ICRtaW5lLXNoYWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGVhc2Utb3V0O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB6LWluZGV4OiAxO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gIH1cblxuICAubGluayB7XG4gICAgYm90dG9tOiAuNzVyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAuNzVyZW07XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuXG4uYnJhbmRzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1pbmUtc2hhZnQ7XG5cbiAgLnNlY3Rpb24taW5uZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG5cbiAgaDMge1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gIH1cblxuICAuY2Fyb3VzZWwge1xuICAgIGhlaWdodDogOXJlbTtcbiAgfVxuXG4gIC5icmFuZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBtYXgtd2lkdGg6IDZyZW07XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRyaXZlci1iZWQ7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGEge1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuIiwiJGJsYWNrOiAjMDAwMDAwO1xuJGJsdWUtYmF5b3V4OiAjNGU2Mzc0O1xuJGdhbGxlcnk6ICNlZmVmZWY7XG4kbWluZS1zaGFmdDogIzMzMzMzMztcbiRtdWxsZWQtd2luZTogIzQ2M2I1YztcbiRwYXZsb3ZhOiAjZDRiYjk4O1xuJHJpdmVyLWJlZDogIzQxNGU1ODtcbiR3aGl0ZTogI2ZmZmZmZjtcbiJdfQ== */"

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
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
    function HomeComponent(api) {
        this.api = api;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SHEET_ID + "?includeGridData=true", 'articles').subscribe(function (items) {
            _this.articles = items;
            console.log('articles', _this.articles);
        });
        this.api.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SHEET_ID + "?includeGridData=true", 'brands').subscribe(function (items) {
            _this.brands = items;
            console.log('brands', _this.brands);
        });
        this.api.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SHEET_ID + "?includeGridData=true", 'projects').subscribe(function (items) {
            _this.projects = items;
            console.log('projects', _this.projects);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/lib/index.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_4__["DragScrollModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], pathMatch: 'full' }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map