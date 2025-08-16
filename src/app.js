const express = require('express');

const app = express();
app.use(express.json());

// rotas
const healthRouter = require('./routes/health.routes');
app.use('/health', healthRouter);

module.express = app;