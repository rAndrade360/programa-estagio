export default class Stop {
    public readonly id?: number;
    public name: string;
    public latitude: number;
    public longitude: number;

    constructor(props: Omit<Stop, 'id'>, id?:number){
        this.id = id;
        this.name = props.name;
        this.latitude = props.latitude;
        this.longitude = props.longitude;
    }

}