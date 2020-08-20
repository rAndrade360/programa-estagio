import IVehiclePositionRepository from "../../repositories/vehiclePositions/IVehiclePositionsRepository";
import IUpdateVehiclePositionRequestDTO from "../../dtos/vehiclePositions/UpdateVehiclePositionDTO";
import VehiclePosition from "../../entities/VehiclePosition";


export default class UpdateVehiclePositionUseCase {
    constructor(
        private vehiclePositionRepository: IVehiclePositionRepository
    ){}
    async execute(data: IUpdateVehiclePositionRequestDTO) {
        const vehiclePosition = new VehiclePosition({
            vehicle_id: data.vehicle_id,
            latitude: data.latitude,
            longitude: data.longitude
        });
        await this.vehiclePositionRepository.update(vehiclePosition);
    }
}