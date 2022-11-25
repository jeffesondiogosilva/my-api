const app = require('express')();

app.listen(3000, () => console.log('Server running'));

app.get('/skills', (req, res) => { 
    res.send({
        desenvolvedor: 'Jeffeson Silva',
        idade: 29,
        nacionalidade: 'brasileiro'
    });
})