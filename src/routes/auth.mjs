import { Router } from 'express';
import { loginController, signupController } from '../controllers/auth.mjs';

const router = Router();

/**
 * @swagger
 * /login:
 *  post:
 *    summary: Login to account
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      '200':
 *        description: Success response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                ok:
 *                  example: true
 *                token:
 *                  example: diewoinio
 */
router.post('/login', loginController);

/**
 * @swagger
 * /signup:
 *  post:
 *    summary: Create a new account
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *              secret:
 *                type: string
 *    responses:
 *      '201':
 *        description: Created
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                ok:
 *                  example: true
 */
router.post('/signup', signupController);

export default router;
