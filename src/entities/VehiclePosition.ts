export default class VehiclePosition {
    public readonly vehicle_id: number;
    public latitude: number;
    public longitude: number;
    constructor(props: VehiclePosition){
        this.vehicle_id = props.vehicle_id;
        this.latitude = props.latitude;
        this.longitude = props.longitude;
    }
}