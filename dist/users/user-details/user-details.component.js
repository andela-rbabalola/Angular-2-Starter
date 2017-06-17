"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserDetailsComponent = (function () {
    function UserDetailsComponent() {
    }
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    core_1.Component({
        template: "\n    <div class=\"jumbotron user-info\">\n      <h1 class=\"display-3\">Hello, world!</h1>\n      <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n      <hr class=\"my-4\">\n      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n      <p class=\"lead\">\n        <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n      </p>\n    </div>\n  ",
        styles: ["\n    .user-info { margin-top: 20px; }\n    .\n  "]
    })
], UserDetailsComponent);
exports.UserDetailsComponent = UserDetailsComponent;
//# sourceMappingURL=user-details.component.js.map