export default class Vehicle {
    public readonly id?: number;
    public name: string;
    public model: string;
    public line_id: number;
    constructor(props: Omit<Vehicle, 'id'>, id?:number){
        this.id = id;
        this.name = props.name;
        this.model = props.model;
        this.line_id = props.line_id;
    }
}