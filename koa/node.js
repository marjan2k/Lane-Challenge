var koa = require('koa');
var app = koa();
var request = require('koa-request');
PORT=7000;

app.use(function *(next) {
 
	var response = yield request({url: 'http://ip-api.com/json'});
	var info = JSON.parse(response.body);
    this.lat = info.lat;
    this.lon = info.lon;
    
    var response = yield request({url: 'http://api.openweathermap.org/data/2.5/weather?lat='+this.lat+'&lon='+this.lon+'&APPID=9be2f57efac6349e3f9d667f8df75595'});
    var info = JSON.parse(response.body);
    this.temp = info.main.temp;
    this.description = info.weather[0].description;

    yield next;
});

app.use(function *() {
	this.body = 'Latitude: ' + this.lat +
                '\nLongitude: ' + this.lon +
                '\nTemperature: '+ this.temp + ' Kelvin' +
                '\nDescription: '+ this.description;
});

app.listen(PORT);
console.log('Express server started on port %s', PORT);