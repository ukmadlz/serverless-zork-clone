"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapGenerator = void 0;
var map_entities_1 = require("./map-entities");
var MapGenerator = /** @class */ (function () {
    function MapGenerator(_a) {
        var width = _a.width, height = _a.height;
        var minSize = 4;
        if (width < minSize || height < minSize)
            throw new Error("Map must be ".concat(minSize, " x ").concat(minSize, " minimum"));
        this.width = width;
        this.height = height;
    }
    MapGenerator.prototype.buildMapArray = function () {
        var map = new Array();
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.height; j++) {
                if (!map[j])
                    map[j] = new Array();
                map[j][i] = null;
            }
        }
        return this.addMapBorder(map);
    };
    MapGenerator.prototype.addMapBorder = function (map) {
        // define top wall
        for (var i = 0; i < this.width; i++) {
            map[0][i] = new map_entities_1.WallEntity();
        }
        // define left wall
        for (var i = 0; i < this.height; i++) {
            map[i][0] = new map_entities_1.WallEntity();
        }
        // define bottom wall
        for (var i = 0; i < this.width; i++) {
            map[this.height - 1][i] = new map_entities_1.WallEntity();
        }
        // define right wall
        for (var i = 0; i < this.height; i++) {
            map[i][this.width - 1] = new map_entities_1.WallEntity();
        }
        return map;
    };
    MapGenerator.prototype.addMapObstacles = function (percentage) {
        var totalObstacles = ((this.width * this.height) / 100) * percentage;
    };
    MapGenerator.prototype.render = function () {
        this.map = this.buildMapArray();
        return this.map;
    };
    return MapGenerator;
}());
exports.MapGenerator = MapGenerator;
//# sourceMappingURL=map-generator.js.map