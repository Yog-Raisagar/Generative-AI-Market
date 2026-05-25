const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    try{
        const userPrompt = req.body.prompt;

        const response = await axios.post('http://localhost:8000/translate', 
            {
                prompt: userPrompt
            }
        );
        res.json({
            reply: response.data.response
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/summarize', async (req, res) => {
    try{
        const userPrompt = req.body.prompt;

        const response = await axios.post('http://localhost:8000/summarize', 
            {
                prompt: userPrompt
            }
        );
        res.json({
            reply: response.data.response
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});