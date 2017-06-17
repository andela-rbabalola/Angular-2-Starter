"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserThumbnailComponent = (function () {
    function UserThumbnailComponent() {
    }
    return UserThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UserThumbnailComponent.prototype, "user", void 0);
UserThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'user-thumbnail',
        template: "\n    <div class=\"container\">\n      <div class=\"card\" style=\"width: 20rem;\">\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">{{ user.name }}</h4>\n            <p class=\"card-text\"> {{ user.username }}</p>\n            <a [routerLink]=\"['/users', user.id]\" class=\"btn btn-primary\">See Profile</a>\n        </div>\n      </div>\n    </div>\n  "
    })
], UserThumbnailComponent);
exports.UserThumbnailComponent = UserThumbnailComponent;
//# sourceMappingURL=user-thumbnail.component.js.map