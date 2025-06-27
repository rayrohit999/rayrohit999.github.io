const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.pdf': 'application/pdf',
    '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Handle favicon.ico requests
    if (req.url === '/favicon.ico') {
        res.statusCode = 204; // No content
        res.end();
        return;
    }

    // Normalize URL path
    let filePath = req.url === '/' ? 'index.html' : req.url.substring(1);
    
    // Resolve the file path
    filePath = path.resolve(__dirname, filePath);

    // Get file extension
    const ext = path.extname(filePath).toLowerCase();
    
    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`File not found: ${filePath}`);
            res.statusCode = 404;
            res.end('404 Not Found');
            return;
        }

        // Set content type based on file extension
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.setHeader('Content-Type', contentType);

        // Create read stream and pipe to response
        const stream = fs.createReadStream(filePath);
        stream.pipe(res);

        // Handle stream errors
        stream.on('error', (err) => {
            console.error(`Error reading file: ${err}`);
            res.statusCode = 500;
            res.end('500 Internal Server Error');
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Press Ctrl+C to stop the server`);
});