const express = require('express');
const path = require('path');

const router = express.Router();

exports.homePage = (req, res) => {
  const pathFile = path.join(__dirname, '../views/index.html');
  res.sendFile(pathFile);
};

exports.sayHello = (req, res) => {
  res.json({ greeting: 'hello API' });
};

exports.getDates = (req, res) => {
  res.json({ prelim: req.params.date });
};
