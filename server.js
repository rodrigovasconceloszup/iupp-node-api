const app = require('./app');

port = process.env.APP_PORT || 3000;

app.listen(process.env.APP_PORT, () => {
    console.log(`Server started, listening on port: ${process.env.APP_PORT}`);
  });