import Vehicle from "../../entities/Vehicle";

export default interface IVehicleRepository {
    save(vehicle: Vehicle): Promise<void>;
    findAll(): Promise<Array<Vehicle>>;
    findById(vehicleId: number): Promise<Vehicle>;
    update(vehicle: Vehicle): Promise<void>;
    delete(vehicleId: number): Promise<void>;
}