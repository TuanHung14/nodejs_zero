const connection = require('../config/database');

const getHomePage = async (req, res) => {
    const [rows, fields] =  await connection.query('SELECT * FROM Users u');
    res.render('home.ejs', { users: rows });
}

const getCreateUser = (req, res) => {
    res.render('create.ejs');
}
const postCreateUser = async (req, res) => {
    const {email, name, city } = req.body;
    const [rows, fields] =  await connection.query('INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', [email, name, city]);
    res.redirect('/');
}

module.exports = {
    getHomePage: getHomePage,
    postCreateUser: postCreateUser,
    getCreateUser: getCreateUser
}