const express = require('express');
const app = require('./app.js');
const port = 3000;

app.listen(port, () => {
  console.log(`server running on ${port}`);
})