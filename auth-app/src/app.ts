const express = require('express');

const app = express();

app.get('/', (req: any, res: any) => {
    res.send('Hello universe again!');
});

app.listen(3000, () => {
    console.log('listen on port 3000');
});
