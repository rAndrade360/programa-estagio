import VehiclePosition from "../../entities/VehiclePosition";

export default interface IVehiclePositionRepository {
    save(position: VehiclePosition):Promise<void>;
    findAll(): Promise<Array<VehiclePosition>>;
    findById(vehicleId: number): Promise<VehiclePosition>;
    update(position: VehiclePosition): Promise<void>;
    delete(vehicleId: number): Promise<void>;
}