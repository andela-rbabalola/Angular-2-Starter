"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUsers = function () {
        return USERS;
    };
    UserService.prototype.getUser = function (id) {
        return USERS.find(function (user) { return user.id === id; });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
var USERS = [
    { id: 1, name: 'Rotimi', username: 'Babalola' },
    { id: 2, name: 'Titi', username: 'Babalola' },
    { id: 3, name: 'John', username: 'Doe' },
    { id: 4, name: 'Jane', username: 'Doe' },
    { id: 5, name: 'Alex', username: 'Morgan' }
];
//# sourceMappingURL=user.service.js.map