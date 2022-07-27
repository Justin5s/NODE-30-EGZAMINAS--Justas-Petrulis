require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const usersRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes');
const billsRoutes = require('./routes/billsRoutes');
const groupsRoutes = require('./routes/groupsRoutes');
const accountsRoutes = require('./routes/accountsRoutes');

const PORT = process.env.SERVER_PORT || 5000;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/', usersRoutes);
app.use('/auth', authRoutes);
app.use('/', billsRoutes);
app.use('/', groupsRoutes);
app.use('/', accountsRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
