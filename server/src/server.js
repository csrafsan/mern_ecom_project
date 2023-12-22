const express = require("express");
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const isLoggedIn = (req, res, next) =>{
    console.log("isLoggedIn middleware");

    const login = true;
    
    if(login) {
        req.body.id = 101;
      next();
    }
    else
    {
        return res.status(401).json({message: 'please login first'});
    }

}


app.get('/api/user', isLoggedIn, (req, res) => {
    console.log(req.body.id);
    res.status(200).send({
        message : 'user profile is return',
        
    });
});
app.get('/', (req, res) => {
    res.status(200).send({
        id : '2503',
        message : 'welcome to server',
        
    });
});

app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'server is running',
    })
})
app.post('/test', (req, res) => {
    res.status(200).send({
        message: 'post: server is running',
    })
})
app.put('/test', (req, res) => {
    res.status(200).send({
        message: 'put: server is running',
    })
})
app.delete('/test', (req, res) => {
    res.status(200).send({
        message: ' delete: server is running',
    })
})

app.get('/products', (req, res) => {
    res.send('products are returned!')
});



app.listen(3001, ()=> {
console.log('server is running at http://localhost:3001')
});