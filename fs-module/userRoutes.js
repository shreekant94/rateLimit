const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Welcome to the User Page');
  });
  
  router.get('/profile', (req, res) => {
    res.send('User Profile Page');
  });
  
  module.exports = router;