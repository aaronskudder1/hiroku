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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h2>About Aaron Skudder</h2>\r\n\r\n<h3>Short Introduction</h3>\r\n<p>After 13 years of running a small I.T. engineering company (LlamaTech Ltd) I am taking the opportunity step back into full time employment or contracting. During the 13 years of running LlamaTech I have built up skills in customer relations and small business management.</p>\r\n\r\n<h3>Hobbies / Interests outside of work</h3>\r\n<ul><li>Piano and Bass guitar</li><li>Christianity</li></ul>\r\n\r\n<h3>Testimonials</h3>\r\n<ul>\r\n    <li>Aaron has always been helpful and went out of his way to assist when our server went down Very good service</li>\r\n\r\n    <li><b>David Holden</b> - <i>Holden Health</i>\r\n    <p>Aaron’s service is always prompt - which in our industry (as with most I imagine) is a big asset.</p>\r\n    </li>\r\n    <li>\r\n        <b>Jill</b> - <i>MWC Media</i>\r\n        <p>Very good explanation of what was going on with computer, and what was needed</p>\r\n    </li>\r\n    <li><b>Anonymous</b>\r\n    <p>Always helpful and friendly. Just keep doing what you do and I will be happy.</p></li>\r\n\r\n    <li><b>Anonymous</b>\r\n    <p>Professional service, good rates Thanks for the prompt and no fuss service.</p>\r\n</li>\r\n    <li>\r\n        <b>Alex Dawber</b> <i>Harmony Trust</i>\r\n        <p>\"Aaron you rock\" hardly ever do you find a great bargain with great product (Apple). Fantastic Computer Technician, super trade with brilliant Service support, brilliant product's what more could you ask for. Would definitely trade again. Recommend to all AAAA+++++</p>\r\n    </li>\r\n    </ul>\r\n<h3>Referees</h3>\r\n<p>Abdulfarooq_ar@yahoo.co.in Mohammed Abdul Rahman 021786884</p><p></p>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
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

var About = /** @class */ (function () {
    function About() {
        this.title = 'Career';
    }
    About.prototype.ngOnInit = function () {
        //this.careers = this.careerData.loadCareer();
    };
    About = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], About);
    return About;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\" style=\"text-align: center;\">\n    <div class=\"site-title\" id=\"title\">\n      <a routerlink=\"about\" title=\"\">\n        <h3>Aaron<span>Skudder</span></h3>\n        <h4><strong>Computer Technician and Developer</strong></h4>\n        <img class=\"lazyOwl\" style=\"width: 110px; padding-top: 10px; padding-bottom: 10px;\" src=\"images/aaron.jpg\" alt=\"\">\n      </a>\n    </div>\n</div>\n  <!-- title area -->\n  <div class=\"col-lg-9 col-md-12 col-sm-12\">\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container clearfix\">\n        <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a routerLink=\"overview\">Overview</a></li>\n                <li><a routerLink=\"about\">About</a></li>\n                <li><a routerLink=\"career\">Career</a></li>\n                <li><a routerLink=\"recentprojects\">Recent Projects</a></li>\n                <li><a routerLink=\"education\">Education</a></li>\n                <li><a routerLink=\"experience\">Experience</a></li>\n                <li><a routerLink=\"contact\">Contact</a></li>\n                <li><a href=\"~/images/Aaron Skudder CV.pdf\" i class=\"fa fa-address-card pull-right\"> CV</a></li>\n        </ul>\n      </div>\n    </nav>\n    <!-- nav -->\n  </div>\n  <!-- title area -->\n\n<div class=\"well\">\n  <router-outlet></router-outlet>\n</div>\n"

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

