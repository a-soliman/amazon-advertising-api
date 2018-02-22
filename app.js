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


/* MAIN ROUTE */
app.get('/', ( req, res ) => {
	client.itemSearch({
		keywords: 'Pen',
		searchIndex: 'All',
		responseGroup: 'ItemAttributes,Offers,Images,SalesRank'
	})
	.then(
		( results ) => {
			console.log('===== SUCCESS =====');
			console.log(results)
			res.send(results)
		}
	)
	.catch(
		( err ) => {
			console.log('------- FAUILIER ------');
			res.send(err);
			console.log(err);
		}
	)
})


app.listen(app.get('port'), () => {
	console.log(`Server is running on port ${app.get('port')}`);
});