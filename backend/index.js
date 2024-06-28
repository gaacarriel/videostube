// src/index.js
import express from 'express';
import session from 'express-session'
import axios from 'axios';
import 'dotenv/config'

const app = express();

// Configuração de sessão
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
}));

// Endpoint para busca no YouTube
app.get('/api/search', async (req, res) => {
    const query = req.query.q;
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
        part: 'snippet',
        q: query,
        key: process.env.YOUTUBE_API_KEY,
        },
    });
    res.json(response.data);
});

app.listen(3002, () => {
    console.log('BFF rodando na porta 3002');
});
