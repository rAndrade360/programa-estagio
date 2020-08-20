import * as Yup from 'yup';

interface ILineSchema{
    name: string;
    stops?: Array<number>
}

export async  function createLineSchemaValidator(lineSchema: ILineSchema) {
    const schema = Yup.object().shape({
        name: Yup.string().required(),
        stops: Yup.array().of(Yup.number()).optional()
    });
    return await schema.isValid(lineSchema);
}

export async  function updateLineSchemaValidator(lineSchema: ILineSchema) {
    const schema = Yup.object().shape({
        name: Yup.string().required()
    });
    return await schema.isValid(lineSchema);
}