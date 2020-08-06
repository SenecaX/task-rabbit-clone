const express = require('express');
const app = express();

app.get('/', (req: any, res: any) => {
    res.send('Hello universe!');
});

app.listen(3000, () => {
    console.log('listen on port 3000');
});