import express from 'express';

export abstract class AppRouter {
  private static router: express.Router;

  static get instance(): express.Router {
    if (!AppRouter.router) {
      AppRouter.router = express.Router();
    }

    return AppRouter.router;
  }
}
