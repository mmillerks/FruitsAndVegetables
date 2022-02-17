require('dotenv').config();
const express = require('express');
const app = express();
const fruits = require('./models/fruits');
const vegetables = require('./models/vegetables');

    
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//MIDDLEWEAR
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(req.body)
    next()
});


//Index - week 10 day 3
app.get('/fruits', function(req, res) {
    res.render('fruits/Index', { fruits: fruits });
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
    fruits.push(req.body)
    res.redirect('fruits/Show')
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
app.get('/fruits/:indexOfFruitsArray', (req, res) =>{
    res.send(fruits[req.params.indexOfFruitsArray])
})

app.get('/vegetables/:indexOfVegetablesArray', (req, res) =>{
    res.send(vegetables[req.params.indexOfVegetablesArray])
})


app.listen(3000, () => {
    console.log("If you're reading this I'm still listening.")
})

//There is some error ^^^^ above that is preventing a connection



