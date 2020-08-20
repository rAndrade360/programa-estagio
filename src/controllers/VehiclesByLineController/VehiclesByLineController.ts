import {Request, Response} from 'express';
import connection from '../../database/connection';
import GetVehiclesByLineUseCase from '../../useCases/vehiclesByLine/GetVehiclesByLineUseCase';

export default class VehiclesByLineController {

  constructor(
    private getVehiclesByLineUseCase: GetVehiclesByLineUseCase
  ){}

  async getVehiclesByLine(request: Request, response: Response) {
    const { lineId } = request.params;
    try {
      const vehicles = await this.getVehiclesByLineUseCase.execute({line_id: Number(lineId)});
    return response.json(vehicles);
    } catch (error) {
      return response.status(400).json({error: 'A erro occurred'});
    }
    
  }
}