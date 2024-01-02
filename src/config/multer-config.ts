import multer from 'multer';
import { RandomStringGenerator } from '../utility/cryptography';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/image');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + RandomStringGenerator(2, 2) + path.extname(file.originalname);
    req.data.fileName = 'file-' + uniqueSuffix;
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});
const upload = multer({ storage: storage }).single('file');

export default upload;
