const Sequelize = require('sequelize');
const sequelize = new Sequelize('bookworm', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to bookworm postgres database');
    },
    // function(err) {
    //     console.log(err);
    // }
);
module.exports = sequelize;