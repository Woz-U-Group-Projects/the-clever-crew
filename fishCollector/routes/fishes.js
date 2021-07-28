var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); // need to connect to mongo database
var multer = require('multer');

//store image on back end
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname)
    }
});

var fileFilter = (req, file, cb) => {
    //accepted images
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false); 
    }
    
   
}

var upload = multer({storage: storage, limits: {
    fileSize: 1000 * 1000 * 5           // <---- limit size of image 
},
    fileFilter: fileFilter
});

var Fish = require('../../models/fish')

//post image with data
router.post('/', upload.single('fishImage'), (req, res, next) =>{
var fish = new Fish({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    fishImage: req.file.path,
    location: req.body.name,
    beer: req.body.name
    })
});

//get images
router.get('/', (req, res, next) =>{
    Fish.find()
    .select('name fishImage _id location beer')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            fishes: docs.map(doc => {
                return {
                    name: doc.name,
                    fishImage: doc.fishImage,
                    _id: doc._id,
                    location: doc.location,
                    beer: doc.beer,
                    request: {
                        type: "GET",
                        url:"http://localhost:3000/fishes/" + doc._id
                    }
                
                }
            })
        }
    })
});

//find a fish by ID... change to find by name if possible
router.get('/:fishId', (req, res, next) => {
    const id = req.params.fishId;
    Fish.findById(id)
    .select('name fishImage _id location beer')
    .exec()
    .then(doc => {
        if (doc) {
            res.status(200).json({
                fish: doc,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/fishes'
                }
            });
        } else {
            res.status(404)
            res.send('Fish Not Found');
        }
    })
})
    
 router.delete('/fishes/:id', function (req, res, next){
     let fishId = parseInt (req,params.id);
     models.fish 
     .destroy ({
         where: {fish_id: fishId}
     })
     .then(result => res.redirect('/fishes'))
     .catch(err => {
         res.status(400);
         res.send('fish won`t delete');
     })
 })     

 
module.exports = router;