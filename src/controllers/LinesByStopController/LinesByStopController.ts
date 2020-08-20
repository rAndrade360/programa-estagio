import { Request, Response} from 'express';
import connection from '../../database/connection';
import GetLinesByStopUseCase from '../../useCases/linesByStop/GetLinesByStopUseCase';
export default class LinesByStopControler {
  constructor(
    private getLinesByStopUseCase: GetLinesByStopUseCase
  ){}
    async getLinesByStop(request: Request, response: Response): Promise<Response> {
        const { stopId } = request.params;
        try {
          const linesByStop = await this.getLinesByStopUseCase.execute({stop_id: Number(stopId)});
        return response.json({stop_id: stopId, lines: linesByStop});
        } catch (error) {
        return response.json({error: 'An error ocurred while getting'});  
        }
        
    }
}