// import { Career } from './shared/career';
// import { CareerDataService } from './shared/careerDataService';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // public careers: Career[] = [];
        this.title = 'Aaron Skudder';
    }
    // constructor(private data: CareerDataService) {
    //   this.careers = data.career;
    // }
    AppComponent.prototype.ngOnInit = function () {
        // this.careers = this.data.loadCareer()
    };
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _shared_careerDataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/careerDataService */ "./src/app/shared/careerDataService.ts");
/* harmony import */ var _career_careerList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./career/careerList.component */ "./src/app/career/careerList.component.ts");
/* harmony import */ var _shared_recentProjectsDataService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/recentProjectsDataService */ "./src/app/shared/recentProjectsDataService.ts");
/* harmony import */ var _recentProjects_recentProjectsList_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recentProjects/recentProjectsList.component */ "./src/app/recentProjects/recentProjectsList.component.ts");
/* harmony import */ var _shared_educationDataService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/educationDataService */ "./src/app/shared/educationDataService.ts");
/* harmony import */ var _education_educationList_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./education/educationList.component */ "./src/app/education/educationList.component.ts");
/* harmony import */ var _experience_experienceList_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./experience/experienceList.component */ "./src/app/experience/experienceList.component.ts");
/* harmony import */ var _shared_experienceDataService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/experienceDataService */ "./src/app/shared/experienceDataService.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _shared_contactDataService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/contactDataService */ "./src/app/shared/contactDataService.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { HttpCientModule } from '@angular/common/http';















