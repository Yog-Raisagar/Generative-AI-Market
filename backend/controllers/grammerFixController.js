const axios = require('axios');
const { response } = require('express');

const grammerFixerGenerator = async (req, res) => {
    try {
        const userPrompt = req.body.text;

        const response = await axios.post('http://localhost:8000/grammer',
            {
                prompt: userPrompt,
            }
        );

        
        res.json({
            response: response.data.response
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }   

};

module.exports = grammerFixerGenerator;