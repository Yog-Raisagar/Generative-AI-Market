const axios = require('axios');

const translateGenerator = async (req, res) => {
    try {
        const userPrompt = req.body.prompt;
        const fromLang = req.body.fromlan;
        const toLang = req.body.tolan;

        const response = await axios.post('http://localhost:8000/translate',
            {
                prompt: userPrompt,
                fromlan: fromLang,
                tolan: toLang
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

module.exports = translateGenerator;