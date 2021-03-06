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

app.listen(process.env.PORT, function(){
    console.log(`server is listening on port ${process.env.PORT}`);
})