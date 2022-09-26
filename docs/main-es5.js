function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/audit.component.html":
  /*!****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/audit.component.html ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"row col\" style=\"background-color:#ffffff\">\r\n  <div class=\"col-3\">\r\n    <a routerLink=\"/home\">\r\n      <img src=\"assets/img/logo.png\" class=\"pl-5\" style=\"height: 100px;width: auto;\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"col-6 mt-2\">\r\n    <img src=\"assets/img/logo2.png\" style=\"position: relative;bottom: 15px;\">\r\n    <img src=\"assets/img/slogan.png\" class=\"mt-5\">\r\n  </div>\r\n  <div class=\"col-3 mt-4\">\r\n    <h5 class=\"text-center text-white\"><a href=\"#\" style=\"color:#bf580f\">العربيه</a></h5>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div style=\"background-color:#f5f5f5\">\r\n  <div class=\"d-flex flex-row justify-content-center mt-5\">\r\n    <h3 class=\"text-primary\">Please Answer The Follwoing Questions</h3>\r\n  </div>\r\n\r\n  <div *ngIf=\"error\" class=\"d-flex flex-row justify-content-center mt-1\">\r\n    <h5 class=\"text-danger\">Connection Error</h5>\r\n  </div>\r\n  <div *ngIf=\"underdeveloped\" class=\"d-flex flex-row justify-content-center mt-1\">\r\n    <h5 class=\"text-danger\">underdeveloped</h5>\r\n  </div>\r\n   \r\n\r\n  <div *ngIf=\"load\" class=\"d-flex flex-row justify-content-end mt-1\" style=\"margin-right: 25px;\">\r\n    <button class=\"btn btn-warning float-right mr-4\" (click)=\"saveAction()\">Action Plan</button>\r\n    <!--<a class=\"btn btn-success float-right mr-4\" href=\"assets/data/report.xlsx\">Report</a>-->\r\n    <a class=\"btn btn-success float-right mr-4\" (click)=\"auditPrint()\">Report</a>\r\n    <button class=\"btn btn-success float-right\" (click)=\"save()\">Save & Exit</button>\r\n  </div>\r\n\r\n  <div class=\"d-flex flex-row justify-content-center\">\r\n    <form *ngIf=\"load\" #basicInfoForm=\"ngForm\" class=\"d-flex flex-row col-12 justify-content-center mt-4\">\r\n      <div class=\" col-12 mb-4\" style=\"border: 1px solid #17a2b8;border-radius: 10px;\">\r\n        <p-accordion [multiple]=\"true\">\r\n          <p-accordionTab *ngFor=\"let sec of mySections\" header='{{ sec.name + \"      (\"  + getTotal(sec.id) +\")\" }}'>\r\n            <div class=\"row mt-2\">\r\n              <div *ngFor=\"let myQes of sec.questions\" class=\"col-4 mb-3\">\r\n                <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n                  {{ myQes.question }} <i class=\"fa fa-info-circle\" tooltipPosition=\"top\" pTooltip='{{ myQes.description }}'></i>\r\n                </label>\r\n                <select id=\"dropanswers\" #dropanswers=\"ngModel\" class=\"form-control\" required name='{{ myQes.id + \"qes\" }}' [(ngModel)]=\"myQes.currentAnswer\">\r\n                  <option [ngValue]=\"undefined\" selected>--Select--</option>\r\n                  <option *ngFor=\"let ans of myQes.answer\" [ngValue]=\"ans\">\r\n                    {{ ans }}\r\n                  </option>\r\n                </select>\r\n                <div *ngIf=\"!myQes.currentAnswer && dropanswers.touched\" class=\"badge-danger\">\r\n                  This field is required\r\n                </div>\r\n                <input type=\"text\" max=\"250\" class=\"form-control mt-1\" name=\"txtclientComment\" placeholder=\"Type your comment\" [(ngModel)]=\"myQes.comment\" />\r\n              </div>\r\n            </div>\r\n          </p-accordionTab>\r\n        </p-accordion>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div *ngIf=\"!load\" class=\"d-flex flex-row justify-content-center mt-4\">\r\n    <div class=\"spinner-border\" style=\"width: 3rem; height: 3rem;\">\r\n      <span class=\"sr-only\">Loading...</span>\r\n    </div>\r\n  </div>\r\n  \r\n\r\n</div>\r\n\r\n<div *ngIf=\"load\" style=\"bottom: 0;width: 100%;background-color:black;color:white\" class=\"text-center\">\r\n  <br />\r\n  Sponsored by the American Standardization Association of Information & Communications Technology\r\n  <br />\r\n  <br />\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auditPrint.component.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auditPrint.component.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuditPrintComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"maincontent\">\r\n  <table style=\"background-color: #fff;\" class=\"w-100\">\r\n    <tr>\r\n      <td style=\"padding-left:29px;\" class=\"w-25\">\r\n        <a routerLink=\"/home\">\r\n          <img src=\"data:image/png;base64,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\"\r\n               class=\"pl-5\" style=\"height: 100px;width: auto;\" />\r\n        </a>\r\n      </td>\r\n      <td style=\"padding-left: 20px;\">\r\n        <img src=\"data:image/png;base64,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\" style=\"position: relative;bottom: 15px;\">\r\n        <img src=\"assets/img/slogan.png\" class=\"mt-5\">\r\n      </td>\r\n    </tr>\r\n  </table>\r\n\r\n  <div style=\"background-color:white\">\r\n\r\n    <table style=\"background-color: #fff;\" class=\"w-100\">\r\n      <tr>\r\n        <td style=\"text-align: center;\">\r\n          <img src=\"data:image/png;base64,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\" width=\"600px\">\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n    <div>\r\n      <div *ngIf=\"load && !startprint\" class=\"d-flex flex-row justify-content-end mt-1\" style=\"margin-right: 25px;\">\r\n        <button class=\"btn btn-warning float-right mr-4\" (click)=\"print()\">Print</button>\r\n      </div>\r\n\r\n      <div *ngIf=\"load\" class=\"d-flex flex-row col-12 justify-content-center mt-2\">\r\n        <div class=\"col-12 mb-4\" style=\"border: 1px solid #17a2b8;border-radius: 10px;background-color: #d1d1d145;\">\r\n\r\n          <table class=\"w-100\">\r\n            <tr>\r\n              <td style=\"width:20%\"><div style=\"color: #cb5f16;font-weight: bold;text-decoration: underline;\">UserName : </div></td>\r\n              <td style=\"width:40%\"><div style=\"font-weight:bold\">{{ username }}</div></td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n            <tr>\r\n              <td style=\"width:20%\"><div style=\"color: #cb5f16;font-weight: bold;text-decoration: underline;\">Organization Name : </div></td>\r\n              <td style=\"width:30%\"><div style=\"font-weight:bold\">eZee Consultancy & Services</div></td>\r\n              <td style=\"width:20%\"><div style=\"color: #cb5f16;font-weight: bold;text-decoration: underline;\">Organization Type : </div></td>\r\n              <td style=\"width:30%\"><div style=\"font-weight:bold\">Bank</div></td>\r\n            </tr>\r\n            <tr>\r\n              <td><div style=\"color: #cb5f16;font-weight: bold;text-decoration: underline;\">Audit Date : </div></td>\r\n              <td><div style=\"font-weight:bold\">{{ AuditDate }}</div></td>\r\n              <td><div style=\"color: #cb5f16;font-weight: bold;text-decoration: underline;\">Audit Time : </div></td>\r\n              <td><div style=\"font-weight:bold\">{{ AuditTime }}</div></td>\r\n            </tr>\r\n            <tr>\r\n              <td><div style=\"color: #cb5f16;font-weight: bold;text-decoration: underline;\">Total Score : </div></td>\r\n              <td><div style=\"font-weight:bold\">{{ calcMaxAudit() + \"/\" + calcMax()  }}</div></td>\r\n              <td><div style=\"color: #cb5f16;font-weight: bold;text-decoration: underline;\">Percentage : </div></td>\r\n              <td><div style=\"font-weight:bold\">{{ calcMaxPercentage() }}%</div></td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"load\" class=\"d-flex flex-row col-12 justify-content-center mt-1 mb-3\">\r\n        <table style=\"border: 2px;border-style: solid;\" class=\"ml-1 mr-1 w-100\">\r\n          <thead>\r\n            <tr>\r\n              <td style=\"border: 2px;text-align: center;font-weight: bolder;border-style: groove;width:5%\">No</td>\r\n              <td style=\"border: 2px;text-align: center;font-weight: bolder;border-style: groove;width:40%\">Question</td>\r\n              <td style=\"border: 2px;text-align: center;font-weight: bolder;border-style: groove;width:5%\">Max Score</td>\r\n              <td style=\"border: 2px;text-align: center;font-weight: bolder;border-style: groove;width:5%\">Audit Score</td>\r\n              <td style=\"border: 2px;text-align: center;font-weight: bolder;border-style: groove;width:5%\">%</td>\r\n              <td style=\"border: 2px;text-align: center;font-weight: bolder;border-style: groove;width:40%\">Comments</td>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let sec of mySections\">\r\n            <tr style=\"background-color: #e9e9e9;\">\r\n              <td style=\"border: 2px;border-style: groove;width:5%\"></td>\r\n              <td style=\"border: 2px;border-style: groove;width:40%;font-weight: bold;\">{{ sec.name }}</td>\r\n              <td style=\"border: 2px;border-style: groove;width:5%;font-weight: bolder;text-align: center\">{{ getTotalMax(sec.id) }}</td>\r\n              <td style=\"border: 2px;border-style: groove;width:5%;font-weight: bolder;text-align: center\">{{ getTotalAudit(sec.id) }}</td>\r\n              <td style=\"border: 2px;border-style: groove;width:5%;background-color: #fff2cd;color: #e71212;font-weight: bold;text-align: center\">{{ getTotalPercentage(sec.id) + \"%\" }}</td>\r\n              <td style=\"border: 2px;border-style: groove;width:40%\"></td>\r\n            </tr>\r\n            <tr *ngFor=\"let myQes of sec.questions;let i = index\">\r\n              <td style=\"border: 2px;border-style: groove;width:5%;text-align: center\">{{ i + 1 }}</td>\r\n              <td style=\"border: 2px;border-style: groove;width:40%;\">{{ myQes.question }}</td>\r\n              <td style=\"border: 2px;border-style: groove;width:5%;text-align: center\"> {{ 5 }}</td>\r\n              <td style=\"border: 2px;border-style: groove;width:5%;text-align: center\">{{myQes.currentAnswer ? myQes.currentAnswer : 0}}</td>\r\n              <td style=\"border: 2px;border-style: groove;width:5%;background-color: #fff2cd;color: #e71212;font-weight: bold;text-align: center\">{{ getPercentage(myQes.currentAnswer) + \"%\" }}</td>\r\n              <td style=\"border: 2px;border-style: groove;width:40%\">{{ myQes.comment }}</td>\r\n            </tr>\r\n          </tbody>\r\n\r\n          <tr style=\"background-color: #fff2cd;\">\r\n            <td style=\"border: 2px;border-style: groove;width:5%\"></td>\r\n            <td style=\"border: 2px;border-style: groove;width:40%;font-weight: bold;text-align: center;color:#ac6223\">{{ \"Audit Report Totals\" }}</td>\r\n            <td style=\"border: 2px;border-style: groove;width:5%;font-weight: bolder;text-align: center\">{{ calcMax() }}</td>\r\n            <td style=\"border: 2px;border-style: groove;width:5%;font-weight: bolder;text-align: center\">{{ calcMaxAudit() }}</td>\r\n            <td style=\"border: 2px;border-style: groove;width:5%;background-color: #fff2cd;color: #e71212;font-weight: bold;text-align: center\">{{ calcMaxPercentage() + \"%\" }}</td>\r\n            <td style=\"border: 2px;border-style: groove;width:40%;text-align: center;color:#ac6223;font-weight: bold\">{{ \"Final Result : \" + getResultFinal() }}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"load\" style=\"bottom: 0;width: 100%;background-color:black;color:white\" class=\"text-center\">\r\n    <br />\r\n    Sponsored by the American Standardization Association of Information & Communications Technology\r\n    <br />\r\n    <br />\r\n  </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/finish.component.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finish.component.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinishComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-info col-12 row\">\r\n  <div class=\"col-6\">\r\n    <img src=\"assets/img/logo.png\" class=\"pl-5\" style=\"height: 90px;width: auto;\" />\r\n  </div>\r\n  <div class=\"col-6 mt-4\">\r\n    <h3 class=\"font-italic text-center text-white\">Welcome to eZee Consultancy</h3>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-12 row\">\r\n  <div class=\"col-12\">\r\n    <h5 class=\"ml-5 mt-5 text-center\">Thank You ...</h5>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"d-flex flex-row justify-content-center mt-4 w-100\">\r\n  <form class=\"d-flex flex-row justify-content-center mt-4 w-100\">\r\n    <div class=\"row col-11\" style=\"border: 1px solid #17a2b8;border-radius: 10px;\">\r\n      <div class=\"row col-12 mt-4 mb-4\">\r\n        <div class=\"row flex-fill justify-content-center\">\r\n          <h2 class=\"text-success\">Thanks You for your registeration !</h2>          \r\n        </div>\r\n      </div>\r\n      <div class=\"row col-12 mb-2\">\r\n        <div class=\"col-12 flex-fill justify-content-center row\">\r\n          <button class=\"btn btn-success\"  (click)=\"back()\">Back Home</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home.component.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home.component.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row col\" style=\"background-color:#ffffff\">\r\n  <div class=\"col-3\">\r\n    <a routerLink=\"/home\">\r\n      <img src=\"assets/img/logo.png\" class=\"pl-5\" style=\"height: 100px;width: auto;\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"col-6 mt-2\">\r\n    <img src=\"assets/img/logo2.png\" style=\"position: relative;bottom: 15px;\">\r\n    <img src=\"assets/img/slogan.png\" class=\"mt-5\">\r\n  </div>\r\n  <div class=\"col-3 mt-4\">\r\n    <h5 class=\"text-center text-white\"><a href=\"#\" style=\"color:#bf580f\">العربيه</a></h5>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div style=\"background-color:#f5f5f5\">\r\n  <div class=\"d-flex flex-row justify-content-center\">\r\n    <div class=\"col-7\">\r\n      <img src=\"assets/img/welcome2.png\">\r\n      <h1 class=\"ml-5 mt-2 text-center\" style=\"font-size:60px;color:#bf560f\">\r\n        <img src=\"assets/img/ict.png\">\r\n      </h1>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"d-flex flex-row justify-content-center pt-3\">\r\n    <div class=\"border\" style=\"width:28%\">\r\n      <img src=\"assets/img/bg1.png\" style=\"width:15%;background-color: beige;\" class=\"border\">\r\n      <a routerLink=\"/login\" class=\"font-weight-bold\">\r\n        Login\r\n      </a>\r\n      if you have your user created already\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex flex-row justify-content-center pt-2\">\r\n    <div class=\"border\" style=\"width:28%\">\r\n      <img src=\"assets/img/bg2.png\" style=\"width:15%;background-color: beige;\" class=\"border\">\r\n      <a routerLink=\"/register\" class=\"font-weight-bold\">\r\n        Register\r\n      </a>\r\n      &  get Access Code\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div style=\"position: fixed;bottom: 0;width: 100%;background-color:black;color:white\" class=\"text-center\">\r\n  <br />\r\n  Sponsored by the American Standardization Association of Information & Communications Technology\r\n  <br />\r\n  <br />\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html":
  /*!****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row col\" style=\"background-color:#ffffff\">\r\n  <div class=\"col-3\">\r\n    <a routerLink=\"/home\">\r\n      <img src=\"assets/img/logo.png\" class=\"pl-5\" style=\"height: 100px;width: auto;\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"col-6 mt-2\">\r\n    <img src=\"assets/img/logo2.png\" style=\"position: relative;bottom: 15px;\">\r\n    <img src=\"assets/img/slogan.png\" class=\"mt-5\">\r\n  </div>\r\n  <div class=\"col-3 mt-4\">\r\n    <h5 class=\"text-center text-white\"><a href=\"#\" style=\"color:#bf580f\">العربيه</a></h5>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div style=\"background-color:#f5f5f5\">\r\n  <div class=\"d-flex flex-row justify-content-center mt-5\">\r\n    <h3 class=\"text-primary\">ACCOUNT LOGIN</h3>\r\n  </div>\r\n  <div class=\"d-flex flex-row justify-content-center\">\r\n    <form #loginForm=\"ngForm\" class=\"col-5 mt-3\">\r\n      <div class=\"pb-5 pl-5 pr-5 pt-4\" style=\"border: 1px solid #17a2b8;border-radius: 10px;\">\r\n        <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n          User Name\r\n        </label>\r\n        <input type=\"text\" max=\"200\" required class=\"form-control\" name=\"txtuserName\" #txtuserName=\"ngModel\" [(ngModel)]=\"userName\" placeholder=\"your username\"/>\r\n        <div *ngIf=\"txtuserName.errors && txtuserName.touched\" class=\"badge-danger\">\r\n          This field is required\r\n        </div>\r\n\r\n\r\n        <label class=\"font-weight-bold pt-3\" style=\"color:#bf6a31\">\r\n          Password\r\n        </label>\r\n        <input type=\"password\" max=\"200\" required class=\"form-control\" name=\"txtpassword\" #txtpassword=\"ngModel\" [(ngModel)]=\"password\" placeholder=\"your password\"/>\r\n        <div *ngIf=\"txtpassword.errors && txtpassword.touched\" class=\"badge-danger\">\r\n          This field is required\r\n        </div>\r\n\r\n        <div *ngIf=\"showLoginFail\" class=\"text-danger\">{{ \"Invalid User name Or Password\"  }}</div>\r\n        <div class=\"d-flex flex-row justify-content-center mt-4\">\r\n          <button type=\"button\" class=\"btn btn-success w-50\" (click)=\"login()\" [disabled]=\"!loginForm.valid\">\r\n            {{\"Login\"}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div style=\"position: fixed;bottom: 0;width: 100%;background-color:black;color:white\" class=\"text-center\">\r\n  <br />\r\n  Sponsored by the American Standardization Association of Information & Communications Technology\r\n  <br />\r\n  <br />\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register.component.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register.component.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row col\" style=\"background-color:#ffffff\">\r\n  <div class=\"col-3\">\r\n    <a routerLink=\"/home\">\r\n      <img src=\"assets/img/logo.png\" class=\"pl-5\" style=\"height: 100px;width: auto;\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"col-6 mt-2\">\r\n    <img src=\"assets/img/logo2.png\" style=\"position: relative;bottom: 15px;\">\r\n    <img src=\"assets/img/slogan.png\" class=\"mt-5\">\r\n  </div>\r\n  <div class=\"col-3 mt-4\">\r\n    <h5 class=\"text-center text-white\"><a href=\"#\" style=\"color:#bf580f\">العربيه</a></h5>\r\n  </div>\r\n</div>\r\n\r\n<!--<div class=\"registration-flow\">\r\n  <ul *ngIf=\"mode == 1 || mode == 2 || mode == 3 || mode == 4\" class=\"registration-step\" style=\"padding-top:33px\">\r\n    <li [class.active]=\"mode == 1\" [class.done]=\"mode == 2 || mode == 3 || mode == 4\">{{ \"1\" }}</li>\r\n    <li [class.active]=\"mode == 2\" [class.done]=\"mode == 3 || mode == 4\">{{ \"2\" }}</li>\r\n    <li [class.active]=\"mode == 3\" [class.done]=\"mode == 4\">{{ \"3\" }}</li>\r\n    <li [class.active]=\"mode == 4\">{{ \"4\" }}</li>\r\n  </ul>\r\n</div>-->\r\n\r\n\r\n<div style=\"background-color:#f5f5f5\">\r\n  <div class=\"d-flex flex-row justify-content-center mt-5\">\r\n    <h3 class=\"text-primary\">Please Register & get Access Code</h3>\r\n  </div>\r\n  <div class=\"d-flex flex-row justify-content-center\">\r\n    <form *ngIf=\"mode == 1\" #basicInfoForm=\"ngForm\" class=\"d-flex flex-row justify-content-center mt-4\">\r\n      <div class=\"row col-10 mb-4\" style=\"border: 1px solid #17a2b8;border-radius: 10px;\">\r\n        <div class=\"row col-12 mt-4 mb-3\">\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              First Name\r\n            </label>\r\n            <input type=\"text\" max=\"200\" required class=\"form-control\" name=\"txtclientFirstName\" #txtclientFirstName=\"ngModel\" [(ngModel)]=\"clientFirstName\" />\r\n            <div *ngIf=\"txtclientFirstName.errors && txtclientFirstName.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              Last Name\r\n            </label>\r\n            <input type=\"text\" max=\"200\" required class=\"form-control\" id=\"txtclientLastName\" name=\"txtclientLastName\" #txtclientLastName=\"ngModel\" [(ngModel)]=\"clientLastName\" />\r\n            <div *ngIf=\"txtclientLastName.errors && txtclientLastName.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row col-12 mb-3\">\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              e-Mail\r\n            </label>\r\n            <div class=\"d-flex flex-row\">\r\n              <input type=\"text\" max=\"200\" required class=\"form-control\" id=\"txtclientEmail\" name=\"txtclientEmail\" #txtclientEmail=\"ngModel\" [(ngModel)]=\"clientEmail\"\r\n                     pattern=\"(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*')@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])\"\r\n                     style=\"width:80% !important\" />\r\n              <button class=\"btn btn-success ml-2\" [disabled]=\"txtclientEmail.errors\">Send</button>\r\n\r\n            </div>\r\n            <div *ngIf=\"txtclientEmail.errors && txtclientEmail.touched\" class=\"badge-danger\" style=\"width:80%\">\r\n              {{ txtclientEmail.errors?.required? \"This field is required\" : \"This email is not valid\" }}\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              verification code\r\n            </label>\r\n            <div class=\"d-flex flex-row\">\r\n              <input type=\"text\" max=\"200\" required class=\"form-control\" id=\"txtclientverification\" name=\"txtclientverification\" #txtclientverification=\"ngModel\" [(ngModel)]=\"clientverification\" style=\"width:80% !important\" />\r\n              <button class=\"btn btn-success ml-2\" [disabled]=\"!clientverification\">Verify</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row col-12 mb-3\">\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              User Name\r\n            </label>\r\n            <input type=\"text\" max=\"200\" required class=\"form-control\" name=\"txtclientUserName\" #txtclientUserName=\"ngModel\" [(ngModel)]=\"clientUserName\" />\r\n            <div *ngIf=\"txtclientUserName.errors && txtclientUserName.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row col-12 mb-3\">\r\n\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              Password\r\n            </label>\r\n            <input type=\"password\" max=\"200\" required class=\"form-control\" name=\"txtclientPassword\" #txtclientPassword=\"ngModel\" [(ngModel)]=\"clientPassword\" />\r\n            <div *ngIf=\"txtclientPassword.errors && txtclientPassword.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              Re-Password\r\n            </label>\r\n            <input type=\"password\" max=\"200\" required class=\"form-control\" name=\"txtclientRePassword\" #txtclientRePassword=\"ngModel\" [(ngModel)]=\"clientRePassword\" />\r\n            <div *ngIf=\"txtclientRePassword.errors && txtclientRePassword.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n            <div *ngIf=\"clientPassword != clientRePassword && txtclientRePassword.touched\" class=\"badge-danger\">\r\n              This password doesn't match\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row col-12 mb-3\">\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              Organization Name\r\n            </label>\r\n            <input type=\"text\" max=\"200\" required class=\"form-control\" name=\"txtclientOrganizationName\" #txtclientOrganizationName=\"ngModel\" [(ngModel)]=\"clientOrganizationName\" />\r\n            <div *ngIf=\"txtclientOrganizationName.errors && txtclientOrganizationName.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              Organization Type\r\n            </label>\r\n            <select class=\"form-control\" required name=\"OrganizationTypeId\" #OrganizationTypeId=\"ngModel\" [(ngModel)]=\"clientOrganizationTypeId\">\r\n              <option [ngValue]=\"undefined\" disabled selected>--Select--</option>\r\n              <option *ngFor=\"let orgtype of OrganizationTypes\" [value]=\"orgtype.id\">\r\n                {{ orgtype.name }}\r\n              </option>\r\n            </select>\r\n            <div *ngIf=\"!OrganizationTypeId.valid && OrganizationTypeId.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row col-12 mb-3\">\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              Your Job Title\r\n            </label>\r\n            <input type=\"text\" max=\"200\" required class=\"form-control\" name=\"txtclientJobTitle\" #txtclientJobTitle=\"ngModel\" [(ngModel)]=\"clientJobTitle\" />\r\n            <div *ngIf=\"txtclientJobTitle.errors && txtclientJobTitle.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row col-12 mb-2\">\r\n          <div class=\"col-12\">\r\n            <button class=\"btn btn-success float-right\" [disabled]=\"!basicInfoForm.valid\" (click)=\"Register()\">Register</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n  \r\n\r\n\r\n\r\n<div style=\"bottom: 0;width: 100%;background-color:black;color:white\" class=\"text-center\">\r\n  <br />\r\n  Sponsored by the American Standardization Association of Information & Communications Technology\r\n  <br />\r\n  <br />\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _finish_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./finish.component */
    "./src/app/finish.component.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home.component.ts");
    /* harmony import */


    var _register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/register.component.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login.component.ts");
    /* harmony import */


    var _audit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./audit.component */
    "./src/app/audit.component.ts");
    /* harmony import */


    var _auditPrint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auditPrint.component */
    "./src/app/auditPrint.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }, {
      path: 'audit',
      component: _audit_component__WEBPACK_IMPORTED_MODULE_7__["AuditComponent"]
    }, {
      path: 'auditPrint',
      component: _auditPrint_component__WEBPACK_IMPORTED_MODULE_8__["AuditPrintComponent"]
    }, {
      path: 'finish',
      component: _finish_component__WEBPACK_IMPORTED_MODULE_3__["FinishComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
        useHash: true,
        scrollPositionRestoration: 'enabled'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _finish_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./finish.component */
    "./src/app/finish.component.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home.component.ts");
    /* harmony import */


    var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/radiobutton */
    "./node_modules/primeng/radiobutton.js");
    /* harmony import */


    var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/register.component.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login.component.ts");
    /* harmony import */


    var _audit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./audit.component */
    "./src/app/audit.component.ts");
    /* harmony import */


    var primeng_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/accordion */
    "./node_modules/primeng/accordion.js");
    /* harmony import */


    var primeng_accordion__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/tooltip */
    "./node_modules/primeng/tooltip.js");
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var _auditPrint_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./auditPrint.component */
    "./src/app/auditPrint.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _finish_component__WEBPACK_IMPORTED_MODULE_6__["FinishComponent"], _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _audit_component__WEBPACK_IMPORTED_MODULE_13__["AuditComponent"], _auditPrint_component__WEBPACK_IMPORTED_MODULE_17__["AuditPrintComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"]],
      providers: [_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppService = /*#__PURE__*/function () {
      function AppService(http) {
        _classCallCheck(this, AppService);

        this.http = http;
      }

      _createClass(AppService, [{
        key: "getQuestion",
        value: function getQuestion() {
          var URL = "assets/data/question.json";
          return this.http.get(URL);
        }
      }, {
        key: "getorganizationType",
        value: function getorganizationType() {
          var URL = "assets/data/organizationType.json";
          return this.http.get(URL);
        }
      }, {
        key: "getSections",
        value: function getSections() {
          var URL = "assets/data/section.json";
          return this.http.get(URL);
        }
      }, {
        key: "getauditQuestions",
        value: function getauditQuestions() {
          var URL = "assets/data/auditQuestion.json";
          return this.http.get(URL);
        }
      }]);

      return AppService;
    }();

    AppService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppService);
    /***/
  },

  /***/
  "./src/app/audit.component.ts":
  /*!************************************!*\
    !*** ./src/app/audit.component.ts ***!
    \************************************/

  /*! exports provided: AuditComponent */

  /***/
  function srcAppAuditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuditComponent", function () {
      return AuditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AuditComponent = /*#__PURE__*/function () {
      function AuditComponent(router, service) {
        var _this = this;

        _classCallCheck(this, AuditComponent);

        this.router = router;
        this.service = service;
        this.sections = [];
        this.mySections = [];
        this.questions = [];
        this.myQuestions = [];
        this.load = false;
        this.error = false;
        this.underdeveloped = false;
        this.service.getSections().subscribe(function (res) {
          _this.sections = res;

          _this.service.getQuestion().subscribe(function (res) {
            _this.questions = res;

            _this.service.getauditQuestions().subscribe(function (res) {
              _this.myQuestions = res.filter(function (item) {
                return item.organizationType == _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].organizationType;
              });

              var secid = _this.myQuestions.map(function (item) {
                return item.sectionid;
              });

              var quesid = _this.myQuestions.map(function (item) {
                return item.questionid;
              });

              _this.mySections = _this.sections.filter(function (item) {
                return secid.findIndex(function (x) {
                  return x == item.id;
                }) >= 0;
              });
              _this.mySections = _this.mySections.map(function (item) {
                item.questions = [];
                return item;
              });

              var myques = _this.questions.filter(function (item) {
                return quesid.findIndex(function (x) {
                  return x == item.id;
                }) >= 0;
              });

              for (var i = 0; i < _this.mySections.length; i++) {
                var qes = myques.filter(function (item) {
                  return item.section == this.mySections[i].id;
                }, _this);

                for (var j = 0; j < qes.length; j++) {
                  _this.mySections[i].questions.push(qes[j]);
                }
              }

              _this.load = true;
            });
          });
        });
      }

      _createClass(AuditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getTotal",
        value: function getTotal(secid) {
          var str = "";
          var total = 0;
          var totalanswers = 0;
          var arr = this.mySections.filter(function (item) {
            return item.id == secid;
          });

          for (var i = 0; i < arr[0].questions.length; i++) {
            if (arr[0].questions[i].currentAnswer != 'N/A') {
              total = total + arr[0].questions[i].maxPoint;
              totalanswers = totalanswers + (arr[0].questions[i].currentAnswer ? +arr[0].questions[i].currentAnswer : 0);
            }
          }

          return totalanswers.toString() + "/" + total.toString();
        }
      }, {
        key: "audit",
        value: function audit() {}
      }, {
        key: "save",
        value: function save() {
          this.error = true;
          this.underdeveloped = false;
        }
      }, {
        key: "reports",
        value: function reports() {}
      }, {
        key: "saveAction",
        value: function saveAction() {
          this.error = false;
          this.underdeveloped = true;
        }
      }, {
        key: "auditPrint",
        value: function auditPrint() {
          localStorage.setItem("AuditData", JSON.stringify(this.mySections));
          localStorage.setItem("auditDate", new Date().toLocaleDateString());
          localStorage.setItem("auditTime", new Date().getHours().toString() + ":" + new Date().getMinutes().toString());
          this.router.navigateByUrl('auditPrint');
        }
      }]);

      return AuditComponent;
    }();

    AuditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    AuditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-audit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./audit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/audit.component.html"))["default"]
    })], AuditComponent);
    /***/
  },

  /***/
  "./src/app/auditPrint.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/auditPrint.component.ts ***!
    \*****************************************/

  /*! exports provided: AuditPrintComponent */

  /***/
  function srcAppAuditPrintComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuditPrintComponent", function () {
      return AuditPrintComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");

    var AuditPrintComponent = /*#__PURE__*/function () {
      function AuditPrintComponent(service) {
        _classCallCheck(this, AuditPrintComponent);

        this.service = service;
        this.mySections = [];
        this.load = false;
        this.startprint = false;
        this.mySections = JSON.parse(localStorage.getItem("AuditData"));
        this.AuditDate = localStorage.getItem("auditDate");
        this.AuditTime = localStorage.getItem("auditTime");
        this.username = localStorage.getItem("username");
        this.load = true;
      }

      _createClass(AuditPrintComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getTotal",
        value: function getTotal(secid) {
          var str = "";
          var total = 0;
          var totalanswers = 0;
          var arr = this.mySections.filter(function (item) {
            return item.id == secid;
          });

          for (var i = 0; i < arr[0].questions.length; i++) {
            if (arr[0].questions[i].currentAnswer != 'N/A') {
              total = total + arr[0].questions[i].maxPoint;
              totalanswers = totalanswers + (arr[0].questions[i].currentAnswer ? +arr[0].questions[i].currentAnswer : 0);
            }
          }

          return totalanswers.toString() + "/" + total.toString();
        }
      }, {
        key: "getTotalMax",
        value: function getTotalMax(secid) {
          var str = "";
          var total = 0;
          var totalanswers = 0;
          var arr = this.mySections.filter(function (item) {
            return item.id == secid;
          });

          for (var i = 0; i < arr[0].questions.length; i++) {
            if (arr[0].questions[i].currentAnswer != 'N/A') {
              total = total + arr[0].questions[i].maxPoint;
              totalanswers = totalanswers + (arr[0].questions[i].currentAnswer ? +arr[0].questions[i].currentAnswer : 0);
            }
          }

          return total.toString();
        }
      }, {
        key: "getTotalAudit",
        value: function getTotalAudit(secid) {
          var str = "";
          var total = 0;
          var totalanswers = 0;
          var arr = this.mySections.filter(function (item) {
            return item.id == secid;
          });

          for (var i = 0; i < arr[0].questions.length; i++) {
            if (arr[0].questions[i].currentAnswer != 'N/A') {
              total = total + arr[0].questions[i].maxPoint;
              totalanswers = totalanswers + (arr[0].questions[i].currentAnswer ? +arr[0].questions[i].currentAnswer : 0);
            }
          }

          return totalanswers.toString();
        }
      }, {
        key: "getTotalPercentage",
        value: function getTotalPercentage(secid) {
          var str = "";
          var total = 0;
          var totalanswers = 0;
          var arr = this.mySections.filter(function (item) {
            return item.id == secid;
          });

          for (var i = 0; i < arr[0].questions.length; i++) {
            if (arr[0].questions[i].currentAnswer != 'N/A') {
              total = total + arr[0].questions[i].maxPoint;
              totalanswers = totalanswers + (arr[0].questions[i].currentAnswer ? +arr[0].questions[i].currentAnswer : 0);
            }
          }

          var value = totalanswers * 100 / total;
          return Math.round(value * 10) / 10;
        }
      }, {
        key: "getPercentage",
        value: function getPercentage(value) {
          if (!value) value = 0;
          var val = value * 100 / 5;
          return Math.round(val * 10) / 10;
        }
      }, {
        key: "calcMax",
        value: function calcMax() {
          var total = 0;

          for (var i = 0; i < this.mySections.length; i++) {
            total = total + Number.parseInt(this.getTotalMax(this.mySections[i].id));
          }

          return total.toString();
        }
      }, {
        key: "calcMaxAudit",
        value: function calcMaxAudit() {
          var total = 0;

          for (var i = 0; i < this.mySections.length; i++) {
            total = total + Number.parseInt(this.getTotalAudit(this.mySections[i].id));
          }

          return total.toString();
        }
      }, {
        key: "calcMaxPercentage",
        value: function calcMaxPercentage() {
          var val = Number.parseInt(this.calcMaxAudit()) * 100 / Number.parseInt(this.calcMax());
          return Math.round(val * 10) / 10;
        }
      }, {
        key: "getResultFinal",
        value: function getResultFinal() {
          if (this.calcMaxPercentage() < 50) return "Fail";else return "Success";
        }
      }, {
        key: "print",
        value: function print() {
          var _this2 = this;

          this.startprint = true;
          setTimeout(function () {
            var divContents = document.getElementById("maincontent").innerHTML;
            var a = window.open('', '', 'height=600, width=900');
            a.document.write('<html>');
            a.document.write('<body>');
            a.document.write(divContents);
            a.document.write('</body></html>');
            a.document.close();
            a.print();
            _this2.startprint = false;
          }, 500);
        }
      }]);

      return AuditPrintComponent;
    }();

    AuditPrintComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    AuditPrintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auditPrint',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auditPrint.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auditPrint.component.html"))["default"]
    })], AuditPrintComponent);
    /***/
  },

  /***/
  "./src/app/finish.component.ts":
  /*!*************************************!*\
    !*** ./src/app/finish.component.ts ***!
    \*************************************/

  /*! exports provided: FinishComponent */

  /***/
  function srcAppFinishComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishComponent", function () {
      return FinishComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FinishComponent = /*#__PURE__*/function () {
      function FinishComponent(router) {
        _classCallCheck(this, FinishComponent);

        this.router = router;
      }

      _createClass(FinishComponent, [{
        key: "back",
        value: function back() {
          this.router.navigateByUrl('home');
        }
      }]);

      return FinishComponent;
    }();

    FinishComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FinishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-finish',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./finish.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/finish.component.html"))["default"]
    })], FinishComponent);
    /***/
  },

  /***/
  "./src/app/home.component.ts":
  /*!***********************************!*\
    !*** ./src/app/home.component.ts ***!
    \***********************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent = function HomeComponent(router, service) {
      _classCallCheck(this, HomeComponent);

      this.router = router;
      this.service = service;
      this.title = 'feedback';
    };

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home.component.html"))["default"]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login.component.ts":
  /*!************************************!*\
    !*** ./src/app/login.component.ts ***!
    \************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.showLoginFail = false;
      }

      _createClass(LoginComponent, [{
        key: "login",
        value: function login() {
          this.showLoginFail = false;

          if (this.userName == "ehab" && this.password == "000" || this.userName == "bassem" && this.password == "000") {
            localStorage.setItem("username", this.userName);
            this.router.navigateByUrl('audit');
          } else this.showLoginFail = true;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html"))["default"]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/register.component.ts":
  /*!***************************************!*\
    !*** ./src/app/register.component.ts ***!
    \***************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(router, service) {
        var _this3 = this;

        _classCallCheck(this, RegisterComponent);

        this.router = router;
        this.service = service;
        this.title = 'feedback';
        this.mode = 1;
        this.OrganizationTypes = [];
        this.service.getorganizationType().subscribe(function (res) {
          _this3.OrganizationTypes = res;
        });
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Register",
        value: function Register() {
          this.router.navigateByUrl('login');
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register.component.html"))["default"]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      organizationType: 1
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Ahmed Esmat\Free Lance\feedback\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map