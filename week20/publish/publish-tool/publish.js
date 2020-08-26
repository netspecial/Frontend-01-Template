const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
const archiver = require('archiver');
const child_process = require('child_process');

let packname = "./package";

// fs.stat(filename, (error, stat) => {
    let redirect_uri = encodeURIComponent("http://localhost:8081/auth");
    child_process.exec(`start https://github.com/login/oauth/authorize?client_id=Iv1.8f7e7427f57302ce&redirect_uri=${redirect_uri}&scope=read%3Auser&state=123abc`);
    
    const server = http.createServer((request, res) => {
        if(!request.url.match(/^\/publish\?/)) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('not found');
            return;
        }

        let token = request.url.match(/token=([^&]+)/)[1];
        console.log("real publish!!");

        const options = {
            host: 'localhost',
            port: 8081,
            path: '/?filename=' + "package.zip",
            method: 'POST',
            headers: {
                'token': token,
                'Content-Type': 'application/octet-stream'
            }
        };
    
        const req = http.request(options, (res) => {
            console.log(`STATUS: ${res.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        });
        
        req.on('error', (e) => {
            console.error(`problem with request: ${e.message}`);
        });
    
        var archive = archiver('zip', {
            zlib: { level: 9 } // Sets the compression level.
        });
    
        archive.directory(packname, false);
    
        archive.finalize();
    
        archive.pipe(req);
    
        archive.on('end', () => {
            req.end();
            console.log("publish success!!");
            res.end("publish success!!")
            server.close();
        });
    });
    server.listen(8080);
    
    
    // Write data to request body
    /* let readStream = fs.createReadStream("./" + filename);
    readStream.pipe(req);
    readStream.on('end', () => {
        req.end();
    }); */
    // req.write(postData);
// });