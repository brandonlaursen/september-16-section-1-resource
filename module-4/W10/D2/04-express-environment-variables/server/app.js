const express = require('express');
const app = express();

require('dotenv').config();



app.get('/', (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
    res.send('i dont want anyone to see this');
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));
