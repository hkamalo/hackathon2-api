const tagsRouter = require('express').Router();
const Tag = require('../models/tag');

tagsRouter.get('/', async (req, res) => {
  res.send(await Tag.findMany());
});
module.exports = tagsRouter;
