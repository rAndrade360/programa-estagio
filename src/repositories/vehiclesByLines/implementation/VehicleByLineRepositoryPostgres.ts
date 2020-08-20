import IVehicleByLineRepository from "../IVehiclesByLineRepository";
import connection from "../../../database/connection";
import Vehicle from "../../../entities/Vehicle";

export default class VehicleByLineRepositoryPostgres implements IVehicleByLineRepository {
    async getVehiclesByLine(lineId: number): Promise<Array<Vehicle>> {
        try {
            const vehicles = await connection('vehicles').where('line_id', Number(lineId)).select('*');
            return vehicles;
        } catch (error) {
            throw new Error('Error');
        }
    }
}