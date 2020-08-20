import LinesByStopController from './LinesByStopController';
import { getLinesByStopUseCase } from '../../useCases/linesByStop';

const linesByStopController = new LinesByStopController( getLinesByStopUseCase );

export default linesByStopController;