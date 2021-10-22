const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('WOW!! This is my 2nd node and 1st nodemon.....automatic restart');
});

const users = [
    { id: 0, name: 'Tamim', job: 'Cricket', email: 'tamim@gmail.com', phone: '019323525453' },
    { id: 1, name: 'Sakib', job: 'Cricket', email: 'sakib@gmail.com', phone: '019342542453' },
    { id: 2, name: 'Musfiq', job: 'Cricket', email: 'musfiq@gmail.com', phone: '01932352453' },
    { id: 3, name: 'Sumiya', job: 'Cricket', email: 'sumiya@gmail.com', phone: '019323542523' },
    { id: 4, name: 'Shohan', job: 'Cricket', email: 'shohan@gmail.com', phone: '019322525453' },
    { id: 5, name: 'Rony', job: 'Cricket', email: 'rony@gmail.com', phone: '0193235254245253' },
    { id: 6, name: 'Taijul', job: 'Cricket', email: 'taijul@gmail.com', phone: '012455453' },
    { id: 7, name: 'Rahi', job: 'Cricket', email: 'rahi@gmail.com', phone: '01932352453' },
    { id: 8, name: 'Mahmudulla', job: 'Cricket', email: 'mahmudulla@gmail.com', phone: '015223525453' },
    { id: 9, name: 'Liton', job: 'Cricket', email: 'liton@gmail.com', phone: '019323525453' },
    { id: 10, name: 'Mehdi', job: 'Cricket', email: 'mehdi@gmail.com', phone: '01932452232453' },
    { id: 11, name: 'Taskin', job: 'Cricket', email: 'taskin@gmail.com', phone: '01933142331453' }
]

app.get('/users', (req, res) => {

    //  search query parameter
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }


})

//  app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

//  Dynamic parameter
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'lichi', 'orange'])
})

app.get('/fruits/mangoes/himsagor', (req, res) => {
    res.send('yummy yummy himsagor');
})

app.listen(port, () => {
    console.log('Listening to port ', port);
});
