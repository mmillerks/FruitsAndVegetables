require('dotenv').config();
console.log(process.env.MONGO_URI)
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Fruit = require('./models/fruits');
const vegetables = require('./models/vegetables');

//MVC SET_UP
//views    
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//models
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

//MIDDLEWEAR
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(req.body)
    next()
});


//Index - week 10 day 3
app.get('/fruits', function(req, res) {
    Fruit.find({}, (err, foundFruits) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('fruits/Index', {
                fruits: foundFruits
            })
        }
    })
});

app.get('/vegetables', function(req, res) {
    res.render('vegetables/Index', { vegetables: vegetables });
});




//New
app.get('/fruits/new', (req, res) => {
    res.render("fruits/New")
});

app.get('/vegetables/new', (req, res) => {
    res.render("vegetables/New")
});



//Delete

//Update

//Create
app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    
    Fruit.create(req.body, (err, createdFruit) => {
        if (err) {
            res.status(403).send(err)
        } else {
            console.log(createdFruit)
            res.redirect('/fruits')
        }
    })
});


app.post('/vegetable', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    vegetables.push(req.body)
    res.redirect('vegetables/Show')
});


//Edit

//Show week 10 day 3
app.get('/fruits/:id', (req, res) =>{
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('fruits/Show', {
                fruit: foundFruit
            })
        }
    })
});

app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
    res.send(vegetables[req.params.indexOfVegetablesArray])
})


app.listen(3000, () => {
    console.log("If you're reading this I'm still listening.")
})

//There is some error ^^^^ above that is preventing a connection



