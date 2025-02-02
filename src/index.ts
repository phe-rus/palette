import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Use Next.js's request handler for all routes
    server.all('*', (req, res) => {
        return handle(req, res);
    })

    server.get("/admin", (req, res) => {
        res.json({ message: "Hello from Express!" });
    })
    server.listen(3000, () => {
        console.log('> Ready on http://localhost:3000');
    });
});