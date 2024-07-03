import { Router } from 'express';
import { getExample } from '../controllers/exampleController';

const router: Router = Router();

router.get('/example', getExample);

export default router;
