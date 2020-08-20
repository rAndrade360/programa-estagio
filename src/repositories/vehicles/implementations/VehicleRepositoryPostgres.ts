import IVehicleRepository from "../IVehicleRepository";
import Vehicle from "../../../entities/Vehicle";
import connection from "../../../database/connection";

export default class VehicleRepositoryPostgres implements IVehicleRepository{
    constructor(){

    }
    async save(vehicle: Vehicle): Promise<void> {
        try {
            await connection('vehicles').insert(vehicle);
            
        } catch (error) {
            throw new Error()
        }
    }
    async findAll(): Promise<Array<Vehicle>> {
        const vehicles =  await connection('vehicles').select('id', 'name', 'model', 'line_id');
        return vehicles;
    }
    async findById(vehicleId: number): Promise<Vehicle> {
        const vehicles =  await connection('vehicles').select('id', 'name', 'model', 'line_id').where('id', vehicleId).first();
        return vehicles;
    }
    async update(vehicle: Vehicle): Promise<void> {
        try {
            await connection('vehicles').update({name: vehicle.name, model: vehicle.model, line_id: vehicle.line_id}).where('id', vehicle.id);
        } catch (error) {
            throw new Error('Error')
        }
    }
    async delete(vehicleId: number): Promise<void> {
        try {
            await connection('vehicles').where('id', vehicleId).delete();
        } catch (error) {
            throw new Error('Can not delete');
        }
    }
    
}