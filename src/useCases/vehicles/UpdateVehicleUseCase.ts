import IVehicleRepository from "../../repositories/vehicles/IVehicleRepository";
import IUpdateVehicleRequestDTO from "../../dtos/vehicles/UpdateVehicleDTO";
import Vehicle from "../../entities/Vehicle";

export default class UpdateVehicleUseCase {
    constructor(
        private vehicleRepository: IVehicleRepository
    ){}
    async execute(data: IUpdateVehicleRequestDTO) {
        const vehicle = new Vehicle(data, data.id);
        await this.vehicleRepository.update(vehicle);
    }
}