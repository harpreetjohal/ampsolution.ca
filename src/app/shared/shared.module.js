"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var header_component_1 = require("./components/header.component");
var footer_component_1 = require("./components/footer.component");
var index_component_1 = require("./components/index.component");
var about_component_1 = require("./components/about.component");
var portfolio_component_1 = require("./components/portfolio.component");
var team_component_1 = require("./components/team.component");
var contact_component_1 = require("./components/contact.component");
var feature_component_1 = require("./components/feature.component");
var http_service_1 = require("./services/http.service");
var validation_service_1 = require("./validation/validation.service");
var ngx_owl_carousel_1 = require("ngx-owl-carousel");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    // providers will be singleton and when we use this module in other modules
    // they will not have information regarding providers
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                http_service_1.HttpService,
                validation_service_1.ValidationService
            ]
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                ngx_owl_carousel_1.OwlModule
            ],
            // dynamic components resolved by type
            entryComponents: [],
            exports: [
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent
            ],
            declarations: [
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                index_component_1.IndexComponent,
                about_component_1.AboutComponent,
                portfolio_component_1.PortfolioComponent,
                team_component_1.TeamComponent,
                contact_component_1.ContactComponent,
                feature_component_1.FeatureComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map