import IStopRepository from "../../repositories/stops/IStopRepository";
import ICreateStopRquestDTO from "../../dtos/stops/CreateStopDTO";
import Stop from "../../entities/Stop";

export default class CreateStopUseCase {
    constructor(
        private stopRepository: IStopRepository
    ){

    }
    async execute(data: ICreateStopRquestDTO) {
        const stop = new Stop({name: data.name, latitude: data.latitude, longitude: data.longitude});
        await this.stopRepository.save(stop, data.lines);
    }
}