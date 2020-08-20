import connection from "../../../database/connection";
import IStopsByPositionRepository from "../IStopsByPositionRepository";
import Stop from "../../../entities/Stop";

export default class StopsByPositionRepositoryPostgres implements IStopsByPositionRepository {
   
    async getStopsByPosition(latitude: number, longitude: number): Promise<Array<Stop>> {
        const coordinateAsDistante = `(6371 * acos(cos(radians(${latitude}))
        * cos(radians(latitude))
        * cos(radians(longitude)
        - radians(${longitude}))
        + sin(radians(${latitude}))
        * sin(radians(latitude))))`;
        
        try {
            const nearbyStops = await connection('stops')
              .select('*')
              .whereRaw(`${coordinateAsDistante} < 10`);
        return nearbyStops;
        } catch (error) {
           throw new Error();
        }
    }
}