const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const PORT = 3000;
const HOST = '0.0.0.0';
const path = require('path');

const app = express();
const redis = require("redis");
const redis_client = redis.createClient('6379','desafiodevops_redis_1');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

redis_client.on('connect', function() {
    console.log('Redis client connected');
});

redis_client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

checkCache = (req, res, next) => {
	redis_client.get(1, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).send(err);
		}
		if (data != null) {
			res.send(data);
		} else {
			next();
		}
	});
};

app.get('/', async (req, res) => {
	try {
	const info = await axios.get('http://desafiodevops_nginx_1');

	const infodata = info.data;

	redis_client.setex(1, 3600, JSON.stringify(infodata));

	return res.json(infodata);
} catch (error) {
	console.log(error);
	return res.status(500).json(error);
}

});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
