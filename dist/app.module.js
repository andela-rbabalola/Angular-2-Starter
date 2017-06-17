"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./nav/navbar.component");
var users_list_component_1 = require("./shared/users-list.component");
var user_form_component_1 = require("./users/user-form.component");
var user_thumbnail_component_1 = require("./users/user-thumbnail/user-thumbnail.component");
var user_details_component_1 = require("./users/user-details/user-details.component");
var user_service_1 = require("./shared/user.service");
var routes_1 = require("./routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            user_form_component_1.UserFormComponent,
            user_thumbnail_component_1.UserThumbnailComponent,
            navbar_component_1.NavBarComponent,
            users_list_component_1.UsersListComponent,
            user_details_component_1.UserDetailsComponent
        ],
        providers: [
            user_service_1.UserService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
;
//# sourceMappingURL=app.module.js.map