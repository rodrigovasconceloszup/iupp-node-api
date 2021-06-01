

import server from './api/app';
const port = process.env.APP_PORT || 3000;

server.listen(port, () => {
  console.log(`Server started, listening on port: ${port}`);
});
