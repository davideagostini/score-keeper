export class Player {
    id: number;
    name: String;
    current_point: number;
    point: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}