import Line from "../../entities/Line";

export default interface ILineRepository {
    save(Line: Line, stops?: Array<number>): Promise<void>;
    fildAll(): Promise<Array<Line>>;
    findById(lineId: number): Promise<Line>;
    update(Line: Line): Promise<void>;
    delete(lineId: number): Promise<void>;
}