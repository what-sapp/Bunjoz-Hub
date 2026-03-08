const express = require('express');
const path = require('path');
const fs = require('fs');
const config = require('./config');
const app = express();
const port = process.env.PORT || 3000;

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// IMPORTANT: Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make config available to all views
app.use((req, res, next) => {
  res.locals.config = config;
  next();
});

// Load phones data
const phonesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data', 'phones.json'), 'utf8')
);

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    phones: phonesData.phones.slice(0, 4),
    page: 'home'
  });
});

app.get('/sales', (req, res) => {
  res.render('sales', { 
    phones: phonesData.phones,
    page: 'sales'
  });
});

app.get('/phone/:id', (req, res) => {
  const phone = phonesData.phones.find(p => p.id === parseInt(req.params.id));
  if (!phone) return res.redirect('/sales');
  res.render('phone-detail', { 
    phone: phone,
    page: 'phone-detail'
  });
});

app.get('/repair', (req, res) => {
  res.render('repair', { 
    page: 'repair',
    services: config.services
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', { 
    page: 'contact',
    success: req.query.success === 'true'
  });
});

app.post('/contact', (req, res) => {
  console.log('Contact form:', req.body);
  res.redirect('/contact?success=true');
});

// 404 redirect
app.use((req, res) => {
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Bunjoz Hub running on port ${port}`);
  console.log(`Static files served from: ${path.join(__dirname, 'public')}`);
});
