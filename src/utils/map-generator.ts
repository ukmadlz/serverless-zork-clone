import { Entity, WallEntity, DoorEntity } from "./map-entities";

export class MapGenerator {
  private width: number;
  private height: number;
  private map: Array<Array<Entity>>;
  constructor({
    width,
    height,
  }: {
    width: number,
    height: number,
  }) {
    const minSize = 4
    if (width < minSize || height < minSize)
      throw new Error(`Map must be ${minSize} x ${minSize} minimum`);
    this.width =  width;
    this.height = height;
  }
  private buildMapArray () {
    const map = new Array();
    for(let i = 0; i < this.height; i++) {
      for(let j = 0; j < this.height; j++) {
        if(!map[j]) map[j] = new Array();
        map[j][i] = null;
      }
    }
    return this.addMapBorder(map);
  }

  private addMapBorder (map: Array<Array<Entity>>) {
    // define top wall
    for(let i=0; i<this.width; i++) {
      map[0][i] = new WallEntity();
    }
    // define left wall
    for(let i=0; i<this.height; i++) {
      map[i][0] = new WallEntity();
    }
    // define bottom wall
    for(let i=0; i<this.width; i++) {
      map[this.height-1][i] = new WallEntity();
    }
    // define right wall
    for(let i=0; i<this.height; i++) {
      map[i][this.width-1] = new WallEntity();
    }
    return map;
  }

  public addMapObstacles(percentage: number) {
    const totalObstacles = ((this.width * this.height) / 100) * percentage;

  }

  public render() {
    this.map = this.buildMapArray();
    return this.map;
  }
}