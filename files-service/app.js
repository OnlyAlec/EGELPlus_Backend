const express = require('express');
const { specs, swaggerUi } = require('./swagger');

const app = express();
const port = process.env.PORT || 3003;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`[Auth] Starting on http://localhost:${port}`);
});