const express = require('express');
const cors = require('cors');
const axios = require('axios');
const translatorRoutes = require('./routes/translatorRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');
const grammerfixRoutes = require('./routes/grammerFixRoutes')

const app = express();

const PORT = 5000;


app.use(cors());
app.use(express.json());


app.use('/api/genai', translatorRoutes);

// app.use('/api/chatbot' chatbotRoutes);

app.use('/api/genai/grammer-fix', grammerfixRoutes)





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Global error handlers to capture crashes and unhandled promise rejections
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
