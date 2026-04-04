const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/posts', (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
   
  }
  
  console.log('cookies', req.cookies);

  res.send('post created successfully');


}
);

module.exports = router;