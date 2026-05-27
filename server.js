import express from 'express';
import { diceGameRoutes } from './routes/diceGameRoutes.js';
import { authRoutes } from './routes/authRoutes.js';
import session from 'express-session';

const app = express();
const PORT = 3000;

app.use(session({
	secret: 'scrimba-game',
	resave: false,
	saveUninitialized: false,
	cookie: {
		secure: false,
		httpOnly: true
	}
}))

app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRoutes)

app.use('/api', diceGameRoutes)

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