//import { Router} from '@angular/router';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_15__["Main"],
                _career_careerList_component__WEBPACK_IMPORTED_MODULE_6__["CareerList"],
                _recentProjects_recentProjectsList_component__WEBPACK_IMPORTED_MODULE_8__["RecentProjectsList"],
                _experience_experienceList_component__WEBPACK_IMPORTED_MODULE_11__["ExperienceList"],
                _education_educationList_component__WEBPACK_IMPORTED_MODULE_10__["EducationList"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["Contact"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_16__["About"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_4__["AppRoutes"], { useHash: true }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                //HttpClientModule,
            ],
            providers: [
                _shared_careerDataService__WEBPACK_IMPORTED_MODULE_5__["CareerDataService"],
                _shared_educationDataService__WEBPACK_IMPORTED_MODULE_9__["EducationDataService"],
                _shared_recentProjectsDataService__WEBPACK_IMPORTED_MODULE_7__["ProjectsDataService"],
                _shared_experienceDataService__WEBPACK_IMPORTED_MODULE_12__["ExperienceDataService"],
                _shared_contactDataService__WEBPACK_IMPORTED_MODULE_14__["ContactDataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/career/careerList.component.html":
/*!**************************************************!*\
  !*** ./src/app/career/careerList.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <div class=\"well well-sm\">\r\n            <i class=\"fa fa-address-book fa-2x\"><h2>{{title}}</h2></i>\r\n    </div>\r\n</div>\r\n<table class=\"table table-striped\"  style=\"text-align:left\">\r\n    <thead>\r\n        <tr>\r\n            <th>Company</th>\r\n            <th>Date</th>\r\n            <th>title</th>\r\n            <th>role</th>\r\n            <th>Responsibilities</th>\r\n            <th>Achievements</th>\r\n            <th>toolSets</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let c of careers\">\r\n            <td>{{c.company}} </td>\r\n            <td>{{c.dateFromTill}}</td>\r\n            <td>{{c.title}}</td>\r\n            <td>{{c.role}}</td>\r\n            <td>{{c.responsibilities}}</td>\r\n            <td>{{c.achievements}}</td>\r\n            <td>{{c.toolSets}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/career/careerList.component.ts":
/*!************************************************!*\
  !*** ./src/app/career/careerList.component.ts ***!
  \************************************************/
/*! exports provided: CareerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerList", function() { return CareerList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_careerDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/careerDataService */ "./src/app/shared/careerDataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CareerList = /** @class */ (function () {
    function CareerList(careerData) {
        this.careerData = careerData;
        this.careers = [];
        this.title = 'Career';
        this.careers = careerData.career;
    }
    CareerList.prototype.ngOnInit = function () {
        this.careers = this.careerData.loadCareer();
    };
    CareerList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'career',
            template: __webpack_require__(/*! ./careerList.component.html */ "./src/app/career/careerList.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_shared_careerDataService__WEBPACK_IMPORTED_MODULE_1__["CareerDataService"]])
    ], CareerList);
    return CareerList;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\r\n    <div>\r\n        <i class=\"fa fa-address-card\"><span class=\"strong\"> Contact Aaron Skudder</span></i>\r\n    </div>\r\n</div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"well\">\r\n            <!-- <form method=\"post\" name=\"contactForm\"> -->\r\n            <form #contactForm=\"ngForm\" (ngSubmit)=\"submit(contact)\" >\r\n                <!-- <div validation-summary=\"ModelOnly\"></div> -->\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">Your Name:</label>\r\n                    <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Enter your Name\" [(ngModel)]=\"contact.name\" />\r\n                    <span *ngIf=\"name.touched\" class=\"text-danger\">ooh that tickles</span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"email\">Email:</label>\r\n                    <input type=\"email\" name=\"Email\" class=\"form-control\" [(ngModel)]=\"contact.email\" />\r\n                    <span *ngIf=\"email.touched\" class=\"text-danger\"></span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"subject\">Subject:</label>\r\n                    <input type=\"text\" name=\"Subject\" class=\"form-control\" [(ngModel)]=\"contact.subject\"/>\r\n                    <span *ngIf=\"subject.touched\" class=\"text-danger\"></span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"message\">Message:</label>\r\n                    <textarea rows=\"4\" name=\"Message\" class=\"form-control\" [(ngModel)]=\"contact.message\"></textarea>\r\n                    <span *ngIf=\"message.touched\" class=\"text-danger\"></span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"submit\" class=\"btn btn-success\" value=\"submit\" />\r\n                    <a routerLink=\"/\" class=\"btn btn-success\" value=\"submit\">Cancel</a>\r\n                    <!-- <button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-click=\"submit(contact)\"><i class=\"fa fa-envelope\"></i> Send Message</button> -->\r\n                    <!-- <div class=\"text-success\">Message Sent</div> -->\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"well\">\r\n            <div class=\"Address\">\r\n                <h4>Home Address</h4>\r\n                <address>\r\n                    1f 21 St Jude St<br />\r\n                    Avondale<br />\r\n                    <i class=\"fa fa-phone\"> 09 8203293</i><br />\r\n                    <i class=\"fa fa-mobile\"> 027 274 8743</i><br/>\r\n                    <i class=\"fa fa-envelope\"><strong>Email:</strong><a href=\"mailto:aaron@aaronskudder.com\"> aaron@aaronskudder.com</a></i><br />\r\n                    <i class=\"fa fa-facebook\"><a href=\"https://www.facebook.com/LlamaTech-Ltd-215663481830002/\"> Facebook</a></i>\r\n                </address>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_contactDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/contactDataService */ "./src/app/shared/contactDataService.ts");
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



var Contact = /** @class */ (function () {
    function Contact(contactData, router) {
        this.contactData = contactData;
        this.router = router;
        this.title = 'Contact';
        //
    }
    Contact.prototype.ngOnInit = function () {
        this.contact = { name: '', email: '', subject: '', message: '' };
    };
    ;
    Contact.prototype.submit = function (contact) {
        //this.contactData = contactData.contact;
        console.log(contact);
    };
    Contact = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [" "]
        }),
        __metadata("design:paramtypes", [_shared_contactDataService__WEBPACK_IMPORTED_MODULE_1__["ContactDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Contact);
    return Contact;
}());



/***/ }),

/***/ "./src/app/education/educationList.component.html":
/*!********************************************************!*\
  !*** ./src/app/education/educationList.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <div class=\"well well-sm\">\r\n            <i class=\"fa fa-address-book fa-2x\"><h2>{{title}}</h2></i>\r\n    </div>\r\n</div>\r\n<table class=\"table table-striped\" style=\"text-align:left\">\r\n    <thead>\r\n        <tr>\r\n            <th>Certification</th>\r\n            <th>Details</th>\r\n            <th>Year Completed</th>\r\n            <th>Educational Institution</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let e of educations\">\r\n            <td>{{e.certification}} </td>\r\n            <td>{{e.details}}</td>\r\n            <td>{{e.yearCompleted}}</td>\r\n            <td>{{e.educationalInstitution}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/education/educationList.component.ts":
/*!******************************************************!*\
  !*** ./src/app/education/educationList.component.ts ***!
  \******************************************************/
/*! exports provided: EducationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationList", function() { return EducationList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_educationDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/educationDataService */ "./src/app/shared/educationDataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EducationList = /** @class */ (function () {
    function EducationList(educationData) {
        this.educationData = educationData;
        this.educations = [];
        this.title = 'Education';
        this.educations = educationData.educations;
    }
    EducationList.prototype.ngOnInit = function () {
        this.educations = this.educationData.loadEducation();
    };
    EducationList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'education',
            template: __webpack_require__(/*! ./educationList.component.html */ "./src/app/education/educationList.component.html"),
            styles: [" "]
        }),
        __metadata("design:paramtypes", [_shared_educationDataService__WEBPACK_IMPORTED_MODULE_1__["EducationDataService"]])
    ], EducationList);
    return EducationList;
}());



