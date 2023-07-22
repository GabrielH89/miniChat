const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const {default: axios} = require('axios');
app.use(express.json())
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
    const {username} = req.query;
    try {
        const response = await axios.put(
            'https://api.chatengine.io/users/', 
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": process.env.APT_PRIVATE_KEY }}
        )
        return res.status(response.status).json(response.data);
    }catch(e) {
        return res.status(e.response.status).json(e.response.data);
    }
})

const port = process.env.PORT || 3000;
console.log(port)
console.log(process.env.APT_PRIVATE_KEY )
app.listen(port, console.log("Server running at port " + port))






