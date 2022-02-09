import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { folderName } from './utils/folder-name.mjs';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const basePath = path.join(process.cwd(), 'uploads');
    const folder = path.join(basePath, folderName());

    !fs.existsSync(folder) && fs.mkdirSync(folder);

    cb(null, folder);
  },
  filename(req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });
