import Router from 'koa-router';

import { appController, staticController } from './controllers/site_controller';
import pingController from './controllers/api/ping';

const router = new Router();

// --- api/*
const apiRoute = new Router();
apiRoute.all('/ping', pingController);

router.use('/api', apiRoute.routes(), apiRoute.allowedMethods());
// ---

router.get('/assets/*', staticController);
router.get(['/', '/*'], appController);

export default router;
