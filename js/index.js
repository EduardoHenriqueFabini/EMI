const express = require('express');
const app = express();
require('dotenv').config();

const path = require("path");

app.use(express.static(path.join(__dirname, "..", "front_end")));

const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


