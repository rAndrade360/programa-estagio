import VehiclesByLineController from './VehiclesByLineController';
import { getVehiclesByLineUseCase } from '../../useCases/vehiclesByLine';

const vehiclesByLineController = new VehiclesByLineController( getVehiclesByLineUseCase );

export default vehiclesByLineController;