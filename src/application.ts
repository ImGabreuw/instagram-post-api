import * as dotenv from "dotenv";
import express from 'express';
import instagramRoutes from './routes/instagram-routes';
dotenv.config();

class Application {
  readonly application = express();

  constructor() {
    this.routes();
  }

  routes() {
    this.application.use("/api", instagramRoutes)
  }

}

export default new Application().application;