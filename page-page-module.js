(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-page-module"],{

/***/ "./src/app/page/page.component.html":
/*!******************************************!*\
  !*** ./src/app/page/page.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n  <div class=\"section\">\n    <h1>{{ page.name }}</h1>\n  </div>\n</div>\n<div class=\"page-details\">\n  <div class=\"section\">\n    <div class=\"grid-2\">\n      <div class=\"col page-panels\">\n        <div class=\"page-panel\">\n          <h3>Goals</h3>\n          <p>{{ page.goals }}</p>\n        </div>\n        <div class=\"page-panel\">\n          <h3>Approach</h3>\n          <p>{{ page.approach }}</p>\n        </div>\n        <div class=\"page-panel\">\n          <h3>Results</h3>\n          <p>{{ page.results }}</p>\n        </div>\n      </div>\n      <div class=\"col page-images\">\n        <img *ngFor=\"let image of page.images\" [src]=\"image\" alt=\"Image\" />\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"page-tags\">\n  <div class=\"section\">\n    <div class=\"grid-3\">\n      <div class=\"col\">\n        <h3>Industries</h3>\n        <ul>\n          <li *ngFor=\"let industry of page.industries\">{{ industry }}</li>\n        </ul>\n      </div>\n      <div class=\"col\">\n        <h3>Activities</h3>\n        <ul>\n          <li *ngFor=\"let activity of page.activities\">{{ activity }}</li>\n        </ul>\n      </div>\n      <div class=\"col\">\n        <h3>Technologies</h3>\n        <ul>\n          <li *ngFor=\"let technology of page.technologies\">{{ technology }}</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"grid-3\">\n      <div class=\"col\">\n        <h3>Locations</h3>\n        <ul>\n          <li *ngFor=\"let location of page.locations\">{{ location }}</li>\n        </ul>\n      </div>\n      <div class=\"col\">\n        <h3>Contacts</h3>\n        <ul>\n          <li *ngFor=\"let contact of page.contacts\">{{ contact }}</li>\n        </ul>\n      </div>\n      <div class=\"col\">\n        <h3>Years</h3>\n        <ul>\n          <li *ngFor=\"let year of page.years\">{{ year }}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page/page.component.scss":
/*!******************************************!*\
  !*** ./src/app/page/page.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\n  background-color: #fff; }\n  .page-header h1 {\n    margin: 0; }\n  .page-details {\n  background-color: #eee; }\n  .page-details .page-panel {\n    margin-bottom: 1.5rem; }\n  .page-details .page-panel:last-child {\n      margin: 0; }\n  .page-details .page-images img {\n    display: inline-block;\n    max-width: 100%; }\n  .page-details p:last-child {\n    margin: 0; }\n  .page-tags {\n  background-color: #fff; }\n  .page-tags .col {\n    margin: 0 0 2rem 0; }\n  .page-tags li:last-child {\n    margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raW0vU2l0ZXMva210dXJsZXkuZ2l0aHViLmlvL3NyYy9hcHAvcGFnZS9wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXNCLEVBS3ZCO0VBTkQ7SUFJSSxVQUFTLEVBQ1Y7RUFHSDtFQUNFLHVCQUFzQixFQW9CdkI7RUFyQkQ7SUFJSSxzQkFBcUIsRUFLdEI7RUFUSDtNQU9NLFVBQVMsRUFDVjtFQVJMO0lBYU0sc0JBQXFCO0lBQ3JCLGdCQUFlLEVBQ2hCO0VBZkw7SUFtQkksVUFBUyxFQUNWO0VBR0g7RUFDRSx1QkFBc0IsRUFTdkI7RUFWRDtJQUlJLG1CQUFrQixFQUNuQjtFQUxIO0lBUUksVUFBUyxFQUNWIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5wYWdlLWRldGFpbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuXG4gIC5wYWdlLXBhbmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5wYWdlLWltYWdlcyB7XG4gICAgaW1nIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICBwOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4ucGFnZS10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAuY29sIHtcbiAgICBtYXJnaW46IDAgMCAycmVtIDA7XG4gIH1cblxuICBsaTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: Page, PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Page = /** @class */ (function () {
    function Page(data) {
        if (data.name) {
            this.name = data.name;
        }
        if (data.goals) {
            this.goals = data.goals;
        }
        if (data.approach) {
            this.approach = data.approach;
        }
        if (data.results) {
            this.results = data.results;
        }
        if (data.images) {
            this.images = data.images;
        }
        if (data.locations) {
            this.locations = data.locations;
        }
        if (data.industries) {
            this.industries = data.industries;
        }
        if (data.activities) {
            this.activities = data.activities;
        }
        if (data.technologies) {
            this.technologies = data.technologies;
        }
        if (data.contacts) {
            this.contacts = data.contacts;
        }
        if (data.years) {
            this.years = data.years;
        }
    }
    return Page;
}());

var PageComponent = /** @class */ (function () {
    function PageComponent(api, route, title, meta) {
        this.api = api;
        this.route = route;
        this.title = title;
        this.meta = meta;
    }
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.api.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SHEET_ID + "?includeGridData=true", 'routes').subscribe(function (pages) {
                _this.page = pages.filter(function (page) {
                    return page.name === data.name;
                })[0];
                console.log('PageComponent', data.name, _this.page);
                _this.title.setTitle(_this.page['name']);
                _this.meta.updateTag({ name: 'description', content: _this.page['name'] });
            });
        });
    };
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.scss */ "./src/app/page/page.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/page/page.module.ts":
/*!*************************************!*\
  !*** ./src/app/page/page.module.ts ***!
  \*************************************/
/*! exports provided: PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: '', component: _page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"], pathMatch: 'full' }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"]]
        })
    ], PageModule);
    return PageModule;
}());



/***/ })

}]);
//# sourceMappingURL=page-page-module.js.map