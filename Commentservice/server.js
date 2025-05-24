const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const commentRoutes = require('./routes/comments');

app.use('/api/comments', commentRoutes);

//Adding /health and /ready that display health is good and ready displays yes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});
app.get('/ready', (req, res) => {
  res.status(200).json({ status: 'yes' });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI,)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
