import { Router } from 'express';
import { getBuildings, addBuilding } from '../controllers/building.mjs';

const router = Router();

router.get('/buildings', getBuildings);
router.post('/building', addBuilding);

export default router;
