import express from 'express';
import axios from 'axios';
import cors from "cors"
import 'dotenv/config'

const app = express();
app.use(cors())

app.get('/api/search', async (req, res) => {
    const query = req.query.q;
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
            part: "snippet",
            type: "video",
            maxResults: 16,
            q: query,
            key: process.env.YOUTUBE_API_KEY,
        },
    });
    res.json(response.data);
});

app.listen(3002, () => {
    console.log('BFF rodando na porta 3002');
});
