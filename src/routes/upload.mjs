import { Router } from 'express';
import { upload } from '../multer.mjs';
import { uploadController } from '../controllers/upload.mjs';

const router = Router();

/**
 * @swagger
 * /upload:
 *  post:
 *    summary: Upload a file
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              file:
 *                type: string
 *                format: binary
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
 *                path:
 *                  example: /uploads/2022-09-2/file-1644387106564.jpg
 */
router.post('/upload', upload.single('file'), uploadController);

export default router;
