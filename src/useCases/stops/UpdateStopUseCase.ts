import IStopRepository from "../../repositories/stops/IStopRepository";
import Stop from "../../entities/Stop";
import IUpdateStopRequestDTO from "../../dtos/stops/UpdateStopDTO";

export default class UpdateStopUseCase {
    constructor(
        private stopRepository: IStopRepository
    ){}
    async execute(data: IUpdateStopRequestDTO) {
        const stop = new Stop({
            name: data.name,
            latitude: data.latitude,
            longitude: data.longitude
        }, data.id);
        await this.stopRepository.update(stop);
    }
}