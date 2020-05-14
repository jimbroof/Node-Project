const fs = require('fs');

const requestHandler= (req,res) =>{

if(req.url === '/'){
    res.setHeader('Content-type', 'text-html');
    res.write('<html>')
    res.write('<head><title>Hello from server</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">new button</button></input></form></body>')
    res.write('</html>')
    
    return res.end();
}

if(req.url == '/message' && req.method == 'POST'){

    const body = [];
    req.on('data', (chunk) =>{
        console.log(chunk);
        body.push(chunk);
    })


    return req.on('end',() =>{
        const parsedBody = Buffer.concat(body).toString()
        const message = parsedBody.split('=')[1];
        fs.writeFile('message.txt',message,(err)=>{
            // should only be sent if we are done working with the file
            res.statusCode = 302;
            res.setHeader('Location','/')
            return res.end();
        })
  
         })
}


res.setHeader('Content-type', 'text-html');
res.write('<html>')
res.write('<head><title>Hello from server</title></head>')
res.write('<body><p>hello from the body</p></body>')
res.write('</html>')
res.end();

//process.exit();
}

module.exports ={ 
    handler: requestHandler,
    text:'Some text'
};