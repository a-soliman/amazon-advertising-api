const amazon 		= require('amazon-product-api');
const express		= require('express');
const bodyParser	= require('body-parser');
const configs		= require('./config');


const client = amazon.createClient({
	awsId: 		configs.AccessId,
	awsSecret: 	configs.Secret,
	awsTag: 	configs.Tag
});

const app = express();
app.set('port', process.env.PORT || 3000);



app.listen(app.get('port'), () => {
	console.log(`Server is running on port ${app.get('port')}`);
});