/***/ }),

/***/ "./src/app/experience/experienceList.component.html":
/*!**********************************************************!*\
  !*** ./src/app/experience/experienceList.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <div class=\"well well-sm\">\r\n            <i class=\"fa fa-address-book fa-2x\"><h2>{{title}}</h2></i>\r\n    </div>\r\n</div>\r\n<table class=\"table table-striped\" style=\"text-align:left\">\r\n    <thead>\r\n        <tr>\r\n            <th>Capability</th>\r\n            <th>Details</th>\r\n            <th>Years</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let e of experiences\">\r\n            <td>{{e.capability}} </td>\r\n            <td>{{e.details}}</td>\r\n            <td>{{e.years}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/experience/experienceList.component.ts":
/*!********************************************************!*\
  !*** ./src/app/experience/experienceList.component.ts ***!
  \********************************************************/
/*! exports provided: ExperienceList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceList", function() { return ExperienceList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_experienceDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/experienceDataService */ "./src/app/shared/experienceDataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperienceList = /** @class */ (function () {
    function ExperienceList(experienceData) {
        this.experienceData = experienceData;
        this.experiences = [];
        this.title = 'Experience';
        this.experiences = experienceData.experience;
    }
    ExperienceList.prototype.ngOnInit = function () {
        this.experiences = this.experienceData.loadExperience();
    };
    ExperienceList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'experience',
            template: __webpack_require__(/*! ./experienceList.component.html */ "./src/app/experience/experienceList.component.html"),
            styles: [" "]
        }),
        __metadata("design:paramtypes", [_shared_experienceDataService__WEBPACK_IMPORTED_MODULE_1__["ExperienceDataService"]])
    ], ExperienceList);
    return ExperienceList;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\r\n    <div class=\"title\">Key Skills</div>\r\n        <a class=\"btn btn-default\" style=\"text-align:center\" href=\"~/Experiences/Details/3\">\r\n            Development in Angular2, Typescript, MongoDB, Express, NodeJS\r\n        </a><br/>\r\n        <a class=\"btn btn-default\" href=\"~/Experiences/Details/6\">\r\n            Develop in ASP.NET Core2, MVC, C#, SQL, Angular2-Typescript\r\n        </a><br/>\r\n        <a class=\"btn btn-default\" href=\"Experiences/Details/2\">\r\n            Computer troubleshooting and Repair\r\n        </a><br/>\r\n        <a class=\"btn btn-default\" href=\"~Experices/Details/4\">\r\n            Network Engineering and Gateway Security\r\n        </a><br/>\r\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_careerDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/careerDataService */ "./src/app/shared/careerDataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Main = /** @class */ (function () {
    function Main(data) {
        this.data = data;
        this.careers = [];
        this.title = 'Main';
        this.careers = data.career;
    }
    Main.prototype.ngOnInit = function () {
        this.careers = this.data.loadCareer();
    };
    Main = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_shared_careerDataService__WEBPACK_IMPORTED_MODULE_1__["CareerDataService"]])
    ], Main);
    return Main;
}());



