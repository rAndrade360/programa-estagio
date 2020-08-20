import IVehicleRepository from "../../repositories/vehicles/IVehicleRepository";
import ICreateVehicleRequestDTO from "../../dtos/vehicles/CreateVehicleDTO";
import Vehicle from "../../entities/Vehicle";

export default class CreateVehicleUseCase {
    constructor(
        private vehicleRepository: IVehicleRepository
    ){}
    async execute(data: ICreateVehicleRequestDTO) {
        const vehicle = new Vehicle(data);
        await this.vehicleRepository.save(vehicle);
    }
}
