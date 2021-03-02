module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define('books', {
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        finished: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        tbr: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
    })
    return Books;
};