const http = require(`http`);
let counter = 0;
const server = http.createServer((req, res) =>{
    console.log("запрос получен");
    

    if (req.url === `/`){
        
        res.writeHead(200,{
            'Content-Type': 'text/html; charset=UTF-8' ,
            
        });
        counter++; 
        res.end(`<a href="/about">ссылка на эбаут</a><br><h1>${counter} вот столько раз переходили по ссылкам</h1>`);
    
       
    } else if (req.url === '/about'){
        res.writeHead(200,{
            'Content-Type': 'text/html; charset=UTF-8',
        });
        counter++; 
        res.end('<a href="/">ссылка на не эбаут<a>');
        
    } else {
        res.writeHead(404,{
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>странница не найдена<h1>');
}});
const port= 3000;
server.listen(port,() =>{
    console.log(`сервер запущен на порту ${port}`);
})

