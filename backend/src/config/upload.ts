import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        
        destination: path.join(__dirname, '..', '..', 'uploads'),

        filename: (request, file, cb) => {
            // in order to avoid two people uploading the same file 
            const fileName = `${Date.now()}-${file.originalname}`;

            cb(null, fileName);
        }
    })
};