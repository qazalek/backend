const router = require('express').Router();

let Book = require('../models/book.model');

router.route('/').get((req,res)=>{
    Book.find().then(r=>{
        res.json(r)
    })
})

router.route('/add').post((req,res)=>{
    const book = new Book({'title':req.body.title, 'author':req.body.author, 'description':req.body.description});
    const book2 = new Book({'title':"req.body.title", 'author':"req.body.author", 'description':"req.body.description"});
    book.save().then(r=>{
        res.json(r)
    }).catch(e=>{
        console.log('error' + e)
    })
})

router.route('/getAbook/:id').get((req,res)=>{
    Book.findById(req.params.id).then(r=>{
        res.json(r)
    }).catch(e=>{
        console.log("errr" + e);
    })
})

router.route('/delete/:id').delete((req,res)=>{
    Book.findByIdAndDelete(req.params.id).then(r=>{
        res.json(r)
    }).catch(e=>{
        console.log('error' + e)
    })
})


router.route('/update/:id').put((req,res)=>{
    Book.findOneAndUpdate({_id:req.params.id}, req.body).then(r=>{
        res.json(r)
    }).catch(e=>{
        console.log("error "  + e);
        res.json(e)
    })
})

module.exports = router



