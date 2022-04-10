const express = require ('express');

const app = express();

app.get('/', (req, res) => {
    return res.status(200).send({ msg: 'Deploy na AWS - Rota Raiz' })
})

app.get('/atualizou', (req, res) => {
    return res.status(200).send({ msg: 'Deploy na AWS - Rota atualizou'})
});

app.get('/atualizou2', (req, res) => {
    return res.status(200).send({ msg: 'Deploy na AWS - Rota atualizou2' });
});

app.listen(3333)