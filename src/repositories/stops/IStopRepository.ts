import Stop from "../../entities/Stop";

export default interface IStopRepository {
    save(stop: Stop, lines?: Array<number>): Promise<void>;
    fildAll(): Promise<Array<Stop>>;
    findByLatitudeAndLongitude(latitude: number, longitude: number): Promise<Stop>;
    findById(stopId: number): Promise<Stop>;
    update(stop: Stop): Promise<void>;
    delete(stopId: number): Promise<void>;
}