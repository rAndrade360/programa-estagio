import ILineRepository from "../ILineRepository";
import Line from "../../../entities/Line";
import connection from "../../../database/connection";

export default class LineRepositoryPostgres implements ILineRepository{
   
    async save(line: Line, stops: Array<number>){
        const transactionManager = await connection.transaction();
    try {    
      const lineStored = await transactionManager('lines').insert({name: line.name}).returning('id');
      const line_id = lineStored[0];
      const stopsOfThisLineToStore = stops.map((stop: number) => ({
        line_id,
        stop_id: Number(stop)
      }));
      await transactionManager('stop_line').insert(stopsOfThisLineToStore);
      await transactionManager.commit();
    } catch (error) {
      await transactionManager.rollback();
      throw new Error("An error occurred while storing in database");
    }
    }
    async fildAll(): Promise<Line[]> {
        try {
            const lines = await connection('lines').select('id', 'name');
            return lines;
        } catch (error) {
            throw new Error("An error occurred while searching in database.");
        }
    }
    async findById(lineId: number): Promise<Line> {
        try {
            const lines = await connection('lines').select('id', 'name').where('id', lineId).first();
            return lines;
        } catch (error) {
            throw new Error("An error occurred while searching in database.");
        }
    }
    async update(line: Line): Promise<void> {
        try {
            await connection('lines').update({
              name: line.name,
            }).where('id', line.id);
        } catch (error) {
            throw new Error('An error ocurred when try update line')
        }
    }
    async delete(lineId: number): Promise<void> {
        try {
            await connection('lines').where('id', lineId).del()
        } catch (error) {
            throw new Error('An error ocurred when try update line');
        }
    }
}