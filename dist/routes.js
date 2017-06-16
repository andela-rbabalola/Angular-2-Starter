"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = require("./app.component");
var user_details_component_1 = require("./users/user-details/user-details.component");
exports.appRoutes = [
    { path: 'users', component: app_component_1.AppComponent },
    { path: 'users/:id', component: user_details_component_1.UserDetailsComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map