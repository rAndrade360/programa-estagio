import * as Yup from 'yup';
import Stop from '../entities/Stop';

interface IPositionSchema{
    vehicle_id?: number;
    longitude: number;
    latitude: number;
}

export async  function createPositionSchemaValidator(positionSchema: IPositionSchema) {
    const schema = Yup.object().shape({
        vehicle_id: Yup.number().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
    });
    return await schema.isValid(positionSchema);
}

export async  function updatePositionSchemaValidator(positionSchema: IPositionSchema) {
    const schema = Yup.object().shape({
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
    });
    return await schema.isValid(positionSchema);
}