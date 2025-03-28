// const { log } = require('console');
// const http = require('http');
// const fs = require('fs')

// const HOST = 'localhost';
// const PORT = 8000;


// const requestHandler = (req, res) =>{
//     switch(req.url){
//         case '/image':{
//             const img = fs.readFileSync(`${__dirname}/abksback3.png`);
//             res.setHeader('content-type', 'image/png');
//             res.end(img)
//             break;
//         }

//         case '/html':{

//             res.setHeader("Content-Type", "text/html");
//             res.writeHead(200);
//             res.end(`
//                 <html>
//                     </head>
//                         <title>Hello from web server!</title>
//                     <head>
//                     <body>
//                         <div>
//                             <h1>Hello world!</h1>
//                             <h2>Current time: ${new Date().toLocaleString()}</h2>           </div>
//                     </body>
//                 </html>
//             `);
//             break;
//         }

//         default:{
//             res.setHeader('content-type', 'text/plain');
//             res.end("Hello from server!")
//         }
//     }

// }
    


// const server = http.createServer(requestHandler);
// server.listen(PORT,HOST, () =>{
//     console.log(`Server is running on http://${HOST}:${PORT}`);
    
// })


const { log } = require('console');
const express = require('express')

const app = express();
const port = 3000;

app.get("/", (req, res, ) => {
    console.log("hi on sheet"),
    res.send('Hi on page');
})

app.listen(port, ()=>{
    console.log(`Server running on http:/localhost${port}`)
})