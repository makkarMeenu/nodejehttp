const http=require('http');
const server = http.createServer((req,res)=>
{
	res.setHeader('Content-Type', 'application/json');
	if(req.url === '/user')
	{
		res.end("{'name': 'rahul','userId':'123'}");
	}
	/*res.end("{'name':'rahul'}");
	res.end('end');
	*/
	else if(req.url === '/order')
	{
		res.end("{'name':'cde','item':'3'}");
	}
	
});
server.listen(3000);

