export class Entity {
    protected type: string;
    protected name: string;
    protected destructable?: boolean;
    protected require?: Array<Entity>;
    protected grants?: Array<Entity>
}

export class WallEntity extends Entity {
    type="boundry";
    name="wall";
    destructable=false;
}

export class DoorEntity extends Entity {
    type="boundry";
    name="door";
    destructable=true;
}