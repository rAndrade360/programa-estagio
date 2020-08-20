import connection from "../../../database/connection";
import Stop from "../../../entities/Stop";
import IStopRepository from "../IStopRepository";

export default class StopRepositoryPostgres implements IStopRepository{
    constructor(){

    }
    
    async findByLatitudeAndLongitude(latitude: number, longitude: number): Promise<Stop> {
        try {
          const stopExists: Stop = await connection('stops').where({latitude, longitude}).limit(1).first();
          return(stopExists);
        } catch (error) {
          throw new Error("");
        }
    }
    async save(stop: Stop, lines?: Array<number>): Promise<void> {
      const transactionManager = await connection.transaction();
        try {    
            const stopStored = await transactionManager('stops').insert({
              name: stop.name,
              latitude: stop.latitude,
              longitude: stop.longitude
            }).returning('id');
            const stop_id = stopStored[0];
            const linesOfThisStopToStore = lines? lines.map((line: number) => ({
              line_id: Number(line),
              stop_id
            })): [];
            await transactionManager('stop_line').insert(linesOfThisStopToStore);
            await transactionManager.commit();
          } catch (error) {
            await transactionManager.rollback();
            throw new Error(error);
          }
    }

    async fildAll(): Promise<Array<Stop>> {
      try {
        const stops = await connection('stops').select('id', 'name', 'latitude', 'longitude');
        return stops;
      } catch (error) {
        throw new Error("An error ocurred when try get stops");
      }
  }
    async findById(stopId: number): Promise<Stop> {
      try {
        const stop =  await connection('stops').select('id', 'name', 'latitude', 'longitude').where('id', stopId).first();
        const stopResponse = new Stop(stop, stop.id);
        return stopResponse;
      } catch (error) {
        throw new Error('An error ocurred when try get stop')
      }
    }
    async update(stop: Stop): Promise<void> {
        try {
            await connection('stops').update({
              name: stop.name,
              latitude: stop.latitude,
              longitude: stop.longitude
            }).where('id', stop.id);
        } catch (error) {
            throw new Error('An error ocurred when try update stop')
        }
    }
    async delete(stopId: number): Promise<void> {
        try {
            await connection('stops').where('id', stopId).delete();
        } catch (error) {
            throw new Error('Can not delete');
        }
    }
    
}