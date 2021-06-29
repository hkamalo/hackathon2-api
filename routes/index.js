const tagRouter = require('./tags');

module.exports = (app) => {
  app.use('/tags', tagRouter);
};
