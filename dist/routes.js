"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_list_component_1 = require("./shared/users-list.component");
var user_details_component_1 = require("./users/user-details/user-details.component");
exports.appRoutes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: users_list_component_1.UsersListComponent },
    { path: 'users/:id', component: user_details_component_1.UserDetailsComponent },
];
//# sourceMappingURL=routes.js.map