/***/ }),

/***/ "./src/app/recentProjects/recentProjectsList.component.html":
/*!******************************************************************!*\
  !*** ./src/app/recentProjects/recentProjectsList.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <div class=\"well well-sm\">\r\n            <i class=\"fa fa-address-book fa-2x\"><h2>{{title}}</h2></i>\r\n    </div>\r\n</div>\r\n<table class=\"table table-striped\" style=\"text-align:left\">\r\n    <thead>\r\n        <tr>\r\n            <th>Year</th>\r\n            <th>Company</th>\r\n            <th>Project</th>\r\n            <th>Description</th>\r\n            <th>Technologies</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let r of recentProjects\">\r\n            <td>{{r.year}} </td>\r\n            <td>{{r.company}}</td>\r\n            <td>{{r.project}}</td>\r\n            <td>{{r.description}}</td>\r\n            <td>{{r.technologies}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/recentProjects/recentProjectsList.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recentProjects/recentProjectsList.component.ts ***!
  \****************************************************************/
/*! exports provided: RecentProjectsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentProjectsList", function() { return RecentProjectsList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_recentProjectsDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/recentProjectsDataService */ "./src/app/shared/recentProjectsDataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Router } from '@angular/router';

var RecentProjectsList = /** @class */ (function () {
    function RecentProjectsList(data) {
        this.data = data;
        this.recentProjects = [];
        this.title = 'Recent Projects';
        this.recentProjects = data.recentProjects;
    }
    RecentProjectsList.prototype.ngOnInit = function () {
        this.recentProjects = this.data.loadRecentProjects();
    };
    RecentProjectsList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'recentprojects',
            template: __webpack_require__(/*! ./recentProjectsList.component.html */ "./src/app/recentProjects/recentProjectsList.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_shared_recentProjectsDataService__WEBPACK_IMPORTED_MODULE_1__["ProjectsDataService"]])
    ], RecentProjectsList);
    return RecentProjectsList;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _career_careerList_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./career/careerList.component */ "./src/app/career/careerList.component.ts");
/* harmony import */ var _recentProjects_recentProjectsList_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recentProjects/recentProjectsList.component */ "./src/app/recentProjects/recentProjectsList.component.ts");
/* harmony import */ var _education_educationList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education/educationList.component */ "./src/app/education/educationList.component.ts");
/* harmony import */ var _experience_experienceList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experienceList.component */ "./src/app/experience/experienceList.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");







var AppRoutes = [
    { path: "", component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__["Main"] },
    { path: "overview", component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__["Main"] },
    { path: "career", component: _career_careerList_component__WEBPACK_IMPORTED_MODULE_1__["CareerList"] },
    { path: "recentprojects", component: _recentProjects_recentProjectsList_component__WEBPACK_IMPORTED_MODULE_2__["RecentProjectsList"] },
    { path: "education", component: _education_educationList_component__WEBPACK_IMPORTED_MODULE_3__["EducationList"] },
    { path: "experience", component: _experience_experienceList_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceList"] },
    { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["Contact"] },
    { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["About"] }
];


/***/ }),

/***/ "./src/app/shared/careerDataService.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/careerDataService.ts ***!
  \*********************************************/
