const express = require ('express');

const app = express();

app.get('/', (req, res) => {
    return res.status(200).send({ msg: 'Tudo Ok' })
})

app.listen(8330)