import IUpdateLineRequestDTO from "../../dtos/lines/UpdateLineDTO";
import ILineRepository from "../../repositories/lines/ILineRepository";
import Line from "../../entities/Line";

export default class UpdateStopUseCase {
    constructor(
        private lineRepository: ILineRepository
    ){}
    async execute(data: IUpdateLineRequestDTO) {
        const line = new Line(data.name, data.id);
        await this.lineRepository.update(line);
    }
}