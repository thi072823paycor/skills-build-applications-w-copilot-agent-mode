"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
require("./config/database");
const octofit_1 = require("./models/octofit");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Modified by AI on 07/30/2026. Edit #2.
const PORT = 8000;
const HOST = '0.0.0.0';
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
const allowedOrigins = codespaceName
    ? [`https://${codespaceName}-5173.app.github.dev`, 'http://localhost:5173']
    : ['http://localhost:5173'];
// Modified by AI on 07/30/2026. Edit #2.
app.use((0, cors_1.default)({ origin: allowedOrigins }));
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.json({ message: 'OctoFit Tracker API', baseUrl });
});
// Modified by AI on 07/30/2026. Edit #1.
app.get('/api/users/', async (_req, res, next) => {
    try {
        const users = await octofit_1.User.find().lean();
        res.json(users);
    }
    catch (error) {
        next(error);
    }
});
// Modified by AI on 07/30/2026. Edit #1.
app.get('/api/teams/', async (_req, res, next) => {
    try {
        const teams = await octofit_1.Team.find().lean();
        res.json(teams);
    }
    catch (error) {
        next(error);
    }
});
// Modified by AI on 07/30/2026. Edit #1.
app.get('/api/activities/', async (_req, res, next) => {
    try {
        const activities = await octofit_1.Activity.find().lean();
        res.json(activities);
    }
    catch (error) {
        next(error);
    }
});
// Modified by AI on 07/30/2026. Edit #1.
app.get('/api/leaderboard/', async (_req, res, next) => {
    try {
        const leaderboard = await octofit_1.LeaderboardEntry.find().sort({ points: -1 }).lean();
        res.json(leaderboard);
    }
    catch (error) {
        next(error);
    }
});
// Modified by AI on 07/30/2026. Edit #1.
app.get('/api/workouts/', async (_req, res, next) => {
    try {
        const workouts = await octofit_1.Workout.find().lean();
        res.json(workouts);
    }
    catch (error) {
        next(error);
    }
});
// Modified by AI on 07/30/2026. Edit #1.
app.use((error, _req, res, _next) => {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
});
// Modified by AI on 07/30/2026. Edit #2.
app.listen(PORT, HOST, () => {
    console.log(`Server running on ${HOST}:${PORT}`);
    console.log(`Base URL: ${baseUrl}`);
});
exports.default = app;
