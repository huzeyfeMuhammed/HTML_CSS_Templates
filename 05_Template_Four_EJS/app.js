const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index', { page: 'index' }));
app.get('/settings', (req, res) => res.render('settings', { page: 'settings' }));
app.get('/profile', (req, res) => res.render('profile', { page: 'profile' }));
app.get('/projects', (req, res) => res.render('projects', { page: 'projects' }));
app.get('/courses', (req, res) => res.render('courses', { page: 'courses' }));
app.get('/friends', (req, res) => res.render('friends', { page: 'friends' }));
app.get('/files', (req, res) => res.render('files', { page: 'files' }));
app.get('/plans', (req, res) => res.render('plans', { page: 'plans' }));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));