const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
const empresaController = require('./controller/empresaController');


app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

app.get('/api/empresas', empresaController.index);
app.get('/api/empresas/:id', empresaController.show);
app.post('/api/empresas', empresaController.create);
app.delete('/api/empresas/:id', empresaController.destroy);
app.put('/api/empresas/:id', empresaController.update);

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
