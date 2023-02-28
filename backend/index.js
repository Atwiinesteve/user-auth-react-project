const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors');
require('dotenv/config');

require('../backend/database/db.connections')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
	cors({
		origin: "http://127.0.0.1:3000",
        credentials: true
	}),
);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())


app.use('/', require('./routes/user.route'))

app.listen(PORT, () => { console.log(`Server Running on http://localhost:${PORT}`) });