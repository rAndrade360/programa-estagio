import ICreatePositionRequestDTO from '../../dtos/vehiclePositions/CreatePositionDTO';
import VehiclePosition from '../../entities/VehiclePosition';
import IVehiclePositionRepository from '../../repositories/vehiclePositions/IVehiclePositionsRepository';
export default class CreateVehiclePositionUseCase {
    constructor(
        private vehiclePositionRepository: IVehiclePositionRepository
    ){}
    async execute(position: ICreatePositionRequestDTO) {
        const vehiclePosition = new VehiclePosition(position)
      await this.vehiclePositionRepository.save(vehiclePosition);
    }
}