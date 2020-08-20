import express from 'express';
import helmet from 'helmet';
import routes from './routes';

class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
  }

  middlewares() {
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(routes);
  }

  init() {
    const PORT = 3333;
    const HOST = '0.0.0.0'
    this.app.listen(PORT, HOST);
  }
}

export default App;