/*! exports provided: CareerDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerDataService", function() { return CareerDataService; });
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
// import { HttpClient } from '@angular/common/http';

//import 'rxjs/add/operator/map';
var CareerDataService = /** @class */ (function () {
    // constructor(private http: HttpClient) {
    function CareerDataService() {
        this.career = [];
        this.career = [
            {
                id: 1,
                company: "North Shore City Council",
                dateFromTill: "January 1988 till December 1991",
                companyOverview: "City Council",
                title: "Geographic Information Systems Tech, Surveyor, Programmer and Civil Engineer",
                role: "GIS systems, dBase III+ programmer, Civil Engineering, Drafting, Land Surveying",
                responsibilities: "Systems development for Inspectors, Field Surveying, Designing solutions for GIS, Draftsman, Civil Engineering",
                achievements: "Development of Health and field inspectors Information Systems, New GIS project, knowedge and experience in Electronic Surveying",
                toolSets: "DBaseIV, AutoCad, CivilCad, GIS, Electronic fieldbook, SOKKIA theodolite"
            },
            {
                id: 2,
                company: "Repro Graphics",
                dateFromTill: "December 1993 till March 1999",
                companyOverview: "Digital Publishing company",
                title: "I.T. and Graphics Department Manager",
                role: "Managing computer systems and supporting customers",
                responsibilities: "Novell Netware solutions, Macintosh and PC systems installation and maintenance. Digital Print Management",
                achievements: "Exertise in Novell, Microsoft and Mactosh solutions",
                toolSets: "Knowledge and implementation of Microsoft server and desktop solutions"
            },
            {
                id: 3,
                company: "Atlantech",
                dateFromTill: "March 1999 till October 2000",
                companyOverview: "I.T Support Company",
                title: "I.T. Engineer",
                role: "Supporting Various companies with I.T",
                responsibilities: "Installing and maintaing customer networks and general I.T. support",
                achievements: "Main customer was UNItech who manage University of Auckland projects, Medical School, Museum etc",
                toolSets: "Microsoft Server OS, Netgear routers, backup solutions"
            },
            {
                id: 4,
                company: "Business I.T. Support (BITS)",
                dateFromTill: "October 2000 till December 2004",
                companyOverview: "I.T. Contracting",
                title: "I.T. Contractor",
                role: "Supporting Various companies with I.T",
                responsibilities: "Supporting the I.T. needs of customers all over Auckland",
                achievements: "6 months Waitakere City Council, 3 Months Masport, 3 years at Screentime",
                toolSets: "Server OS, desktop support, networking, security solutions"
            },
            {
                id: 5,
                company: "LlamaTech Ltd",
                dateFromTill: "January 2001 till March 2014",
                companyOverview: "I.T Support Company",
                title: "Company Director",
                role: "Manager, Director, Technician",
                responsibilities: "Managing the company and supporting customers",
                achievements: "Built and thriving I.T. company with hundred of customers",
                toolSets: "Management, knowledge and implementation of Microsoft, Cyberoam, HP and Macintosh support and solutions"
            },
            {
                id: 6,
                company: "Vision ITS",
                dateFromTill: "March 2014 June 2014",
                companyOverview: "I.T Support Company",
                title: "Senior I.T Technician",
                role: "Providing I.T. Support and Installing and maintaining customer networks",
                responsibilities: "First and second level support",
                achievements: "Server installation projects. Network and VPN solutions. ",
                toolSets: "windows server and desktop OS, RCS Software"
            },
            {
                id: 7,
                company: "Rhema Media",
                dateFromTill: "October 2014 till present",
                companyOverview: "Media - TV, Radio and Print",
                title: "ICT technician",
                role: "Information anc Communications Technician",
                responsibilities: "Server and desktop support",
                achievements: "Assisted with transition from Analog to Digital Audio over IP",
                toolSets: "windows server and desktop OS, RCS Software"
            },
        ];
    }
    CareerDataService.prototype.loadCareer = function () {
        return this.career;
    };
    CareerDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CareerDataService);
    return CareerDataService;
}());



