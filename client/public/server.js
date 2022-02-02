var express = require('express')();
var server = require('http').Server(express);

var io = require("socket.io")(server, {
	handlePreflightRequest: (req, res) => {
		const headers = {
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
			"Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
			"Access-Control-Allow-Credentials": true
		};
		res.writeHead(200, headers);
		res.end();
	}
});

io.on('connection', (socket) => {
	console.log("Connected");

	//Request - Single Parameter
	socket.on('RequestLinkSingle', (Data) => {
		console.log(Data)
		io.emit('SendLinkSingle', Data)
	})

	//Request - Multiple Parameter
	socket.on('RequestLinkMultiple', (Data1, Data2, Data3) => {
		console.log(data)
		io.emit('SendLinkMultiple', Data1, Data2, Data3)
	})
})

//For auto refreshing
server.listen(7000, () => {
	console.log('socket.io server listen at 7000')
})