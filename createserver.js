const http=require('http');
const server=http.createServer(
    function(request,response){
        response.write("Hello World");
        response.end();
    }
)
server.listen(9000,
    function(){
        console.log("Server running");
    }
)