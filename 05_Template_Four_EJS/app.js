const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index', { page: 'index' }));
app.get('/sittings', (req, res) => res.render('sittings', { page: 'sittings' }));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));