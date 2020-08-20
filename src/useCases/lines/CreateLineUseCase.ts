import ILineRepository from "../../repositories/lines/ILineRepository";
import ICreateLineRequestDTO from "../../dtos/lines/CreateLineDTO";
import Line from "../../entities/Line";

export default class CreateLineUseCase {
    constructor(
        private lineRepository: ILineRepository
    ){

    }
    async execute(data: ICreateLineRequestDTO): Promise<void> {
        const line = new Line(data.name);
        return await this.lineRepository.save(line, data.stops);
    }
}