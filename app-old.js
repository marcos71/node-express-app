const http = require('http');

const server = http.createServer((req, res) => {
    /*
    res.writeHead(200, { 'Content-Type': 'application/json'});
    const person = {
        id: 1,
        name: 'Marcos'
    };
    
    res.write(JSON.stringify(person));*/

    res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv'});
    res.write('id, name\n');
    res.write('1, Marcos\n');
    res.write('2, Some\n');
    
    //res.write('Hello world!');
    res.end();
});

server.listen(8080);

console.log('Listening port', 8080);