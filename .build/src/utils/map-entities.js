"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoorEntity = exports.WallEntity = exports.Entity = void 0;
var Entity = /** @class */ (function () {
    function Entity() {
    }
    return Entity;
}());
exports.Entity = Entity;
var WallEntity = /** @class */ (function (_super) {
    __extends(WallEntity, _super);
    function WallEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "boundry";
        _this.name = "wall";
        _this.destructable = false;
        return _this;
    }
    return WallEntity;
}(Entity));
exports.WallEntity = WallEntity;
var DoorEntity = /** @class */ (function (_super) {
    __extends(DoorEntity, _super);
    function DoorEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "boundry";
        _this.name = "door";
        _this.destructable = true;
        return _this;
    }
    return DoorEntity;
}(Entity));
exports.DoorEntity = DoorEntity;
//# sourceMappingURL=map-entities.js.map