/***/ }),

/***/ "./src/app/shared/contactDataService.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/contactDataService.ts ***!
  \**********************************************/
/*! exports provided: ContactDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDataService", function() { return ContactDataService; });
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
// import { HttpClient } from '@angular/common/http';

//import 'rxjs/add/operator/map';
var ContactDataService = /** @class */ (function () {
    // constructor(private http: HttpClient) {
    function ContactDataService() {
        this.career = [];
    }
    ContactDataService.prototype.loadCareer = function () {
        return this.career;
    };
    ContactDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ContactDataService);
    return ContactDataService;
}());



/***/ }),

/***/ "./src/app/shared/educationDataService.ts":
/*!************************************************!*\
  !*** ./src/app/shared/educationDataService.ts ***!
  \************************************************/
/*! exports provided: EducationDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationDataService", function() { return EducationDataService; });
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

var EducationDataService = /** @class */ (function () {
    function EducationDataService() {
        this.educations = [];
        this.educations = [
            {
                id: 1,
                certification: "NZCE(Civil)",
                details: "NZ Certificate in Engineering (Civil)",
                yearCompleted: "1990",
                educationalInstitution: ''
            },
            {
                id: 3,
                certification: "Stage II Commerce",
                details: "University of Auckland",
                yearCompleted: "1992",
                educationalInstitution: ''
            },
            {
                id: 4,
                certification: "Stage II Computer Science",
                details: "Pascal and Assembly Language",
                yearCompleted: "1993",
                educationalInstitution: 'University of Auckland'
            },
            {
                id: 5,
                certification: "CTM",
                details: "Certified Toast Master - Public Speeking",
                yearCompleted: "2000",
                educationalInstitution: 'Toastmasters International'
            },
            {
                id: 6,
                certification: "CNA",
                details: "Multi Media Connect Certificate",
                yearCompleted: "2000",
                educationalInstitution: 'Novell'
            },
            {
                id: 7,
                certification: "MCSE+I",
                details: "Microsoft Certified Engineer plus Internet",
                yearCompleted: "2001",
                educationalInstitution: 'Microsoft'
            },
            {
                id: 8,
                certification: "Multi Media Connect Certificate",
                details: "Certificate in Data Cabling",
                yearCompleted: "2016",
                educationalInstitution: 'MMC'
            },
            {
                id: 9,
                certification: "MCP",
                details: "Microsoft Certified Professional - 4 exams",
                yearCompleted: "2015",
                educationalInstitution: 'Microsoft'
            }
        ];
    }
    EducationDataService.prototype.loadEducation = function () {
        return this.educations;
    };
    ;
    EducationDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EducationDataService);
    return EducationDataService;
}());



/***/ }),

/***/ "./src/app/shared/experienceDataService.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/experienceDataService.ts ***!
  \*************************************************/
/*! exports provided: ExperienceDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceDataService", function() { return ExperienceDataService; });
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
// import { HttpClient } from '@angular/common/http';

//import 'rxjs/add/operator/map';
var ExperienceDataService = /** @class */ (function () {
    // constructor(private http: HttpClient) {
    function ExperienceDataService() {
        this.experience = [];
        this.experience = [
            {
                id: 1,
                capability: "Data Cabling and InfaStructure",
                years: "15+",
                details: "Cat5e / Cat6a structured cabling"
            },
            {
                id: 2,
                capability: "Laptop and Desktop Troubleshooting and Repair",
                years: "25+",
                details: "Repair and installation of Macintosh and PC Laptop and Desktop computers"
            },
            {
                id: 3,
                capability: "Web application development in MEAN stack",
                years: "2+",
                details: "MongoDB, Express Angular2+Typescript, NodeJS"
            },
            {
                id: 4,
                capability: "Gateway Security Hardware applicances",
                years: "15+",
                details: "Watchguard, Cyberoam, Sonicwall, Netgear"
            },
            {
                id: 5,
                capability: "Server Installation Configuration and Support",
                years: "25+",
                details: "Microsoft and Novell Server Operating Systems"
            },
            {
                id: 6,
                capability: "Software and Web Appication Development in DotNet and DotNet Core2",
                years: "25+",
                details: "JavaScript MeanStack/Typescript, MVC C#, C++ and Pascal"
            },
            {
                id: 7,
                capability: "Desktop Applications (MS Office and others)",
                years: "25+",
                details: "Desktop Applications (MS Office and others)"
            },
            {
                id: 8,
                capability: "Virtualisation",
                years: "8+",
                details: "Hyper-v and VMWare Hypervisor"
            }
        ];
    }
    ExperienceDataService.prototype.loadExperience = function () {
        return this.experience;
    };
    ;
    ExperienceDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ExperienceDataService);
    return ExperienceDataService;
}());



