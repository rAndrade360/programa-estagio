import ILinesByStopRepository from "../ILinesByStopsRepository";
import connection from "../../../database/connection";
import Line from "../../../entities/Line";

export default class LinesByStopRepositoryPostgres implements ILinesByStopRepository {
    async getLinesPerStopRepository(stopId: number): Promise<Array<Line>> {
        try {
            const linesPerStop = await connection('stop_line')
          .join('lines', 'stop_line.line_id', '=', 'lines.id')
          .where('stop_line.stop_id', Number(stopId))
          .select('lines.*');
        return linesPerStop;
        } catch (error) {
            throw new Error('Error while search');
        }
    }
}