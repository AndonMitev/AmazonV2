const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './photos/');
    },
    filename: function(req, file, cb) {
        const date = new Date().toISOString().replace(/:/g, '-');
        const fileName = date + file.originalname;
        cb(null, fileName);
    }
});

module.exports = multer({
    storage,
    limits: {
        fieldSize: 1024 * 1024 * 5
    },
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});


