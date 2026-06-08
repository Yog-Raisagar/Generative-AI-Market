const axios = require('axios');

const chatbtAi = async (req, res) => {
    try {
        const userprompt = req.body.prompt;

        const response = await axios.post('http://localhost:8000/chatbot', {
            prompt: userprompt
        });
    }catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Backend Part Error' });
    }
}
    

module.exports = chatbtAi;