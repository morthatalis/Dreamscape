const express = require("express")
const path = require("path")

const app = express()
const port = 80

app.use(express.static('public'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    if (req.headers.accept && req.headers.accept.includes("text/html")) {
        const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
        console.log(`request from IP: ${userIp}`);
    }
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/games.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'games.html'));
});
app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'game.html'));
});
app.get('/game.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'game.html'));
});
app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'styles.css'));
});

app.get('/main.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.js'));
});

app.get('/img/icon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'img/icon.ico'));
});

app.get('/img/search_icon.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'img/search_icon.png'));
});

app.get('/img/hamburger.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'img/hamburger.png'));
});
app.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, 'contactus.html'));
});
app.post('/api/log', (req, res) => {
    console.log("SENDER")
    console.log(req.body.title)
    console.log("BODY")
    console.log(req.body.body)
});
app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, 'user.html'));
});
app.get('/user.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'user.html'));
});
app.get('/stdinc.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'stdinc.js'));
});
app.get('/search.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'search.html'));
});
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'error.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
