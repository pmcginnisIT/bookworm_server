require('dotenv').config();
let express = require('express');
let app = express();

let sequelize = require('./db');

let list = require('./controllers/booklistController')
let user = require('./controllers/userController');


sequelize.sync();
// sequelize.sync({ force: true }); //this will reset your whole table use with caution.

app.use(require('./middleware/headers'));



app.use(express.json());
app.use('/user', user);
app.use('/bookworm', list);

app.listen(3000, function(){
    console.log('App is listening on port 3000');
})