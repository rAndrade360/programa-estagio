import IVehiclePositionRepository from "../IVehiclePositionsRepository";
import connection from "../../../database/connection";
import VehiclePosition from "../../../entities/VehiclePosition";

export default class VehicleRepositoryPostgres implements IVehiclePositionRepository{
    constructor(){

    }
    async save(position: VehiclePosition): Promise<void> {
        try {
            await connection('positions').insert(position);
            
        } catch (error) {
            throw new Error()
        }
    }
    async findAll(): Promise<Array<VehiclePosition>> {
        try {
          const positions =  await connection('positions').select('latitude', 'longitude', 'vehicle_id');
          return positions;
        } catch (error) {
            throw new Error('An error ocurred when try get positions')
        }
        
    }
    async findById(vehicleId: number): Promise<VehiclePosition> {
        try {
          const position =  await connection('positions')
            .select('latitude', 'longitude', 'vehicle_id')
            .where('vehicle_id', vehicleId)
            .first();
          return position;
        } catch (error) {
            throw new Error('An error ocurred when try get position')
        }
        
    }
    async update(position: VehiclePosition): Promise<void> {
        try {
            await connection('positions').update({
                latitude: position.latitude,
                longitude: position.longitude
            }).where('vehicle_id', position.vehicle_id);
        } catch (error) {
            throw new Error('An error ocurred when try update position')
        }
    }
    async delete(vehicleId: number): Promise<void> {
        try {
            await connection('positions').where('vehicle_id', vehicleId).del();
        } catch (error) {
            console.log(error);
            throw new Error('Can not delete');
        }
    }
    
}