/***/ }),

/***/ "./src/app/shared/recentProjectsDataService.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/recentProjectsDataService.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsDataService", function() { return ProjectsDataService; });
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
// import { HttpClient } from '@angular/common/http';

//import 'rxjs/add/operator/map';
var ProjectsDataService = /** @class */ (function () {
    // constructor(private http: HttpClient) {
    function ProjectsDataService() {
        this.recentProjects = [];
        this.recentProjects = [
            {
                id: 1,
                year: '2016',
                project: 'JavaScript MEAN Stack web application',
                description: 'Build an online assets database using MongoDB, Express, Angular and NodeJS',
                company: 'Rhema Media',
                technologies: 'NodeJs, MongoDB, Angular'
            },
            {
                id: 2,
                year: '2015',
                project: 'Rhema Media - Assisted in Upgrading 3 Radio stations to Digital Audio over IP technology',
                description: 'Wheatstone Audio over IP network and RCS Zetta software',
                company: 'Rhema Media',
                technologies: ' audioOverIP, Wheatstone, Zetta'
            },
            {
                id: 3,
                year: '2017',
                project: 'Magento webstore',
                description: 'A Web store for a jewelery shop using Magento',
                company: 'RoseHeart Jewels',
                technologies: 'Magento, Ubuntu web Server, MyPhpAdmin'
            },
            {
                id: 4,
                year: '2014',
                project: 'VPN and remote office setup',
                description: 'Hardware VPN solution for Branch office. Based on Netgear hardware Firewall/VPN',
                company: 'Ecomatters Environment Trust',
                technologies: 'netgear hardware VPN, Windows SBS Server '
            },
            {
                id: 5,
                year: '2014',
                project: 'Server and SAN install',
                description: 'Setup a windows Server. Setup workstations on the new domain. Setup backup system. Provided remote access including router and hardware VPN.',
                technologies: 'Dell SAN hardware, RAID5, 2012 Server, Active Directories',
                company: 'Albedo'
            },
            {
                id: 6,
                year: '2013',
                project: 'Server installation and network upgrade',
                description: 'Built a server with windows SBS 2011, Exchange Server and configured client computers',
                company: 'Birkenhead Transport Ltd',
                technologies: 'Microsoft Small Business Server, Exchange server, Active directories'
            },
            {
                id: 7,
                year: '2012',
                project: 'KidzEd – Web Application Development',
                description: 'Developed a  web application that handles membership, CreditCard payments via DPS API. Using Silverlight, C#, SQL server and DotNet Webforms.',
                company: 'KidzEd Education',
                technologies: 'C#/Webforms ASP.Net, DPS Payment API, SQL',
            }
        ];
    }
    ProjectsDataService.prototype.loadRecentProjects = function () {
        return this.recentProjects;
    };
    ;
    ProjectsDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProjectsDataService);
    return ProjectsDataService;
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

module.exports = __webpack_require__(/*! E:\projects\aaronSkudder\as-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map