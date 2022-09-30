const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, express!')
});

let counter = 0
app.post('/counter', (req, res) => {
    counter++;
    res.send();
})

app.get('/counter', (req, res) => {
    res.send(counter.toString());
});

app.delete('/counter', (req, res) => {
    counter = 0;
    res.send();
});


console.log(`Server listening on localhost:${port}`);
app.listen(port);

