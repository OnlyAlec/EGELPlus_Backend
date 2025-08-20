const express = require('express');
const { specs, swaggerUi } = require('./swagger');

const app = express();
const port = process.env.PORT || 3001;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`[Auth] Starting on http://localhost:${port}`);
});