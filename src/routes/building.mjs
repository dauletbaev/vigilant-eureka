import { Router } from 'express';
import { getBuildings, addBuilding } from '../controllers/building.mjs';

const router = Router();

/**
 * @swagger
 * /buildings:
 *  get:
 *   summary: Get all buildings
 */
router.get('/buildings', getBuildings);

/**
 * @swagger
 * /building:
 *  post:
 *    summary: Add new building
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 */
router.post('/building', addBuilding);

export default router;
