const express = require ('express');

const app = express();

app.get('/', (req, res) => {
    return res.status(200).send({ msg: 'Amor! Meu site está no ar! kkkkkk' })
})

app.get('/atualizou', (req, res) => {
    return res.status(200).send({ msg: 'Amor! Funcionou!'})
});

app.get('/atualizou2', (req, res) => {
    return res.status(200).send({ msg: 'Gordinha!' });
});

app.listen(3333)