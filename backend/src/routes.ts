import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';


const routes = Router();

// default methods of a control: index, show, create, update, delete

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', OrphanagesController.create);

export default routes;