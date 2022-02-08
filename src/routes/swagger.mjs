import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { options } from '../swagger.mjs';

const router = Router();

router.use('/docs', swaggerUI.serve);
router.get('/docs', swaggerUI.setup(swaggerJsdoc(options)));

export default router;
