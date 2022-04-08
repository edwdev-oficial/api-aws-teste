const express = require ('express');

const app = express();

app.get('/', (req, res) => {
    return res.status(200).send({ msg: 'Tudo Ok' })
})

app.get('/atualizou', (req, res) => {
    return res.status(200).send({ msg: 'Pow... Funcionou!'})
});

app.get('/atualizou2', (req, res) => {
    return res.status(200).send({ msg: 'Funfou denovo!' });
});

app.listen(3333)